/**
 * Script de autorización OAuth de Google — ejecutar UNA sola vez.
 * Levanta un servidor temporal en localhost:3002 para capturar el código.
 *
 * Uso:
 *   1. En Google Cloud Console → Credenciales → tu OAuth client →
 *      agregar en "URIs de redireccionamiento autorizados": http://localhost:3002/callback
 *   2. node scripts/authorize-google.mjs
 *   3. Se abre el navegador automáticamente
 *   4. Autoriza con contenido@automatestudio.co
 *   5. El refresh_token aparece en la terminal → copiarlo a .env.local
 */

import { google } from 'googleapis';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { exec } from 'child_process';

const REDIRECT_URI = 'http://localhost:3002/callback';

// Leer .env.local
const envContent = readFileSync('.env.local', 'utf8');
const env = Object.fromEntries(
  envContent
    .split('\n')
    .filter(line => line.includes('=') && !line.startsWith('#'))
    .map(line => {
      const [key, ...rest] = line.split('=');
      return [key.trim(), rest.join('=').trim().replace(/^"|"$/g, '')];
    })
);

const CLIENT_ID = env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ Falta GOOGLE_CLIENT_ID o GOOGLE_CLIENT_SECRET en .env.local');
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authUrl = oauth2.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: ['https://www.googleapis.com/auth/drive'],
});

// Servidor temporal para capturar el callback
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:3002`);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2>❌ Autorización cancelada. Cierra esta pestaña.</h2>');
    server.close();
    process.exit(1);
  }

  if (!code) {
    res.writeHead(404);
    res.end();
    return;
  }

  try {
    const { tokens } = await oauth2.getToken(code);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <html><body style="font-family:sans-serif;padding:40px;max-width:600px">
        <h2 style="color:#22c55e">✅ ¡Autorización exitosa!</h2>
        <p>Cierra esta pestaña y vuelve a la terminal.</p>
      </body></html>
    `);

    console.log('\n✅ ¡Autorización exitosa! Agrega esto a tu .env.local:\n');
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    console.log('\n');

    server.close();
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h2>❌ Error: ${err.message}</h2>`);
    console.error('❌ Error al obtener tokens:', err.message);
    server.close();
  }
});

server.listen(3002, () => {
  console.log('\n🔑 Abriendo navegador para autorizar con contenido@automatestudio.co...\n');
  // Abrir navegador en Windows
  exec(`start "" "${authUrl}"`);
  console.log('Si el navegador no abre, copia esta URL manualmente:');
  console.log(authUrl);
  console.log('\n⏳ Esperando autorización...\n');
});

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    if (!payload.email) {
      return NextResponse.json({ error: 'email es requerido' }, { status: 400 });
    }

    const results: Record<string, string> = {};

    // ── Google Sheets (Apps Script webhook) ──────────────────────────────
    // Apps Script devuelve 302 redirect en POST — es comportamiento normal,
    // no seguimos el redirect para evitar el error 411 de Content-Length.
    const sheetsUrl = process.env.GOOGLE_SCRIPT_URL;
    if (sheetsUrl) {
      try {
        const res = await fetch(sheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          redirect: 'manual',
        });
        // 200 = ok directo, 302 = redirect normal de Apps Script (también es éxito)
        results.sheets = (res.ok || res.status === 302) ? 'ok' : `error ${res.status}`;
      } catch (e) {
        results.sheets = `fetch error: ${e}`;
        console.error('Google Sheets error:', e);
      }
    } else {
      console.warn('GOOGLE_SCRIPT_URL no configurada');
      results.sheets = 'no configurado';
    }

    // ── n8n (mantener si está configurado) ──────────────────────────────
    const n8nUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nUrl) {
      try {
        const res = await fetch(n8nUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        results.n8n = res.ok ? 'ok' : `error ${res.status}`;
      } catch (e) {
        results.n8n = `fetch error: ${e}`;
        console.error('n8n error:', e);
      }
    }

    // Siempre devolver éxito al cliente — los errores de webhook no bloquean al usuario
    return NextResponse.json({ success: true, results });
  } catch (err: unknown) {
    console.error('Submit API error:', err);
    const message = err instanceof Error ? err.message : 'Error interno';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

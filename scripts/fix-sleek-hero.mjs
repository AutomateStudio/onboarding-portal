#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const API_KEY = 'AIzaSyAwo4aLdNgxviA2j3DlNN0V2y1EhkjKtvw';
const MODEL = 'gemini-3.1-flash-image-preview';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

async function generateImage(prompt, aspectRatio) {
  const url = `${API_BASE}/${MODEL}:streamGenerateContent?key=${API_KEY}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE', 'TEXT'], imageConfig: { aspectRatio } },
  };
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  const chunks = JSON.parse(await res.text());
  for (const chunk of chunks)
    for (const part of chunk?.candidates?.[0]?.content?.parts || [])
      if (part.inlineData?.data) return Buffer.from(part.inlineData.data, 'base64');
  throw new Error('No image data');
}

async function main() {
  console.log('Regenerating Sleek hero...');
  const buf = await generateImage(
    'Minimalist skincare editorial photography. Clean professional model with perfect glowing skin, minimal makeup. Pure white or soft gray background, clean clinical aesthetic. NO TEXT, NO WORDS, NO LETTERS in the image. Ultra high quality professional beauty photography.',
    '16:9'
  );
  const p = path.join(PROJECT_ROOT, 'public/images/templates/beauty/sleek/hero.jpg');
  await fs.writeFile(p, buf);
  console.log('✓ Saved:', p);
}

main().catch(console.error);

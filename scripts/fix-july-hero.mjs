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
    generationConfig: {
      responseModalities: ['IMAGE', 'TEXT'],
      imageConfig: { aspectRatio },
    },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  const chunks = JSON.parse(await res.text());
  for (const chunk of chunks) {
    for (const part of chunk?.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData?.data) return Buffer.from(part.inlineData.data, 'base64');
    }
  }
  throw new Error('No image data');
}

const images = [
  {
    path: 'public/images/templates/beauty/july/hero.jpg',
    prompt: 'Luxury skincare beauty brand hero image. Elegant woman applying premium face serum, glowing skin, warm golden light. Clean minimal background, warm beige and cream tones. NO TEXT, NO WORDS, NO LETTERS anywhere in the image. Professional fashion photography, ultra high quality, photorealistic.',
    ratio: '16:9',
  },
  {
    path: 'public/images/templates/beauty/sleek/hero.jpg',
    prompt: 'Minimalist skincare editorial photography. Clean professional model with perfect glowing skin, minimal makeup. Pure white or light gray background, clean clinical aesthetic. NO TEXT, NO WORDS, NO LETTERS in the image. Ultra high quality professional beauty photography.',
    ratio: '16:9',
  },
  {
    path: 'public/images/templates/beauty/glow/hero.jpg',
    prompt: 'Bold editorial beauty photography. Diverse group of beautiful women with radiant glowing skin, vibrant and colorful. Energetic editorial style. NO TEXT, NO WORDS, NO LETTERS anywhere in the image. Ultra high quality professional fashion photography.',
    ratio: '16:9',
  },
];

async function main() {
  console.log('🔄 Regenerating beauty hero images (no text baked-in)...\n');
  for (const img of images) {
    try {
      console.log(`Generating ${img.path}...`);
      const buf = await generateImage(img.prompt, img.ratio);
      const fullPath = path.join(PROJECT_ROOT, img.path);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, buf);
      console.log(`  ✓ Saved`);
      await new Promise(r => setTimeout(r, 3000));
    } catch (e) {
      console.error(`  ✗ Error: ${e.message}`);
    }
  }
  console.log('\n✅ Done');
}

main().catch(console.error);

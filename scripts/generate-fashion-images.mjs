#!/usr/bin/env node
/**
 * Genera imágenes premium para los 3 templates de moda (Aura, Elegancia, Simetría)
 * Hero 16:9 + 4 productos 1:1 por template = 15 imágenes
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public', 'images', 'templates');

const API_KEY = 'AIzaSyAwo4aLdNgxviA2j3DlNN0V2y1EhkjKtvw';
const MODEL = 'gemini-3.1-flash-image-preview';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const DELAY_MS = 3000;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

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

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const text = await res.text();
  const chunks = JSON.parse(text);
  for (const chunk of chunks) {
    for (const part of chunk?.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData?.data) {
        return Buffer.from(part.inlineData.data, 'base64');
      }
    }
  }
  throw new Error('No image data in response');
}

async function saveImage(buffer, filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, buffer);
  console.log(`  ✓ Saved: ${path.relative(PROJECT_ROOT, filePath)}`);
}

const FASHION_TEMPLATES = [
  {
    id: 'aura',
    hero: {
      prompt: `Premium activewear fashion editorial photography. Athletic woman in high-performance sportswear, dynamic pose, bold yellow/black activewear outfit. Professional studio with dramatic lighting, high contrast. Shopify store hero banner, 16:9 ratio. Clean energetic background. Ultra high quality, photorealistic, professional fashion photography.`,
      ratio: '16:9',
    },
    products: [
      { name: 'sports-top', prompt: 'Premium athletic sports top, women activewear, black and yellow colors, isolated on clean white background, product photography, e-commerce style, ultra sharp, professional lighting' },
      { name: 'leggings', prompt: 'High performance compression leggings activewear, dark color, isolated on clean white background, product photography, e-commerce style, professional studio lighting' },
      { name: 'running-shoes', prompt: 'Modern athletic running shoes, sporty design, isolated on clean white background, product photography, e-commerce style, professional lighting' },
      { name: 'sports-jacket', prompt: 'Premium athletic jacket windbreaker, modern sporty design, isolated on clean white background, product photography, e-commerce style, professional studio lighting' },
    ],
  },
  {
    id: 'elegancia',
    hero: {
      prompt: `Luxury fashion editorial photography. Elegant woman in premium designer clothing, sophisticated navy and gold palette. High-end boutique aesthetic, dramatic cinematic lighting. Shopify store hero banner, 16:9 ratio. Luxury brand feel, refined and aspirational. Ultra high quality photorealistic professional fashion photography.`,
      ratio: '16:9',
    },
    products: [
      { name: 'luxury-blouse', prompt: 'Premium luxury silk blouse, elegant design, neutral/cream color, isolated on clean white background, product photography, high-end e-commerce style, professional lighting' },
      { name: 'elegant-pants', prompt: 'Luxury tailored elegant trousers, high-end fashion, neutral dark color, isolated on clean white background, product photography, professional studio lighting' },
      { name: 'luxury-bag', prompt: 'Premium luxury leather handbag, elegant design, gold accents, isolated on clean white background, product photography, high-end e-commerce, professional lighting' },
      { name: 'luxury-belt', prompt: 'Premium luxury leather belt with gold buckle, elegant accessory, isolated on clean white background, product photography, high-end e-commerce style, professional lighting' },
    ],
  },
  {
    id: 'simetria',
    hero: {
      prompt: `Modern casual lifestyle fashion photography. Stylish young woman in contemporary casual outfit, clean minimal aesthetic, white and neutral tones. Bright airy studio setting. Shopify store hero banner, 16:9 ratio. Fresh modern lifestyle brand feel. Ultra high quality photorealistic professional fashion photography.`,
      ratio: '16:9',
    },
    products: [
      { name: 'casual-tshirt', prompt: 'Clean minimal casual t-shirt, white or neutral color, modern fit, isolated on clean white background, product photography, lifestyle brand e-commerce style, professional lighting' },
      { name: 'jeans', prompt: 'Modern classic jeans, clean cut, medium wash, isolated on clean white background, product photography, lifestyle brand e-commerce style, professional studio lighting' },
      { name: 'accessories', prompt: 'Minimal modern fashion accessories set, clean design, neutral colors, isolated on clean white background, product photography, lifestyle brand e-commerce, professional lighting' },
      { name: 'casual-shorts', prompt: 'Casual everyday shorts, clean minimal design, neutral color, isolated on clean white background, product photography, lifestyle brand e-commerce style, professional lighting' },
    ],
  },
];

async function main() {
  console.log('🎨 Generating premium fashion images with Gemini...\n');
  let total = 0;
  let success = 0;

  for (const template of FASHION_TEMPLATES) {
    console.log(`\n📦 Template: ${template.id.toUpperCase()}`);
    const dir = path.join(PUBLIC_DIR, 'fashion', template.id);

    // Hero
    total++;
    try {
      console.log(`  Generating hero...`);
      const buf = await generateImage(template.hero.prompt, template.hero.ratio);
      await saveImage(buf, path.join(dir, 'hero.jpg'));
      success++;
    } catch (e) {
      console.error(`  ✗ Hero error: ${e.message}`);
    }
    await sleep(DELAY_MS);

    // Products
    for (let i = 0; i < template.products.length; i++) {
      const p = template.products[i];
      total++;
      try {
        console.log(`  Generating product-${i + 1} (${p.name})...`);
        const buf = await generateImage(p.prompt, '1:1');
        await saveImage(buf, path.join(dir, `product-${i + 1}.jpg`));
        success++;
      } catch (e) {
        console.error(`  ✗ Product-${i+1} error: ${e.message}`);
      }
      await sleep(DELAY_MS);
    }
  }

  console.log(`\n✅ Done: ${success}/${total} images generated`);
}

main().catch(console.error);

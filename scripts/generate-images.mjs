#!/usr/bin/env node
/**
 * Script para generar imágenes con Gemini Image API (mismo backend que nanobanana-mcp)
 * Genera hero (16:9) + 4 productos (1:1) por cada template
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public', 'images', 'templates');

const API_KEY = 'AIzaSyBBVw4I2pzvFyENBVKADXKN5lI7_f_J3vY';
const MODEL = 'gemini-3.1-flash-image-preview';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

const DELAY_MS = 2000; // 2s entre requests para no sobrecargar la API

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
  console.log(`  ✓ Saved: ${filePath.replace(PROJECT_ROOT, '')}`);
}

async function generateAndSave(prompt, aspectRatio, filePath, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const buf = await generateImage(prompt, aspectRatio);
      await saveImage(buf, filePath);
      return true;
    } catch (err) {
      console.error(`  ✗ Error (attempt ${i+1}/${retries}): ${err.message}`);
      if (i < retries - 1) await sleep(3000);
    }
  }
  return false;
}

// ============================================================
// TEMPLATES CONFIG
// ============================================================
const TEMPLATES = {
  beauty: [
    {
      id: 'july',
      hero: {
        prompt: 'Editorial luxury skincare campaign photo, warm golden tones, elegant woman with glowing skin applying facial oil, professional studio lighting, soft bokeh background, 16:9 landscape, high-end beauty magazine style, warm amber and cream palette',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Luxury orchid facial oil bottle, amber glass dropper, white clean background, professional e-commerce product photography, soft shadows, beauty skincare', file: 'product-1.jpg' },
        { prompt: 'Elegant bakuchiol serum bottle, minimalist skincare packaging, white background, studio lighting, premium beauty product photo, clean aesthetic', file: 'product-2.jpg' },
        { prompt: 'Eye anti-aging cream jar, gold lid, luxury skincare packaging, white clean background, professional product photography, premium cosmetics', file: 'product-3.jpg' },
        { prompt: 'Hydrating night cream pot, soft pink packaging, white clean background, beauty product photography, premium skincare, studio lighting', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'sleek',
      hero: {
        prompt: 'Minimal clean beauty editorial, black and white professional photography, sleek skincare products arranged geometrically, modern clinical aesthetic, high contrast, 16:9 landscape, premium cosmetics brand campaign',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Minimalist sunscreen lotion tube, clean white packaging, white background, professional e-commerce skincare photography, clean beauty aesthetic', file: 'product-1.jpg' },
        { prompt: 'Rejuvenating night oil serum, sleek black bottle dropper, white clean background, premium skincare product photography, minimal design', file: 'product-2.jpg' },
        { prompt: 'Bio retinol cream pump bottle, white minimalist packaging, clean background, professional cosmetics photography, modern skincare brand', file: 'product-3.jpg' },
        { prompt: 'Protective day oil serum, sophisticated packaging, white background, studio lighting, clean beauty product photography, premium cosmetics', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'glow',
      hero: {
        prompt: 'Bold inclusive beauty campaign, vibrant diverse woman with radiant glowing skin, colorful lifestyle beauty photo, bright warm tones, editorial makeup, dynamic composition, 16:9 landscape, modern beauty brand photography',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Orchid serum bottle with floral design, vibrant colorful packaging, white background, beauty product photography, inclusive skincare brand', file: 'product-1.jpg' },
        { prompt: 'Bakuchiol drops bottle, colorful gradient packaging, white clean background, premium skincare product photo, bold beauty brand', file: 'product-2.jpg' },
        { prompt: 'Eye corrector cream, bright playful packaging, white background, professional product photography, inclusive beauty brand', file: 'product-3.jpg' },
        { prompt: 'Glow moisturizer jar, vibrant packaging with botanical elements, white background, skincare product photography, lifestyle beauty', file: 'product-4.jpg' },
      ],
    },
  ],

  electronics: [
    {
      id: 'quantum',
      hero: {
        prompt: 'Premium tech gadgets lifestyle editorial, dark moody atmosphere, young person using wireless earbuds, urban background with neon lights, split composition, 16:9 landscape, tech brand campaign photography, cinematic lighting',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Premium wireless headphones, sleek black design, white clean background, professional e-commerce tech product photography, studio lighting', file: 'product-1.jpg' },
        { prompt: 'True wireless earbuds in charging case, modern tech design, white background, product photography, premium audio accessories', file: 'product-2.jpg' },
        { prompt: 'Gaming controller, RGB lighting, dark background with dramatic lighting, tech product photography, premium gaming accessory', file: 'product-3.jpg' },
        { prompt: 'Portable bluetooth speaker cube, modern minimalist design, white background, tech product photography, premium audio equipment', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'harmony',
      hero: {
        prompt: 'Aspirational audio lifestyle photo, person wearing premium over-ear headphones in luxury home studio, dark cinematic atmosphere, 16:9 landscape, music brand editorial, moody lighting with warm accents',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Premium studio headphones, professional over-ear design, white clean background, audiophile product photography, luxury audio equipment', file: 'product-1.jpg' },
        { prompt: 'Premium wireless earphones, sophisticated design, white background, high-end audio product photography, studio lighting', file: 'product-2.jpg' },
        { prompt: 'Studio monitor speaker, professional audio equipment, dark background, dramatic lighting, premium sound product photography', file: 'product-3.jpg' },
        { prompt: 'DAC amplifier, professional audio equipment, brushed aluminum design, white background, studio product photography, audiophile gear', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'woodstock',
      hero: {
        prompt: 'Modern smartwatch lifestyle photo, elegant person wearing premium smartwatch, clean minimal background, technology meets style, 16:9 landscape, tech fashion campaign, bright studio lighting',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Premium smartwatch with metal band, white clean background, professional tech product photography, luxury watch design, studio lighting', file: 'product-1.jpg' },
        { prompt: 'Smartwatch Series 9 with sport band, modern design, white background, e-commerce product photography, wearable tech', file: 'product-2.jpg' },
        { prompt: 'Ultra slim laptop, open on white surface, clean background, premium tech product photography, professional computing', file: 'product-3.jpg' },
        { prompt: 'Modern smartphone, sleek design, white clean background, premium mobile product photography, flagship phone', file: 'product-4.jpg' },
      ],
    },
  ],

  food: [
    {
      id: 'cosecha',
      hero: {
        prompt: 'Artisanal gourmet food editorial, rustic warm aesthetic, wooden table with handcrafted jars, honey, olive oil and artisan bread arranged beautifully, golden warm lighting, 16:9 landscape, premium food brand photography, farm-to-table style',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Artisan honey jar with honeycomb, warm wooden background, premium gourmet food photography, rustic aesthetic, natural light', file: 'product-1.jpg' },
        { prompt: 'Premium olive oil bottle, mediterranean style, clean background, artisan food product photography, gourmet cooking', file: 'product-2.jpg' },
        { prompt: 'Artisan sourdough bread loaf, rustic wooden surface, warm lighting, premium food photography, bakery aesthetic', file: 'product-3.jpg' },
        { prompt: 'Homemade jam jar with label, colorful fruit preserve, clean background, artisan food product photography, gourmet gift', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'levain',
      hero: {
        prompt: 'Organic artisan bakery editorial, elegant sourdough bread and croissants on white marble surface, natural morning light, clean sophisticated aesthetic, 16:9 landscape, premium bakery brand photography, Parisian style',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Perfect sourdough loaf, artisan bread on white background, premium bakery product photography, organic bread, crispy crust', file: 'product-1.jpg' },
        { prompt: 'Butter croissant, flaky golden pastry, white clean background, premium bakery product photography, French patisserie style', file: 'product-2.jpg' },
        { prompt: 'Organic granola in glass jar, clean white background, premium healthy food product photography, artisan breakfast', file: 'product-3.jpg' },
        { prompt: 'Whole grain toast slices, organic bread, white background, premium healthy food photography, artisan bakery product', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'mercado',
      hero: {
        prompt: 'Bold local farmers market editorial, vibrant fresh vegetables and fruits, colorful market stall, Colombian campo aesthetic, 16:9 landscape, community food brand photography, bright natural light, fresh local produce',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Fresh vegetable basket, colorful market produce, white clean background, local farm product photography, healthy food', file: 'product-1.jpg' },
        { prompt: 'Fresh fruit basket, tropical fruits mix, white background, local market product photography, fresh and colorful', file: 'product-2.jpg' },
        { prompt: 'Farm fresh eggs in basket, rustic natural background, premium product photography, campo farm aesthetic', file: 'product-3.jpg' },
        { prompt: 'Fresh dairy products, cheese and milk from farm, white background, premium local food product photography', file: 'product-4.jpg' },
      ],
    },
  ],

  jewelry: [
    {
      id: 'lumiere',
      hero: {
        prompt: 'Dark luxury jewelry editorial, dramatic black background, gold ring with gemstone on black velvet, dramatic chiaroscuro lighting, 16:9 landscape, high-end jewelry brand campaign, ultra premium aesthetic',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Luxury gold ring with precious stone, black velvet background, dramatic lighting, premium jewelry product photography, ultra luxury', file: 'product-1.jpg' },
        { prompt: 'Elegant gold necklace on dark background, luxury jewelry photography, dramatic lighting, high-end accessories product photo', file: 'product-2.jpg' },
        { prompt: 'Gold drop earrings, luxury jewelry on dark background, dramatic studio lighting, premium accessories product photography', file: 'product-3.jpg' },
        { prompt: 'Delicate gold bracelet on dark velvet, luxury jewelry photography, elegant lighting, premium accessories product photo', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'diamante',
      hero: {
        prompt: 'White minimal luxury jewelry editorial, diamond ring on pure white marble, clean elegant aesthetic, natural soft light, 16:9 landscape, premium bridal jewelry brand campaign, champagne tones',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Diamond solitaire ring, white background, premium jewelry product photography, bridal ring, studio soft lighting, luxury', file: 'product-1.jpg' },
        { prompt: 'Three ring set with diamonds, white clean background, premium jewelry photography, bridal collection, elegant', file: 'product-2.jpg' },
        { prompt: 'Diamond baguette earrings, white background, luxury jewelry product photography, premium accessories, studio lighting', file: 'product-3.jpg' },
        { prompt: 'Delicate diamond necklace, white background, premium jewelry photography, elegant accessory, soft studio lighting', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'heritage',
      hero: {
        prompt: 'Artisan vintage jewelry workshop editorial, handcrafted rings and antique jewelry on aged wood, warm golden light, 16:9 landscape, heritage jewelry brand photography, vintage Baskerville aesthetic, warm amber tones',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Vintage handcrafted ring, antique gold design, warm background, artisan jewelry product photography, heritage style', file: 'product-1.jpg' },
        { prompt: 'Vintage brooch with intricate design, antique jewelry, warm background, artisan product photography, heritage accessories', file: 'product-2.jpg' },
        { prompt: 'Antique medallion necklace, vintage gold pendant, warm studio background, artisan jewelry photography, heritage collection', file: 'product-3.jpg' },
        { prompt: 'Handcrafted chain necklace, vintage gold links, warm background, artisan jewelry product photography, heritage style', file: 'product-4.jpg' },
      ],
    },
  ],

  home: [
    {
      id: 'haven',
      hero: {
        prompt: 'Contemporary warm home interior editorial, terracotta sofa with sage cushions, warm wooden furniture, natural light through linen curtains, 16:9 landscape, premium furniture brand photography, cozy living room aesthetic',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Modern sofa in terracotta fabric, clean white background, premium furniture product photography, contemporary home design', file: 'product-1.jpg' },
        { prompt: 'Oak dining table, minimal clean design, white studio background, premium furniture product photography, contemporary home', file: 'product-2.jpg' },
        { prompt: 'Terracotta accent chair, modern design, white background, premium furniture product photography, home interior', file: 'product-3.jpg' },
        { prompt: 'Sage green cushion set, premium textile, white background, home decor product photography, interior accessories', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'nordia',
      hero: {
        prompt: 'Scandinavian minimalist home interior, light birch wood furniture, white walls, natural linen textiles, Nordic aesthetic, 16:9 landscape, premium furniture brand editorial photography, clean simplicity',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Scandinavian chair in natural wood and linen, white clean background, premium Nordic furniture product photography, minimal design', file: 'product-1.jpg' },
        { prompt: 'Nordic sofa in natural birch and white fabric, clean background, premium Scandinavian furniture photography, minimal aesthetic', file: 'product-2.jpg' },
        { prompt: 'Oak dining table Nordic design, white studio background, premium Scandinavian furniture product photography', file: 'product-3.jpg' },
        { prompt: 'Linen textile throw, Nordic minimal design, white background, premium home decor product photography, natural materials', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'loft',
      hero: {
        prompt: 'Industrial urban loft interior editorial, exposed brick walls, steel and oak furniture, dramatic pendant lighting, 16:9 landscape, premium urban furniture brand photography, New York loft aesthetic',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Industrial sofa with steel frame and leather, white background, premium urban furniture product photography, loft aesthetic', file: 'product-1.jpg' },
        { prompt: 'Steel and oak dining table, industrial design, white studio background, premium furniture product photography, urban loft', file: 'product-2.jpg' },
        { prompt: 'Industrial metal chair, riveted design, white background, premium furniture product photography, urban loft aesthetic', file: 'product-3.jpg' },
        { prompt: 'Industrial pipe shelving unit, steel and wood, white background, premium furniture product photography, urban loft design', file: 'product-4.jpg' },
      ],
    },
  ],

  sports: [
    {
      id: 'apex',
      hero: {
        prompt: 'Dynamic activewear campaign, athletic person in red premium sportswear running in dramatic setting, powerful composition, 16:9 landscape, premium sports brand photography, high energy, Bebas Neue style red and black',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Premium athletic shorts in red and black, white clean background, activewear product photography, sports brand e-commerce', file: 'product-1.jpg' },
        { prompt: 'Sports bra premium activewear, clean white background, athletic product photography, performance sportswear', file: 'product-2.jpg' },
        { prompt: 'Premium running shoes, red and black design, white background, sports product photography, performance footwear', file: 'product-3.jpg' },
        { prompt: 'Wind jacket athletic, premium sportswear, white background, sports product photography, performance outerwear', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'stride',
      hero: {
        prompt: 'Trail running outdoor editorial, athlete in forest green premium running gear on mountain trail, dynamic motion, 16:9 landscape, outdoor sports brand photography, nature running campaign',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Carbon trail running shoes, forest green design, white background, premium running product photography, outdoor footwear', file: 'product-1.jpg' },
        { prompt: 'Road running shoes elite design, white clean background, premium running product photography, performance footwear', file: 'product-2.jpg' },
        { prompt: 'Running shorts 7 inch, trail running design, white background, sports product photography, outdoor activewear', file: 'product-3.jpg' },
        { prompt: 'Wind running jacket, outdoor performance, white background, sports product photography, trail running outerwear', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'arena',
      hero: {
        prompt: 'High intensity gym performance campaign, athletic person lifting weights in dramatic gym setting, electric yellow and black, 16:9 landscape, premium gym brand photography, powerful energy, performance sportswear',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Dry-fit performance t-shirt yellow and black, white background, gym activewear product photography, performance sportswear', file: 'product-1.jpg' },
        { prompt: 'Power shorts 7 inch, gym performance wear, white clean background, sports product photography, training shorts', file: 'product-2.jpg' },
        { prompt: 'Training shoes zero-g design, yellow accent, white background, gym product photography, performance footwear', file: 'product-3.jpg' },
        { prompt: 'Kettlebell 24kg in matte black, white background, gym equipment product photography, premium fitness equipment', file: 'product-4.jpg' },
      ],
    },
  ],

  general: [
    {
      id: 'bazaar',
      hero: {
        prompt: 'Colorful general marketplace editorial, variety of products beautifully arranged, vibrant purple and violet tones, abundance and diversity, 16:9 landscape, modern marketplace brand photography, Plus Jakarta aesthetic',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Trending product flat lay, colorful background, general marketplace product photography, e-commerce bestseller', file: 'product-1.jpg' },
        { prompt: 'Popular product item, clean white background, premium marketplace photography, trending e-commerce product', file: 'product-2.jpg' },
        { prompt: 'Bestselling product, clean studio background, premium marketplace product photography, popular item', file: 'product-3.jpg' },
        { prompt: 'Top rated product, clean white background, premium e-commerce product photography, marketplace bestseller', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'urban',
      hero: {
        prompt: 'Dark streetwear urban lifestyle editorial, person in oversized clothing in urban setting at night, neon yellow accents, 16:9 landscape, streetwear brand campaign photography, Syne aesthetic, gritty urban',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Oversized streetwear t-shirt, core design, dark background, urban fashion product photography, streetwear brand', file: 'product-1.jpg' },
        { prompt: 'Urban air sneakers, street style, white clean background, streetwear product photography, urban footwear', file: 'product-2.jpg' },
        { prompt: 'Tech jacket V2 urban style, dark background, streetwear product photography, urban outerwear brand', file: 'product-3.jpg' },
        { prompt: 'Urban logo cap, streetwear hat, white background, urban fashion product photography, streetwear accessory', file: 'product-4.jpg' },
      ],
    },
    {
      id: 'vida',
      hero: {
        prompt: 'Warm Latin lifestyle editorial, colorful artisan products and home goods on warm orange background, DM Serif aesthetic, 16:9 landscape, Latin American brand photography, vibrant and joyful',
        aspectRatio: '16:9',
      },
      products: [
        { prompt: 'Artisan woven basket with colorful design, warm background, Latin artisan product photography, handcrafted goods', file: 'product-1.jpg' },
        { prompt: 'Colorful boho blouse, Latin fashion, white clean background, lifestyle product photography, artisan fashion', file: 'product-2.jpg' },
        { prompt: 'Wellness kit with natural products, warm tones, white background, lifestyle product photography, holistic wellness', file: 'product-3.jpg' },
        { prompt: 'Latin kitchen set with colorful ceramics, warm background, artisan product photography, Latin lifestyle home', file: 'product-4.jpg' },
      ],
    },
  ],
};

// ============================================================
// MAIN GENERATION LOOP
// ============================================================
const results = {};

for (const [industry, templates] of Object.entries(TEMPLATES)) {
  results[industry] = {};
  for (const template of templates) {
    const { id, hero, products } = template;
    const templateDir = path.join(PUBLIC_DIR, industry, id);
    const webBase = `/images/templates/${industry}/${id}`;

    console.log(`\n📸 [${industry}/${id}]`);
    results[industry][id] = { hero: null, products: [] };

    // Hero image
    const heroFile = path.join(templateDir, 'hero.jpg');
    console.log(`  → Generating hero (16:9)...`);
    const heroOk = await generateAndSave(hero.prompt, '16:9', heroFile);
    if (heroOk) results[industry][id].hero = `${webBase}/hero.jpg`;
    await sleep(DELAY_MS);

    // Product images
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const prodFile = path.join(templateDir, p.file);
      console.log(`  → Generating product ${i+1}/4...`);
      const ok = await generateAndSave(p.prompt, '1:1', prodFile);
      if (ok) results[industry][id].products.push(`${webBase}/${p.file}`);
      await sleep(DELAY_MS);
    }
  }
}

// Save results to JSON for the update script
const resultsPath = path.join(PROJECT_ROOT, 'scripts', 'generated-images.json');
await fs.writeFile(resultsPath, JSON.stringify(results, null, 2));
console.log(`\n✅ Results saved to scripts/generated-images.json`);
console.log('\nFull results:');
console.log(JSON.stringify(results, null, 2));

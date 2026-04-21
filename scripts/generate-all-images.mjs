#!/usr/bin/env node
/**
 * =====================================================================
 * MASTER IMAGE GENERATOR — All 24 templates, all industries
 * =====================================================================
 * Reads API key from .env.local (NEVER hardcoded)
 * Usage:
 *   node scripts/generate-all-images.mjs                  → all industries
 *   node scripts/generate-all-images.mjs --industry=beauty → one industry
 *   node scripts/generate-all-images.mjs --template=july   → one template
 *   node scripts/generate-all-images.mjs --force           → overwrite existing
 *   node scripts/generate-all-images.mjs --industry=fashion --force
 * =====================================================================
 */

import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR   = path.join(PROJECT_ROOT, 'public', 'images', 'templates');

// ── Read API key from .env.local ──────────────────────────────────────────
const ENV_FILE = path.join(PROJECT_ROOT, '.env.local');
let API_KEY = '';
try {
  const env = await fs.readFile(ENV_FILE, 'utf-8');
  const match = env.match(/GEMINI_API_KEY\s*=\s*(.+)/);
  if (match) API_KEY = match[1].trim();
} catch {}

if (!API_KEY) {
  console.error('\n❌  No API key found.');
  console.error('   Create .env.local in the project root with:');
  console.error('   GEMINI_API_KEY=your_new_key_here\n');
  process.exit(1);
}

// ── CLI args ──────────────────────────────────────────────────────────────
const args   = process.argv.slice(2);
const FORCE  = args.includes('--force');
const IND    = args.find(a => a.startsWith('--industry='))?.split('=')[1];
const TMPL   = args.find(a => a.startsWith('--template='))?.split('=')[1];

// ── Gemini config ─────────────────────────────────────────────────────────
const MODEL    = 'gemini-2.0-flash-preview-image-generation';
const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const DELAY_MS = 4000;  // 4s between requests

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateImage(prompt, aspectRatio) {
  const url  = `${API_BASE}/${MODEL}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API ${res.status}: ${err.slice(0, 200)}`);
  }

  const json = await res.json();
  for (const part of json?.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData?.data) {
      return Buffer.from(part.inlineData.data, 'base64');
    }
  }
  throw new Error('No image data returned');
}

async function saveImage(buffer, filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, buffer);
  const rel = filePath.replace(PROJECT_ROOT + path.sep, '');
  console.log(`  ✓ ${rel}`);
}

async function generateAndSave(prompt, aspectRatio, filePath, retries = 3) {
  if (!FORCE && existsSync(filePath)) {
    console.log(`  ⟳ skip (exists): ${path.basename(filePath)}`);
    return true;
  }
  for (let i = 0; i < retries; i++) {
    try {
      const buf = await generateImage(prompt, aspectRatio);
      await saveImage(buf, filePath);
      return true;
    } catch (err) {
      console.error(`  ✗ attempt ${i+1}/${retries}: ${err.message}`);
      if (i < retries - 1) await sleep(4000);
    }
  }
  return false;
}

// =====================================================================
// TEMPLATES — Prompts match each template's exact visual aesthetic
// =====================================================================
const TEMPLATES = {

  // ── BEAUTY ────────────────────────────────────────────────────────────
  beauty: [
    {
      id: 'july',
      // Aesthetic: luxury skincare, warm cream/amber palette, Cormorant Garamond serif, dark brown nav
      hero: 'Luxury skincare editorial photography, 16:9 horizontal. Elegant woman with luminous glowing skin in warm amber and cream environment, golden hour light filtering through linen curtains. Dark rich brown tones with warm gold accents. High-end beauty magazine campaign, professional studio with bokeh. The mood is sophisticated, warm, and aspirational — like a luxury Parisian skincare brand.',
      products: [
        'Luxury amber glass facial oil dropper bottle — premium skincare packaging, elegant gold label with botanical print. Shot on pure white background with soft warm shadows. Studio product photography, ultra sharp, e-commerce style.',
        'Elegant glass bakuchiol serum bottle with gold metal dropper cap — premium skincare. Isolated on white background, soft warm studio lighting, beauty product photography professional e-commerce.',
        'Luxury eye cream glass jar with gold lid — premium anti-aging skincare packaging, clean cream label with embossed text. White background, professional beauty product photography, soft shadows.',
        'Premium hydrating night cream pot — soft opaque glass with rose-gold lid, minimalist label. Isolated on white background, warm studio lighting, luxury beauty e-commerce product photography.',
      ],
    },
    {
      id: 'sleek',
      // Aesthetic: clean minimal white/pink, Inter font, clinical beauty, pink side panels
      hero: 'Clean minimal beauty campaign photography, 16:9 horizontal. Bright white clinical studio, woman with clear perfect skin looking directly at camera, clean white and soft pink background. Products arranged with geometric precision. Clinical-chic aesthetic, modern skincare brand, sharp and hygienic. Think Glossier meets MUJI — ultra clean, minimal, pure.',
      products: [
        'Minimalist SPF sunscreen tube — clean white matte packaging, simple black sans-serif typography. Isolated on pure white background. Clean beauty product photography, clinical aesthetic, professional studio lighting, product casting sharp shadows.',
        'Rejuvenating night facial oil — sleek frosted glass bottle with black pump, minimal label design. White background, clean product photography, professional lighting, shadows crisp and clear.',
        'Bio retinol cream pump bottle — white minimalist packaging, small clean label, soft pink accent. Isolated on white background, clean beauty product photography, professional studio lighting.',
        'Protective day facial oil — clear glass bottle with clean label, minimal design. Pure white background, professional product photography, sharp clean shadows, clinical beauty aesthetic.',
      ],
    },
    {
      id: 'glow',
      // Aesthetic: dark night teal palette #0a1a1a, Glow logo in teal, italic 160px "belleza" hero
      hero: 'Bold inclusive beauty campaign photography, 16:9 horizontal. Powerful confident woman with richly pigmented glowing makeup, dark dramatic background with deep teal shadows and emerald light accents. Dynamic editorial composition, high contrast. Bold modern inclusive beauty brand — diverse, powerful, unapologetic. Dark atmosphere with neon teal green accent light.',
      products: [
        'Orchid facial serum in dark sophisticated glass bottle — deep black packaging with teal botanical accent label. Product isolated on very dark charcoal background, dramatic studio lighting with teal rim light. Bold inclusive beauty brand.',
        'Bakuchiol oil drops in dark glass dropper bottle — premium minimal dark packaging. Isolated on dark charcoal/black background, teal accent lighting, bold beauty product photography.',
        'Eye corrector balm in dark matte packaging — sophisticated minimal design. Dark background, teal light accent, professional bold beauty product photography.',
        'Glow moisturizer in dark glass jar — matte dark lid, sophisticated label. Isolated on deep dark background with subtle teal reflections, bold beauty product photography.',
      ],
    },
  ],

  // ── ELECTRONICS ───────────────────────────────────────────────────────
  electronics: [
    {
      id: 'quantum',
      // Aesthetic: dark #050508, Space Grotesk/Mono, blue #4f8ef7, grid lines, "VOLT." logo
      hero: 'Dark cinematic tech lifestyle photography, 16:9 horizontal. Young person using premium wireless earbuds and smartphone in urban night setting, blue neon accents, dark moody atmosphere. Tech brand editorial — the subject is confident, futuristic, surrounded by soft blue glows and city bokeh. Deep dark background, electric blue accent lighting. Premium gadget brand campaign.',
      products: [
        'Premium wireless earbuds in charging case — sleek black matte design with subtle blue LED indicator. Isolated on very dark near-black background with soft blue light glow underneath. Professional tech product photography, dramatic lighting.',
        'Latest flagship smartphone — ultra-thin profile, dark glass back, professional camera module. Isolated on dark background with soft blue reflection on surface below. Premium tech product photography, dramatic studio.',
        'Sleek wireless over-ear headphones — premium black design, minimalist aesthetic, blue accent detail. Dark background, professional tech product photography with blue rim lighting.',
        'Premium smartwatch — dark case with blue digital face showing metrics. Dark background, subtle blue glow, professional tech product photography, clean dramatic lighting.',
      ],
    },
    {
      id: 'harmony',
      // Aesthetic: beige #f8f8f6, Outfit font, orange #ff4a00 accent, dark hero left panel
      hero: 'Premium audio lifestyle editorial, 16:9 horizontal. Person wearing high-end over-ear headphones in a warm minimal interior setting, beige tones, natural light. Sophisticated audio culture, music lover aesthetic — calm, premium, aspirational. Warm off-white background with the subject enjoying immersive sound. Clean lifestyle brand feel.',
      products: [
        'Premium studio over-ear headphones — warm bronze/tan color scheme, plush ear cups, clean professional design. Isolated on warm off-white/cream background, soft studio lighting. Premium audio product photography.',
        'High-end wireless earphones — sophisticated minimal design, warm neutral case. Isolated on cream background, professional studio lighting, premium audio product photography.',
        'Professional floor standing speaker — tall elegant design, warm wood veneer cabinet. Isolated on light beige background, professional home audio product photography.',
        'Premium DAC-amplifier unit — clean brushed metal design, minimal interface. Isolated on off-white background, professional studio lighting, audiophile equipment photography.',
      ],
    },
    {
      id: 'woodstock',
      // Aesthetic: dark #080b10, Rajdhani font, green #00ff88, grid lines, gaming aesthetic
      hero: 'High-performance gaming setup editorial, 16:9 horizontal. RGB gaming battlestation in dark room, neon green LED strips illuminating keyboard and headset. Dramatic dark atmosphere with electric green glow accents. Modern gaming brand campaign — powerful, technological, competitive. Dark background, deep shadow, neon green RGB lighting.',
      products: [
        'Gaming mechanical keyboard with green RGB backlight — premium build quality, dark matte keycaps with neon green legend. Isolated on very dark background with green LED glow underneath. Gaming product photography.',
        'Gaming headset with RGB earcups — green LED accent, black premium design, boom mic. Dark background, dramatic green rim lighting, gaming brand product photography.',
        'Gaming mouse — ergonomic design, dark matte body, green DPI indicator light. Dark background, subtle green glow, professional gaming product photography.',
        'Gaming monitor — curved ultra-wide screen showing game, green edge lighting. Dark background, neon green accent light, professional gaming product photography.',
      ],
    },
  ],

  // ── FASHION ───────────────────────────────────────────────────────────
  fashion: [
    {
      id: 'aura',
      // Aesthetic: Montserrat, blue #3498db/#1565c0, activewear, hero: blue gradient left
      hero: 'Premium activewear brand editorial photography, 16:9 horizontal. Powerful athletic woman in sleek blue compression sportswear in dynamic running pose. Professional sports photography, bold blue accent lighting on dark gray studio background. High energy, athletic peak performance. Blue gradient lighting from the left side. Competitive sports brand campaign — strong, fast, confident.',
      products: [
        'High-performance women athletic leggings — deep navy blue with silver mesh accent, compression fit. Isolated on clean white background, professional activewear product photography, soft studio lighting.',
        'Premium sports crop top — electric blue with white logo, moisture-wicking fabric texture visible. Isolated on white background, activewear product photography, clean studio lighting.',
        'Performance running shorts — bright blue with side pockets, lightweight fabric. Isolated on white background, professional sportswear product photography.',
        'Athletic windbreaker jacket — blue and white color block, hooded, premium sportswear. Isolated on white background, activewear product photography, professional studio lighting.',
      ],
    },
    {
      id: 'elegancia',
      // Aesthetic: Cormorant Garamond serif, cream/tan palette, luxury fashion editorial
      hero: 'Premium luxury fashion editorial photography, 16:9 horizontal. Elegant woman in refined cream and camel colored designer ensemble, sophisticated neutral palette. Soft warm studio lighting, cream background with warm beige tones. Timeless elegance — minimal, clean, luxury European fashion brand. Think Toteme, The Row, Massimo Dutti editorial campaign.',
      products: [
        'Luxury cream silk blouse — fluid drape, minimal design, elegant neutral tone. Isolated on soft cream white background, fashion product photography, soft diffused studio lighting.',
        'Premium linen tailored trousers — camel/sand tone, straight cut, quality fabric texture. Isolated on soft white background, luxury fashion product photography, professional studio lighting.',
        'Minimal leather structured handbag — camel/tan color, gold hardware, clean lines. Isolated on white background, luxury fashion accessory product photography, soft shadows.',
        'Premium cashmere sweater — cream or camel tone, soft relaxed fit, quality knit texture. Isolated on white/cream background, luxury fashion product photography, soft studio lighting.',
      ],
    },
    {
      id: 'simetria',
      // Aesthetic: Inter, black/white/#f4a855 orange, casual lifestyle, 3-col gradient cards
      hero: 'Modern casual lifestyle fashion photography, 16:9 horizontal. Cool stylish young woman in contemporary casual outfit — oversized shirt, straight jeans, white sneakers — in a bright urban environment. Clean natural daylight. Fresh modern lifestyle brand — approachable, trendy, everyday fashion. Neutral palette with warm accent colors. Street style meets lifestyle brand.',
      products: [
        'Modern casual women T-shirt — clean minimal design, white or cream color, relaxed fit. Isolated on white background, lifestyle brand product photography, clean studio lighting.',
        'Classic straight-leg jeans — indigo wash, clean cut, everyday wear. Isolated on white background, lifestyle fashion product photography, professional studio lighting.',
        'Oversized hooded sweatshirt — neutral gray or beige, minimalist design, cozy fit. Isolated on white background, casual lifestyle brand product photography.',
        'White canvas sneakers — clean minimal design, casual everyday style. Isolated on white background, fashion product photography, clean professional studio lighting.',
      ],
    },
  ],

  // ── FOOD ──────────────────────────────────────────────────────────────
  food: [
    {
      id: 'cosecha',
      // Aesthetic: warm artisan, dark brown #2a1f14, amber accents, rustic
      hero: 'Artisan gourmet food editorial photography, 16:9 horizontal. Beautiful wooden table with handcrafted honey jars, premium olive oil bottle, artisan bread and seasonal flowers. Warm golden morning light, rustic aesthetic. Colombian farm-to-table brand campaign — warm amber wood tones, handmade labels, natural abundance. Feels like a farmers market at golden hour.',
      products: [
        'Artisan honey jar — amber glass, handwritten label with honeycomb design, golden honey inside. Isolated on warm wood surface with soft warm light. Premium gourmet artisan product photography.',
        'Premium extra virgin olive oil bottle — dark glass, elegant hand-labeled, Mediterranean style. Isolated on warm neutral background, artisan food product photography, warm natural lighting.',
        'Rustic artisan sourdough bread loaf — golden brown crust with scoring, natural flour dusting. Isolated on wooden board, warm studio lighting, artisan bakery product photography.',
        'Homemade jam jar — small glass jar with fresh red/orange jam, handwritten cloth label with twine. Warm background, artisan gourmet product photography, natural warm light.',
      ],
    },
    {
      id: 'levain',
      // Aesthetic: Parisian organic bakery, white/cream, clean sophisticated
      hero: 'Organic Parisian artisan bakery editorial, 16:9 horizontal. Perfect sourdough loaves and golden croissants arranged on white marble surface with scattered flour. Clean, elegant, sophisticated. Morning natural light. Premium bakery brand campaign — European aesthetic, clean white and cream tones, artisan craftsmanship. Feels like a premium Parisian boulangerie.',
      products: [
        'Perfect artisan sourdough loaf — beautiful golden scoring, crispy crust, moist crumb visible in cross-section. Isolated on white background, clean bakery product photography, soft natural light.',
        'Flaky golden butter croissant — perfect lamination, golden brown color. Isolated on white background, premium bakery product photography, clean studio lighting.',
        'Artisan granola in clear glass jar with wooden lid — colorful oats, nuts, dried fruit. Isolated on white/cream background, organic food product photography, clean studio.',
        'Organic whole grain toast slices on wooden board — rustic but clean aesthetic. White background, premium food product photography, soft natural light.',
      ],
    },
    {
      id: 'mercado',
      // Aesthetic: vibrant colorful local market, bold colors
      hero: 'Vibrant local farmers market editorial, 16:9 horizontal. Colorful array of fresh tropical fruits and vegetables overflowing from market baskets — mangos, papayas, tomatoes, herbs. Bold rich colors, natural sunlight. Colombian campo market energy — abundant, fresh, colorful, joyful community food culture.',
      products: [
        'Mixed fresh tropical vegetables in woven basket — colorful, vibrant, freshly harvested. Isolated on white background, colorful food product photography, natural light.',
        'Assorted fresh tropical fruits — mangos, granadillas, maracuyá — arranged attractively. Isolated on white background, vibrant food product photography, clean studio.',
        'Farm fresh eggs in handmade straw basket — rustic warm aesthetic, campo farm feel. Natural background, warm lighting, local farm product photography.',
        'Fresh local cheese wheel and sliced cheese on wooden board — rustic campo aesthetic. Warm background, natural light, local food product photography.',
      ],
    },
  ],

  // ── JEWELRY ───────────────────────────────────────────────────────────
  jewelry: [
    {
      id: 'lumiere',
      // Aesthetic: dark #0a0a0a, gold, velvet, dramatic chiaroscuro
      hero: 'Ultra luxury jewelry editorial photography, 16:9 horizontal. Dramatic chiaroscuro lighting — single gold ring with precious gemstone on rich black velvet against near-black background. One intense focused spotlight creating deep shadows. Feels like an auction house catalog or extreme luxury brand. Dark, opulent, theatrical.',
      products: [
        'Luxury 18k gold ring with brilliant cut diamond — shot on black velvet background, single dramatic spotlight, ultra luxury jewelry photography, chiaroscuro lighting.',
        'Elegant gold chain necklace — fine craftsmanship visible, dramatic dark background, luxury jewelry product photography, focused rim lighting.',
        'Drop gold earrings with gemstone — dramatic close-up, black background, ultra luxury jewelry photography, professional studio chiaroscuro.',
        'Delicate gold bracelet on black velvet — elegant fine jewelry, dramatic dark background, luxury product photography, focused studio light.',
      ],
    },
    {
      id: 'diamante',
      // Aesthetic: white marble, diamond, bridal, clean luxury
      hero: 'Luxury diamond bridal jewelry editorial, 16:9 horizontal. Diamond solitaire engagement ring on pure white marble surface, champagne and cream tones, soft diffused natural light from the side. Aspirational bridal jewelry brand campaign — pure, elegant, white, feminine luxury. Clean and luminous.',
      products: [
        'Diamond solitaire engagement ring — brilliant round cut in platinum setting. Isolated on pure white background, soft professional lighting, luxury bridal jewelry photography.',
        'Diamond three-stone ring — elegant platinum setting, brilliant cut stones. White background, soft studio lighting, luxury bridal jewelry product photography.',
        'Diamond stud earrings — classic brilliant cut in platinum push-back setting. White clean background, soft diffused studio lighting, luxury jewelry product photography.',
        'Diamond tennis necklace — fine platinum chain with brilliant cut stones. White background, professional studio lighting, luxury bridal jewelry photography.',
      ],
    },
    {
      id: 'heritage',
      // Aesthetic: vintage artisan, aged wood, warm amber
      hero: 'Heritage artisan jewelry editorial photography, 16:9 horizontal. Handcrafted vintage gold rings and antique jewelry pieces arranged on aged wood with warm amber candlelight. Warm golden tones, craft aesthetic, old world European jewelry workshop. Artisan heirloom brand campaign — warm, authentic, handmade heritage.',
      products: [
        'Vintage handcrafted gold signet ring — antique finish, engraved design. Isolated on warm aged wood surface, golden side lighting, heritage jewelry product photography.',
        'Ornate vintage brooch — intricate floral goldsmith work, antique design. Warm wood background, soft golden lighting, artisan heritage jewelry photography.',
        'Antique medallion pendant necklace — vintage goldsmith work, heavy chain. Warm background, aged aesthetic, heritage jewelry product photography.',
        'Handmade vintage link chain necklace — artisan gold craftsmanship, aged finish. Warm wood background, golden natural light, artisan jewelry photography.',
      ],
    },
  ],

  // ── HOME ──────────────────────────────────────────────────────────────
  home: [
    {
      id: 'haven',
      // Aesthetic: terracotta, sage, contemporary warm, natural light
      hero: 'Warm contemporary home interior editorial, 16:9 horizontal. Cozy living room with terracotta sofa, sage green cushions, warm oak coffee table, natural linen curtains with afternoon light filtering through. Home brand campaign — inviting, warm, modern organic. Feels like a premium Colombian or Mediterranean home design brand.',
      products: [
        'Modern sofa in warm terracotta fabric — clean contemporary design, slim legs. Isolated on white studio background, premium furniture product photography, soft warm lighting.',
        'Solid oak round dining table — warm natural wood grain, clean minimal design. Isolated on white background, furniture product photography, professional studio lighting.',
        'Terracotta accent armchair — upholstered in warm burnt orange fabric. Isolated on white background, contemporary furniture product photography, soft warm studio.',
        'Sage green cushion set — premium linen fabric, minimal embroidery detail. Isolated on white background, home decor product photography, soft studio lighting.',
      ],
    },
    {
      id: 'nordia',
      // Aesthetic: Nordic minimal, birch white, clean Scandinavian
      hero: 'Scandinavian Nordic interior design editorial, 16:9 horizontal. Minimal bright living room with natural birch wood furniture, white walls, natural linen textiles, small indoor plants. Clean Scandinavian aesthetic — functional, calm, beautiful simplicity. Nordic furniture brand campaign. Very light, airy, white and natural wood.',
      products: [
        'Scandinavian dining chair — natural birch frame, white linen upholstery, clean minimal design. Isolated on pure white background, Nordic furniture product photography, clean studio lighting.',
        'Nordic sofa — slim birch legs, light neutral fabric, clean minimal silhouette. Isolated on white background, Scandinavian furniture product photography.',
        'Solid oak dining table Nordic design — clean lines, natural light wood. Isolated on white background, professional furniture product photography, clean studio.',
        'Natural linen throw blanket — soft texture, neutral oat/cream color, minimal. Isolated on white background, home decor product photography, clean studio lighting.',
      ],
    },
    {
      id: 'loft',
      // Aesthetic: industrial NY loft, steel/dark wood, dramatic pendant lights
      hero: 'Urban industrial loft interior editorial, 16:9 horizontal. Dramatic New York loft living space — exposed brick walls, dark steel and reclaimed wood furniture, dramatic pendant Edison lights, concrete floor. Dark urban masculine aesthetic. Premium industrial furniture brand campaign — bold, raw, sophisticated.',
      products: [
        'Industrial sofa — steel frame with thick charcoal leather cushions. Isolated on light neutral background, industrial furniture product photography, dramatic side lighting.',
        'Steel and reclaimed wood dining table — raw iron legs, aged wood top. Isolated on white background, industrial furniture product photography, professional studio.',
        'Industrial metal dining chair — riveted steel frame, weathered leather seat. Isolated on white/neutral background, urban loft furniture product photography.',
        'Pipe shelving unit — black steel pipes and reclaimed wood shelves. Isolated on white background, industrial furniture product photography, professional studio.',
      ],
    },
  ],

  // ── SPORTS ────────────────────────────────────────────────────────────
  sports: [
    {
      id: 'apex',
      // Aesthetic: Bebas Neue, red/black, high energy performance
      hero: 'High-performance athletics campaign photography, 16:9 horizontal. Powerful male athlete in bold red and black premium sportswear, explosive sprint start position in dramatic studio. Electric red lighting, dark background, cinematic power shot. Peak performance sports brand campaign — fast, powerful, competitive. Red light on one side, deep shadow on the other.',
      products: [
        'Premium athletic shorts — red and black color block design, performance fabric. Isolated on white background, sportswear product photography, professional studio.',
        'Sports performance bra — red premium fabric, ergonomic design. Isolated on white background, activewear product photography, professional studio lighting.',
        'Performance running shoes — red and black design, cushioned sole. Isolated on white background, sports footwear product photography, clean studio.',
        'Athletic wind jacket — red and black color block, hooded performance outerwear. Isolated on white background, sportswear product photography, professional studio.',
      ],
    },
    {
      id: 'stride',
      // Aesthetic: forest green, trail running, outdoor nature
      hero: 'Trail running outdoor editorial, 16:9 horizontal. Athletic runner in forest green premium trail running gear on mountain path through lush forest, dynamic motion blur on legs. Natural daylight, green environment. Outdoor running brand campaign — nature, endurance, freedom, athletic outdoor lifestyle.',
      products: [
        'Carbon fiber trail running shoes — forest green with orange sole accent, aggressive trail lug pattern. Isolated on white background, running footwear product photography, professional studio.',
        'Road running elite shoes — lightweight neutral design, premium cushioning visible. Isolated on white background, running footwear product photography, clean studio lighting.',
        'Trail running shorts 7-inch — forest green with side pocket, moisture-wicking. Isolated on white background, trail running activewear product photography.',
        'Trail running wind jacket — packable, forest green, hooded. Isolated on white background, outdoor activewear product photography, professional studio.',
      ],
    },
    {
      id: 'arena',
      // Aesthetic: electric yellow/black, gym performance, Barlow Condensed
      hero: 'High intensity gym training editorial, 16:9 horizontal. Powerful athlete mid-lift in dramatic gym — dumbbell curl at peak, electric yellow and black gym environment, dramatic underlighting. Intense, powerful, raw gym culture. Performance gym brand campaign — gritty, real, high energy yellow and black.',
      products: [
        'Dry-fit training t-shirt — electric yellow with black branding, athletic cut. Isolated on white background, gym activewear product photography, professional studio.',
        'Power training shorts — black with yellow stripe, 7-inch inseam. Isolated on white background, gym activewear product photography, clean studio lighting.',
        'Training shoes performance — yellow accent design, flat sole for lifting. Isolated on white background, gym footwear product photography, professional studio.',
        'Matte black kettlebell 24kg — premium cast iron, flat base. Isolated on white background, gym equipment product photography, dramatic studio lighting.',
      ],
    },
  ],

  // ── GENERAL ───────────────────────────────────────────────────────────
  general: [
    {
      id: 'bazaar',
      // Aesthetic: vibrant purple/violet, Plus Jakarta, colorful marketplace
      hero: 'Vibrant online marketplace editorial, 16:9 horizontal. Beautiful flat lay of trending products — tech gadgets, fashion items, beauty products, lifestyle goods — arranged on rich violet/purple background with bright colorful accents. Bold and contemporary marketplace brand campaign. Abundant, colorful, modern, desirable.',
      products: [
        'Trending portable bluetooth speaker — colorful modern design. Isolated on white clean background, marketplace product photography, professional studio.',
        'Popular wireless earbuds — contemporary design, lifestyle product. Isolated on white background, marketplace product photography, clean studio lighting.',
        'Trending tech pouch organizer — colorful design, lifestyle product. Isolated on white background, marketplace product photography, professional studio.',
        'Popular lifestyle backpack — urban contemporary design. Isolated on white background, marketplace product photography, clean studio lighting.',
      ],
    },
    {
      id: 'urban',
      // Aesthetic: dark streetwear, Syne, neon yellow accents
      hero: 'Dark streetwear urban lifestyle editorial, 16:9 horizontal. Cool young person in oversized streetwear in urban alley at night, neon yellow LED lights reflecting on wet pavement. Gritty, authentic, dark urban aesthetic. Streetwear brand campaign — underground culture, authentic street style, dark with neon accents.',
      products: [
        'Oversized streetwear t-shirt — dark washed black with graphic print, heavy cotton. Isolated on white background, streetwear product photography, professional studio.',
        'Urban sneakers — white chunky sole, leather and mesh upper, streetwear design. Isolated on white background, footwear product photography, professional studio.',
        'Technical cargo jacket — dark olive/black with multiple pockets, urban design. Isolated on white background, streetwear product photography, professional studio lighting.',
        'Streetwear logo cap — six panel, embroidered logo, dark color. Isolated on white background, streetwear accessory product photography, clean studio.',
      ],
    },
    {
      id: 'vida',
      // Aesthetic: warm orange/earth, DM Serif, Latin lifestyle
      hero: 'Warm Latin lifestyle brand editorial, 16:9 horizontal. Colorful artisan handmade products — woven baskets, ceramics, natural wellness items — arranged on warm terracotta orange background. Joyful, vibrant, artisan Latin American aesthetic. Community brand campaign — handmade, natural, colorful, warm and inviting.',
      products: [
        'Handwoven colorful artisan basket — traditional weaving pattern, warm natural fibers. Isolated on warm cream background, artisan product photography, natural warm light.',
        'Colorful boho blouse — embroidered floral detail, artisan Latin fashion. Isolated on white background, artisan fashion product photography, warm studio lighting.',
        'Natural wellness kit — glass bottles, herbs, wooden tools on warm background. Warm cream background, lifestyle product photography, natural warm light.',
        'Artisan hand-painted ceramic mug set — colorful floral design, Latin craft. Isolated on warm white background, artisan home product photography, warm studio lighting.',
      ],
    },
  ],
};

// =====================================================================
// MAIN LOOP
// =====================================================================
const totalTemplates = Object.values(TEMPLATES).flat().length;
let done = 0, skipped = 0, failed = 0;

const industriesToRun = IND
  ? { [IND]: TEMPLATES[IND] }
  : TEMPLATES;

if (IND && !TEMPLATES[IND]) {
  console.error(`\n❌  Unknown industry: "${IND}"`);
  console.error(`   Available: ${Object.keys(TEMPLATES).join(', ')}\n`);
  process.exit(1);
}

console.log(`\n🎨 Automate Agency — Master Image Generator`);
console.log(`   Force overwrite: ${FORCE ? 'YES' : 'NO (skipping existing)'}`);
if (IND) console.log(`   Industry filter: ${IND}`);
if (TMPL) console.log(`   Template filter: ${TMPL}`);
console.log('');

for (const [industry, templates] of Object.entries(industriesToRun)) {
  for (const tpl of templates) {
    const { id, hero, products } = tpl;
    if (TMPL && id !== TMPL) continue;

    const dir     = path.join(PUBLIC_DIR, industry, id);
    const webBase = `/images/templates/${industry}/${id}`;

    console.log(`\n📸 [${industry}/${id}]`);

    // Hero (16:9)
    const heroPath = path.join(dir, 'hero.jpg');
    const heroOk = await generateAndSave(hero, '16:9', heroPath);
    heroOk ? done++ : failed++;
    await sleep(DELAY_MS);

    // Products (1:1)
    for (let i = 0; i < products.length; i++) {
      const prodPath = path.join(dir, `product-${i+1}.jpg`);
      const ok = await generateAndSave(products[i], '1:1', prodPath);
      ok ? done++ : failed++;
      if (i < products.length - 1) await sleep(DELAY_MS);
    }
    await sleep(DELAY_MS);
  }
}

console.log(`\n✅  Finished — Generated: ${done} | Failed: ${failed}`);
console.log(`   Images saved to: public/images/templates/\n`);

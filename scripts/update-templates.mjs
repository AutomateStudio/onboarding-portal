#!/usr/bin/env node
/**
 * Actualiza industryTemplates.ts con las rutas de las imágenes generadas
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const TS_FILE = path.join(PROJECT_ROOT, 'src', 'constants', 'industryTemplates.ts');

// Map: industry -> template name (lowercase) -> template id (folder name)
// Based on the templates file structure
const TEMPLATE_MAP = {
  beauty: {
    aurora: 'july',   // name: 'July', id: 'aurora'
    onyx: 'sleek',    // name: 'Sleek', id: 'onyx'
    bloom: 'glow',    // name: 'Glow', id: 'bloom'
  },
  electronics: {
    volt: 'quantum',      // name: 'Quantum', id: 'volt'
    nexus: 'harmony',     // name: 'Harmony', id: 'nexus'
    circuit: 'woodstock', // name: 'Woodstock', id: 'circuit'
  },
  food: {
    cosecha: 'cosecha',
    levain: 'levain',
    mercado: 'mercado',
  },
  jewelry: {
    lumiere: 'lumiere',
    diamante: 'diamante',
    heritage: 'heritage',
  },
  home: {
    haven: 'haven',
    nordia: 'nordia',
    loft: 'loft',
  },
  sports: {
    apex: 'apex',
    stride: 'stride',
    arena: 'arena',
  },
  general: {
    bazaar: 'bazaar',
    urban: 'urban',
    vida: 'vida',
  },
};

let content = await fs.readFile(TS_FILE, 'utf-8');

let replacements = 0;

for (const [industry, templates] of Object.entries(TEMPLATE_MAP)) {
  for (const [templateId, folderName] of Object.entries(templates)) {
    const base = `/images/templates/${industry}/${folderName}`;
    const heroPath = `${base}/hero.jpg`;

    // We need to find the hero and heroMobile fields for this template
    // and the 4 product img fields
    // Strategy: find the template block by id and update it

    // Match the id field and replace hero/heroMobile/products in that block
    // This is done with a targeted regex per template
    console.log(`Processing ${industry}/${templateId} -> ${folderName}`);
  }
}

// More robust approach: process the file line by line tracking which template we're in
const lines = content.split('\n');
const result = [];
let currentIndustry = null;
let currentTemplateId = null;
let productIndex = 0;
let inProducts = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  // Detect industry section
  for (const industry of Object.keys(TEMPLATE_MAP)) {
    if (line.includes(`  ${industry}: [`) || line.includes(`  ${industry}:[`)) {
      currentIndustry = industry;
      currentTemplateId = null;
      break;
    }
  }

  // Detect template id
  if (currentIndustry && line.trim().match(/^id:\s*['"]([^'"]+)['"]/)) {
    const match = line.trim().match(/^id:\s*['"]([^'"]+)['"]/);
    if (match) {
      currentTemplateId = match[1];
      productIndex = 0;
      inProducts = false;
    }
  }

  // Detect products array start
  if (currentTemplateId && line.trim() === 'products: [') {
    inProducts = true;
    productIndex = 0;
  }

  // Detect end of products array
  if (inProducts && line.trim() === '],') {
    inProducts = false;
  }

  // Get folder for current template
  const folderName = currentIndustry && currentTemplateId
    ? TEMPLATE_MAP[currentIndustry]?.[currentTemplateId]
    : null;

  if (folderName) {
    const base = `/images/templates/${currentIndustry}/${folderName}`;

    // Replace hero
    if (line.trim().startsWith('hero:') && !line.trim().startsWith('heroMobile') && !inProducts) {
      const newLine = line.replace(/https:\/\/images\.unsplash\.com[^'"]+/, `${base}/hero.jpg`);
      if (newLine !== line) { replacements++; line = newLine; }
    }

    // Replace heroMobile
    if (line.trim().startsWith('heroMobile:')) {
      const newLine = line.replace(/https:\/\/images\.unsplash\.com[^'"]+/, `${base}/hero.jpg`);
      if (newLine !== line) { replacements++; line = newLine; }
    }

    // Replace product img inside products array
    if (inProducts && line.trim().startsWith('{ img:')) {
      const prodFile = `product-${productIndex + 1}.jpg`;
      const newLine = line.replace(/https:\/\/images\.unsplash\.com[^'"]+/, `${base}/${prodFile}`);
      if (newLine !== line) { replacements++; line = newLine; }
      productIndex++;
    }
  }

  result.push(line);
}

const updatedContent = result.join('\n');
await fs.writeFile(TS_FILE, updatedContent, 'utf-8');
console.log(`✅ Updated industryTemplates.ts — ${replacements} replacements made`);

export type IndustryTemplate = {
  id: string;
  name: string;
  desc: string;
  tags: string[];
  badge: string;
  hero: string;
  heroMobile: string;
  nav: { logo: string; links: string[]; icons: string[] };
  eyebrow: string;
  title: string;
  cta: string;
  detail?: string;
  products: { img: string; name: string; price: string }[];
};

export const INDUSTRY_TEMPLATES: Record<string, IndustryTemplate[]> = {
  beauty: [
    {
      id: 'aurora',
      name: 'Aurora',
      desc: 'Minimal cálido · Limpio · Skincare',
      tags: ['Popular', 'Skincare', 'Clean'],
      badge: 'popular',
      hero: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
      heroMobile: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&q=80',
      nav: { logo: 'AURORA', links: ['Tienda', 'Rituales', 'Nosotros'], icons: ['♡', '🛒'] },
      eyebrow: 'EDICIÓN SKINCARE', title: 'Brilla\ndesde adentro.', cta: 'Descubrir →',
      products: [
        { img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80', name: 'Glow Serum', price: '$128.000' },
        { img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&q=80', name: 'Night Cream', price: '$112.000' },
        { img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&q=80', name: 'Facial Oil', price: '$95.000' },
        { img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80', name: 'Lip Gloss', price: '$58.000' },
      ],
    },
    {
      id: 'onyx',
      name: 'Onyx',
      desc: 'Editorial oscuro · Serif · Lujo',
      tags: ['nuevo', 'Editorial', 'Lujo'],
      badge: 'new',
      hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
      heroMobile: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&q=80',
      nav: { logo: 'ONYX', links: ['Colección', 'Rituales', 'Prensa'], icons: ['♡', '🛒'] },
      eyebrow: 'RITUAL DE BELLEZA', title: 'Cuida tu\npiel con nosotros.', cta: 'Explorar →',
      products: [
        { img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80', name: 'Glow Serum', price: '$128.000' },
        { img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&q=80', name: 'Night Cream', price: '$112.000' },
        { img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&q=80', name: 'Facial Oil', price: '$95.000' },
        { img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80', name: 'Lip Gloss', price: '$58.000' },
      ],
    },
    {
      id: 'bloom',
      name: 'Bloom',
      desc: 'Vibrante · Fresco · Beauty lifestyle',
      tags: ['nuevo', 'Colorido', 'Lifestyle'],
      badge: 'new',
      hero: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
      heroMobile: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80',
      nav: { logo: 'BLOOM', links: ['Tienda', 'Novedades', 'Belleza'], icons: ['🔍', '🛒'] },
      eyebrow: 'POTENCIA TU PIEL', title: 'belleza', cta: 'Comprar ahora →',
      products: [
        { img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80', name: 'Orchid Serum', price: '$128.000' },
        { img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&q=80', name: 'Bakuchiol', price: '$112.000' },
        { img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&q=80', name: 'Eye Cream', price: '$95.000' },
        { img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80', name: 'Lip Gloss', price: '$58.000' },
      ],
    },
  ],
  fashion: [
    {
      id: 'aura',
      name: 'Aura',
      desc: 'Deportivo · Activewear · Performance',
      tags: ['Popular', 'Activewear', 'Sport'],
      badge: 'popular',
      hero: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      heroMobile: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80',
      nav: { logo: 'AURA', links: ['Tienda', 'Colecciones', 'Sobre Nosotros'], icons: ['♡', '🛒'] },
      eyebrow: 'COLECCIÓN DEPORTIVA', title: 'Ropa para\ntu mejor versión.', cta: 'Explorar →',
      detail: 'Diseño deportivo de alto desempeño.',
      products: [
        { img: 'https://images.unsplash.com/photo-1506629082632-7a52f73dc01c?w=200&q=80', name: 'Top Deportivo', price: '$89.000' },
        { img: 'https://images.unsplash.com/photo-1506259412781-8a60a8d29db4?w=200&q=80', name: 'Leggings Premium', price: '$128.000' },
        { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80', name: 'Zapatillas Running', price: '$245.000' },
        { img: 'https://images.unsplash.com/photo-1552763519-2d39c1db3575?w=200&q=80', name: 'Chaqueta Deportiva', price: '$189.000' },
      ],
    },
    {
      id: 'elegancia',
      name: 'Elegancia',
      desc: 'Premium · Moda refinada · Lujo accesible',
      tags: ['nuevo', 'Premium', 'Elegante'],
      badge: 'new',
      hero: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      heroMobile: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80',
      nav: { logo: 'ELEGANCIA', links: ['Colección', 'Editorial', 'Contacto'], icons: ['♡', '🛒'] },
      eyebrow: 'LÍNEA PREMIUM', title: 'Sofisticación\nsin esfuerzo.', cta: 'Descubrir →',
      detail: 'Diseño elegante y moderno para la moda premium.',
      products: [
        { img: 'https://images.unsplash.com/photo-1595777707802-221557ef22bc?w=200&q=80', name: 'Blusa Premium', price: '$156.000' },
        { img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&q=80', name: 'Pantalón Elegante', price: '$198.000' },
        { img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80', name: 'Accesorios Lujo', price: '$125.000' },
        { img: 'https://images.unsplash.com/photo-1506629082632-7a52f73dc01c?w=200&q=80', name: 'Cinturón', price: '$85.000' },
      ],
    },
    {
      id: 'simetria',
      name: 'Simetría',
      desc: 'Casual · Versátil · Bestseller',
      tags: ['nuevo', 'Casual', 'Lifestyle'],
      badge: 'new',
      hero: 'https://images.unsplash.com/photo-1552902865-d72c84e2577f?w=600&q=80',
      heroMobile: 'https://images.unsplash.com/photo-1552902865-d72c84e2577f?w=300&q=80',
      nav: { logo: 'SIMETRÍA', links: ['Tienda', 'Lookbook', 'Blog'], icons: ['🔍', '🛒'] },
      eyebrow: 'COLECCIÓN CASUAL', title: 'Crece tu\nnegocio online.', cta: 'Ver más →',
      detail: 'Tema versátil y customizable para cualquier tipo de tienda.',
      products: [
        { img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80', name: 'Camiseta Casual', price: '$68.000' },
        { img: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=200&q=80', name: 'Jeans Clásicos', price: '$135.000' },
        { img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&q=80', name: 'Accesorios', price: '$78.000' },
        { img: 'https://images.unsplash.com/photo-1506629082632-7a52f73dc01c?w=200&q=80', name: 'Shorts Deportivos', price: '$95.000' },
      ],
    },
  ],
};

export const INDUSTRY_TEMPLATE_IDS = new Set([
  'aurora', 'onyx', 'bloom', 'aura', 'elegancia', 'simetria',
]);

export function getTemplateById(id: string): IndustryTemplate | undefined {
  for (const templates of Object.values(INDUSTRY_TEMPLATES)) {
    const found = templates.find((t) => t.id === id);
    if (found) return found;
  }
  return undefined;
}

// ── Desktop HTML builders ──────────────────────────────────────────────────

export function buildDesktopHtml(t: IndustryTemplate): string {
  if (t.id === 'aurora')    return buildAuroraDesktop(t);
  if (t.id === 'onyx')      return buildOnyxDesktop(t);
  if (t.id === 'bloom')     return buildBloomDesktop(t);
  if (t.id === 'aura')      return buildAuraDesktop(t);
  if (t.id === 'elegancia') return buildEleganciaDesktop(t);
  if (t.id === 'simetria')  return buildSimetriaDesktop(t);
  return buildAuroraDesktop(t);
}

export function buildMobileHtml(t: IndustryTemplate): string {
  if (t.id === 'aurora')    return buildAuroraMobile(t);
  if (t.id === 'onyx')      return buildOnyxMobile(t);
  if (t.id === 'bloom')     return buildBloomMobile(t);
  if (t.id === 'aura')      return buildAuraMobile(t);
  if (t.id === 'elegancia') return buildEleganciaMobile(t);
  if (t.id === 'simetria')  return buildSimetriaMobile(t);
  return buildAuroraMobile(t);
}

// ── AURORA ─────────────────────────────────────────────────────────────────

function buildAuroraDesktop(t: IndustryTemplate): string {
  const prods = t.products.map(p => `
    <div>
      <div style="height:78px;background:#f5f0ea;border-radius:6px;overflow:hidden;margin-bottom:6px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
      <div style="font-size:9px;color:#3d3530;font-weight:500;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:9px;color:#8a7060;font-weight:700;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf7f2;height:100%;overflow:hidden;font-family:'DM Sans',sans-serif;">
    <div style="background:#f0ebe3;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#8a7060;font-weight:600;letter-spacing:1.5px;">ENVÍO GRATIS EN PEDIDOS MAYORES A $200.000 · COLOMBIA</div>
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid #ede8e0;">
      <span style="font-size:12px;font-weight:700;letter-spacing:4px;color:#1a1410;">AURORA</span>
      <div style="display:flex;gap:26px;"><span style="font-size:10px;color:#888;">Tienda</span><span style="font-size:10px;color:#888;">Rituales</span><span style="font-size:10px;color:#888;">Nosotros</span></div>
      <div style="display:flex;gap:14px;font-size:14px;color:#777;">♡ 🛒</div>
    </div>
    <div style="height:214px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(20,15,10,0.68) 0%,rgba(20,15,10,0.0) 52%);"></div>
      <div style="position:absolute;bottom:28px;left:28px;">
        <div style="font-size:9px;color:#c8a882;font-weight:700;letter-spacing:3px;margin-bottom:10px;text-transform:uppercase;">Edición Skincare</div>
        <div style="font-size:30px;font-weight:800;color:#fff;line-height:1.1;">Brilla desde<br>adentro.</div>
        <div style="margin-top:14px;display:inline-block;padding:8px 22px;background:#fff;color:#1a1410;font-size:10px;font-weight:700;border-radius:100px;">Descubrir productos</div>
      </div>
    </div>
    <div style="background:#fff;padding:16px 28px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div style="display:flex;gap:18px;align-items:center;">
          <span style="font-size:10.5px;font-weight:700;color:#1a1410;border-bottom:2px solid #c8a882;padding-bottom:3px;">● más vendidos</span>
          <span style="font-size:10.5px;color:#bbb;">sets</span>
        </div>
        <span style="font-size:9.5px;color:#bbb;text-decoration:underline;">Ver todo</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildAuroraMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map(p => `
    <div style="display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid #f0ede8;">
      <div style="width:30px;height:30px;background:#f5f0ea;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div>
        <div style="font-size:6.5px;color:#3d3530;font-weight:600;">${p.name}</div>
        <div style="font-size:6.5px;color:#8a7060;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#faf7f2;height:100%;display:flex;flex-direction:column;">
    <div style="background:#f0ebe3;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#8a7060;letter-spacing:1px;font-weight:600;">ENVÍO GRATIS</div>
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #ede8e0;flex-shrink:0;">
      <span style="font-size:6.5px;font-weight:700;letter-spacing:2.5px;color:#1a1410;">AURORA</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#777;">♡ 🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(20,15,10,0.68) 0%,transparent 52%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;">
        <div style="font-size:13px;font-weight:800;color:#fff;line-height:1.1;">Brilla desde<br>adentro.</div>
        <div style="margin-top:6px;display:inline-block;padding:3px 10px;background:#fff;color:#1a1410;font-size:6px;font-weight:700;border-radius:100px;">Descubrir</div>
      </div>
    </div>
    <div style="background:#fff;padding:7px 9px;flex:1;">${prods}</div>
  </div>`;
}

// ── ONYX ──────────────────────────────────────────────────────────────────

function buildOnyxDesktop(t: IndustryTemplate): string {
  const prods = t.products.map(p => `
    <div style="flex:1;display:flex;gap:12px;align-items:center;background:#2a2018;padding:10px 12px;border-radius:7px;">
      <div style="width:46px;height:46px;background:#3a3025;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="flex:1;">
        <div style="font-size:9px;color:#c8b898;font-family:'Cormorant Garamond',serif;margin-bottom:3px;">${p.name}</div>
        <div style="font-size:9px;color:#b89870;font-weight:700;">${p.price}</div>
      </div>
      <div style="font-size:12px;color:#b89870;opacity:0.6;">→</div>
    </div>`).join('');
  return `<div style="background:#1a1512;height:100%;overflow:hidden;font-family:'Cormorant Garamond',serif;">
    <div style="background:#110e0a;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#b89870;font-weight:600;letter-spacing:3px;">ENVÍO INCLUIDO · SKINCARE DE LUJO</div>
    <div style="background:#1a1512;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid rgba(184,152,112,0.15);">
      <div style="display:flex;gap:22px;"><span style="font-size:9.5px;color:#b89870;letter-spacing:1.5px;">Colección</span><span style="font-size:9.5px;color:#b89870;letter-spacing:1.5px;">Rituales</span></div>
      <span style="font-size:16px;font-weight:600;letter-spacing:5px;color:#f5ede0;">ONYX</span>
      <div style="display:flex;gap:22px;align-items:center;"><span style="font-size:9.5px;color:#b89870;letter-spacing:1.5px;">Prensa</span><span style="font-size:15px;color:#b89870;">♡</span></div>
    </div>
    <div style="height:214px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to left,rgba(26,21,18,0.92) 0%,rgba(26,21,18,0.08) 58%);"></div>
      <div style="position:absolute;right:32px;top:50%;transform:translateY(-50%);text-align:right;">
        <div style="font-size:9.5px;color:#b89870;letter-spacing:2.5px;margin-bottom:14px;text-transform:uppercase;">Ritual de Belleza</div>
        <div style="font-size:28px;color:#f5ede0;font-style:italic;font-weight:600;line-height:1.25;">Cuida tu<br>piel con nosotros.</div>
        <div style="margin-top:18px;display:inline-block;padding:9px 22px;border:1px solid rgba(245,237,224,0.4);color:#f5ede0;font-size:9.5px;letter-spacing:2px;">Explorar →</div>
      </div>
    </div>
    <div style="background:#1a1512;padding:16px 28px;">
      <div style="font-size:11px;color:#b89870;font-style:italic;letter-spacing:1px;margin-bottom:14px;">Nuestros Rituales</div>
      <div style="display:flex;gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildOnyxMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map(p => `
    <div style="display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid rgba(184,152,112,0.1);">
      <div style="width:30px;height:30px;background:#3a3025;border-radius:4px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div>
        <div style="font-size:6.5px;color:#c8b898;font-family:'Cormorant Garamond',serif;">${p.name}</div>
        <div style="font-size:6.5px;color:#b89870;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#1a1512;height:100%;display:flex;flex-direction:column;">
    <div style="background:#110e0a;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#b89870;letter-spacing:2px;font-weight:600;">SKINCARE DE LUJO</div>
    <div style="background:#1a1512;height:22px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(184,152,112,0.12);flex-shrink:0;">
      <span style="font-size:9px;font-weight:600;letter-spacing:4px;color:#f5ede0;">ONYX</span>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to left,rgba(26,21,18,0.92) 0%,rgba(26,21,18,0.15) 58%);"></div>
      <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);text-align:right;">
        <div style="font-size:11px;color:#f5ede0;font-style:italic;font-weight:600;line-height:1.2;font-family:'Cormorant Garamond',serif;">Cuida tu<br>piel con nosotros.</div>
        <div style="margin-top:5px;display:inline-block;padding:2px 8px;border:1px solid rgba(245,237,224,0.4);color:#f5ede0;font-size:5.5px;letter-spacing:1px;">Explorar</div>
      </div>
    </div>
    <div style="background:#1a1512;padding:7px 9px;flex:1;">${prods}</div>
  </div>`;
}

// ── BLOOM ─────────────────────────────────────────────────────────────────

function buildBloomDesktop(t: IndustryTemplate): string {
  const colors = ['#fef4c8', '#f0e8ff', '#ddf5ec'];
  const prods = t.products.slice(0, 3).map((p, i) => `
    <div style="background:${colors[i]};border-radius:14px;overflow:hidden;padding:14px 12px;">
      <div style="height:82px;border-radius:8px;overflow:hidden;margin-bottom:10px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="font-size:9.5px;color:#1a1a1a;font-weight:700;margin-bottom:3px;">${p.name}</div>
      <div style="font-size:9.5px;color:#c07830;font-weight:700;margin-bottom:10px;">${p.price}</div>
      <div style="padding:5px 0;border:1.5px solid #1a1a1a;border-radius:100px;font-size:8px;font-weight:800;text-align:center;color:#1a1a1a;letter-spacing:0.8px;">COMPRAR</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Raleway',sans-serif;">
    <div style="background:#fdf4e8;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#c07830;font-weight:700;letter-spacing:1px;">✨ REGALO GRATIS EN PEDIDOS MAYORES A $150.000 ✨</div>
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:13px;font-weight:900;letter-spacing:3px;color:#1a1a1a;">BLOOM</span>
      <div style="display:flex;gap:26px;"><span style="font-size:10px;color:#666;font-weight:600;">Tienda</span><span style="font-size:10px;color:#666;font-weight:600;">Novedades</span><span style="font-size:10px;color:#666;font-weight:600;">Belleza</span></div>
      <div style="display:flex;gap:14px;font-size:14px;color:#1a1a1a;">🔍 🛒</div>
    </div>
    <div style="height:188px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(10,5,20,0.45);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:8.5px;color:rgba(255,255,255,0.6);letter-spacing:5px;font-weight:700;margin-bottom:8px;text-transform:uppercase;">Potencia Tu Piel</div>
        <div style="font-size:58px;font-weight:900;color:#fff;line-height:1;letter-spacing:-3px;">belleza</div>
        <div style="margin-top:16px;display:inline-block;padding:8px 26px;background:#fff;color:#1a1a1a;font-size:10px;font-weight:700;border-radius:100px;letter-spacing:0.5px;">Comprar ahora →</div>
      </div>
    </div>
    <div style="padding:14px 22px 10px;background:#fff;">
      <div style="font-size:9.5px;font-weight:700;color:#1a1a1a;margin-bottom:12px;text-align:center;letter-spacing:1.5px;text-transform:uppercase;">Donde cada momento de cuidado importa</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildBloomMobile(t: IndustryTemplate): string {
  const colors = ['#fef4c8', '#f0e8ff'];
  const prods = t.products.slice(0, 2).map((p, i) => `
    <div style="background:${colors[i]};border-radius:8px;padding:6px;">
      <div style="height:36px;border-radius:5px;overflow:hidden;margin-bottom:4px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="font-size:6px;color:#1a1a1a;font-weight:700;">${p.name}</div>
      <div style="font-size:6px;color:#c07830;font-weight:700;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Raleway',sans-serif;">
    <div style="background:#fdf4e8;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#c07830;font-weight:700;letter-spacing:0.5px;">✨ REGALO GRATIS ✨</div>
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #f0f0f0;flex-shrink:0;">
      <span style="font-size:7.5px;font-weight:900;letter-spacing:2px;color:#1a1a1a;">BLOOM</span>
      <div style="display:flex;gap:6px;font-size:10px;color:#1a1a1a;">🔍 🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(10,5,20,0.48);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-1.5px;line-height:1;">belleza</div>
        <div style="margin-top:6px;display:inline-block;padding:3px 11px;background:#fff;color:#1a1a1a;font-size:6px;font-weight:700;border-radius:100px;">Comprar</div>
      </div>
    </div>
    <div style="padding:7px 7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
  </div>`;
}

// ── AURA ──────────────────────────────────────────────────────────────────

function buildAuraDesktop(t: IndustryTemplate): string {
  const prods = t.products.map(p => `
    <div>
      <div style="height:78px;background:#f0f2f5;border-radius:6px;overflow:hidden;margin-bottom:6px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
      <div style="font-size:9px;color:#2c3e50;font-weight:500;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:9px;color:#3498db;font-weight:700;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#f8f9fa;height:100%;overflow:hidden;font-family:'Montserrat',sans-serif;">
    <div style="background:#e3f2fd;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#1565c0;font-weight:600;letter-spacing:1.5px;">ENVÍO GRATIS · ACTIVEWEAR DE ALTO DESEMPEÑO</div>
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid #e8eaed;">
      <span style="font-size:12px;font-weight:700;letter-spacing:3px;color:#1565c0;">AURA</span>
      <div style="display:flex;gap:26px;"><span style="font-size:10px;color:#666;">Tienda</span><span style="font-size:10px;color:#666;">Colecciones</span><span style="font-size:10px;color:#666;">Sobre Nosotros</span></div>
      <div style="display:flex;gap:14px;font-size:14px;color:#666;">♡ 🛒</div>
    </div>
    <div style="height:214px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(21,101,192,0.6) 0%,rgba(21,101,192,0.0) 70%);"></div>
      <div style="position:absolute;bottom:28px;left:28px;">
        <div style="font-size:9px;color:#87ceeb;font-weight:700;letter-spacing:3px;margin-bottom:10px;text-transform:uppercase;">Colección Deportiva</div>
        <div style="font-size:30px;font-weight:800;color:#fff;line-height:1.1;">Ropa para tu<br>mejor versión.</div>
        <div style="margin-top:14px;display:inline-block;padding:8px 22px;background:#3498db;color:#fff;font-size:10px;font-weight:700;border-radius:100px;">Explorar productos</div>
      </div>
    </div>
    <div style="background:#fff;padding:16px 28px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div style="display:flex;gap:18px;align-items:center;">
          <span style="font-size:10.5px;font-weight:700;color:#1565c0;border-bottom:2px solid #3498db;padding-bottom:3px;">● mejor rendimiento</span>
          <span style="font-size:10.5px;color:#bbb;">colecciones</span>
        </div>
        <span style="font-size:9.5px;color:#bbb;text-decoration:underline;">Ver todo</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildAuraMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map(p => `
    <div style="display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid #f0f2f5;">
      <div style="width:30px;height:30px;background:#f0f2f5;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div>
        <div style="font-size:6.5px;color:#2c3e50;font-weight:600;">${p.name}</div>
        <div style="font-size:6.5px;color:#3498db;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#f8f9fa;height:100%;display:flex;flex-direction:column;">
    <div style="background:#e3f2fd;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#1565c0;letter-spacing:1px;font-weight:600;">ENVÍO GRATIS</div>
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #e8eaed;flex-shrink:0;">
      <span style="font-size:6.5px;font-weight:700;letter-spacing:2.5px;color:#1565c0;">AURA</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#666;">♡ 🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(21,101,192,0.6) 0%,transparent 70%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;">
        <div style="font-size:13px;font-weight:800;color:#fff;line-height:1.1;">Ropa para tu<br>mejor versión.</div>
        <div style="margin-top:6px;display:inline-block;padding:3px 10px;background:#3498db;color:#fff;font-size:6px;font-weight:700;border-radius:100px;">Explorar</div>
      </div>
    </div>
    <div style="background:#fff;padding:7px 9px;flex:1;">${prods}</div>
  </div>`;
}

// ── ELEGANCIA ─────────────────────────────────────────────────────────────

function buildEleganciaDesktop(t: IndustryTemplate): string {
  const prods = t.products.map(p => `
    <div style="flex:1;display:flex;gap:12px;align-items:center;background:#f5ede6;padding:10px 12px;border-radius:7px;">
      <div style="width:46px;height:46px;background:#eae0d8;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="flex:1;">
        <div style="font-size:9px;color:#5a4a40;font-family:'Cormorant Garamond',serif;margin-bottom:3px;">${p.name}</div>
        <div style="font-size:9px;color:#8b6f47;font-weight:700;">${p.price}</div>
      </div>
      <div style="font-size:12px;color:#8b6f47;opacity:0.6;">→</div>
    </div>`).join('');
  return `<div style="background:#f5ede6;height:100%;overflow:hidden;font-family:'Cormorant Garamond',serif;">
    <div style="background:#e0d5ca;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#6b5344;font-weight:600;letter-spacing:3px;">COLECCIÓN PREMIUM · ENVÍO INCLUIDO</div>
    <div style="background:#f5ede6;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid rgba(107,83,68,0.15);">
      <div style="display:flex;gap:22px;"><span style="font-size:9.5px;color:#6b5344;letter-spacing:1.5px;">Colección</span><span style="font-size:9.5px;color:#6b5344;letter-spacing:1.5px;">Editorial</span></div>
      <span style="font-size:16px;font-weight:600;letter-spacing:3px;color:#3a3530;">ELEGANCIA</span>
      <div style="display:flex;gap:22px;align-items:center;"><span style="font-size:9.5px;color:#6b5344;letter-spacing:1.5px;">Contacto</span><span style="font-size:15px;color:#8b6f47;">♡</span></div>
    </div>
    <div style="height:214px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(245,237,230,0.9) 0%,rgba(245,237,230,0.0) 60%);"></div>
      <div style="position:absolute;left:32px;top:50%;transform:translateY(-50%);">
        <div style="font-size:9.5px;color:#8b6f47;letter-spacing:2.5px;margin-bottom:14px;text-transform:uppercase;">Línea Premium</div>
        <div style="font-size:28px;color:#2a2420;font-style:italic;font-weight:600;line-height:1.25;">Sofisticación<br>sin esfuerzo.</div>
        <div style="margin-top:18px;display:inline-block;padding:9px 22px;border:1.5px solid #8b6f47;color:#2a2420;font-size:9.5px;letter-spacing:2px;">Descubrir →</div>
      </div>
    </div>
    <div style="background:#f5ede6;padding:16px 28px;">
      <div style="font-size:11px;color:#8b6f47;font-style:italic;letter-spacing:1px;margin-bottom:14px;">Piezas Selectas</div>
      <div style="display:flex;gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildEleganciaMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map(p => `
    <div style="display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid rgba(107,83,68,0.1);">
      <div style="width:30px;height:30px;background:#eae0d8;border-radius:4px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div>
        <div style="font-size:6.5px;color:#5a4a40;font-family:'Cormorant Garamond',serif;">${p.name}</div>
        <div style="font-size:6.5px;color:#8b6f47;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#f5ede6;height:100%;display:flex;flex-direction:column;">
    <div style="background:#e0d5ca;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#6b5344;letter-spacing:2px;font-weight:600;">PREMIUM</div>
    <div style="background:#f5ede6;height:22px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(107,83,68,0.12);flex-shrink:0;">
      <span style="font-size:9px;font-weight:600;letter-spacing:2px;color:#3a3530;">ELEGANCIA</span>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(245,237,230,0.9) 0%,transparent 60%);"></div>
      <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);">
        <div style="font-size:11px;color:#2a2420;font-style:italic;font-weight:600;line-height:1.2;font-family:'Cormorant Garamond',serif;">Sofisticación<br>sin esfuerzo.</div>
        <div style="margin-top:5px;display:inline-block;padding:2px 8px;border:1px solid #8b6f47;color:#2a2420;font-size:5.5px;letter-spacing:1px;">Descubrir</div>
      </div>
    </div>
    <div style="background:#f5ede6;padding:7px 9px;flex:1;">${prods}</div>
  </div>`;
}

// ── SIMETRÍA ──────────────────────────────────────────────────────────────

function buildSimetriaDesktop(t: IndustryTemplate): string {
  const colors = ['#fef3e6', '#e8f4f8', '#f0ede8'];
  const prods = t.products.slice(0, 3).map((p, i) => `
    <div style="background:${colors[i]};border-radius:8px;overflow:hidden;">
      <div style="height:100px;border-radius:6px;overflow:hidden;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="padding:0 10px 4px;font-size:9.5px;color:#1a1a1a;font-weight:600;">${p.name}</div>
      <div style="padding:0 10px 4px;font-size:9.5px;color:#555;font-weight:600;">${p.price}</div>
      <div style="padding:0 10px 10px;"><div style="width:100%;padding:5px 0;border:1.5px solid #1a1a1a;background:#fff;border-radius:4px;font-size:8px;font-weight:700;text-align:center;">VER</div></div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <div style="background:#f5f5f5;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#333;font-weight:600;letter-spacing:1px;">TÚ DEFINES TU ESTILO · ENVÍO GRATIS EN TODAS PARTES</div>
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid #f0f0f0;">
      <span style="font-size:12px;font-weight:800;letter-spacing:2px;color:#1a1a1a;">SIMETRÍA</span>
      <div style="display:flex;gap:24px;"><span style="font-size:10px;color:#666;font-weight:500;">Tienda</span><span style="font-size:10px;color:#666;font-weight:500;">Lookbook</span><span style="font-size:10px;color:#666;font-weight:500;">Blog</span></div>
      <div style="display:flex;gap:12px;font-size:14px;color:#1a1a1a;">🔍 🛒</div>
    </div>
    <div style="height:188px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(200,200,200,0.25);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:8.5px;color:#333;letter-spacing:3px;font-weight:700;margin-bottom:8px;text-transform:uppercase;">Colección Casual</div>
        <div style="font-size:48px;font-weight:900;color:#1a1a1a;line-height:1;letter-spacing:-2px;">Crece tu<br>negocio.</div>
        <div style="margin-top:14px;display:inline-block;padding:8px 24px;background:#1a1a1a;color:#fff;font-size:10px;font-weight:700;border-radius:4px;letter-spacing:0.5px;">Ver colecciones →</div>
      </div>
    </div>
    <div style="padding:14px 22px 10px;background:#fff;">
      <div style="font-size:9.5px;font-weight:700;color:#1a1a1a;margin-bottom:12px;text-align:center;letter-spacing:1px;text-transform:uppercase;">Lo mejor en moda casual</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildSimetriaMobile(t: IndustryTemplate): string {
  const colors = ['#fef3e6', '#e8f4f8'];
  const prods = t.products.slice(0, 2).map((p, i) => `
    <div style="background:${colors[i]};border-radius:6px;padding:5px;">
      <div style="height:40px;border-radius:4px;overflow:hidden;margin-bottom:4px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="font-size:6px;color:#1a1a1a;font-weight:700;">${p.name}</div>
      <div style="font-size:6px;color:#555;font-weight:600;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#f5f5f5;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#333;letter-spacing:0.5px;font-weight:600;">ENVÍO GRATIS</div>
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #f0f0f0;flex-shrink:0;">
      <span style="font-size:7.5px;font-weight:800;letter-spacing:1.5px;color:#1a1a1a;">SIMETRÍA</span>
      <div style="display:flex;gap:6px;font-size:10px;color:#1a1a1a;">🔍 🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(200,200,200,0.25);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:24px;font-weight:900;color:#1a1a1a;letter-spacing:-1px;line-height:1;">Crece tu<br>negocio.</div>
        <div style="margin-top:6px;display:inline-block;padding:3px 10px;background:#1a1a1a;color:#fff;font-size:6px;font-weight:700;border-radius:3px;">Ver más</div>
      </div>
    </div>
    <div style="padding:7px 7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
  </div>`;
}

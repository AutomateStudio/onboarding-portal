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

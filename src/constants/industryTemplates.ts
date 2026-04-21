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
  previewUrl?: string;
  products: { img: string; name: string; price: string }[];
};

export const INDUSTRY_TEMPLATES: Record<string, IndustryTemplate[]> = {
  beauty: [
    {
      id: 'aurora',
      name: 'July',
      desc: 'Luxury · Skincare Editorial · Warm',
      tags: ['Popular', 'Skincare', 'Clean'],
      badge: 'popular',
      hero: '/images/templates/beauty/july/hero.jpg',
      heroMobile: '/images/templates/beauty/july/hero.jpg',
      nav: { logo: 'July', links: ['HOME', 'SHOP', 'ABOUT', 'BLOG', 'PRESETS'], icons: ['🔍', '👤', '🛒'] },
      eyebrow: 'LUXURY SKINCARE', title: 'El Brillo de la Eternidad', cta: 'COMPRAR AHORA',
      products: [
        { img: '/images/templates/beauty/july/product-1.jpg', name: 'Orchid Facial Oil', price: '$128.000' },
        { img: '/images/templates/beauty/july/product-2.jpg', name: 'Bakuchiol Serum', price: '$145.000' },
        { img: '/images/templates/beauty/july/product-3.jpg', name: 'Eye Anti-Aging Cream', price: '$98.000' },
        { img: '/images/templates/beauty/july/product-4.jpg', name: 'Hydra Night Cream', price: '$112.000' },
      ],
    },
    {
      id: 'onyx',
      name: 'Sleek',
      desc: 'Minimal · Clean · Professional skincare',
      tags: ['nuevo', 'Editorial', 'Lujo'],
      badge: 'new',
      hero: '/images/templates/beauty/sleek/hero.jpg',
      heroMobile: '/images/templates/beauty/sleek/hero.jpg',
      nav: { logo: 'Sleek', links: ['Home', 'Presets', 'Shop', 'Collections', 'Contact'], icons: ['🔍', '👤', '🛒'] },
      eyebrow: 'CLEAN BEAUTY', title: 'Get the skin you want to feel', cta: 'Shop Now',
      products: [
        { img: '/images/templates/beauty/sleek/product-1.jpg', name: 'Sunscreen Lotion', price: '$29.000' },
        { img: '/images/templates/beauty/sleek/product-2.jpg', name: 'Rejuvenating Night Oil', price: '$79.000' },
        { img: '/images/templates/beauty/sleek/product-3.jpg', name: 'Dream Bio Retinol', price: '$39.000' },
        { img: '/images/templates/beauty/sleek/product-4.jpg', name: 'Protective Day Oil', price: '$99.000' },
      ],
    },
    {
      id: 'bloom',
      name: 'Glow',
      desc: 'Bold · Inclusivo · Beauty lifestyle',
      tags: ['nuevo', 'Colorido', 'Lifestyle'],
      badge: 'new',
      hero: '/images/templates/beauty/glow/hero.jpg',
      heroMobile: '/images/templates/beauty/glow/hero.jpg',
      nav: { logo: 'Glow', links: ['Shop', 'Bestseller', 'Sale'], icons: ['🔍', '👤', '🛒'] },
      eyebrow: 'DONDE COMIENZA EL SKINCARE', title: 'belleza', cta: 'COMPRAR AHORA',
      products: [
        { img: '/images/templates/beauty/glow/product-1.jpg', name: 'Orchid Serum', price: '$128.000' },
        { img: '/images/templates/beauty/glow/product-2.jpg', name: 'Bakuchiol Drops', price: '$112.000' },
        { img: '/images/templates/beauty/glow/product-3.jpg', name: 'Eye Corrector', price: '$95.000' },
        { img: '/images/templates/beauty/glow/product-4.jpg', name: 'Glow Moisturizer', price: '$88.000' },
      ],
    },
  ],
  food: [
    {
      id: 'cosecha',
      name: 'Cosecha',
      desc: 'Artesanal y cálido · Gourmet · Natural',
      tags: ['Popular', 'Gourmet', 'Artesanal'],
      badge: 'popular',
      previewUrl: '/templates/food/cosecha.html',
      hero: '/images/templates/food/cosecha/hero.jpg',
      heroMobile: '/images/templates/food/cosecha/hero.jpg',
      nav: { logo: 'COSECHA', links: ['Tienda', 'Categorías', 'Nosotros'], icons: ['♡', '🛒'] },
      eyebrow: 'PRODUCTOS ARTESANALES', title: 'Sabores que\ncuentan historias.', cta: 'Descubrir →',
      products: [
        { img: '/images/templates/food/cosecha/product-1.jpg', name: 'Miel de Flores', price: '$38.000' },
        { img: '/images/templates/food/cosecha/product-2.jpg', name: 'Aceite de Oliva', price: '$52.000' },
        { img: '/images/templates/food/cosecha/product-3.jpg', name: 'Pan Artesanal', price: '$28.000' },
        { img: '/images/templates/food/cosecha/product-4.jpg', name: 'Mermelada', price: '$24.000' },
      ],
    },
    {
      id: 'levain',
      name: 'Levain',
      desc: 'Orgánico y sofisticado · Panadería · Certificado',
      tags: ['nuevo', 'Orgánico', 'Panadería'],
      badge: 'new',
      previewUrl: '/templates/food/levain.html',
      hero: '/images/templates/food/levain/hero.jpg',
      heroMobile: '/images/templates/food/levain/hero.jpg',
      nav: { logo: 'LEVAIN', links: ['Tienda', 'Recetas', 'Nosotros'], icons: ['♡', '🛒'] },
      eyebrow: 'PANADERÍA ORGÁNICA', title: 'Horneado con\namor y tradición.', cta: 'Ver productos →',
      products: [
        { img: '/images/templates/food/levain/product-1.jpg', name: 'Sourdough', price: '$32.000' },
        { img: '/images/templates/food/levain/product-2.jpg', name: 'Croissant Mantequilla', price: '$18.000' },
        { img: '/images/templates/food/levain/product-3.jpg', name: 'Granola Orgánica', price: '$42.000' },
        { img: '/images/templates/food/levain/product-4.jpg', name: 'Tostadas Integrales', price: '$22.000' },
      ],
    },
    {
      id: 'mercado',
      name: 'Mercado',
      desc: 'Bold y con propósito · Local · Directo del campo',
      tags: ['nuevo', 'Local', 'Comunidad'],
      badge: 'new',
      previewUrl: '/templates/food/mercado.html',
      hero: '/images/templates/food/mercado/hero.jpg',
      heroMobile: '/images/templates/food/mercado/hero.jpg',
      nav: { logo: 'MERCADO', links: ['Canastas', 'Productores', 'Cómo funciona'], icons: ['🛒'] },
      eyebrow: 'DEL CAMPO A TU MESA', title: 'Fresco, local\ny directo.', cta: 'Armar canasta →',
      products: [
        { img: '/images/templates/food/mercado/product-1.jpg', name: 'Canasta Verduras', price: '$65.000' },
        { img: '/images/templates/food/mercado/product-2.jpg', name: 'Canasta Frutas', price: '$55.000' },
        { img: '/images/templates/food/mercado/product-3.jpg', name: 'Huevos de Campo', price: '$18.000' },
        { img: '/images/templates/food/mercado/product-4.jpg', name: 'Lácteos Frescos', price: '$28.000' },
      ],
    },
  ],
  jewelry: [
    {
      id: 'lumiere',
      name: 'Lumière',
      desc: 'Lujo oscuro · Serif · Oro y negro',
      tags: ['Popular', 'Lujo', 'Editorial'],
      badge: 'popular',
      previewUrl: '/templates/jewelry/lumiere.html',
      hero: '/images/templates/jewelry/lumiere/hero.jpg',
      heroMobile: '/images/templates/jewelry/lumiere/hero.jpg',
      nav: { logo: 'LUMIÈRE', links: ['Colecciones', 'Anillos', 'Nosotros'], icons: ['♡', '🛒'] },
      eyebrow: 'JOYERÍA DE LUJO', title: 'Piezas que\nperduran.', cta: 'Explorar →',
      products: [
        { img: '/images/templates/jewelry/lumiere/product-1.jpg', name: 'Anillo Aurora', price: '$2,800,000' },
        { img: '/images/templates/jewelry/lumiere/product-2.jpg', name: 'Collar Eclipse', price: '$1,950,000' },
        { img: '/images/templates/jewelry/lumiere/product-3.jpg', name: 'Aretes Sol', price: '$890,000' },
        { img: '/images/templates/jewelry/lumiere/product-4.jpg', name: 'Pulsera Celeste', price: '$1,240,000' },
      ],
    },
    {
      id: 'diamante',
      name: 'Diamante',
      desc: 'Blanco minimalista · Bodoni · Champagne',
      tags: ['nuevo', 'Minimalista', 'Premium'],
      badge: 'new',
      previewUrl: '/templates/jewelry/diamante.html',
      hero: '/images/templates/jewelry/diamante/hero.jpg',
      heroMobile: '/images/templates/jewelry/diamante/hero.jpg',
      nav: { logo: 'DIAMANTE', links: ['Colección', 'Novias', 'Contacto'], icons: ['♡', '🛒'] },
      eyebrow: 'ALTA JOYERÍA', title: 'Brillo que\nno necesita palabras.', cta: 'Descubrir →',
      products: [
        { img: '/images/templates/jewelry/diamante/product-1.jpg', name: 'Solitario Blanco', price: '$4,500,000' },
        { img: '/images/templates/jewelry/diamante/product-2.jpg', name: 'Trio de Anillos', price: '$2,100,000' },
        { img: '/images/templates/jewelry/diamante/product-3.jpg', name: 'Aretes Baguette', price: '$1,650,000' },
        { img: '/images/templates/jewelry/diamante/product-4.jpg', name: 'Collar Delicado', price: '$980,000' },
      ],
    },
    {
      id: 'heritage',
      name: 'Heritage',
      desc: 'Artesanal cálido · Baskerville · Vintage',
      tags: ['nuevo', 'Artesanal', 'Vintage'],
      badge: 'new',
      previewUrl: '/templates/jewelry/heritage.html',
      hero: '/images/templates/jewelry/heritage/hero.jpg',
      heroMobile: '/images/templates/jewelry/heritage/hero.jpg',
      nav: { logo: 'HERITAGE', links: ['Tienda', 'Historia', 'Taller'], icons: ['♡', '🛒'] },
      eyebrow: 'JOYERÍA ARTESANAL', title: 'Hechas a mano,\nhechas para siempre.', cta: 'Ver colección →',
      products: [
        { img: '/images/templates/jewelry/heritage/product-1.jpg', name: 'Anillo Herencia', price: '$1,480,000' },
        { img: '/images/templates/jewelry/heritage/product-2.jpg', name: 'Broche Vintage', price: '$920,000' },
        { img: '/images/templates/jewelry/heritage/product-3.jpg', name: 'Medallón Antiguo', price: '$1,200,000' },
        { img: '/images/templates/jewelry/heritage/product-4.jpg', name: 'Cadena Eslabón', price: '$760,000' },
      ],
    },
  ],
  electronics: [
    {
      id: 'volt',
      name: 'Quantum',
      desc: 'Gadgets jóvenes · Split hero · Lifestyle',
      tags: ['Popular', 'Tech', 'Dark'],
      badge: 'popular',
      previewUrl: '/templates/electronics/volt.html',
      hero: '/images/templates/electronics/quantum/hero.jpg',
      heroMobile: '/images/templates/electronics/quantum/hero.jpg',
      nav: { logo: 'QUANTUM', links: ['Shop', 'Colecciones', 'Blog'], icons: ['🔍', '🛒'] },
      eyebrow: 'TECH PREMIUM', title: 'Gadgets Premium\n& con Estilo', cta: 'Ver colección ↗',
      products: [
        { img: '/images/templates/electronics/quantum/product-1.jpg', name: 'Headphones Pro X', price: '$289.000' },
        { img: '/images/templates/electronics/quantum/product-2.jpg', name: 'Earbuds Air', price: '$189.000' },
        { img: '/images/templates/electronics/quantum/product-3.jpg', name: 'Gaming Controller', price: '$245.000' },
        { img: '/images/templates/electronics/quantum/product-4.jpg', name: 'Speaker Cube', price: '$320.000' },
      ],
    },
    {
      id: 'nexus',
      name: 'Harmony',
      desc: 'Audio premium · Lifestyle aspiracional · Dark',
      tags: ['nuevo', 'Audio', 'Lifestyle'],
      badge: 'new',
      previewUrl: '/templates/electronics/nexus.html',
      hero: '/images/templates/electronics/harmony/hero.jpg',
      heroMobile: '/images/templates/electronics/harmony/hero.jpg',
      nav: { logo: '◈◈', links: ['Shop', 'Collections', 'Explore'], icons: ['🔍', '🛒'] },
      eyebrow: 'AUDIO PREMIUM', title: 'Escucha\ncon todo.', cta: 'Shop Earphones',
      products: [
        { img: '/images/templates/electronics/harmony/product-1.jpg', name: 'Pro Headphones', price: '$450.000' },
        { img: '/images/templates/electronics/harmony/product-2.jpg', name: 'Wireless Earphones', price: '$280.000' },
        { img: '/images/templates/electronics/harmony/product-3.jpg', name: 'Studio Speaker', price: '$680.000' },
        { img: '/images/templates/electronics/harmony/product-4.jpg', name: 'DAC Amplifier', price: '$890.000' },
      ],
    },
    {
      id: 'circuit',
      name: 'Woodstock',
      desc: 'Multi-categoría · Marketplace · Electronics',
      tags: ['nuevo', 'Gaming', 'PC'],
      badge: 'new',
      previewUrl: '/templates/electronics/circuit.html',
      hero: '/images/templates/electronics/woodstock/hero.jpg',
      heroMobile: '/images/templates/electronics/woodstock/hero.jpg',
      nav: { logo: '◎◎', links: ['Relojes', 'Celulares', 'Accesorios'], icons: ['🔍', '🛒'] },
      eyebrow: 'RELOJES', title: 'La Tecnología Se Encuentra\ncon el Estilo', cta: 'Ver productos',
      products: [
        { img: '/images/templates/electronics/woodstock/product-1.jpg', name: 'Watch Version Pro', price: '$249.000' },
        { img: '/images/templates/electronics/woodstock/product-2.jpg', name: 'SmartWatch Series 9', price: '$299.000' },
        { img: '/images/templates/electronics/woodstock/product-3.jpg', name: 'Laptop Ultra Slim', price: '$2.890.000' },
        { img: '/images/templates/electronics/woodstock/product-4.jpg', name: 'Cellphone X15', price: '$1.450.000' },
      ],
    },
  ],
  home: [
    {
      id: 'haven',
      name: 'Haven',
      desc: 'Contemporáneo cálido · Playfair · Terracota',
      tags: ['Popular', 'Contemporáneo', 'Cálido'],
      badge: 'popular',
      previewUrl: '/templates/home/haven.html',
      hero: '/images/templates/home/haven/hero.jpg',
      heroMobile: '/images/templates/home/haven/hero.jpg',
      nav: { logo: 'HAVEN', links: ['Sala', 'Comedor', 'Dormitorio'], icons: ['♡', '🛒'] },
      eyebrow: 'DISEÑO DE HOGAR', title: 'Espacios que\ninspiran.', cta: 'Explorar →',
      products: [
        { img: '/images/templates/home/haven/product-1.jpg', name: 'Sofá Oslo', price: '$2,490,000' },
        { img: '/images/templates/home/haven/product-2.jpg', name: 'Mesa Roble', price: '$1,190,000' },
        { img: '/images/templates/home/haven/product-3.jpg', name: 'Silla Terracota', price: '$480,000' },
        { img: '/images/templates/home/haven/product-4.jpg', name: 'Cojín Sage', price: '$95,000' },
      ],
    },
    {
      id: 'nordia',
      name: 'Nordia',
      desc: 'Escandinavo minimalista · Fraunces · Madera',
      tags: ['nuevo', 'Escandinavo', 'Minimal'],
      badge: 'new',
      previewUrl: '/templates/home/nordia.html',
      hero: '/images/templates/home/nordia/hero.jpg',
      heroMobile: '/images/templates/home/nordia/hero.jpg',
      nav: { logo: 'NORDIA', links: ['Colecciones', 'Materiales', 'Sobre'], icons: ['♡', '🛒'] },
      eyebrow: 'DISEÑO NÓRDICO', title: 'Simplicidad que\npermaece.', cta: 'Ver colección →',
      products: [
        { img: '/images/templates/home/nordia/product-1.jpg', name: 'Silla Fjord', price: '$680,000' },
        { img: '/images/templates/home/nordia/product-2.jpg', name: 'Sofá Birch', price: '$3,100,000' },
        { img: '/images/templates/home/nordia/product-3.jpg', name: 'Mesa Oak', price: '$1,450,000' },
        { img: '/images/templates/home/nordia/product-4.jpg', name: 'Textil Lino', price: '$120,000' },
      ],
    },
    {
      id: 'loft',
      name: 'Loft',
      desc: 'Industrial urbano · Barlow · Acero y roble',
      tags: ['nuevo', 'Industrial', 'Urbano'],
      badge: 'new',
      previewUrl: '/templates/home/loft.html',
      hero: '/images/templates/home/loft/hero.jpg',
      heroMobile: '/images/templates/home/loft/hero.jpg',
      nav: { logo: 'LOFT', links: ['Sala', 'Comedor', 'Oficina'], icons: ['♡', '🛒'] },
      eyebrow: 'DISEÑO INDUSTRIAL', title: 'Espacios que\nrespiran.', cta: 'Explorar →',
      products: [
        { img: '/images/templates/home/loft/product-1.jpg', name: 'Sofá Brut 3P', price: '$2,890,000' },
        { img: '/images/templates/home/loft/product-2.jpg', name: 'Mesa Forge', price: '$1,450,000' },
        { img: '/images/templates/home/loft/product-3.jpg', name: 'Silla Rivet', price: '$420,000' },
        { img: '/images/templates/home/loft/product-4.jpg', name: 'Estante Pipe', price: '$890,000' },
      ],
    },
  ],
  sports: [
    {
      id: 'apex',
      name: 'Apex',
      desc: 'Activewear premium · Bebas Neue · Rojo',
      tags: ['Popular', 'Activewear', 'Premium'],
      badge: 'popular',
      previewUrl: '/templates/sports/apex.html',
      hero: '/images/templates/sports/apex/hero.jpg',
      heroMobile: '/images/templates/sports/apex/hero.jpg',
      nav: { logo: 'APEX', links: ['Hombre', 'Mujer', 'Accesorios'], icons: ['♡', '🛒'] },
      eyebrow: 'ACTIVEWEAR', title: 'Tu límite\nes el cielo.', cta: 'Comprar →',
      products: [
        { img: '/images/templates/sports/apex/product-1.jpg', name: 'Short Apex Pro', price: '$159,000' },
        { img: '/images/templates/sports/apex/product-2.jpg', name: 'Sports Bra', price: '$119,000' },
        { img: '/images/templates/sports/apex/product-3.jpg', name: 'Tenis Apex X', price: '$349,000' },
        { img: '/images/templates/sports/apex/product-4.jpg', name: 'Chaqueta Wind', price: '$289,000' },
      ],
    },
    {
      id: 'stride',
      name: 'Stride',
      desc: 'Running outdoor · Oswald · Verde bosque',
      tags: ['nuevo', 'Running', 'Outdoor'],
      badge: 'new',
      previewUrl: '/templates/sports/stride.html',
      hero: '/images/templates/sports/stride/hero.jpg',
      heroMobile: '/images/templates/sports/stride/hero.jpg',
      nav: { logo: 'STRIDE', links: ['Running', 'Trail', 'Accesorios'], icons: ['♡', '🛒'] },
      eyebrow: 'RUNNING PREMIUM', title: 'Corre más.\nLlega más lejos.', cta: 'Ver modelos →',
      products: [
        { img: '/images/templates/sports/stride/product-1.jpg', name: 'Trail X Carbon', price: '$589,000' },
        { img: '/images/templates/sports/stride/product-2.jpg', name: 'Road Pro Elite', price: '$489,000' },
        { img: '/images/templates/sports/stride/product-3.jpg', name: 'Short Stride 7"', price: '$129,000' },
        { img: '/images/templates/sports/stride/product-4.jpg', name: 'Wind Jacket', price: '$249,000' },
      ],
    },
    {
      id: 'arena',
      name: 'Arena',
      desc: 'Gym performance · Anton · Amarillo eléctrico',
      tags: ['nuevo', 'Gym', 'Performance'],
      badge: 'new',
      previewUrl: '/templates/sports/arena.html',
      hero: '/images/templates/sports/arena/hero.jpg',
      heroMobile: '/images/templates/sports/arena/hero.jpg',
      nav: { logo: 'ARENA', links: ['Ropa', 'Calzado', 'Equipos'], icons: ['♡', '🛒'] },
      eyebrow: 'GYM PERFORMANCE', title: 'No hay\nlímites.', cta: 'Comprar ahora →',
      products: [
        { img: '/images/templates/sports/arena/product-1.jpg', name: 'Dry-Fit Pro Tee', price: '$89,900' },
        { img: '/images/templates/sports/arena/product-2.jpg', name: 'Power Short 7"', price: '$119,900' },
        { img: '/images/templates/sports/arena/product-3.jpg', name: 'ZeroG Trainer', price: '$289,900' },
        { img: '/images/templates/sports/arena/product-4.jpg', name: 'KB Elite 24kg', price: '$189,900' },
      ],
    },
  ],
  general: [
    {
      id: 'bazaar',
      name: 'Bazaar',
      desc: 'Marketplace general · Plus Jakarta · Violeta',
      tags: ['Popular', 'Marketplace', 'Colorido'],
      badge: 'popular',
      previewUrl: '/templates/general/bazaar.html',
      hero: '/images/templates/general/bazaar/hero.jpg',
      heroMobile: '/images/templates/general/bazaar/hero.jpg',
      nav: { logo: 'BAZAAR', links: ['Tienda', 'Categorías', 'Ofertas'], icons: ['🔍', '🛒'] },
      eyebrow: 'TIENDA GENERAL', title: 'Todo lo que\nnecesitas.', cta: 'Explorar →',
      products: [
        { img: '/images/templates/general/bazaar/product-1.jpg', name: 'Producto Top 1', price: '$89,000' },
        { img: '/images/templates/general/bazaar/product-2.jpg', name: 'Producto Top 2', price: '$145,000' },
        { img: '/images/templates/general/bazaar/product-3.jpg', name: 'Producto Top 3', price: '$67,000' },
        { img: '/images/templates/general/bazaar/product-4.jpg', name: 'Producto Top 4', price: '$199,000' },
      ],
    },
    {
      id: 'urban',
      name: 'Urban',
      desc: 'Lifestyle oscuro · Syne · Amarillo neón',
      tags: ['nuevo', 'Lifestyle', 'Streetwear'],
      badge: 'new',
      previewUrl: '/templates/general/urban.html',
      hero: '/images/templates/general/urban/hero.jpg',
      heroMobile: '/images/templates/general/urban/hero.jpg',
      nav: { logo: 'URBAN', links: ['Hombre', 'Mujer', 'Accesorios'], icons: ['♡', '🛒'] },
      eyebrow: 'URBAN LIFESTYLE', title: 'Define tu\nestilo.', cta: 'Ver drop →',
      products: [
        { img: '/images/templates/general/urban/product-1.jpg', name: 'Oversized Core Tee', price: '$79,900' },
        { img: '/images/templates/general/urban/product-2.jpg', name: 'Urban Air Sneaker', price: '$239,900' },
        { img: '/images/templates/general/urban/product-3.jpg', name: 'Tech Jacket V2', price: '$349,900' },
        { img: '/images/templates/general/urban/product-4.jpg', name: 'Cap Urban Logo', price: '$49,900' },
      ],
    },
    {
      id: 'vida',
      name: 'Vida',
      desc: 'Lifestyle latino · DM Serif · Naranja cálido',
      tags: ['nuevo', 'Latino', 'Artesanal'],
      badge: 'new',
      previewUrl: '/templates/general/vida.html',
      hero: '/images/templates/general/vida/hero.jpg',
      heroMobile: '/images/templates/general/vida/hero.jpg',
      nav: { logo: 'vida', links: ['Hogar', 'Moda', 'Bienestar'], icons: ['♡', '🛒'] },
      eyebrow: 'LIFESTYLE LATINO', title: 'El sabor de\nvivir bien.', cta: 'Explorar →',
      products: [
        { img: '/images/templates/general/vida/product-1.jpg', name: 'Canasta artesanal', price: '$129,000' },
        { img: '/images/templates/general/vida/product-2.jpg', name: 'Blusa Siesta', price: '$89,000' },
        { img: '/images/templates/general/vida/product-3.jpg', name: 'Kit Bienestar', price: '$159,000' },
        { img: '/images/templates/general/vida/product-4.jpg', name: 'Set Cocina Latina', price: '$219,000' },
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
      previewUrl: '/api/preview/aura',
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
      previewUrl: '/api/preview/elegancia',
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
      previewUrl: '/api/preview/simetria',
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
  'cosecha', 'levain', 'mercado',
  'lumiere', 'diamante', 'heritage',
  'volt', 'nexus', 'circuit',
  'haven', 'nordia', 'loft',
  'apex', 'stride', 'arena',
  'bazaar', 'urban', 'vida',
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
  if (t.id === 'cosecha')   return buildCosechaDesktop(t);
  if (t.id === 'levain')    return buildLevainDesktop(t);
  if (t.id === 'mercado')   return buildMercadoDesktop(t);
  if (t.id === 'volt')      return buildVoltDesktop(t);
  if (t.id === 'nexus')     return buildNexusDesktop(t);
  if (t.id === 'circuit')   return buildCircuitDesktop(t);
  return buildAuroraDesktop(t);
}

export function buildMobileHtml(t: IndustryTemplate): string {
  if (t.id === 'aurora')    return buildAuroraMobile(t);
  if (t.id === 'onyx')      return buildOnyxMobile(t);
  if (t.id === 'bloom')     return buildBloomMobile(t);
  if (t.id === 'aura')      return buildAuraMobile(t);
  if (t.id === 'elegancia') return buildEleganciaMobile(t);
  if (t.id === 'simetria')  return buildSimetriaMobile(t);
  if (t.id === 'cosecha')   return buildCosechaMobile(t);
  if (t.id === 'levain')    return buildLevainMobile(t);
  if (t.id === 'mercado')   return buildMercadoMobile(t);
  if (t.id === 'volt')      return buildVoltMobile(t);
  if (t.id === 'nexus')     return buildNexusMobile(t);
  if (t.id === 'circuit')   return buildCircuitMobile(t);
  return buildAuroraMobile(t);
}

// ── AURORA ─────────────────────────────────────────────────────────────────

function buildAuroraDesktop(t: IndustryTemplate): string {
  const cardBgs = ['#fef4e6','#ede8ff','#e2f5ee'];
  const prods = t.products.slice(0,3).map((p,i) => `
    <div style="background:${cardBgs[i]};border-radius:12px;overflow:hidden;padding:20px 16px;text-align:center;">
      <div style="height:130px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;">
        <img src="${p.img}" style="height:120px;object-fit:contain;" loading="lazy">
      </div>
      <div style="font-size:14px;font-family:'Cormorant Garamond',serif;font-weight:600;color:#1a1a1a;margin-bottom:5px;">${p.name}</div>
      <div style="font-size:11px;color:#888;margin-bottom:14px;">${p.price}</div>
      <div style="display:inline-block;padding:7px 22px;border-radius:100px;border:1.5px solid #1a1a1a;font-size:9px;font-weight:700;letter-spacing:1.5px;color:#1a1a1a;">SHOP NOW</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Top utility bar -->
    <div style="background:#fff;border-bottom:1px solid #eee;height:28px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;">
      <div style="display:flex;gap:12px;font-size:8.5px;color:#777;"><span>ENGLISH ▾</span><span>🇺🇸 USD ▾</span></div>
      <span style="font-size:18px;font-weight:700;letter-spacing:2px;color:#111;font-family:'Cormorant Garamond',serif;font-style:italic;">July</span>
      <div style="display:flex;gap:10px;font-size:13px;color:#111;">🔍 👤 🛒</div>
    </div>
    <!-- Main nav -->
    <div style="background:#fff;height:36px;display:flex;align-items:center;justify-content:center;gap:22px;border-bottom:1px solid #eee;">
      <span style="font-size:9px;color:#333;font-weight:500;letter-spacing:0.5px;">HOME</span>
      <span style="font-size:9px;color:#333;font-weight:500;letter-spacing:0.5px;">SHOP ▾</span>
      <div style="background:#b91c1c;color:#fff;font-size:8px;font-weight:700;padding:4px 10px;border-radius:2px;">+ SALE</div>
      <span style="font-size:9px;color:#333;font-weight:500;letter-spacing:0.5px;">ABOUT ▾</span>
      <span style="font-size:9px;color:#333;font-weight:500;letter-spacing:0.5px;">BLOG</span>
      <span style="font-size:9px;color:#333;font-weight:500;letter-spacing:0.5px;">PRESETS ▾</span>
    </div>
    <!-- Hero -->
    <div style="height:190px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;object-position:center top;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.18);"></div>
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 40px;">
        <div style="font-size:34px;font-family:'Cormorant Garamond',serif;color:#fff;font-weight:600;line-height:1.1;text-shadow:0 2px 12px rgba(0,0,0,0.25);">El Brillo <em style="font-style:italic;color:#d4b896;">de</em> la Eternidad</div>
        <p style="font-size:10px;color:rgba(255,255,255,0.88);margin-top:10px;line-height:1.5;text-shadow:0 1px 4px rgba(0,0,0,0.3);">Un diálogo entre la luz y la piel.</p>
        <div style="display:flex;gap:10px;margin-top:14px;">
          <div style="background:#fff;color:#111;font-size:8.5px;font-weight:700;letter-spacing:1.5px;padding:8px 18px;border-radius:100px;">COMPRAR AHORA</div>
          <div style="background:transparent;color:#fff;font-size:8.5px;font-weight:700;letter-spacing:1.5px;padding:8px 18px;border-radius:100px;border:1.5px solid rgba(255,255,255,0.7);">LEER HISTORIA</div>
        </div>
      </div>
    </div>
    <!-- Trust badges -->
    <div style="background:#fff;padding:12px 28px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;gap:30px;">
      <div style="text-align:center;"><div style="font-size:7px;color:#bbb;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px;">CRAFT</div><div style="font-size:9px;color:#555;">Small Batch</div></div>
      <div style="text-align:center;"><div style="font-size:7px;color:#bbb;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px;">COMMITMENT</div><div style="font-size:9px;color:#555;">Libre de Crueldad</div></div>
      <div style="text-align:center;"><div style="font-size:7px;color:#bbb;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px;">SOSTENIBILIDAD</div><div style="font-size:9px;color:#555;">Carbono Neutro</div></div>
      <div style="text-align:center;"><div style="font-size:7px;color:#bbb;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px;">CIENCIA</div><div style="font-size:9px;color:#555;">Testado por Dermatólogos</div></div>
    </div>
    <!-- Products -->
    <div style="background:#fff;padding:16px 24px;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">${prods}</div>
    </div>
  </div>`;
}

function buildAuroraMobile(t: IndustryTemplate): string {
  const cardBgs = ['#fef4e6','#ede8ff'];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:${cardBgs[i]};border-radius:8px;overflow:hidden;padding:8px;text-align:center;">
      <div style="height:52px;display:flex;align-items:center;justify-content:center;margin-bottom:5px;">
        <img src="${p.img}" style="height:48px;object-fit:contain;" loading="lazy">
      </div>
      <div style="font-size:7px;font-family:'Cormorant Garamond',serif;font-weight:600;color:#1a1a1a;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:6.5px;color:#888;margin-bottom:5px;">${p.price}</div>
      <div style="padding:3px 0;border-radius:100px;border:1px solid #1a1a1a;font-size:5.5px;font-weight:700;letter-spacing:1px;color:#1a1a1a;">SHOP NOW</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <!-- Utility bar -->
    <div style="background:#fff;border-bottom:1px solid #eee;height:16px;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:10px;font-weight:700;letter-spacing:2px;color:#111;font-family:'Cormorant Garamond',serif;font-style:italic;">July</span>
    </div>
    <!-- Nav -->
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #eee;flex-shrink:0;">
      <div style="display:flex;gap:8px;font-size:7px;color:#555;"><span>Shop</span><div style="background:#b91c1c;color:#fff;font-size:5.5px;font-weight:700;padding:2px 5px;border-radius:2px;">SALE</div></div>
      <div style="display:flex;gap:5px;font-size:10px;">🔍🛒</div>
    </div>
    <!-- Hero -->
    <div style="height:115px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;object-position:center top;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.22);"></div>
      <div style="position:relative;z-index:2;text-align:center;padding:0 12px;">
        <div style="font-size:17px;font-family:'Cormorant Garamond',serif;color:#fff;font-weight:600;line-height:1.1;">El Brillo <em style="font-style:italic;color:#d4b896;">de</em><br>la Eternidad</div>
        <div style="display:flex;gap:5px;justify-content:center;margin-top:8px;">
          <div style="background:#fff;color:#111;font-size:6px;font-weight:700;padding:4px 10px;border-radius:100px;">Comprar</div>
          <div style="border:1px solid rgba(255,255,255,0.7);color:#fff;font-size:6px;font-weight:700;padding:4px 10px;border-radius:100px;">Historia</div>
        </div>
      </div>
    </div>
    <!-- Trust bar -->
    <div style="background:#fff;padding:5px 9px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;gap:10px;">
      <span style="font-size:5.5px;color:#888;">Small Batch</span>
      <span style="font-size:5.5px;color:#888;">·</span>
      <span style="font-size:5.5px;color:#888;">Sin Crueldad</span>
      <span style="font-size:5.5px;color:#888;">·</span>
      <span style="font-size:5.5px;color:#888;">Carbono Neutro</span>
    </div>
    <!-- Products -->
    <div style="padding:7px 7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
  </div>`;
}

// ── ONYX ──────────────────────────────────────────────────────────────────

function buildOnyxDesktop(t: IndustryTemplate): string {
  const badges: string[] = [
    '<div style="background:#16a34a;color:#fff;font-size:7px;font-weight:700;padding:2px 7px;border-radius:100px;margin-bottom:6px;display:inline-block;">-25%</div>',
    '<div style="background:#1a1a1a;color:#fff;font-size:7px;font-weight:700;padding:2px 7px;border-radius:100px;margin-bottom:6px;display:inline-block;">New</div>',
    '<div style="background:#dc2626;color:#fff;font-size:7px;font-weight:700;padding:2px 7px;border-radius:100px;margin-bottom:6px;display:inline-block;">-30%</div>',
    '',
  ];
  const cats = ['Crema','Aceite','Crema','Aceite'];
  const origPrices = ['$39.000','','$56.000',''];
  const prods = t.products.map((p,i) => `
    <div style="background:#f6f6f6;border-radius:8px;overflow:hidden;padding:12px 10px 10px;position:relative;">
      ${badges[i]}
      <div style="height:90px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
        <img src="${p.img}" style="height:80px;object-fit:contain;" loading="lazy">
      </div>
      <div style="font-size:8px;color:#999;margin-bottom:2px;">${cats[i]}</div>
      <div style="font-size:9.5px;color:#1a1a1a;font-weight:600;margin-bottom:4px;">${p.name}</div>
      <div style="font-size:9.5px;font-weight:700;color:${origPrices[i] ? '#dc2626' : '#1a1a1a'};">From ${p.price} ${origPrices[i] ? `<span style="text-decoration:line-through;color:#bbb;font-weight:400;font-size:8px;">${origPrices[i]}</span>` : ''}</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Nav -->
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid #eee;">
      <span style="font-size:16px;font-weight:800;letter-spacing:1px;color:#1a1a1a;">Sleek</span>
      <div style="display:flex;gap:20px;font-size:9.5px;color:#444;font-weight:500;"><span>Home</span><span>Presets ▾</span><span>Shop ▾</span><span>Collections ▾</span><span>Contact</span></div>
      <div style="display:flex;gap:12px;font-size:14px;color:#1a1a1a;">🔍 👤 🛒</div>
    </div>
    <!-- Hero slider -->
    <div style="height:200px;position:relative;overflow:hidden;display:flex;">
      <!-- Left peek -->
      <div style="width:14%;background:#f5d5c8;flex-shrink:0;overflow:hidden;">
        <div style="width:100%;height:100%;background:linear-gradient(135deg, #e8b4a0 0%, #f5d5c8 100%);opacity:0.9;"></div>
      </div>
      <!-- Center hero -->
      <div style="flex:1;position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.12);"></div>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 30px;">
          <div style="font-size:10px;color:rgba(255,255,255,0.85);font-weight:500;letter-spacing:1px;margin-bottom:10px;">Blend Beauty In You</div>
          <div style="font-size:26px;font-weight:800;color:#fff;line-height:1.1;text-shadow:0 2px 8px rgba(0,0,0,0.2);">Get the skin you<br>want to feel</div>
          <div style="margin-top:14px;display:inline-block;padding:9px 24px;background:#fff;color:#1a1a1a;font-size:9px;font-weight:700;border-radius:100px;letter-spacing:1px;">Shop Now</div>
        </div>
      </div>
      <!-- Right peek -->
      <div style="width:14%;background:#f8d4e0;flex-shrink:0;overflow:hidden;">
        <div style="width:100%;height:100%;background:linear-gradient(135deg, #f8d4e0 0%, #f0b8c8 100%);opacity:0.9;"></div>
      </div>
    </div>
    <!-- Tabs -->
    <div style="background:#fff;padding:10px 24px 8px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:20px;">
      <span style="font-size:10.5px;font-weight:700;color:#1a1a1a;border-bottom:2px solid #1a1a1a;padding-bottom:4px;">Lo más vendido</span>
      <span style="font-size:10.5px;color:#bbb;font-weight:500;">Bestsellers</span>
      <span style="font-size:10.5px;color:#bbb;font-weight:500;">Ofertas</span>
      <span style="margin-left:auto;font-size:9.5px;color:#555;font-weight:600;text-decoration:underline;">Ver todos los productos →</span>
    </div>
    <!-- Products -->
    <div style="padding:14px 24px;background:#fff;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildOnyxMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#f6f6f6;border-radius:6px;overflow:hidden;padding:7px;">
      <div style="height:44px;display:flex;align-items:center;justify-content:center;margin-bottom:5px;">
        <img src="${p.img}" style="height:40px;object-fit:contain;" loading="lazy">
      </div>
      <div style="font-size:6px;color:#999;margin-bottom:1px;">${i===0?'Crema':'Aceite'}</div>
      <div style="font-size:7px;color:#1a1a1a;font-weight:600;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:6.5px;font-weight:700;color:${i===0?'#dc2626':'#1a1a1a'};">From ${p.price}${i===0?' <span style="text-decoration:line-through;color:#bbb;font-weight:400;font-size:6px;">$39.000</span>':''}</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#fff;height:26px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;border-bottom:1px solid #eee;flex-shrink:0;">
      <span style="font-size:11px;font-weight:800;letter-spacing:1px;color:#1a1a1a;">Sleek</span>
      <div style="display:flex;gap:8px;font-size:7.5px;color:#555;"><span>Shop</span><span>Collections</span></div>
      <div style="display:flex;gap:6px;font-size:11px;color:#1a1a1a;">🔍🛒</div>
    </div>
    <div style="height:116px;position:relative;overflow:hidden;flex-shrink:0;display:flex;">
      <div style="width:12%;background:linear-gradient(135deg,#e8b4a0,#f5d5c8);flex-shrink:0;"></div>
      <div style="flex:1;position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.15);"></div>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 10px;">
          <div style="font-size:7px;color:rgba(255,255,255,0.8);margin-bottom:5px;">Blend Beauty In You</div>
          <div style="font-size:15px;font-weight:800;color:#fff;line-height:1.1;">Get the skin<br>you want to feel</div>
          <div style="margin-top:7px;padding:3px 12px;background:#fff;color:#1a1a1a;font-size:6px;font-weight:700;border-radius:100px;">Shop Now</div>
        </div>
      </div>
      <div style="width:12%;background:linear-gradient(135deg,#f8d4e0,#f0b8c8);flex-shrink:0;"></div>
    </div>
    <!-- Tabs -->
    <div style="background:#fff;padding:5px 9px 4px;border-bottom:1px solid #eee;display:flex;gap:10px;align-items:center;">
      <span style="font-size:7px;font-weight:700;color:#1a1a1a;border-bottom:2px solid #1a1a1a;padding-bottom:2px;">Lo más vendido</span>
      <span style="font-size:7px;color:#bbb;">Bestsellers</span>
      <span style="font-size:7px;color:#bbb;">Ofertas</span>
    </div>
    <div style="padding:7px 7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
  </div>`;
}

// ── BLOOM ─────────────────────────────────────────────────────────────────

function buildBloomDesktop(t: IndustryTemplate): string {
  const colors = ['#fef4e6','#f0e8ff','#ddf5ec'];
  const prods = t.products.slice(0,3).map((p,i) => `
    <div style="background:${colors[i]};border-radius:12px;overflow:hidden;padding:18px 14px;text-align:center;">
      <div style="height:100px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
        <img src="${p.img}" style="height:90px;object-fit:contain;" loading="lazy">
      </div>
      <div style="font-size:13px;color:#1a1a1a;font-weight:700;margin-bottom:4px;">${p.name}</div>
      <div style="font-size:11px;color:#666;margin-bottom:12px;">${p.price}</div>
      <div style="display:inline-block;padding:7px 20px;border-radius:100px;border:1.5px solid #1a1a1a;font-size:8.5px;font-weight:700;letter-spacing:1px;color:#1a1a1a;">COMPRAR AHORA</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Scrolling announcement bar -->
    <div style="background:#0a1a1a;height:22px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
      <div style="white-space:nowrap;font-size:8.5px;color:#a0d4c8;font-weight:600;letter-spacing:1px;animation:none;">✨ Envío Gratis en Pedidos +$50.000 · Devoluciones Gratis · ✨ Envío Gratis en Pedidos +$50.000 · Devoluciones Gratis ✨</div>
    </div>
    <!-- Nav transparent/dark -->
    <div style="background:rgba(10,26,26,0.88);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;">
      <div style="display:flex;align-items:center;gap:14px;">
        <span style="font-size:18px;color:#fff;">≡</span>
        <span style="font-size:9.5px;color:rgba(255,255,255,0.85);font-weight:600;">Shop</span>
        <span style="font-size:9.5px;color:rgba(255,255,255,0.85);font-weight:600;">Bestseller</span>
        <span style="font-size:9.5px;color:rgba(255,255,255,0.85);font-weight:600;">Sale</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;font-size:9px;color:rgba(255,255,255,0.75);">
        <span>🇺🇸 USD ▾</span>
        <span style="font-size:14px;">🔍 👤 🛒</span>
      </div>
    </div>
    <!-- Hero full-bleed -->
    <div style="height:200px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.42);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:62px;font-family:'Cormorant Garamond',serif;font-weight:600;color:#fff;line-height:1;letter-spacing:-2px;">belleza</div>
        <div style="font-size:9.5px;color:rgba(255,255,255,0.8);letter-spacing:4px;font-weight:600;margin-top:10px;border-top:1px solid rgba(255,255,255,0.4);padding-top:8px;display:inline-block;text-transform:uppercase;">Donde Comienza El Skincare</div>
        <div style="font-size:16px;color:rgba(255,255,255,0.7);margin-top:4px;">∨</div>
      </div>
    </div>
    <!-- Products -->
    <div style="padding:16px 22px 12px;background:#fff;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">${prods}</div>
    </div>
  </div>`;
}

function buildBloomMobile(t: IndustryTemplate): string {
  const colors = ['#fef4e6','#f0e8ff'];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:${colors[i]};border-radius:8px;overflow:hidden;padding:7px;text-align:center;">
      <div style="height:44px;display:flex;align-items:center;justify-content:center;margin-bottom:4px;">
        <img src="${p.img}" style="height:40px;object-fit:contain;" loading="lazy">
      </div>
      <div style="font-size:6.5px;color:#1a1a1a;font-weight:700;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:6px;color:#666;margin-bottom:5px;">${p.price}</div>
      <div style="padding:3px 0;border-radius:100px;border:1px solid #1a1a1a;font-size:5.5px;font-weight:700;color:#1a1a1a;">COMPRAR</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#0a1a1a;height:12px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#a0d4c8;font-weight:600;letter-spacing:0.5px;">✨ Envío Gratis +$50.000 ✨</div>
    <div style="background:rgba(10,26,26,0.92);height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;flex-shrink:0;">
      <div style="display:flex;gap:8px;font-size:7px;color:rgba(255,255,255,0.85);"><span>Shop</span><span>Bestseller</span><span>Sale</span></div>
      <div style="display:flex;gap:5px;font-size:10px;color:#fff;">🔍🛒</div>
    </div>
    <div style="height:112px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.45);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:32px;font-family:'Cormorant Garamond',serif;font-weight:600;color:#fff;line-height:1;letter-spacing:-1px;">belleza</div>
        <div style="font-size:6px;color:rgba(255,255,255,0.75);letter-spacing:2.5px;font-weight:600;margin-top:6px;border-top:1px solid rgba(255,255,255,0.3);padding-top:5px;text-transform:uppercase;">Donde Comienza El Skincare</div>
      </div>
    </div>
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
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

// ── COSECHA ───────────────────────────────────────────────────────────────

function buildCosechaDesktop(t: IndustryTemplate): string {
  const prods = t.products.map(p => `
    <div>
      <div style="height:78px;background:#f0e8d8;border-radius:6px;overflow:hidden;margin-bottom:6px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
      <div style="font-size:9px;color:#2a1f14;font-weight:500;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:9px;color:#c8860a;font-weight:700;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf6f0;height:100%;overflow:hidden;font-family:'DM Sans',sans-serif;">
    <div style="background:#2a1f14;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#c8a060;font-weight:600;letter-spacing:2px;">ENVÍO GRATIS · PRODUCTOS ARTESANALES DE COLOMBIA</div>
    <div style="background:#faf6f0;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid #e8e0d0;">
      <div style="display:flex;gap:22px;"><span style="font-size:10px;color:#6b5040;">Tienda</span><span style="font-size:10px;color:#6b5040;">Categorías</span><span style="font-size:10px;color:#6b5040;">Nosotros</span></div>
      <span style="font-size:14px;font-weight:700;letter-spacing:4px;color:#2a1f14;">COSECHA</span>
      <div style="display:flex;gap:14px;font-size:14px;color:#6b5040;">♡ 🛒</div>
    </div>
    <div style="height:214px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(42,31,20,0.72) 0%,rgba(42,31,20,0.0) 55%);"></div>
      <div style="position:absolute;bottom:28px;left:28px;">
        <div style="font-size:9px;color:#c8a060;font-weight:700;letter-spacing:3px;margin-bottom:10px;text-transform:uppercase;">Productos Artesanales</div>
        <div style="font-size:30px;font-weight:700;color:#fff;line-height:1.1;">Sabores que<br>cuentan historias.</div>
        <div style="margin-top:14px;display:inline-block;padding:8px 22px;background:#c8860a;color:#fff;font-size:10px;font-weight:700;border-radius:4px;">Descubrir productos</div>
      </div>
    </div>
    <div style="background:#fff;padding:16px 28px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <span style="font-size:10.5px;font-weight:700;color:#2a1f14;">Más vendidos</span>
        <span style="font-size:9.5px;color:#bbb;text-decoration:underline;">Ver todo</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildCosechaMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map(p => `
    <div style="display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid #ede5d8;">
      <div style="width:30px;height:30px;background:#f0e8d8;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div>
        <div style="font-size:6.5px;color:#2a1f14;font-weight:600;">${p.name}</div>
        <div style="font-size:6.5px;color:#c8860a;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#faf6f0;height:100%;display:flex;flex-direction:column;">
    <div style="background:#2a1f14;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#c8a060;letter-spacing:1px;font-weight:600;">ENVÍO GRATIS</div>
    <div style="background:#faf6f0;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #e8e0d0;flex-shrink:0;">
      <span style="font-size:7px;font-weight:700;letter-spacing:2.5px;color:#2a1f14;">COSECHA</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#6b5040;">♡ 🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(42,31,20,0.72) 0%,transparent 55%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;">
        <div style="font-size:12px;font-weight:700;color:#fff;line-height:1.1;">Sabores que<br>cuentan historias.</div>
        <div style="margin-top:6px;display:inline-block;padding:3px 10px;background:#c8860a;color:#fff;font-size:6px;font-weight:700;border-radius:3px;">Descubrir</div>
      </div>
    </div>
    <div style="background:#fff;padding:7px 9px;flex:1;">${prods}</div>
  </div>`;
}

// ── LEVAIN ────────────────────────────────────────────────────────────────

function buildLevainDesktop(t: IndustryTemplate): string {
  const prods = t.products.map(p => `
    <div style="flex:1;display:flex;gap:10px;align-items:center;background:#f5f0e8;padding:10px 12px;border-radius:7px;">
      <div style="width:44px;height:44px;background:#ede5d8;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="flex:1;">
        <div style="font-size:9px;color:#2d4a2d;margin-bottom:3px;">${p.name}</div>
        <div style="font-size:9px;color:#c4856a;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#fdf8f0;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <div style="background:#2d4a2d;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#a8c8a0;font-weight:600;letter-spacing:2px;">ORGÁNICO CERTIFICADO · ENVÍO EN 24H</div>
    <div style="background:#fdf8f0;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid #e8e0d0;">
      <div style="display:flex;gap:22px;"><span style="font-size:10px;color:#4a7040;">Tienda</span><span style="font-size:10px;color:#4a7040;">Recetas</span><span style="font-size:10px;color:#4a7040;">Nosotros</span></div>
      <span style="font-size:15px;font-weight:600;letter-spacing:3px;color:#2d4a2d;">LEVAIN</span>
      <div style="display:flex;gap:14px;font-size:14px;color:#4a7040;">♡ 🛒</div>
    </div>
    <div style="height:214px;position:relative;overflow:hidden;display:flex;">
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 28px;background:#fdf8f0;">
        <div style="font-size:9px;color:#c4856a;font-weight:700;letter-spacing:2px;margin-bottom:12px;text-transform:uppercase;">Panadería Orgánica</div>
        <div style="font-size:28px;font-weight:600;color:#2d4a2d;line-height:1.2;">Horneado con<br>amor y tradición.</div>
        <div style="margin-top:16px;display:inline-block;padding:9px 22px;background:#2d4a2d;color:#fff;font-size:10px;font-weight:600;border-radius:4px;">Ver productos</div>
      </div>
      <div style="width:220px;overflow:hidden;flex-shrink:0;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
    </div>
    <div style="background:#fff;padding:16px 28px;">
      <div style="font-size:11px;color:#c4856a;font-style:italic;letter-spacing:1px;margin-bottom:14px;">Nuestros Favoritos</div>
      <div style="display:flex;gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildLevainMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map(p => `
    <div style="display:flex;gap:6px;align-items:center;padding:5px 0;border-bottom:1px solid #ede5d8;">
      <div style="width:30px;height:30px;background:#ede5d8;border-radius:5px;overflow:hidden;flex-shrink:0;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div>
        <div style="font-size:6.5px;color:#2d4a2d;font-weight:600;">${p.name}</div>
        <div style="font-size:6.5px;color:#c4856a;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#fdf8f0;height:100%;display:flex;flex-direction:column;">
    <div style="background:#2d4a2d;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#a8c8a0;letter-spacing:1.5px;font-weight:600;">ORGÁNICO CERTIFICADO</div>
    <div style="background:#fdf8f0;height:22px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #e8e0d0;flex-shrink:0;">
      <span style="font-size:9px;font-weight:600;letter-spacing:3px;color:#2d4a2d;">LEVAIN</span>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(253,248,240,0.9) 0%,transparent 55%);"></div>
      <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);">
        <div style="font-size:12px;font-weight:600;color:#2d4a2d;line-height:1.2;">Horneado con<br>amor.</div>
        <div style="margin-top:5px;display:inline-block;padding:2px 8px;background:#2d4a2d;color:#fff;font-size:5.5px;font-weight:600;border-radius:3px;">Ver</div>
      </div>
    </div>
    <div style="background:#fff;padding:7px 9px;flex:1;">${prods}</div>
  </div>`;
}

// ── MERCADO ───────────────────────────────────────────────────────────────

function buildMercadoDesktop(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 3).map((p, i) => `
    <div style="background:${i === 1 ? '#f5c842' : '#1a1a1a'};border-radius:10px;overflow:hidden;padding:12px;">
      <div style="height:80px;border-radius:6px;overflow:hidden;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="font-size:9.5px;color:${i === 1 ? '#0d0d0d' : '#fff'};font-weight:700;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:9.5px;color:${i === 1 ? '#e8520a' : '#f5c842'};font-weight:700;margin-bottom:8px;">${p.price}</div>
      <div style="padding:5px 0;background:#e8520a;border-radius:4px;font-size:8px;font-weight:800;text-align:center;color:#fff;letter-spacing:0.5px;">AGREGAR</div>
    </div>`).join('');
  return `<div style="background:#0d0d0d;height:100%;overflow:hidden;font-family:'Raleway',sans-serif;">
    <div style="background:#e8520a;height:22px;display:flex;align-items:center;justify-content:center;font-size:8.5px;color:#fff;font-weight:800;letter-spacing:2px;">DIRECTO DEL CAMPO · SIN INTERMEDIARIOS · FRESCO GARANTIZADO</div>
    <div style="background:#0d0d0d;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-bottom:1px solid rgba(255,255,255,0.1);">
      <span style="font-size:14px;font-weight:900;letter-spacing:3px;color:#fff;text-transform:uppercase;">MERCADO</span>
      <div style="display:flex;gap:24px;"><span style="font-size:10px;color:#888;font-weight:600;">Canastas</span><span style="font-size:10px;color:#888;font-weight:600;">Productores</span><span style="font-size:10px;color:#888;font-weight:600;">Cómo funciona</span></div>
      <div style="display:flex;gap:12px;font-size:14px;color:#e8520a;">🛒</div>
    </div>
    <div style="height:188px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.65);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:9px;color:#e8520a;letter-spacing:4px;font-weight:800;margin-bottom:8px;text-transform:uppercase;">Del campo a tu mesa</div>
        <div style="font-size:48px;font-weight:900;color:#fff;line-height:1;letter-spacing:-2px;">FRESCO,<br>LOCAL.</div>
        <div style="margin-top:14px;display:inline-block;padding:8px 24px;background:#e8520a;color:#fff;font-size:10px;font-weight:800;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">Armar canasta</div>
      </div>
    </div>
    <div style="padding:14px 22px 10px;background:#0d0d0d;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildMercadoMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0, 2).map((p, i) => `
    <div style="background:${i === 0 ? '#1a1a1a' : '#f5c842'};border-radius:6px;padding:5px;">
      <div style="height:36px;border-radius:4px;overflow:hidden;margin-bottom:4px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
      </div>
      <div style="font-size:6px;color:${i === 0 ? '#fff' : '#0d0d0d'};font-weight:700;">${p.name}</div>
      <div style="font-size:6px;color:${i === 0 ? '#f5c842' : '#e8520a'};font-weight:700;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#0d0d0d;height:100%;display:flex;flex-direction:column;font-family:'Raleway',sans-serif;">
    <div style="background:#e8520a;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#fff;font-weight:800;letter-spacing:1px;">DIRECTO DEL CAMPO</div>
    <div style="background:#0d0d0d;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0;">
      <span style="font-size:7.5px;font-weight:900;letter-spacing:2px;color:#fff;">MERCADO</span>
      <div style="display:flex;gap:6px;font-size:10px;color:#e8520a;">🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.65);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:26px;font-weight:900;color:#fff;letter-spacing:-1px;line-height:1;text-transform:uppercase;">FRESCO,<br>LOCAL.</div>
        <div style="margin-top:6px;display:inline-block;padding:3px 11px;background:#e8520a;color:#fff;font-size:6px;font-weight:800;border-radius:3px;text-transform:uppercase;">Ver canastas</div>
      </div>
    </div>
    <div style="padding:7px 7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#111;">${prods}</div>
  </div>`;
}

// ── VOLT (Quantum) ─────────────────────────────────────────────────────────

function buildVoltDesktop(t: IndustryTemplate): string {
  const cats = [
    { label: 'Headphones', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80' },
    { label: 'Earbuds',    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80' },
    { label: 'Gaming',     img: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=300&q=80' },
    { label: 'Speakers',   img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80' },
  ];
  const catCards = cats.map((c,i) => `
    <div style="position:relative;overflow:hidden;cursor:pointer;border-radius:0;">
      <div style="height:140px;overflow:hidden;">
        <img src="${c.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 100%);padding:10px 12px;">
        <div style="font-size:11px;font-weight:800;color:#fff;letter-spacing:0.3px;">${c.label}</div>
      </div>
      ${i===2 ? '<div style="position:absolute;top:10px;right:10px;background:#fff;border-radius:100px;padding:5px 12px;font-size:8px;font-weight:700;color:#111;">Shop now</div>' : ''}
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Top bar -->
    <div style="background:#f8f8f8;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #eee;">
      <div style="display:flex;gap:8px;font-size:11px;color:#555;">f  in  ▶  ♪  ✕</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:8px;color:#555;">Descubre nuevos productos</span>
        <div style="background:#dc2626;color:#fff;font-size:7px;font-weight:700;padding:2px 8px;border-radius:100px;">Ver ahora →</div>
      </div>
      <div style="font-size:8px;color:#555;">AUD ▾  EN ▾</div>
    </div>
    <!-- Nav -->
    <div style="background:#fff;height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #eee;">
      <div style="display:flex;gap:16px;font-size:9px;color:#444;font-weight:500;"><span>SHOP ▾</span><span>COLECCIONES ▾</span><span>BLOG</span></div>
      <span style="font-size:14px;font-weight:900;letter-spacing:2px;color:#111;">QUANTUM</span>
      <div style="display:flex;gap:10px;font-size:13px;color:#111;">🔍 👤 🛒</div>
    </div>
    <!-- Hero split -->
    <div style="height:180px;display:flex;overflow:hidden;">
      <!-- Left: text on light gray -->
      <div style="flex:0 0 42%;background:#f2f2f2;display:flex;flex-direction:column;justify-content:center;padding:0 22px;">
        <div style="font-size:19px;font-weight:900;color:#111;line-height:1.1;margin-bottom:8px;">Gadgets<br>Premium &<br>con Estilo</div>
        <div style="font-size:8.5px;color:#666;margin-bottom:12px;line-height:1.4;">Mejora tu tech con accesorios de alta calidad</div>
        <div style="display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;font-size:8px;font-weight:700;padding:7px 14px;border-radius:100px;width:fit-content;">Ver colección <span style="font-size:10px;">↗</span></div>
      </div>
      <!-- Right: model on green-textured bg -->
      <div style="flex:1;background:#4a7c59;position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;mix-blend-mode:multiply;opacity:0.85;" loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(60,110,75,0.5) 0%,transparent 60%);"></div>
      </div>
    </div>
    <!-- Decorative text strip -->
    <div style="background:#f8f8f8;height:20px;overflow:hidden;display:flex;align-items:center;padding:0 16px;">
      <span style="font-size:22px;font-weight:900;color:#e0e0e0;letter-spacing:-1px;white-space:nowrap;">QUANTUM · QUANTUM · QUANTUM ·</span>
    </div>
    <!-- Category grid -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:#ddd;">
      ${catCards}
    </div>
  </div>`;
}

function buildVoltMobile(t: IndustryTemplate): string {
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#f8f8f8;height:11px;display:flex;align-items:center;justify-content:center;gap:8px;">
      <span style="font-size:5.5px;color:#555;">Nuevos productos</span>
      <div style="background:#dc2626;color:#fff;font-size:4.5px;font-weight:700;padding:1px 5px;border-radius:100px;">Ver →</div>
    </div>
    <div style="background:#fff;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #eee;flex-shrink:0;">
      <div style="font-size:7.5px;color:#444;font-weight:500;">SHOP ▾</div>
      <span style="font-size:9px;font-weight:900;letter-spacing:1.5px;color:#111;">QUANTUM</span>
      <div style="display:flex;gap:5px;font-size:11px;color:#111;">🔍🛒</div>
    </div>
    <div style="height:105px;display:flex;overflow:hidden;flex-shrink:0;">
      <div style="flex:0 0 45%;background:#f2f2f2;display:flex;flex-direction:column;justify-content:center;padding:0 8px;">
        <div style="font-size:12px;font-weight:900;color:#111;line-height:1.1;margin-bottom:5px;">Gadgets<br>Premium</div>
        <div style="display:inline-flex;background:#111;color:#fff;font-size:6px;font-weight:700;padding:4px 8px;border-radius:100px;width:fit-content;">Ver ↗</div>
      </div>
      <div style="flex:1;background:#4a7c59;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.85;" loading="lazy">
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#ddd;flex:1;">
      ${t.products.slice(0,4).map((p,i) => `
        <div style="position:relative;overflow:hidden;background:#111;">
          <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.75;" loading="lazy">
          <div style="position:absolute;bottom:4px;left:5px;font-size:6.5px;font-weight:800;color:#fff;">${['Headphones','Earbuds','Gaming','Speakers'][i]}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ── NEXUS (Harmony) ────────────────────────────────────────────────────────

function buildNexusDesktop(t: IndustryTemplate): string {
  const cats = [
    { label: 'All products', sup: '59', sub: 'Check out all our products', img: t.products[0].img },
    { label: 'Headphones',   sup: '15', sub: 'Surround yourself in sound', img: t.products[0].img },
    { label: 'Earphones',    sup: '8',  sub: 'Small design, great sound',  img: t.products[1].img },
    { label: 'Speakers',     sup: '11', sub: "The world's most immersive", img: t.products[2].img },
  ];
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Top bar black -->
    <div style="background:#000;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;">
      <div style="display:flex;gap:8px;font-size:10px;color:#555;">f  ✕  📷  ▶</div>
      <div style="font-size:7.5px;color:#aaa;font-weight:600;letter-spacing:0.5px;">Ahorra hasta 60% · código BLACKFRIDAY →</div>
      <div style="font-size:7.5px;color:#666;">English · Colombia (USD $)</div>
    </div>
    <!-- Nav -->
    <div style="background:#fff;height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #eee;">
      <div style="display:flex;gap:4px;">
        <div style="width:18px;height:12px;background:linear-gradient(135deg,#333 0%,#666 50%,#333 100%);border-radius:2px;"></div>
        <div style="width:18px;height:12px;background:linear-gradient(135deg,#555 0%,#888 50%,#555 100%);border-radius:2px;margin-left:-6px;"></div>
      </div>
      <div style="display:flex;gap:18px;font-size:9px;color:#333;font-weight:500;"><span>Shop</span><span>Collections</span><span>Explore</span><span>Compare</span><span>Contact</span></div>
      <div style="display:flex;gap:10px;font-size:13px;color:#111;">🔍 👤 🛒</div>
    </div>
    <!-- Hero full-bleed -->
    <div style="height:185px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;object-position:center 30%;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.1) 60%);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:10px 16px;">
        <div style="font-size:36px;font-weight:900;color:rgba(255,255,255,0.08);letter-spacing:-2px;line-height:1;text-transform:uppercase;">EXPERIE</div>
      </div>
    </div>
    <!-- Category grid -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;background:#fff;border-top:1px solid #eee;">
      ${cats.map(c => `
        <div style="padding:14px 12px;border-right:1px solid #f0f0f0;cursor:pointer;background:#fff;">
          <div style="height:70px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;background:#f6f6f6;border-radius:6px;overflow:hidden;">
            <img src="${c.img}" style="height:65px;object-fit:contain;" loading="lazy">
          </div>
          <div style="font-size:10px;font-weight:700;color:#1a1a1a;">${c.label}<sup style="font-size:7px;color:#999;">${c.sup}</sup></div>
          <div style="font-size:8px;color:#888;margin-top:2px;">${c.sub}</div>
          <div style="font-size:9px;color:#111;font-weight:700;margin-top:6px;">→</div>
        </div>`).join('')}
    </div>
    <!-- Secondary dark hero strip -->
    <div style="height:90px;position:relative;overflow:hidden;background:#0a0a0a;display:flex;align-items:center;justify-content:center;">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 60% 50%,rgba(50,50,80,0.6) 0%,transparent 70%);"></div>
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:16px;font-weight:900;color:#fff;letter-spacing:-0.5px;line-height:1.1;text-transform:uppercase;">UNIQUELY CRAFTED<br>EARPHONES FOR YOUR STYLE</div>
        <div style="margin-top:8px;display:inline-block;padding:5px 16px;border:1.5px solid rgba(255,255,255,0.6);color:#fff;font-size:8px;font-weight:700;border-radius:2px;">Shop Earphones</div>
      </div>
    </div>
  </div>`;
}

function buildNexusMobile(t: IndustryTemplate): string {
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#000;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#888;letter-spacing:0.5px;">Ahorra hasta 60% · código BLACKFRIDAY →</div>
    <div style="background:#fff;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #eee;flex-shrink:0;">
      <div style="display:flex;gap:2px;">
        <div style="width:10px;height:7px;background:#333;border-radius:1px;"></div>
        <div style="width:10px;height:7px;background:#555;border-radius:1px;margin-left:-3px;"></div>
      </div>
      <div style="display:flex;gap:10px;font-size:7px;color:#333;font-weight:500;"><span>Shop</span><span>Collections</span><span>Explore</span></div>
      <div style="display:flex;gap:5px;font-size:11px;color:#111;">🔍🛒</div>
    </div>
    <div style="height:110px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;object-position:center 30%;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%);"></div>
      <div style="position:absolute;bottom:5px;left:8px;">
        <div style="font-size:20px;font-weight:900;color:rgba(255,255,255,0.08);text-transform:uppercase;">EXPERIE</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid #eee;flex:1;">
      ${t.products.slice(0,4).map((p,i) => `
        <div style="padding:8px;border-right:${i%2===0?'1px solid #f0f0f0':'none'};border-bottom:1px solid #f0f0f0;background:#fff;">
          <div style="height:40px;background:#f6f6f6;border-radius:4px;overflow:hidden;display:flex;align-items:center;justify-content:center;margin-bottom:5px;">
            <img src="${p.img}" style="height:36px;object-fit:contain;" loading="lazy">
          </div>
          <div style="font-size:6.5px;font-weight:700;color:#111;">${['Headphones¹⁵','Earphones⁸','Speakers¹¹','All products⁵⁹'][i]}</div>
          <div style="font-size:5.5px;color:#888;margin-top:1px;">→</div>
        </div>`).join('')}
    </div>
  </div>`;
}

// ── CIRCUIT (Woodstock) ────────────────────────────────────────────────────

function buildCircuitDesktop(t: IndustryTemplate): string {
  const collections = [
    { name: 'Relojes Premium', count: '40 productos', img: t.products[0].img },
    { name: 'Computadores & Tablets', count: '8 productos', img: t.products[2].img },
    { name: 'Celulares', count: '5 productos', img: t.products[3].img },
    { name: 'Accesorios', count: '16 productos', img: t.products[1].img },
  ];
  const stars = '★★★★☆';
  const prods = t.products.map((p,i) => `
    <div style="padding:10px;cursor:pointer;">
      <div style="position:relative;margin-bottom:8px;">
        ${i===0 ? '<div style="position:absolute;top:0;left:0;background:#dc2626;color:#fff;font-size:7px;font-weight:700;padding:2px 7px;border-radius:100px;z-index:2;">Save 34%</div>' : ''}
        <div style="height:90px;display:flex;align-items:center;justify-content:center;background:#f8f8f8;border-radius:6px;overflow:hidden;">
          <img src="${p.img}" style="height:80px;object-fit:contain;" loading="lazy">
        </div>
      </div>
      <div style="display:flex;gap:3px;margin-bottom:4px;">
        ${[0,1,2].map(j=>`<div style="width:8px;height:8px;border-radius:50%;background:${['#111','#c00','#4a7c59'][j]};border:1px solid #ddd;"></div>`).join('')}
      </div>
      <div style="font-size:7.5px;color:#999;margin-bottom:1px;">Woodstock Electronics</div>
      <div style="font-size:9.5px;font-weight:700;color:#111;margin-bottom:3px;">${p.name}</div>
      <div style="font-size:8.5px;color:#f59e0b;margin-bottom:3px;">${stars}</div>
      ${i===0 ? `<div><span style="font-size:8.5px;color:#999;text-decoration:line-through;margin-right:4px;">$377.000</span><span style="font-size:9px;font-weight:700;color:#dc2626;">From ${p.price}</span></div>` : `<div style="font-size:9px;font-weight:600;color:#111;">From ${p.price}</div>`}
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Top bar -->
    <div style="background:#f5f5f5;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-bottom:1px solid #eee;">
      <span style="font-size:8px;color:#555;font-weight:500;">🚚 Envío Gratis en Pedidos +$100.000</span>
      <div style="display:flex;gap:10px;font-size:8px;color:#555;"><span>United States (USD $) ▾</span><span>English ▾</span><span style="font-size:12px;">✕ f 📷</span></div>
    </div>
    <!-- Nav with search -->
    <div style="background:#fff;border-bottom:1px solid #eee;">
      <div style="height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;">
        <div style="display:flex;gap:4px;align-items:center;">
          <div style="width:14px;height:14px;border-radius:50%;border:2.5px solid #333;"></div>
          <div style="width:14px;height:14px;border-radius:50%;border:2.5px solid #333;margin-left:-6px;"></div>
        </div>
        <div style="flex:1;max-width:200px;margin:0 16px;background:#f5f5f5;border-radius:4px;height:22px;display:flex;align-items:center;padding:0 8px;gap:4px;">
          <span style="font-size:10px;color:#999;">🔍</span>
          <span style="font-size:8px;color:#bbb;">Search</span>
        </div>
        <div style="font-size:8px;color:#666;">📞 1-800-123-45-67</div>
        <div style="display:flex;gap:10px;font-size:13px;color:#111;">👤 ♡ 🛒</div>
      </div>
      <div style="height:30px;display:flex;align-items:center;padding:0 16px;gap:16px;border-top:1px solid #f0f0f0;">
        <span style="font-size:8.5px;color:#555;font-weight:500;">Tiendas</span>
        <span style="font-size:8.5px;color:#555;font-weight:500;">Relojes ▾</span>
        <span style="font-size:8.5px;color:#555;font-weight:500;">Celulares ▾</span>
        <div style="background:#2563eb;color:#fff;font-size:8px;font-weight:700;padding:3px 10px;border-radius:100px;">Accesorios</div>
        <span style="font-size:8.5px;color:#555;font-weight:500;">Laptops</span>
        <span style="font-size:8.5px;color:#555;font-weight:500;">Soporte</span>
      </div>
    </div>
    <!-- Hero: smartwatch on gradient bg -->
    <div style="height:130px;position:relative;overflow:hidden;background:linear-gradient(135deg,#b8c8d8 0%,#8aa0b8 50%,#6080a0 100%);display:flex;align-items:center;">
      <div style="flex:1;"></div>
      <div style="flex:0 0 200px;text-align:right;padding-right:20px;">
        <div style="display:inline-block;background:rgba(255,255,255,0.15);color:#fff;font-size:7px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:2px;margin-bottom:8px;">RELOJES</div>
        <div style="font-size:19px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:6px;">La Tecnología<br>Se Encuentra<br>con el Estilo</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.8);">Navega tu día con nuestros<br>smartwatches innovadores</div>
      </div>
      <div style="position:absolute;left:30px;top:50%;transform:translateY(-50%);">
        <img src="${t.hero}" style="height:115px;object-fit:contain;" loading="lazy">
      </div>
    </div>
    <!-- Product grid -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid #eee;border-bottom:1px solid #eee;">
      ${prods}
    </div>
    <!-- Collections -->
    <div style="padding:8px 16px;">
      <div style="font-size:10px;font-weight:800;color:#111;margin-bottom:6px;">Collections</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
        ${collections.map(c=>`
          <div style="border-radius:8px;overflow:hidden;position:relative;cursor:pointer;">
            <div style="height:50px;background:#f0f0f0;overflow:hidden;">
              <img src="${c.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
            </div>
            <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.65),transparent);padding:4px 6px;">
              <div style="font-size:7px;font-weight:700;color:#fff;">${c.name}</div>
              <div style="font-size:6px;color:rgba(255,255,255,0.75);">${c.count}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function buildCircuitMobile(t: IndustryTemplate): string {
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#f5f5f5;height:11px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#555;">🚚 Envío Gratis en Pedidos +$100.000</div>
    <div style="background:#fff;border-bottom:1px solid #eee;">
      <div style="height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;">
        <div style="display:flex;gap:2px;align-items:center;">
          <div style="width:10px;height:10px;border-radius:50%;border:2px solid #333;"></div>
          <div style="width:10px;height:10px;border-radius:50%;border:2px solid #333;margin-left:-4px;"></div>
        </div>
        <div style="flex:1;max-width:100px;margin:0 6px;background:#f5f5f5;border-radius:3px;height:14px;display:flex;align-items:center;padding:0 5px;">
          <span style="font-size:7px;color:#bbb;">🔍 Search</span>
        </div>
        <div style="display:flex;gap:4px;font-size:10px;color:#111;">👤🛒</div>
      </div>
      <div style="height:18px;display:flex;align-items:center;padding:0 8px;gap:8px;border-top:1px solid #f0f0f0;overflow:hidden;">
        <span style="font-size:6.5px;color:#555;white-space:nowrap;">Relojes</span>
        <span style="font-size:6.5px;color:#555;white-space:nowrap;">Celulares</span>
        <div style="background:#2563eb;color:#fff;font-size:5.5px;font-weight:700;padding:2px 7px;border-radius:100px;white-space:nowrap;">Accesorios</div>
        <span style="font-size:6.5px;color:#555;white-space:nowrap;">Laptops</span>
      </div>
    </div>
    <div style="height:90px;background:linear-gradient(135deg,#b8c8d8,#6080a0);position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;">
      <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);">
        <img src="${t.hero}" style="height:80px;object-fit:contain;" loading="lazy">
      </div>
      <div style="margin-left:auto;padding-right:10px;text-align:right;">
        <div style="font-size:12px;font-weight:900;color:#fff;line-height:1.1;">La Tecnología<br>Se Encuentra<br>con el Estilo</div>
      </div>
    </div>
    <div style="padding:6px 8px;flex:1;overflow:hidden;">
      <div style="font-size:7px;font-weight:800;color:#111;margin-bottom:5px;">Collections</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
        ${t.products.slice(0,4).map((p,i)=>`
          <div style="border-radius:6px;overflow:hidden;position:relative;">
            <div style="height:44px;background:#f0f0f0;overflow:hidden;">
              <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
            </div>
            <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.6),transparent);padding:3px 5px;">
              <div style="font-size:6px;font-weight:700;color:#fff;">${['Relojes Premium','Computadores','Celulares','Accesorios'][i]}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

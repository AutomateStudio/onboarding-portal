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
      previewUrl: '/templates/beauty/july.html',
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
      previewUrl: '/templates/beauty/sleek.html',
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
      previewUrl: '/templates/beauty/glow.html',
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
      previewUrl: '/templates/fashion/aura.html',
      hero: '/images/templates/fashion/aura/hero.jpg',
      heroMobile: '/images/templates/fashion/aura/hero.jpg',
      nav: { logo: 'AURA', links: ['Tienda', 'Colecciones', 'Sobre Nosotros'], icons: ['♡', '🛒'] },
      eyebrow: 'COLECCIÓN DEPORTIVA', title: 'Ropa para\ntu mejor versión.', cta: 'Explorar →',
      detail: 'Diseño deportivo de alto desempeño.',
      products: [
        { img: '/images/templates/fashion/aura/product-1.jpg', name: 'Top Deportivo', price: '$89.000' },
        { img: '/images/templates/fashion/aura/product-2.jpg', name: 'Leggings Premium', price: '$128.000' },
        { img: '/images/templates/fashion/aura/product-3.jpg', name: 'Zapatillas Running', price: '$245.000' },
        { img: '/images/templates/fashion/aura/product-4.jpg', name: 'Chaqueta Deportiva', price: '$189.000' },
      ],
    },
    {
      id: 'elegancia',
      name: 'Elegancia',
      desc: 'Premium · Moda refinada · Lujo accesible',
      tags: ['nuevo', 'Premium', 'Elegante'],
      badge: 'new',
      previewUrl: '/templates/fashion/elegancia.html',
      hero: '/images/templates/fashion/elegancia/hero.jpg',
      heroMobile: '/images/templates/fashion/elegancia/hero.jpg',
      nav: { logo: 'ELEGANCIA', links: ['Colección', 'Editorial', 'Contacto'], icons: ['♡', '🛒'] },
      eyebrow: 'LÍNEA PREMIUM', title: 'Sofisticación\nsin esfuerzo.', cta: 'Descubrir →',
      detail: 'Diseño elegante y moderno para la moda premium.',
      products: [
        { img: '/images/templates/fashion/elegancia/product-1.jpg', name: 'Blusa Premium', price: '$156.000' },
        { img: '/images/templates/fashion/elegancia/product-2.jpg', name: 'Pantalón Elegante', price: '$198.000' },
        { img: '/images/templates/fashion/elegancia/product-3.jpg', name: 'Accesorios Lujo', price: '$125.000' },
        { img: '/images/templates/fashion/elegancia/product-4.jpg', name: 'Cinturón', price: '$85.000' },
      ],
    },
    {
      id: 'simetria',
      name: 'Simetría',
      desc: 'Casual · Versátil · Bestseller',
      tags: ['nuevo', 'Casual', 'Lifestyle'],
      badge: 'new',
      previewUrl: '/templates/fashion/simetria.html',
      hero: '/images/templates/fashion/simetria/hero.jpg',
      heroMobile: '/images/templates/fashion/simetria/hero.jpg',
      nav: { logo: 'SIMETRÍA', links: ['Tienda', 'Lookbook', 'Blog'], icons: ['🔍', '🛒'] },
      eyebrow: 'COLECCIÓN CASUAL', title: 'Crece tu\nnegocio online.', cta: 'Ver más →',
      detail: 'Tema versátil y customizable para cualquier tipo de tienda.',
      products: [
        { img: '/images/templates/fashion/simetria/product-1.jpg', name: 'Camiseta Casual', price: '$68.000' },
        { img: '/images/templates/fashion/simetria/product-2.jpg', name: 'Jeans Clásicos', price: '$135.000' },
        { img: '/images/templates/fashion/simetria/product-3.jpg', name: 'Accesorios', price: '$78.000' },
        { img: '/images/templates/fashion/simetria/product-4.jpg', name: 'Shorts Deportivos', price: '$95.000' },
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
  if (t.id === 'apex')      return buildApexDesktop(t);
  if (t.id === 'stride')    return buildStrideDesktop(t);
  if (t.id === 'arena')     return buildArenaDesktop(t);
  if (t.id === 'haven')     return buildHavenDesktop(t);
  if (t.id === 'nordia')    return buildNordiaDesktop(t);
  if (t.id === 'loft')      return buildLoftDesktop(t);
  if (t.id === 'diamante')  return buildDiamanteDesktop(t);
  if (t.id === 'heritage')  return buildHeritageDesktop(t);
  if (t.id === 'lumiere')   return buildLumiereDesktop(t);
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
  if (t.id === 'apex')      return buildApexMobile(t);
  if (t.id === 'stride')    return buildStrideMobile(t);
  if (t.id === 'arena')     return buildArenaMobile(t);
  if (t.id === 'haven')     return buildHavenMobile(t);
  if (t.id === 'nordia')    return buildNordiaMobile(t);
  if (t.id === 'loft')      return buildLoftMobile(t);
  if (t.id === 'diamante')  return buildDiamanteMobile(t);
  if (t.id === 'heritage')  return buildHeritageMobile(t);
  if (t.id === 'lumiere')   return buildLumiereMobile(t);
  return buildAuroraMobile(t);
}

// ── AURORA ─────────────────────────────────────────────────────────────────

function buildAuroraDesktop(t: IndustryTemplate): string {
  const cats = ['Aceite Facial','Sérum','Contorno de Ojos','Crema de Noche'];
  const prods = t.products.map((p,i) => `
    <div style="cursor:pointer;">
      <div style="position:relative;aspect-ratio:3/4;background:#f5ede0;border-radius:4px;overflow:hidden;margin-bottom:10px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:10px;left:10px;background:#c8860a;color:#fff;font-size:8px;font-weight:700;padding:2px 8px;border-radius:100px;">-25%</div>':''}
        ${i===2?'<div style="position:absolute;top:10px;left:10px;background:#2a1f14;color:#fff;font-size:8px;font-weight:700;padding:2px 8px;border-radius:100px;">New</div>':''}
      </div>
      <div style="font-size:9px;color:#9a8878;margin-bottom:2px;letter-spacing:.3px;">${cats[i]}</div>
      <div style="font-size:11px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;color:#2a1f14;margin-bottom:4px;">${p.name}</div>
      <div style="font-size:11px;font-weight:700;color:#c8860a;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf6f0;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Ann bar -->
    <div style="background:#2a1f14;height:22px;display:flex;align-items:center;justify-content:center;font-size:8px;color:rgba(232,221,204,.8);font-weight:500;letter-spacing:2px;text-transform:uppercase;">Envío gratis +$80.000 · Libre de Crueldad · Carbono Neutro</div>
    <!-- Nav -->
    <div style="background:#faf6f0;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid #e4ddd0;">
      <div style="display:flex;gap:16px;font-size:9px;color:#7a6a58;font-weight:500;letter-spacing:1px;text-transform:uppercase;"><span>HOME</span><span>SHOP</span><span style="background:#b91c1c;color:#fff;padding:2px 8px;border-radius:2px;font-size:8px;">SALE</span></div>
      <span style="font-size:20px;font-weight:700;letter-spacing:2px;color:#2a1f14;font-family:'Cormorant Garamond',serif;font-style:italic;">July</span>
      <div style="display:flex;gap:10px;font-size:13px;color:#2a1f14;">🔍 👤 🛒</div>
    </div>
    <!-- Hero -->
    <div style="height:186px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;object-position:center top;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(42,31,20,.85) 0%,rgba(42,31,20,.35) 50%,rgba(42,31,20,.05) 100%);"></div>
      <div style="position:absolute;bottom:22px;left:28px;">
        <div style="font-size:9px;color:rgba(245,230,192,.8);letter-spacing:5px;text-transform:uppercase;margin-bottom:10px;">Luxury Skincare Editorial</div>
        <div style="font-size:32px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;color:#fff;line-height:1.05;text-shadow:0 2px 12px rgba(0,0,0,.5);">El Brillo <em style="color:#d4b896;">de</em><br>la Eternidad</div>
        <div style="display:flex;gap:8px;margin-top:12px;">
          <div style="padding:6px 16px;border-radius:100px;background:#faf6f0;color:#2a1f14;font-size:8px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">COMPRAR</div>
          <div style="padding:6px 16px;border-radius:100px;border:1.5px solid rgba(255,255,255,.6);color:#fff;font-size:8px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">HISTORIA</div>
        </div>
      </div>
    </div>
    <!-- Trust bar -->
    <div style="background:#fff;padding:8px 20px;border-bottom:1px solid #e4ddd0;display:flex;justify-content:center;gap:24px;">
      <div style="text-align:center;"><div style="font-size:6.5px;color:#c8860a;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:1px;">CRAFT</div><div style="font-size:8.5px;color:#7a6a58;">Small Batch</div></div>
      <div style="text-align:center;"><div style="font-size:6.5px;color:#c8860a;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:1px;">COMMITMENT</div><div style="font-size:8.5px;color:#7a6a58;">Sin Crueldad</div></div>
      <div style="text-align:center;"><div style="font-size:6.5px;color:#c8860a;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:1px;">CIENCIA</div><div style="font-size:8.5px;color:#7a6a58;">Testado Dermatólogos</div></div>
    </div>
    <!-- Products -->
    <div style="background:#faf6f0;padding:14px 20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:9px;font-weight:700;color:#2a1f14;border-bottom:1.5px solid #c8860a;padding-bottom:3px;letter-spacing:.5px;">Lo más vendido</span>
        <span style="font-size:8px;color:#9a8878;text-decoration:underline;">Ver todos →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildAuroraMobile(t: IndustryTemplate): string {
  const pills = ['-25%','New','',''];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#faf6f0;border-radius:4px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:3/4;background:#f0e8dc;overflow:hidden;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:4px;left:4px;background:#c8860a;color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;border-radius:100px;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:5px 6px 6px;">
        <div style="font-size:6.5px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;color:#2a1f14;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;font-weight:700;color:#c8860a;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#faf6f0;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <!-- Ann bar -->
    <div style="background:#2a1f14;height:12px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:rgba(232,221,204,.8);font-weight:500;letter-spacing:1.5px;text-transform:uppercase;">Envío Gratis · Libre de Crueldad</div>
    <!-- Nav -->
    <div style="background:#faf6f0;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #e4ddd0;flex-shrink:0;">
      <div style="display:flex;gap:6px;font-size:6.5px;color:#7a6a58;"><span>Shop</span><div style="background:#b91c1c;color:#fff;font-size:5px;font-weight:700;padding:1px 4px;border-radius:2px;">SALE</div></div>
      <span style="font-size:11px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:700;color:#2a1f14;">July</span>
      <div style="display:flex;gap:5px;font-size:10px;color:#2a1f14;">🔍🛒</div>
    </div>
    <!-- Hero -->
    <div style="height:120px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;object-position:center top;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(42,31,20,.85) 0%,rgba(42,31,20,.2) 60%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;">
        <div style="font-size:14px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;color:#fff;line-height:1.1;">El Brillo de<br>la Eternidad</div>
        <div style="display:flex;gap:4px;margin-top:6px;">
          <div style="background:#faf6f0;color:#2a1f14;font-size:5.5px;font-weight:700;padding:3px 8px;border-radius:100px;letter-spacing:1px;">COMPRAR</div>
          <div style="border:1px solid rgba(255,255,255,.6);color:#fff;font-size:5.5px;font-weight:700;padding:3px 8px;border-radius:100px;letter-spacing:1px;">HISTORIA</div>
        </div>
      </div>
    </div>
    <!-- Trust bar -->
    <div style="background:#fff;padding:4px 9px;border-bottom:1px solid #ede6de;display:flex;justify-content:center;gap:8px;align-items:center;">
      <span style="font-size:5.5px;color:#9a8878;">Small Batch</span>
      <span style="font-size:5.5px;color:#c8860a;">·</span>
      <span style="font-size:5.5px;color:#9a8878;">Sin Crueldad</span>
      <span style="font-size:5.5px;color:#c8860a;">·</span>
      <span style="font-size:5.5px;color:#9a8878;">Carbono Neutro</span>
    </div>
    <!-- Products -->
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#faf6f0;">${prods}</div>
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
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.60) 100%);"></div>
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
  const badges = ['-25%','New','-30%',''];
  const badgeColors = ['#16a34a','#1a1a1a','#dc2626',''];
  const cats = ['Crema','Aceite','Crema','Aceite'];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#f6f6f6;border-radius:5px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:1;background:#f0f0f0;display:flex;align-items:center;justify-content:center;padding:10px;">
        <img src="${p.img}" style="height:55px;object-fit:contain;display:block;" loading="lazy">
        ${badges[i]?`<div style="position:absolute;top:4px;left:4px;background:${badgeColors[i]};color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;border-radius:100px;">${badges[i]}</div>`:''}
      </div>
      <div style="padding:4px 5px 6px;">
        <div style="font-size:5.5px;color:#999;margin-bottom:1px;">${cats[i]}</div>
        <div style="font-size:6.5px;color:#1a1a1a;font-weight:600;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;font-weight:700;color:${i===0?'#dc2626':'#1a1a1a'};">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;border-bottom:1px solid #eee;flex-shrink:0;">
      <span style="font-size:9px;font-weight:800;letter-spacing:1.5px;color:#1a1a1a;">Sleek</span>
      <div style="display:flex;gap:6px;font-size:7px;color:#888;"><span>Shop</span><span>Collections</span></div>
      <div style="display:flex;gap:5px;font-size:10px;color:#1a1a1a;">🔍🛒</div>
    </div>
    <div style="height:114px;position:relative;overflow:hidden;flex-shrink:0;display:flex;">
      <div style="width:12%;background:linear-gradient(135deg,#e8b4a0,#f5d5c8);flex-shrink:0;"></div>
      <div style="flex:1;position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.58) 100%);"></div>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 10px;">
          <div style="font-size:6.5px;color:rgba(255,255,255,0.8);margin-bottom:5px;letter-spacing:.5px;">Blend Beauty In You</div>
          <div style="font-size:17px;font-weight:800;color:#fff;line-height:1.05;">Get the skin<br>you want to feel</div>
          <div style="margin-top:7px;padding:3px 12px;background:#fff;color:#1a1a1a;font-size:6px;font-weight:700;border-radius:100px;">Shop Now</div>
        </div>
      </div>
      <div style="width:12%;background:linear-gradient(135deg,#f8d4e0,#f0b8c8);flex-shrink:0;"></div>
    </div>
    <div style="background:#fff;padding:4px 9px 3px;border-bottom:1px solid #eee;display:flex;gap:10px;align-items:center;">
      <span style="font-size:6.5px;font-weight:700;color:#1a1a1a;border-bottom:2px solid #1a1a1a;padding-bottom:2px;">Lo más vendido</span>
      <span style="font-size:6.5px;color:#bbb;">Bestsellers</span>
      <span style="font-size:6.5px;color:#bbb;">Ofertas</span>
    </div>
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
  </div>`;
}

// ── BLOOM ─────────────────────────────────────────────────────────────────

function buildBloomDesktop(t: IndustryTemplate): string {
  const cats = ['Sérum Facial','Aceite Activo','Contorno de Ojos'];
  const pills = ['Nuevo','HOT',''];
  const pillColors = ['#4d8c80','#d4a855',''];
  const prods = t.products.slice(0,3).map((p,i) => `
    <div style="background:#0d2020;border-radius:6px;overflow:hidden;border:1px solid rgba(245,240,232,.1);">
      <div style="position:relative;aspect-ratio:1;background:#122828;display:flex;align-items:center;justify-content:center;padding:20px;">
        <img src="${p.img}" style="height:110px;object-fit:contain;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:10px;left:10px;background:${pillColors[i]};color:#fff;font-size:8px;font-weight:700;padding:2px 8px;border-radius:100px;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:10px 12px 12px;">
        <div style="font-size:9px;color:#a0d4c8;font-weight:600;margin-bottom:2px;letter-spacing:.3px;">${cats[i]}</div>
        <div style="font-size:11px;color:#f5f0e8;font-weight:700;margin-bottom:4px;">${p.name}</div>
        <div style="font-size:11px;font-weight:800;color:#a0d4c8;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#0a1a1a;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Ann bar -->
    <div style="background:#0d2020;height:22px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
      <div style="font-size:8.5px;color:#a0d4c8;font-weight:600;letter-spacing:1px;">✨ Envío Gratis +$50.000 · Devoluciones Gratis · Libre de Crueldad ✨</div>
    </div>
    <!-- Nav dark -->
    <div style="background:rgba(10,26,26,.96);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid rgba(245,240,232,.08);">
      <div style="display:flex;align-items:center;gap:14px;">
        <span style="font-size:9.5px;color:rgba(255,255,255,.85);font-weight:600;letter-spacing:1px;text-transform:uppercase;">Shop</span>
        <span style="font-size:9.5px;color:rgba(255,255,255,.85);font-weight:600;letter-spacing:1px;text-transform:uppercase;">Bestseller</span>
        <span style="font-size:9.5px;color:#d4a855;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Sale</span>
      </div>
      <span style="font-size:18px;font-weight:900;letter-spacing:2px;color:#f5f0e8;text-transform:uppercase;">G<span style="color:#a0d4c8;">LOW</span></span>
      <div style="display:flex;gap:10px;font-size:13px;color:rgba(245,240,232,.6);">🔍 👤 🛒</div>
    </div>
    <!-- Hero full-bleed -->
    <div style="height:186px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;filter:brightness(.5);" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(10,26,26,.38);"></div>
      <div style="position:relative;z-index:2;text-align:center;padding:0 20px;">
        <div style="font-size:9px;color:#a0d4c8;letter-spacing:6px;text-transform:uppercase;font-weight:600;margin-bottom:10px;">Donde Comienza el Skincare</div>
        <div style="font-size:66px;font-family:'Cormorant Garamond',serif;font-weight:600;font-style:italic;color:#f5f0e8;line-height:.9;letter-spacing:-2px;">belleza</div>
        <div style="font-size:8.5px;color:rgba(245,240,232,.6);letter-spacing:4px;font-weight:600;margin-top:10px;border-top:1px solid rgba(245,240,232,.2);padding-top:8px;display:inline-block;text-transform:uppercase;">Para todas las pieles</div>
        <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;">
          <div style="padding:6px 18px;border-radius:100px;background:#4d8c80;color:#fff;font-size:8px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">COMPRAR</div>
          <div style="padding:6px 18px;border-radius:100px;border:1.5px solid rgba(245,240,232,.3);color:#f5f0e8;font-size:8px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">HISTORIA</div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div style="padding:14px 20px;background:#0a1a1a;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-family:'Cormorant Garamond',serif;font-size:13px;font-style:italic;color:#f5f0e8;">Bestsellers</span>
        <span style="font-size:8px;color:#a0d4c8;text-decoration:underline;">Ver todos →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildBloomMobile(t: IndustryTemplate): string {
  const pills = ['Nuevo','HOT'];
  const pillColors = ['#4d8c80','#d4a855'];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#0d2020;border-radius:5px;overflow:hidden;border:1px solid rgba(245,240,232,.08);">
      <div style="position:relative;aspect-ratio:3/4;background:#122828;display:flex;align-items:center;justify-content:center;padding:12px;">
        <img src="${p.img}" style="height:60px;object-fit:contain;display:block;" loading="lazy">
        <div style="position:absolute;top:5px;left:5px;background:${pillColors[i]};color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;border-radius:100px;">${pills[i]}</div>
      </div>
      <div style="padding:5px 6px 7px;">
        <div style="font-size:6px;color:#a0d4c8;font-weight:600;margin-bottom:1px;">${i===0?'Sérum Facial':'Aceite Activo'}</div>
        <div style="font-size:7px;color:#f5f0e8;font-weight:700;margin-bottom:2px;">${p.name}</div>
        <div style="font-size:7px;font-weight:800;color:#a0d4c8;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#0a1a1a;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#0a1a1a;height:12px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#a0d4c8;font-weight:600;letter-spacing:0.5px;">✨ Envío Gratis +$50.000 ✨</div>
    <div style="background:rgba(10,26,26,0.96);height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;flex-shrink:0;border-bottom:1px solid rgba(160,212,200,.1);">
      <span style="font-size:10px;font-weight:800;letter-spacing:2px;color:#a0d4c8;">GLOW</span>
      <div style="display:flex;gap:8px;font-size:6.5px;color:rgba(255,255,255,0.7);"><span>Shop</span><span>Bestseller</span></div>
      <div style="display:flex;gap:5px;font-size:10px;color:#a0d4c8;">🔍🛒</div>
    </div>
    <div style="height:118px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;filter:brightness(.5);" loading="lazy">
      <div style="position:relative;z-index:2;text-align:center;">
        <div style="font-size:36px;font-family:'Cormorant Garamond',serif;font-weight:600;font-style:italic;color:#fff;line-height:1;letter-spacing:-1px;">belleza</div>
        <div style="font-size:5.5px;color:#a0d4c8;letter-spacing:2.5px;font-weight:600;margin-top:5px;border-top:1px solid rgba(160,212,200,.3);padding-top:4px;text-transform:uppercase;">Donde Comienza El Skincare</div>
      </div>
    </div>
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#0a1a1a;">${prods}</div>
  </div>`;
}

// ── AURA ──────────────────────────────────────────────────────────────────

function buildAuraDesktop(t: IndustryTemplate): string {
  const specs = ['DryTech · Compresión','Squat-Proof · 4-Way','Boost · Ligeras','Impermeable · Slim'];
  const pills = ['NUEVO','','HOT',''];
  const prods = t.products.map((p,i) => `
    <div>
      <div style="position:relative;aspect-ratio:3/4;background:#e8f0f8;border-radius:6px;overflow:hidden;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:8px;left:8px;background:#3498db;color:#fff;font-size:7.5px;font-weight:700;padding:2px 7px;border-radius:100px;">${pills[i]}</div>`:''}
      </div>
      <div style="font-size:9px;color:#3498db;font-weight:800;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:8px;color:#888;margin-bottom:3px;">${specs[i]}</div>
      <div style="font-size:10px;color:#1565c0;font-weight:800;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#f8f9fa;height:100%;overflow:hidden;font-family:'Montserrat',sans-serif;">
    <!-- Ann bar -->
    <div style="background:#e3f2fd;height:22px;display:flex;align-items:center;justify-content:center;font-size:8px;color:#1565c0;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">🚚 ENVÍO GRATIS · ACTIVEWEAR DE ALTO DESEMPEÑO</div>
    <!-- Nav -->
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid #e8eaed;">
      <span style="font-size:14px;font-weight:900;letter-spacing:4px;color:#1565c0;text-transform:uppercase;">AURA</span>
      <div style="display:flex;gap:20px;">
        <span style="font-size:10px;color:#666;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Tienda</span>
        <span style="font-size:10px;color:#666;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Colecciones</span>
        <span style="font-size:10px;color:#666;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Sale</span>
      </div>
      <div style="display:flex;gap:12px;align-items:center;">
        <span style="font-size:13px;color:#666;">🔍 ♡</span>
        <div style="background:#3498db;color:#fff;font-size:9px;font-weight:700;padding:5px 14px;border-radius:100px;letter-spacing:1px;">🛒 Carrito</div>
      </div>
    </div>
    <!-- Hero -->
    <div style="height:200px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(13,71,161,.85) 0%,rgba(21,101,192,.4) 55%,rgba(21,101,192,.05) 100%);"></div>
      <div style="position:absolute;bottom:24px;left:24px;">
        <div style="font-size:8.5px;color:#87ceeb;font-weight:700;letter-spacing:4px;margin-bottom:8px;text-transform:uppercase;">Colección Deportiva 2025</div>
        <div style="font-size:32px;font-weight:900;color:#fff;line-height:.95;letter-spacing:-1px;">ROPA PARA<br>TU MEJOR<br><span style="color:#64b5f6;">VERSIÓN.</span></div>
        <div style="display:flex;gap:8px;margin-top:14px;">
          <div style="padding:7px 18px;border-radius:100px;background:#3498db;color:#fff;font-size:8.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Explorar</div>
          <div style="padding:7px 18px;border-radius:100px;border:2px solid rgba(255,255,255,.6);color:#fff;font-size:8.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Tecnología</div>
        </div>
      </div>
      <div style="position:absolute;bottom:24px;right:24px;display:flex;gap:20px;">
        <div style="text-align:center;"><div style="font-size:18px;font-weight:900;color:#fff;line-height:1;">35k+</div><div style="font-size:7px;letter-spacing:2px;color:rgba(255,255,255,.6);text-transform:uppercase;">Atletas</div></div>
        <div style="text-align:center;"><div style="font-size:18px;font-weight:900;color:#fff;line-height:1;">4.9★</div><div style="font-size:7px;letter-spacing:2px;color:rgba(255,255,255,.6);text-transform:uppercase;">Rating</div></div>
      </div>
    </div>
    <!-- Products -->
    <div style="background:#fff;padding:14px 20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="display:flex;gap:14px;align-items:center;">
          <span style="font-size:10px;font-weight:700;color:#1565c0;border-bottom:2px solid #3498db;padding-bottom:2px;text-transform:uppercase;letter-spacing:.5px;">Best Sellers</span>
          <span style="font-size:10px;color:#bbb;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Colecciones</span>
        </div>
        <span style="font-size:8.5px;color:#bbb;text-decoration:underline;">Ver todo</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildAuraMobile(t: IndustryTemplate): string {
  const pills = ['NUEVO','','HOT',''];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#fff;border-radius:5px;overflow:hidden;border:1px solid #e8eaed;">
      <div style="position:relative;aspect-ratio:3/4;background:#e8f0f8;overflow:hidden;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:4px;left:4px;background:#3498db;color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;border-radius:100px;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:4px 5px 6px;">
        <div style="font-size:6.5px;color:#3498db;font-weight:800;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;color:#1565c0;font-weight:800;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#f8f9fa;height:100%;display:flex;flex-direction:column;font-family:'Montserrat',sans-serif;">
    <div style="background:#e3f2fd;height:12px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:#1565c0;letter-spacing:1px;font-weight:700;">🚚 ENVÍO GRATIS · ACTIVEWEAR</div>
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #e8eaed;flex-shrink:0;">
      <span style="font-size:7px;font-weight:900;letter-spacing:2.5px;color:#1565c0;">AURA</span>
      <div style="display:flex;gap:6px;font-size:10px;color:#666;">♡ 🛒</div>
    </div>
    <div style="height:120px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(13,71,161,.85) 0%,rgba(21,101,192,.25) 70%,transparent 100%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;">
        <div style="font-size:6.5px;color:#87ceeb;font-weight:700;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase;">Colección 2025</div>
        <div style="font-size:16px;font-weight:900;color:#fff;line-height:.95;letter-spacing:-.5px;">ROPA PARA<br>TU MEJOR<br><span style="color:#64b5f6;">VERSIÓN.</span></div>
        <div style="margin-top:6px;display:inline-block;padding:3px 10px;background:#3498db;color:#fff;font-size:6px;font-weight:700;border-radius:100px;letter-spacing:1px;">Explorar</div>
      </div>
    </div>
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#f8f9fa;">${prods}</div>
  </div>`;
}

// ── ELEGANCIA ─────────────────────────────────────────────────────────────

function buildEleganciaDesktop(t: IndustryTemplate): string {
  const specs = ['Seda natural · S–XL','Lino premium · Corte recto','Edición limitada','Cuero genuino'];
  const pills = ['Nuevo','','Exclusivo',''];
  const prods = t.products.map((p,i) => `
    <div>
      <div style="position:relative;aspect-ratio:3/4;background:#ede0d4;border-radius:3px;overflow:hidden;margin-bottom:10px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:10px;left:10px;background:#3a3530;color:#f5ede6;font-size:8px;font-weight:500;padding:2px 8px;letter-spacing:1px;text-transform:uppercase;">${pills[i]}</div>`:''}
      </div>
      <div style="font-size:11px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;color:#3a3530;margin-bottom:3px;">${p.name}</div>
      <div style="font-size:9px;color:#9a8878;margin-bottom:4px;">${specs[i]}</div>
      <div style="font-size:11px;font-weight:600;color:#8b6f47;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf5f0;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Ann bar -->
    <div style="background:#3a3530;height:22px;display:flex;align-items:center;justify-content:center;font-size:8px;color:rgba(232,221,204,.75);font-weight:500;letter-spacing:3px;text-transform:uppercase;">Colección Premium · Envío incluido +$200.000</div>
    <!-- Nav centrado -->
    <div style="background:#faf5f0;height:50px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid rgba(107,83,68,.15);">
      <div style="display:flex;gap:20px;">
        <span style="font-size:9.5px;color:#6b5344;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Colección</span>
        <span style="font-size:9.5px;color:#6b5344;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Editorial</span>
        <span style="font-size:9.5px;color:#6b5344;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Lookbook</span>
      </div>
      <span style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;letter-spacing:4px;color:#3a3530;font-style:italic;">ELEGANCIA</span>
      <div style="display:flex;gap:16px;align-items:center;">
        <span style="font-size:9.5px;color:#6b5344;letter-spacing:1.5px;text-transform:uppercase;font-weight:500;">Contacto</span>
        <span style="font-size:16px;color:#8b6f47;">♡</span>
        <span style="font-size:16px;color:#8b6f47;">🛒</span>
      </div>
    </div>
    <!-- Hero -->
    <div style="height:190px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(245,237,230,.95) 0%,rgba(245,237,230,.55) 45%,rgba(245,237,230,0) 80%);"></div>
      <div style="position:absolute;left:28px;top:50%;transform:translateY(-50%);">
        <div style="font-size:9px;color:#8b6f47;letter-spacing:4px;margin-bottom:12px;text-transform:uppercase;font-weight:500;">Línea Premium · Otoño 2025</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:34px;font-style:italic;font-weight:600;color:#3a3530;line-height:1.05;">Sofisticación<br>sin esfuerzo.</div>
        <div style="display:flex;gap:10px;margin-top:16px;">
          <div style="padding:8px 20px;background:#3a3530;color:#f5ede6;font-size:9px;font-weight:500;letter-spacing:2px;text-transform:uppercase;">Descubrir →</div>
          <div style="padding:8px 20px;border:1px solid #8b6f47;color:#3a3530;font-size:9px;font-weight:500;letter-spacing:2px;text-transform:uppercase;">Editorial</div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div style="background:#faf5f0;padding:14px 20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-family:'Cormorant Garamond',serif;font-size:13px;font-style:italic;color:#3a3530;">Piezas Selectas</span>
        <span style="font-size:8px;color:#9a8878;text-decoration:underline;letter-spacing:.5px;">Ver colección →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildEleganciaMobile(t: IndustryTemplate): string {
  const pills = ['Nuevo','','Exclusivo',''];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#faf5f0;border-radius:3px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:3/4;background:#ede0d4;overflow:hidden;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:4px;left:4px;background:#3a3530;color:#f5ede6;font-size:5px;font-weight:500;padding:1px 5px;letter-spacing:.5px;text-transform:uppercase;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:4px 5px 6px;">
        <div style="font-size:6.5px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;color:#3a3530;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;font-weight:600;color:#8b6f47;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#faf5f0;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#3a3530;height:12px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:rgba(232,221,204,.75);font-weight:500;letter-spacing:2px;text-transform:uppercase;">Colección Premium</div>
    <div style="background:#faf5f0;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid rgba(107,83,68,.15);flex-shrink:0;">
      <div style="display:flex;gap:6px;font-size:6px;color:#6b5344;letter-spacing:1.5px;text-transform:uppercase;"><span>Colección</span><span>Editorial</span></div>
      <span style="font-family:'Cormorant Garamond',serif;font-size:10px;font-weight:600;letter-spacing:2px;color:#3a3530;font-style:italic;">ELEGANCIA</span>
      <div style="display:flex;gap:5px;font-size:10px;color:#8b6f47;">♡ 🛒</div>
    </div>
    <div style="height:118px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(245,237,230,.95) 0%,rgba(245,237,230,.45) 50%,rgba(245,237,230,0) 80%);"></div>
      <div style="position:absolute;left:9px;top:50%;transform:translateY(-50%);">
        <div style="font-size:5.5px;color:#8b6f47;letter-spacing:2px;margin-bottom:5px;text-transform:uppercase;">Línea Premium</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:14px;font-style:italic;font-weight:600;color:#3a3530;line-height:1.05;">Sofisticación<br>sin esfuerzo.</div>
        <div style="margin-top:6px;display:inline-block;padding:2px 8px;background:#3a3530;color:#f5ede6;font-size:5.5px;letter-spacing:1.5px;text-transform:uppercase;">Descubrir →</div>
      </div>
    </div>
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#faf5f0;">${prods}</div>
  </div>`;
}

// ── SIMETRÍA ──────────────────────────────────────────────────────────────

function buildSimetriaDesktop(t: IndustryTemplate): string {
  const colors = ['linear-gradient(135deg,#fef3e6,#f4d5a0)', 'linear-gradient(135deg,#e8f4f8,#c5dfe8)', 'linear-gradient(135deg,#f5f0ea,#e8ddd0)'];
  const pills = ['Nuevo','–20%',''];
  const pillColors = ['#111','#f4a855',''];
  const prods = t.products.slice(0, 3).map((p, i) => `
    <div style="background:${colors[i]};border-radius:6px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:8px;left:8px;background:${pillColors[i]};color:#fff;font-size:8px;font-weight:700;padding:2px 7px;border-radius:2px;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:8px 10px 10px;">
        <div style="font-size:10px;color:#1a1a1a;font-weight:700;margin-bottom:2px;">${p.name}</div>
        <div style="font-size:10px;color:#444;font-weight:700;margin-bottom:6px;">${p.price}</div>
        <div style="width:100%;padding:5px 0;border:1.5px solid #1a1a1a;background:#fff;border-radius:2px;font-size:8px;font-weight:700;text-align:center;letter-spacing:1px;">AGREGAR</div>
      </div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'Inter',sans-serif;">
    <!-- Ann bar -->
    <div style="background:#111;height:22px;display:flex;align-items:center;justify-content:center;font-size:8px;color:rgba(255,255,255,.7);font-weight:600;letter-spacing:2px;text-transform:uppercase;">🚚 ENVÍO GRATIS EN COLOMBIA · DEVOLUCIÓN FÁCIL 30 DÍAS</div>
    <!-- Nav -->
    <div style="background:#fff;height:46px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid #ebebeb;">
      <span style="font-size:14px;font-weight:900;letter-spacing:3px;color:#111;text-transform:uppercase;">SIMETRÍA</span>
      <div style="display:flex;gap:22px;">
        <span style="font-size:10px;color:#555;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Tienda</span>
        <span style="font-size:10px;color:#555;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Mujer</span>
        <span style="font-size:10px;color:#555;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Hombre</span>
        <span style="font-size:10px;color:#555;font-weight:600;letter-spacing:.5px;text-transform:uppercase;">Lookbook</span>
        <span style="font-size:10px;color:#f4a855;font-weight:700;letter-spacing:.5px;text-transform:uppercase;">Sale</span>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <span style="font-size:13px;color:#555;">🔍 ♡</span>
        <div style="background:#111;color:#fff;font-size:9px;font-weight:700;padding:5px 14px;border-radius:2px;letter-spacing:.5px;">Carrito (0)</div>
      </div>
    </div>
    <!-- Hero -->
    <div style="height:192px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#f4f4f4;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(255,255,255,.38);"></div>
      <div style="position:relative;z-index:2;text-align:center;padding:0 20px;">
        <div style="font-size:8.5px;color:#444;letter-spacing:5px;font-weight:700;margin-bottom:10px;text-transform:uppercase;">Colección Casual · 2025</div>
        <div style="font-size:54px;font-weight:900;color:#111;line-height:.88;letter-spacing:-2px;text-shadow:0 2px 20px rgba(255,255,255,.6);">TU ESTILO,<br>TU REGLA.</div>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;">
          <div style="padding:8px 22px;background:#111;color:#fff;font-size:9px;font-weight:700;border-radius:2px;letter-spacing:1px;text-transform:uppercase;">Ver Colección</div>
          <div style="padding:8px 22px;border:2px solid #111;color:#111;font-size:9px;font-weight:700;border-radius:2px;letter-spacing:1px;text-transform:uppercase;">Lookbook</div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div style="padding:12px 18px;background:#fff;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="display:flex;gap:6px;">
          <div style="padding:5px 12px;background:#111;color:#fff;border-radius:2px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Mujer</div>
          <div style="padding:5px 12px;border:1.5px solid #ddd;color:#555;border-radius:2px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Hombre</div>
          <div style="padding:5px 12px;border:1.5px solid #ddd;color:#555;border-radius:2px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Todo</div>
        </div>
        <span style="font-size:8.5px;color:#888;text-decoration:underline;">Ver más →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">${prods}</div>
    </div>
  </div>`;
}

function buildSimetriaMobile(t: IndustryTemplate): string {
  const colors = ['linear-gradient(135deg,#fef3e6,#f4d5a0)', 'linear-gradient(135deg,#e8f4f8,#c5dfe8)'];
  const pills = ['Nuevo','–20%'];
  const pillColors = ['#111','#f4a855'];
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:${colors[i]};border-radius:5px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        <div style="position:absolute;top:4px;left:4px;background:${pillColors[i]};color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;border-radius:2px;">${pills[i]}</div>
      </div>
      <div style="padding:4px 5px 6px;">
        <div style="font-size:6.5px;color:#1a1a1a;font-weight:700;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;color:#444;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;">
    <div style="background:#111;height:12px;display:flex;align-items:center;justify-content:center;font-size:5.5px;color:rgba(255,255,255,.7);font-weight:600;letter-spacing:1px;text-transform:uppercase;">🚚 ENVÍO GRATIS · DEVOLUCIÓN 30 DÍAS</div>
    <div style="background:#fff;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #ebebeb;flex-shrink:0;">
      <span style="font-size:7.5px;font-weight:900;letter-spacing:2px;color:#111;text-transform:uppercase;">SIMETRÍA</span>
      <div style="display:flex;gap:6px;font-size:10px;color:#555;">🔍 🛒</div>
    </div>
    <div style="height:116px;position:relative;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" loading="lazy">
      <div style="position:absolute;inset:0;background:rgba(255,255,255,.35);"></div>
      <div style="position:relative;z-index:2;text-align:center;padding:0 8px;">
        <div style="font-size:5.5px;color:#444;letter-spacing:3px;font-weight:700;margin-bottom:5px;text-transform:uppercase;">Colección Casual</div>
        <div style="font-size:28px;font-weight:900;color:#111;line-height:.9;letter-spacing:-1px;">TU ESTILO,<br>TU REGLA.</div>
        <div style="margin-top:8px;display:inline-block;padding:3px 10px;background:#111;color:#fff;font-size:6px;font-weight:700;border-radius:2px;letter-spacing:1px;">Ver Colección</div>
      </div>
    </div>
    <div style="padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;background:#fff;">${prods}</div>
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
  const specs = ['40h Battery · ANC','Noise Cancel · Pro','8Ω · Hi-Res','360° Surround'];
  const pills = ['NUEVO','','HOT',''];
  const prods = t.products.map((p,i) => `
    <div style="background:#0a0a0f;border:1px solid #1e1e30;overflow:hidden;">
      <div style="position:relative;padding:12px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;background:#101018;">
        <img src="${p.img}" style="height:70px;object-fit:contain;display:block;filter:drop-shadow(0 0 10px rgba(79,142,247,.2));" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:5px;left:5px;background:#4f8ef7;color:#fff;font-size:6.5px;font-weight:600;padding:1px 6px;letter-spacing:1px;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:6px 8px 8px;">
        <div style="font-size:7px;color:#4a4a6a;margin-bottom:1px;">${specs[i]}</div>
        <div style="font-size:8.5px;color:#f0f0ff;font-weight:600;margin-bottom:2px;">${p.name}</div>
        <div style="font-size:9px;font-weight:700;color:#4f8ef7;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#050508;height:100%;overflow:hidden;font-family:'Space Grotesk',sans-serif;position:relative;">
    <!-- Grid bg overlay -->
    <div style="position:absolute;inset:0;background-image:linear-gradient(#1e1e30 1px,transparent 1px),linear-gradient(90deg,#1e1e30 1px,transparent 1px);background-size:32px 32px;opacity:.4;pointer-events:none;"></div>
    <!-- Blue glow -->
    <div style="position:absolute;top:50px;left:40%;width:220px;height:220px;background:#4f8ef7;opacity:.05;border-radius:50%;filter:blur(60px);pointer-events:none;"></div>
    <!-- Ann bar -->
    <div style="position:relative;background:rgba(10,10,15,.95);height:20px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #1e1e30;">
      <span style="font-size:7.5px;color:#4a4a6a;letter-spacing:1.5px;font-family:'Space Grotesk',monospace;">LANZAMIENTO</span>
      <span style="font-size:7.5px;color:#4f8ef7;margin-left:6px;font-weight:600;letter-spacing:1px;">— Pro Max disponible ahora</span>
    </div>
    <!-- Nav -->
    <div style="position:relative;background:rgba(5,5,8,.92);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #1e1e30;">
      <span style="font-size:16px;font-weight:700;color:#f0f0ff;letter-spacing:4px;">VOLT<span style="color:#4f8ef7;">.</span></span>
      <div style="display:flex;gap:16px;font-size:9px;color:#6a6a8a;font-weight:500;"><span>Smartphones</span><span>Audio</span><span>Wearables</span><span>Accesorios</span><span style="color:#4f8ef7;">Offers</span></div>
      <div style="background:#4f8ef7;color:#fff;font-size:9px;font-weight:600;padding:5px 14px;letter-spacing:.5px;">Carrito (0)</div>
    </div>
    <!-- Hero -->
    <div style="position:relative;height:158px;display:flex;align-items:center;overflow:hidden;">
      <div style="position:relative;z-index:2;flex:0 0 50%;padding:0 22px;">
        <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(79,142,247,.1);border:1px solid rgba(79,142,247,.25);color:#4f8ef7;font-size:7px;letter-spacing:2px;text-transform:uppercase;padding:3px 9px;margin-bottom:12px;">▣ NUEVO LANZAMIENTO</div>
        <div style="font-size:26px;font-weight:700;line-height:1.0;color:#f0f0ff;margin-bottom:12px;">El futuro<br>es <span style="color:#4f8ef7;">ahora.</span><br><span style="color:#00d4ff;">Tech</span> que<br>lidera.</div>
        <div style="display:flex;gap:12px;">
          <div style="text-align:left;"><div style="font-size:12px;font-weight:700;color:#4f8ef7;">4.9★</div><div style="font-size:5.5px;color:#4a4a6a;letter-spacing:1px;text-transform:uppercase;">Rating</div></div>
          <div style="text-align:left;"><div style="font-size:12px;font-weight:700;color:#4f8ef7;">50k+</div><div style="font-size:5.5px;color:#4a4a6a;letter-spacing:1px;text-transform:uppercase;">Clientes</div></div>
          <div style="text-align:left;"><div style="font-size:12px;font-weight:700;color:#4f8ef7;">24h</div><div style="font-size:5.5px;color:#4a4a6a;letter-spacing:1px;text-transform:uppercase;">Soporte</div></div>
        </div>
      </div>
      <div style="flex:1;height:100%;display:flex;align-items:center;justify-content:center;position:relative;">
        <img src="${t.hero}" style="height:145px;object-fit:contain;filter:drop-shadow(0 0 28px rgba(79,142,247,.35));position:relative;z-index:1;" loading="lazy">
        <div style="position:absolute;top:14px;right:8px;background:#0a0a0f;border:1px solid #1e1e30;padding:7px 11px;z-index:2;">
          <div style="font-size:6px;color:#4a4a6a;letter-spacing:2px;text-transform:uppercase;margin-bottom:1px;">NUEVO</div>
          <div style="font-size:11px;font-weight:700;color:#00d4ff;line-height:1.1;">Pro <span style="color:#f0f0ff;">Max</span></div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div style="position:relative;background:#0a0a0f;border-top:1px solid #1e1e30;padding:8px 16px 12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:7.5px;color:#4a4a6a;letter-spacing:2px;text-transform:uppercase;">// PRODUCTOS</span>
        <span style="font-size:7.5px;color:#4f8ef7;">Ver todos →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;">${prods}</div>
    </div>
  </div>`;
}

function buildVoltMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,_i) => `
    <div style="background:#0a0a0f;border:1px solid #1e1e30;overflow:hidden;">
      <div style="background:#101018;padding:10px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;">
        <img src="${p.img}" style="height:52px;object-fit:contain;filter:drop-shadow(0 0 8px rgba(79,142,247,.2));" loading="lazy">
      </div>
      <div style="padding:4px 6px 6px;">
        <div style="font-size:6.5px;color:#f0f0ff;font-weight:600;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:7px;font-weight:700;color:#4f8ef7;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#050508;height:100%;display:flex;flex-direction:column;font-family:'Space Grotesk',sans-serif;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(#1e1e30 1px,transparent 1px),linear-gradient(90deg,#1e1e30 1px,transparent 1px);background-size:28px 28px;opacity:.4;pointer-events:none;"></div>
    <div style="position:relative;background:rgba(10,10,15,.95);height:12px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #1e1e30;">
      <span style="font-size:5.5px;color:#4a4a6a;letter-spacing:1px;">NUEVO LANZAMIENTO</span>
      <span style="font-size:5.5px;color:#4f8ef7;margin-left:4px;font-weight:600;">— Pro Max</span>
    </div>
    <div style="position:relative;background:rgba(5,5,8,.92);height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #1e1e30;flex-shrink:0;">
      <span style="font-size:9px;font-weight:700;color:#f0f0ff;letter-spacing:3px;">VOLT<span style="color:#4f8ef7;">.</span></span>
      <div style="display:flex;gap:8px;font-size:6.5px;color:#6a6a8a;"><span>Audio</span><span>Wearables</span></div>
      <div style="background:#4f8ef7;color:#fff;font-size:5.5px;font-weight:600;padding:2px 8px;">Carrito</div>
    </div>
    <div style="position:relative;height:128px;display:flex;align-items:center;overflow:hidden;flex-shrink:0;">
      <div style="flex:0 0 50%;padding:0 12px;z-index:2;">
        <div style="display:inline-flex;background:rgba(79,142,247,.1);border:1px solid rgba(79,142,247,.2);color:#4f8ef7;font-size:5.5px;letter-spacing:1.5px;padding:2px 7px;margin-bottom:8px;">▣ NUEVO</div>
        <div style="font-size:20px;font-weight:700;line-height:.97;color:#f0f0ff;margin-bottom:8px;">El futuro<br>es <span style="color:#4f8ef7;">ahora.</span><br><span style="color:#00d4ff;">Tech</span><br>lidera.</div>
        <div style="display:flex;gap:8px;">
          <div style="font-size:9px;font-weight:700;color:#4f8ef7;">4.9★</div>
          <div style="font-size:9px;font-weight:700;color:#4f8ef7;">50k+</div>
        </div>
      </div>
      <div style="flex:1;height:100%;display:flex;align-items:center;justify-content:center;position:relative;">
        <img src="${t.hero}" style="height:115px;object-fit:contain;filter:drop-shadow(0 0 20px rgba(79,142,247,.3));position:relative;z-index:1;" loading="lazy">
      </div>
    </div>
    <div style="position:relative;background:#0a0a0f;border-top:1px solid #1e1e30;padding:6px 7px;flex:1;">
      <div style="font-size:6.5px;color:#4a4a6a;letter-spacing:2px;text-transform:uppercase;margin-bottom:5px;">// PRODUCTOS</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">${prods}</div>
    </div>
  </div>`;
}

// ── NEXUS (Harmony) ────────────────────────────────────────────────────────

function buildNexusDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="background:#fff;border:1px solid #e6e4dc;overflow:hidden;">
      <div style="background:#f0efe9;padding:16px;display:flex;align-items:center;justify-content:center;position:relative;aspect-ratio:1;">
        <img src="${p.img}" style="height:70px;object-fit:contain;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:8px;left:8px;background:#ff4a00;color:#fff;font-size:7px;font-weight:700;padding:2px 7px;letter-spacing:1px;">HOT</div>':''}
      </div>
      <div style="padding:7px 10px 9px;">
        <div style="font-size:8.5px;font-weight:700;color:#141414;margin-bottom:2px;">${p.name}</div>
        <div style="font-size:8.5px;font-weight:800;color:#141414;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#f8f8f6;height:100%;overflow:hidden;font-family:'Outfit',sans-serif;">
    <!-- Ann bar dark -->
    <div style="background:#141414;height:22px;display:flex;align-items:center;justify-content:center;gap:8px;">
      <span style="font-size:8px;color:rgba(255,255,255,.5);letter-spacing:.5px;">Ahorra hasta 60%</span>
      <span style="font-size:8px;color:#ff4a00;font-weight:700;letter-spacing:1px;">código BLACKFRIDAY →</span>
    </div>
    <!-- Nav -->
    <div style="background:#f8f8f6;height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 22px;border-bottom:1px solid #e6e4dc;">
      <span style="font-size:17px;font-weight:800;color:#141414;letter-spacing:2px;">NEX<span style="color:#ff4a00;">US</span></span>
      <div style="display:flex;gap:20px;font-size:9.5px;color:#888;font-weight:500;"><span>Shop</span><span>Collections</span><span>Explore</span><span>Compare</span><span>Contact</span></div>
      <div style="background:#141414;color:#fff;font-size:9px;font-weight:600;padding:6px 16px;letter-spacing:1px;">Carrito (0)</div>
    </div>
    <!-- Hero: dark split -->
    <div style="height:168px;display:flex;overflow:hidden;">
      <!-- Left text on dark -->
      <div style="flex:0 0 46%;background:#141414;display:flex;flex-direction:column;justify-content:center;padding:0 22px;position:relative;overflow:hidden;">
        <div style="position:absolute;font-size:100px;font-weight:900;color:rgba(255,255,255,.03);line-height:1;top:50%;transform:translateY(-50%);left:-10px;pointer-events:none;white-space:nowrap;">AUDIO</div>
        <div style="font-size:8.5px;letter-spacing:3px;text-transform:uppercase;color:#ff4a00;margin-bottom:14px;display:flex;align-items:center;gap:8px;position:relative;">
          <div style="width:18px;height:1.5px;background:#ff4a00;"></div>NUEVO LANZAMIENTO
        </div>
        <div style="font-size:26px;font-weight:800;color:#fff;line-height:1;margin-bottom:14px;position:relative;">El futuro<br>del <em style="font-style:normal;color:#ff4a00;">audio.</em></div>
        <div style="display:flex;gap:8px;position:relative;">
          <div style="background:#ff4a00;color:#fff;font-size:8px;font-weight:700;padding:7px 14px;letter-spacing:1px;text-transform:uppercase;">Comprar</div>
          <div style="border:1px solid rgba(255,255,255,.2);color:#fff;font-size:8px;font-weight:500;padding:6px 14px;">Ver más</div>
        </div>
      </div>
      <!-- Right: image -->
      <div style="flex:1;background:linear-gradient(135deg,#1a1a1a,#0a0a0a);position:relative;overflow:hidden;display:flex;align-items:flex-end;justify-content:center;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;opacity:.7;" loading="lazy">
        <div style="position:absolute;bottom:16px;left:16px;background:#ff4a00;padding:9px 14px;">
          <div style="font-size:8px;color:rgba(255,255,255,.7);margin-bottom:1px;letter-spacing:1px;text-transform:uppercase;">Nuevo</div>
          <div style="font-size:15px;font-weight:800;color:#fff;">Pro Max</div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div style="background:#f8f8f6;padding:10px 16px 12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:8.5px;letter-spacing:2px;text-transform:uppercase;color:#ff4a00;font-weight:600;">BESTSELLERS</span>
        <span style="font-size:8px;color:#888;text-decoration:underline;">Ver todos →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">${prods}</div>
    </div>
  </div>`;
}

function buildNexusMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#fff;border:1px solid #e6e4dc;overflow:hidden;">
      <div style="background:#f0efe9;padding:10px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;position:relative;">
        <img src="${p.img}" style="height:52px;object-fit:contain;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#ff4a00;color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;">HOT</div>':''}
      </div>
      <div style="padding:4px 6px 6px;">
        <div style="font-size:6.5px;font-weight:700;color:#141414;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:7px;font-weight:800;color:#141414;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#f8f8f6;height:100%;display:flex;flex-direction:column;font-family:'Outfit',sans-serif;">
    <div style="background:#141414;height:12px;display:flex;align-items:center;justify-content:center;gap:5px;">
      <span style="font-size:5.5px;color:rgba(255,255,255,.4);">Ahorra hasta 60%</span>
      <span style="font-size:5.5px;color:#ff4a00;font-weight:700;">BLACKFRIDAY →</span>
    </div>
    <div style="background:#f8f8f6;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #e6e4dc;flex-shrink:0;">
      <span style="font-size:10px;font-weight:800;color:#141414;letter-spacing:1.5px;">NEX<span style="color:#ff4a00;">US</span></span>
      <div style="display:flex;gap:8px;font-size:6.5px;color:#888;"><span>Shop</span><span>Collections</span></div>
      <div style="background:#141414;color:#fff;font-size:5.5px;font-weight:600;padding:2px 8px;">Carrito</div>
    </div>
    <div style="height:130px;display:flex;overflow:hidden;flex-shrink:0;">
      <div style="flex:0 0 48%;background:#141414;display:flex;flex-direction:column;justify-content:center;padding:0 10px;position:relative;overflow:hidden;">
        <div style="font-size:7.5px;letter-spacing:2px;text-transform:uppercase;color:#ff4a00;margin-bottom:8px;display:flex;align-items:center;gap:5px;">
          <div style="width:12px;height:1px;background:#ff4a00;"></div>NUEVO
        </div>
        <div style="font-size:18px;font-weight:800;color:#fff;line-height:.98;margin-bottom:10px;">El futuro<br>del <em style="font-style:normal;color:#ff4a00;">audio.</em></div>
        <div style="background:#ff4a00;color:#fff;font-size:6px;font-weight:700;padding:4px 9px;letter-spacing:1px;display:inline-block;width:fit-content;">Comprar</div>
      </div>
      <div style="flex:1;position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;opacity:.7;" loading="lazy">
        <div style="position:absolute;bottom:8px;left:8px;background:#ff4a00;padding:5px 8px;">
          <div style="font-size:6px;color:rgba(255,255,255,.7);letter-spacing:1px;">NUEVO</div>
          <div style="font-size:10px;font-weight:800;color:#fff;">Pro Max</div>
        </div>
      </div>
    </div>
    <div style="background:#f8f8f6;padding:7px;flex:1;">
      <div style="font-size:6px;letter-spacing:2px;text-transform:uppercase;color:#ff4a00;font-weight:600;margin-bottom:5px;">BESTSELLERS</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">${prods}</div>
    </div>
  </div>`;
}

// ── CIRCUIT (Woodstock) ────────────────────────────────────────────────────

function buildCircuitDesktop(t: IndustryTemplate): string {
  const specs = ['4K Display · RTX','16GB RAM · SSD','128MP · 5000mAh','42mm · GPS'];
  const pills = ['NUEVO','','HOT',''];
  const prods = t.products.map((p,i) => `
    <div style="background:#0e1218;border:1px solid #1e2d3e;overflow:hidden;">
      <div style="position:relative;background:#141b24;padding:14px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;">
        <img src="${p.img}" style="height:68px;object-fit:contain;display:block;filter:drop-shadow(0 0 8px rgba(0,255,136,.12));" loading="lazy">
        ${pills[i]?`<div style="position:absolute;top:6px;left:6px;background:#00ff88;color:#080b10;font-size:6px;font-weight:700;padding:1px 6px;letter-spacing:1px;">${pills[i]}</div>`:''}
      </div>
      <div style="padding:6px 8px 8px;">
        <div style="font-size:7px;color:#4a6080;margin-bottom:1px;font-family:monospace;">${specs[i]}</div>
        <div style="font-size:8.5px;color:#e0eaff;font-weight:600;margin-bottom:2px;letter-spacing:.3px;">${p.name}</div>
        <div style="font-size:9px;font-weight:700;color:#00ff88;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#080b10;height:100%;overflow:hidden;font-family:'Inter',sans-serif;position:relative;">
    <!-- Grid bg -->
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,255,136,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.04) 1px,transparent 1px);background-size:28px 28px;pointer-events:none;"></div>
    <!-- Green glow bottom -->
    <div style="position:absolute;bottom:-60px;left:20%;width:300px;height:200px;background:rgba(0,255,136,.04);border-radius:50%;filter:blur(50px);pointer-events:none;"></div>
    <!-- Ann bar -->
    <div style="position:relative;background:rgba(14,18,24,.95);height:20px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #1e2d3e;">
      <span style="font-size:7.5px;color:#4a6080;letter-spacing:1.5px;">⟢ NUEVO LANZAMIENTO</span>
      <span style="font-size:7.5px;color:#00ff88;margin-left:6px;font-weight:600;">— RTX 5090 en stock</span>
    </div>
    <!-- Nav -->
    <div style="position:relative;background:rgba(8,11,16,.95);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #1e2d3e;">
      <span style="font-size:16px;font-weight:700;color:#e0eaff;letter-spacing:3px;font-family:'Inter',sans-serif;">CIR<span style="color:#00ff88;">CUIT</span></span>
      <div style="display:flex;gap:16px;font-size:9px;color:#4a6080;font-weight:500;"><span>Gaming</span><span>Laptops</span><span>Periféricos</span><span>Mobile</span><span style="color:#00ff88;">Offers</span></div>
      <div style="background:#00ff88;color:#080b10;font-size:9px;font-weight:700;padding:5px 14px;letter-spacing:1px;">Carrito (0)</div>
    </div>
    <!-- Hero -->
    <div style="position:relative;height:160px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;">
      <!-- Left text -->
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 22px;position:relative;z-index:2;">
        <div style="font-size:8.5px;letter-spacing:3px;text-transform:uppercase;color:#00ff88;margin-bottom:12px;display:flex;align-items:center;gap:8px;">
          <div style="width:18px;height:1px;background:#00ff88;"></div>GAMING & TECH
        </div>
        <div style="font-size:28px;font-weight:700;line-height:.95;color:#e0eaff;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:14px;">DOMINA<br>EL <span style="color:#00ff88;">JUEGO.</span></div>
        <div style="display:flex;gap:8px;">
          <div style="background:#00ff88;color:#080b10;font-size:8px;font-weight:700;padding:7px 14px;letter-spacing:1px;text-transform:uppercase;">Ver productos</div>
          <div style="border:1px solid #1e2d3e;color:#e0eaff;font-size:8px;padding:6px 14px;">Comparar</div>
        </div>
      </div>
      <!-- Right image -->
      <div style="position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
        <img src="${t.hero}" style="height:145px;object-fit:contain;filter:drop-shadow(0 0 24px rgba(0,255,136,.25));position:relative;z-index:1;" loading="lazy">
      </div>
    </div>
    <!-- Products -->
    <div style="position:relative;background:#0e1218;border-top:1px solid #1e2d3e;padding:8px 16px 12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:7.5px;color:#4a6080;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">// PRODUCTS</span>
        <span style="font-size:7.5px;color:#00ff88;">Ver todos →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;">${prods}</div>
    </div>
  </div>`;
}

function buildCircuitMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#0e1218;border:1px solid #1e2d3e;overflow:hidden;">
      <div style="background:#141b24;padding:10px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;position:relative;">
        <img src="${p.img}" style="height:52px;object-fit:contain;filter:drop-shadow(0 0 6px rgba(0,255,136,.15));" loading="lazy">
        ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#00ff88;color:#080b10;font-size:5.5px;font-weight:700;padding:1px 5px;letter-spacing:1px;">NUEVO</div>':''}
      </div>
      <div style="padding:4px 6px 6px;">
        <div style="font-size:6.5px;color:#e0eaff;font-weight:600;margin-bottom:1px;letter-spacing:.3px;">${p.name}</div>
        <div style="font-size:7px;font-weight:700;color:#00ff88;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#080b10;height:100%;display:flex;flex-direction:column;font-family:'Inter',sans-serif;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,255,136,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.04) 1px,transparent 1px);background-size:24px 24px;pointer-events:none;"></div>
    <div style="position:relative;background:rgba(14,18,24,.95);height:12px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #1e2d3e;">
      <span style="font-size:5.5px;color:#4a6080;letter-spacing:1px;">⟢ NUEVO LANZAMIENTO</span>
      <span style="font-size:5.5px;color:#00ff88;margin-left:4px;font-weight:600;">RTX 5090</span>
    </div>
    <div style="position:relative;background:rgba(8,11,16,.95);height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #1e2d3e;flex-shrink:0;">
      <span style="font-size:9px;font-weight:700;color:#e0eaff;letter-spacing:2px;">CIR<span style="color:#00ff88;">CUIT</span></span>
      <div style="display:flex;gap:7px;font-size:6.5px;color:#4a6080;"><span>Gaming</span><span>Laptops</span></div>
      <div style="background:#00ff88;color:#080b10;font-size:5.5px;font-weight:700;padding:2px 8px;letter-spacing:.5px;">Carrito</div>
    </div>
    <div style="position:relative;height:130px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;flex-shrink:0;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 10px;z-index:2;">
        <div style="font-size:7px;letter-spacing:2px;text-transform:uppercase;color:#00ff88;margin-bottom:8px;display:flex;align-items:center;gap:5px;">
          <div style="width:12px;height:1px;background:#00ff88;"></div>GAMING
        </div>
        <div style="font-size:20px;font-weight:700;line-height:.92;color:#e0eaff;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">DOMINA<br>EL <span style="color:#00ff88;">JUEGO.</span></div>
        <div style="background:#00ff88;color:#080b10;font-size:6px;font-weight:700;padding:5px 10px;letter-spacing:1px;display:inline-block;width:fit-content;">Ver más</div>
      </div>
      <div style="position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;">
        <img src="${t.hero}" style="height:118px;object-fit:contain;filter:drop-shadow(0 0 16px rgba(0,255,136,.2));" loading="lazy">
      </div>
    </div>
    <div style="position:relative;background:#0e1218;border-top:1px solid #1e2d3e;padding:6px 7px;flex:1;">
      <div style="font-size:6px;color:#4a6080;letter-spacing:2px;text-transform:uppercase;margin-bottom:5px;font-family:monospace;">// PRODUCTS</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">${prods}</div>
    </div>
  </div>`;
}

// ── APEX (Sports — Activewear Premium) ─────────────────────────────────────

function buildApexDesktop(t: IndustryTemplate): string {
  const pills = ['NEW','SALE','','HOT'];
  const prods = t.products.map((p,i) => `
    <div style="cursor:pointer;">
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;margin-bottom:6px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0);"></div>
        ${pills[i]?`<div style="position:absolute;top:6px;left:6px;background:#e63030;color:#fff;font-size:7px;font-weight:700;padding:2px 6px;letter-spacing:1.5px;">${pills[i]}</div>`:''}
      </div>
      <div style="font-size:9.5px;font-weight:700;color:#f5f5f5;letter-spacing:1px;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:9px;color:#e63030;font-weight:700;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#0a0a0a;height:100%;overflow:hidden;font-family:'Barlow',sans-serif;">
    <div style="background:#e63030;height:22px;display:flex;align-items:center;justify-content:center;gap:20px;">
      <span style="font-size:8px;color:#fff;font-weight:700;letter-spacing:2px;">ENVÍO GRATIS</span>
      <span style="font-size:8px;color:rgba(255,255,255,.5);">·</span>
      <span style="font-size:8px;color:#fff;font-weight:700;letter-spacing:2px;">ACTIVEWEAR PREMIUM</span>
      <span style="font-size:8px;color:rgba(255,255,255,.5);">·</span>
      <span style="font-size:8px;color:#fff;font-weight:700;letter-spacing:2px;">30 DÍAS DEVOLUCIÓN</span>
    </div>
    <div style="background:rgba(10,10,10,.97);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #2a2a2a;">
      <div style="display:flex;gap:18px;"><span style="font-size:9px;color:#666;letter-spacing:1.5px;text-transform:uppercase;">Hombre</span><span style="font-size:9px;color:#666;letter-spacing:1.5px;text-transform:uppercase;">Mujer</span><span style="font-size:9px;color:#666;letter-spacing:1.5px;text-transform:uppercase;">Accesorios</span></div>
      <span style="font-size:16px;font-weight:700;letter-spacing:5px;color:#f5f5f5;text-transform:uppercase;">APEX</span>
      <div style="display:flex;gap:12px;font-size:14px;color:#666;">♡ 🛒</div>
    </div>
    <div style="height:176px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(10,10,10,0.88) 35%,rgba(10,10,10,0.15) 100%);"></div>
      <div style="position:absolute;top:0;left:0;bottom:0;display:flex;flex-direction:column;justify-content:center;padding:0 24px;max-width:55%;">
        <div style="font-size:8px;font-weight:700;color:#e63030;letter-spacing:4px;margin-bottom:8px;text-transform:uppercase;">ACTIVEWEAR</div>
        <div style="font-size:28px;font-weight:700;color:#fff;line-height:.92;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">TU LÍMITE<br>ES EL <span style="color:#e63030;">CIELO.</span></div>
        <div style="display:inline-block;padding:7px 18px;background:#e63030;color:#fff;font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Comprar →</div>
      </div>
      <div style="position:absolute;bottom:12px;right:20px;display:flex;gap:20px;">
        <div style="text-align:center;"><div style="font-size:18px;font-weight:700;color:#fff;">50K+</div><div style="font-size:7px;letter-spacing:2px;color:#666;text-transform:uppercase;">Clientes</div></div>
        <div style="text-align:center;"><div style="font-size:18px;font-weight:700;color:#fff;">4.9★</div><div style="font-size:7px;letter-spacing:2px;color:#666;text-transform:uppercase;">Rating</div></div>
      </div>
    </div>
    <div style="background:#0a0a0a;padding:12px 16px 8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:10px;font-weight:700;color:#f5f5f5;letter-spacing:1.5px;text-transform:uppercase;">Nueva Colección</span>
        <span style="font-size:8.5px;color:#e63030;letter-spacing:1px;text-transform:uppercase;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">${prods}</div>
    </div>
  </div>`;
}

function buildApexMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="position:relative;aspect-ratio:3/4;overflow:hidden;">
      <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 55%);"></div>
      ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#e63030;color:#fff;font-size:5.5px;font-weight:700;padding:1px 5px;letter-spacing:1px;">NEW</div>':''}
      <div style="position:absolute;bottom:5px;left:5px;right:5px;">
        <div style="font-size:6px;color:#fff;font-weight:700;letter-spacing:.5px;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;color:#e63030;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#0a0a0a;height:100%;display:flex;flex-direction:column;font-family:'Barlow',sans-serif;">
    <div style="background:#e63030;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:#fff;font-weight:700;letter-spacing:1.5px;">ENVÍO GRATIS · ACTIVEWEAR PREMIUM</span></div>
    <div style="background:#0a0a0a;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #2a2a2a;flex-shrink:0;">
      <span style="font-size:11px;font-weight:700;letter-spacing:4px;color:#f5f5f5;">APEX</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#666;">♡ 🛒</div>
    </div>
    <div style="height:125px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(10,10,10,0.85) 40%,rgba(10,10,10,0.1) 100%);"></div>
      <div style="position:absolute;top:0;left:0;bottom:0;display:flex;flex-direction:column;justify-content:center;padding:0 10px;max-width:60%;">
        <div style="font-size:6px;color:#e63030;letter-spacing:2px;font-weight:700;margin-bottom:6px;text-transform:uppercase;">ACTIVEWEAR</div>
        <div style="font-size:18px;font-weight:700;color:#fff;line-height:.92;text-transform:uppercase;margin-bottom:8px;">TU LÍMITE<br>ES EL <span style="color:#e63030;">CIELO.</span></div>
        <div style="display:inline-block;padding:4px 10px;background:#e63030;color:#fff;font-size:6px;font-weight:700;letter-spacing:1px;text-transform:uppercase;width:fit-content;">Comprar →</div>
      </div>
    </div>
    <div style="background:#111;border-top:1px solid #2a2a2a;padding:6px 7px;flex:1;">
      <div style="font-size:6px;color:#666;letter-spacing:2px;text-transform:uppercase;margin-bottom:5px;font-weight:700;">NUEVA COLECCIÓN</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">${prods}</div>
    </div>
  </div>`;
}

// ── STRIDE (Sports — Running Outdoor) ──────────────────────────────────────

function buildStrideDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="background:#fff;border:1px solid #c8ddc8;overflow:hidden;">
      <div style="position:relative;background:#ebf0eb;padding:14px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;">
        <img src="${p.img}" style="height:64px;object-fit:contain;display:block;transition:transform .3s;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:6px;left:6px;background:#2d6a2d;color:#fff;font-size:7px;font-weight:600;padding:2px 7px;letter-spacing:1px;">NUEVO</div>':''}
      </div>
      <div style="padding:8px 10px 10px;">
        <div style="font-size:9px;font-weight:600;color:#0f1f0f;letter-spacing:.5px;margin-bottom:2px;">${p.name}</div>
        <div style="font-size:9px;color:#5a7a5a;margin-bottom:6px;letter-spacing:.3px;">Running Premium</div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:10px;font-weight:700;color:#0f1f0f;">${p.price}</span>
          <div style="background:#2d6a2d;color:#fff;font-size:7px;font-weight:600;padding:3px 8px;letter-spacing:.5px;">+ CARRITO</div>
        </div>
      </div>
    </div>`).join('');
  return `<div style="background:#f5f8f5;height:100%;overflow:hidden;font-family:'Source Sans 3',sans-serif;">
    <div style="background:#2d6a2d;height:22px;display:flex;align-items:center;justify-content:center;gap:24px;">
      <span style="font-size:8px;color:rgba(255,255,255,.7);letter-spacing:2px;text-transform:uppercase;">🏃 Envío gratis +$200k</span>
      <span style="font-size:8px;color:rgba(255,255,255,.4);">·</span>
      <span style="font-size:8px;color:#7fbf3f;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Tecnología Trail</span>
      <span style="font-size:8px;color:rgba(255,255,255,.4);">·</span>
      <span style="font-size:8px;color:rgba(255,255,255,.7);letter-spacing:2px;text-transform:uppercase;">Devolución 30D</span>
    </div>
    <div style="background:rgba(245,248,245,.97);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #c8ddc8;">
      <span style="font-size:16px;font-weight:700;letter-spacing:5px;color:#0f1f0f;text-transform:uppercase;">STRIDE</span>
      <div style="display:flex;gap:20px;"><span style="font-size:9.5px;color:#5a7a5a;letter-spacing:.5px;">Running</span><span style="font-size:9.5px;color:#5a7a5a;letter-spacing:.5px;">Trail</span><span style="font-size:9.5px;color:#5a7a5a;letter-spacing:.5px;">Accesorios</span></div>
      <div style="display:flex;gap:12px;font-size:14px;color:#0f1f0f;">♡ 🛒</div>
    </div>
    <div style="height:172px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(15,31,15,.86) 0%,rgba(15,31,15,.35) 55%,rgba(15,31,15,.1) 100%);"></div>
      <div style="position:absolute;bottom:20px;left:24px;max-width:65%;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <div style="width:20px;height:2px;background:#7fbf3f;"></div>
          <span style="font-size:8px;letter-spacing:4px;text-transform:uppercase;color:#7fbf3f;font-weight:600;">RUNNING PREMIUM</span>
        </div>
        <div style="font-size:26px;font-weight:700;color:#fff;line-height:.92;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;">CORRE MÁS.<br><span style="color:#7fbf3f;">LLEGA MÁS LEJOS.</span></div>
        <div style="display:inline-block;padding:7px 18px;background:#7fbf3f;color:#0f1f0f;font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Ver modelos →</div>
      </div>
    </div>
    <div style="background:#f5f8f5;padding:10px 16px 8px;border-top:1px solid #c8ddc8;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:9.5px;font-weight:700;color:#0f1f0f;letter-spacing:1px;text-transform:uppercase;">Más vendidos</span>
        <span style="font-size:8.5px;color:#2d6a2d;letter-spacing:1px;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">${prods}</div>
    </div>
  </div>`;
}

function buildStrideMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#fff;border:1px solid #c8ddc8;overflow:hidden;">
      <div style="background:#ebf0eb;padding:8px;display:flex;align-items:center;justify-content:center;aspect-ratio:1;position:relative;">
        <img src="${p.img}" style="height:40px;object-fit:contain;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:3px;left:3px;background:#2d6a2d;color:#fff;font-size:5.5px;font-weight:600;padding:1px 4px;letter-spacing:1px;">NEW</div>':''}
      </div>
      <div style="padding:4px 5px 5px;">
        <div style="font-size:6px;color:#0f1f0f;font-weight:600;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;color:#0f1f0f;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#f5f8f5;height:100%;display:flex;flex-direction:column;font-family:'Source Sans 3',sans-serif;">
    <div style="background:#2d6a2d;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:rgba(255,255,255,.7);letter-spacing:1.5px;text-transform:uppercase;">🏃 RUNNING PREMIUM · ENVÍO GRATIS</span></div>
    <div style="background:#f5f8f5;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #c8ddc8;flex-shrink:0;">
      <span style="font-size:11px;font-weight:700;letter-spacing:4px;color:#0f1f0f;">STRIDE</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#0f1f0f;">♡ 🛒</div>
    </div>
    <div style="height:125px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(15,31,15,.85) 0%,transparent 55%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;">
        <div style="font-size:16px;font-weight:700;color:#fff;line-height:.92;text-transform:uppercase;margin-bottom:6px;">CORRE MÁS.<br><span style="color:#7fbf3f;">MÁS LEJOS.</span></div>
        <div style="display:inline-block;padding:3px 10px;background:#7fbf3f;color:#0f1f0f;font-size:6px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Ver modelos</div>
      </div>
    </div>
    <div style="background:#f5f8f5;border-top:1px solid #c8ddc8;padding:6px 7px;flex:1;">
      <div style="font-size:6px;color:#2d6a2d;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:5px;">MÁS VENDIDOS</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">${prods}</div>
    </div>
  </div>`;
}

// ── ARENA (Sports — Gym Performance) ───────────────────────────────────────

function buildArenaDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="background:#141414;border:1px solid #2a2a2a;overflow:hidden;">
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,14,14,0.8) 0%,transparent 55%);"></div>
        ${i===0?'<div style="position:absolute;top:6px;left:6px;background:#f5e000;color:#0e0e0e;font-size:7px;font-weight:700;padding:2px 6px;letter-spacing:1px;">HOT</div>':''}
        <div style="position:absolute;bottom:6px;left:6px;right:6px;">
          <div style="font-size:8.5px;font-weight:600;color:#fff;letter-spacing:.5px;margin-bottom:1px;">${p.name}</div>
          <div style="font-size:9px;color:#f5e000;font-weight:700;">${p.price}</div>
        </div>
      </div>
    </div>`).join('');
  return `<div style="background:#0e0e0e;height:100%;overflow:hidden;font-family:'Rajdhani',sans-serif;">
    <div style="background:#f5e000;height:22px;display:flex;align-items:center;justify-content:space-around;padding:0 16px;">
      <span style="font-size:8px;color:#0e0e0e;font-weight:700;letter-spacing:2px;text-transform:uppercase;">🏋️ ENVÍO GRATIS</span>
      <span style="font-size:8px;color:#0e0e0e;font-weight:700;letter-spacing:2px;text-transform:uppercase;">⚡ PAGO SEGURO</span>
      <span style="font-size:8px;color:#0e0e0e;font-weight:700;letter-spacing:2px;text-transform:uppercase;">🔄 DEVOLUCIÓN 30D</span>
    </div>
    <div style="background:#0e0e0e;height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;">
      <div style="display:flex;gap:18px;"><span style="font-size:9px;color:#666;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Ropa</span><span style="font-size:9px;color:#666;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Calzado</span><span style="font-size:9px;color:#666;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Equipos</span></div>
      <span style="font-size:18px;font-weight:700;letter-spacing:5px;color:#fff;text-transform:uppercase;">ARE<span style="color:#f5e000;">NA</span></span>
      <div style="background:#f5e000;color:#0e0e0e;font-size:8px;font-weight:700;padding:4px 12px;letter-spacing:1.5px;text-transform:uppercase;">Carrito (0)</div>
    </div>
    <div style="height:172px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(14,14,14,0.9) 45%,rgba(14,14,14,0.25) 100%);"></div>
      <div style="position:absolute;top:0;left:0;bottom:0;display:flex;flex-direction:column;justify-content:center;padding:0 24px;max-width:58%;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <div style="width:28px;height:3px;background:#f5e000;"></div>
          <span style="font-size:8px;letter-spacing:4px;text-transform:uppercase;color:#f5e000;font-weight:700;">GYM PERFORMANCE</span>
        </div>
        <div style="font-size:30px;font-weight:700;color:#fff;line-height:.88;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">NO HAY<br><span style="color:#f5e000;">LÍMITES.</span></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <div style="padding:7px 16px;background:#f5e000;color:#0e0e0e;font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Comprar ahora →</div>
          <div style="padding:7px 16px;border:1px solid rgba(255,255,255,0.25);color:#fff;font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Ver colección</div>
        </div>
      </div>
      <div style="position:absolute;bottom:12px;left:24px;display:flex;gap:24px;">
        <div style="border-left:3px solid #f5e000;padding-left:10px;"><div style="font-size:16px;font-weight:700;color:#fff;line-height:1;">10K+</div><div style="font-size:7px;letter-spacing:2px;text-transform:uppercase;color:#666;">Atletas</div></div>
        <div style="border-left:3px solid #f5e000;padding-left:10px;"><div style="font-size:16px;font-weight:700;color:#fff;line-height:1;">4.8★</div><div style="font-size:7px;letter-spacing:2px;text-transform:uppercase;color:#666;">Rating</div></div>
      </div>
    </div>
    <div style="padding:10px 16px 8px;background:#0e0e0e;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:9px;font-weight:700;color:#e8e8e8;letter-spacing:2px;text-transform:uppercase;">Top Productos</span>
        <span style="font-size:8px;color:#f5e000;font-weight:600;letter-spacing:1px;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">${prods}</div>
    </div>
  </div>`;
}

function buildArenaMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#141414;border:1px solid #2a2a2a;overflow:hidden;position:relative;aspect-ratio:3/4;">
      <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,14,14,0.85) 0%,transparent 50%);"></div>
      ${i===0?'<div style="position:absolute;top:3px;left:3px;background:#f5e000;color:#0e0e0e;font-size:5.5px;font-weight:700;padding:1px 5px;letter-spacing:1px;">HOT</div>':''}
      <div style="position:absolute;bottom:5px;left:5px;right:5px;">
        <div style="font-size:6px;color:#fff;font-weight:600;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;color:#f5e000;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#0e0e0e;height:100%;display:flex;flex-direction:column;font-family:'Rajdhani',sans-serif;">
    <div style="background:#f5e000;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:#0e0e0e;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">⚡ GYM PERFORMANCE · ENVÍO GRATIS</span></div>
    <div style="background:#0e0e0e;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;flex-shrink:0;">
      <span style="font-size:11px;font-weight:700;letter-spacing:3px;color:#fff;">ARE<span style="color:#f5e000;">NA</span></span>
      <div style="background:#f5e000;color:#0e0e0e;font-size:5.5px;font-weight:700;padding:2px 8px;letter-spacing:1px;">CARRITO</div>
    </div>
    <div style="height:130px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(14,14,14,0.9) 45%,rgba(14,14,14,0.1) 100%);"></div>
      <div style="position:absolute;top:0;left:0;bottom:0;display:flex;flex-direction:column;justify-content:center;padding:0 10px;max-width:60%;">
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:7px;">
          <div style="width:18px;height:2px;background:#f5e000;"></div>
          <span style="font-size:6px;letter-spacing:2px;text-transform:uppercase;color:#f5e000;font-weight:700;">GYM</span>
        </div>
        <div style="font-size:22px;font-weight:700;color:#fff;line-height:.88;text-transform:uppercase;margin-bottom:8px;">NO HAY<br><span style="color:#f5e000;">LÍMITES.</span></div>
        <div style="display:inline-block;padding:4px 10px;background:#f5e000;color:#0e0e0e;font-size:6px;font-weight:700;letter-spacing:1px;text-transform:uppercase;width:fit-content;">Comprar →</div>
      </div>
    </div>
    <div style="background:#111;border-top:1px solid #2a2a2a;padding:6px 7px;flex:1;">
      <div style="font-size:6px;color:#f5e000;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:5px;">TOP PRODUCTOS</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">${prods}</div>
    </div>
  </div>`;
}

// ── HAVEN (Home — Contemporáneo Cálido) ────────────────────────────────────

function buildHavenDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="cursor:pointer;">
      <div style="position:relative;aspect-ratio:1;overflow:hidden;background:#f3ede4;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:8px;left:8px;background:#c06840;color:#fff;font-size:7px;letter-spacing:1px;padding:2px 7px;font-weight:600;">POPULAR</div>':''}
      </div>
      <div style="font-family:'Playfair Display',serif;font-size:10px;color:#1c1410;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:8.5px;color:#8a7060;margin-bottom:3px;letter-spacing:.3px;">Hogar Contemporáneo</div>
      <div style="font-size:9.5px;font-weight:600;color:#1c1410;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf8f5;height:100%;overflow:hidden;font-family:'Jost',sans-serif;">
    <div style="background:#1c1410;height:22px;display:flex;align-items:center;justify-content:center;gap:24px;">
      <span style="font-size:8px;color:rgba(255,255,255,.6);letter-spacing:2px;text-transform:uppercase;">🚚 Envío gratis</span>
      <span style="font-size:10px;color:#c06840;">·</span>
      <span style="font-size:8px;color:rgba(255,255,255,.6);letter-spacing:2px;text-transform:uppercase;">✓ Garantía 2 años</span>
      <span style="font-size:10px;color:#c06840;">·</span>
      <span style="font-size:8px;color:rgba(255,255,255,.6);letter-spacing:2px;text-transform:uppercase;">🔄 30 días</span>
    </div>
    <div style="background:rgba(250,248,245,.95);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #d8cec4;">
      <div style="display:flex;gap:20px;"><span style="font-size:9.5px;color:#8a7060;">Sala</span><span style="font-size:9.5px;color:#8a7060;">Comedor</span><span style="font-size:9.5px;color:#8a7060;">Dormitorio</span></div>
      <span style="font-family:'Playfair Display',serif;font-size:16px;color:#1c1410;letter-spacing:4px;">HAVEN</span>
      <div style="display:flex;gap:12px;font-size:14px;color:#1c1410;">♡ 🛒</div>
    </div>
    <div style="height:176px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(28,20,16,0.80) 0%,rgba(28,20,16,0.25) 55%,rgba(28,20,16,0.05) 100%);"></div>
      <div style="position:absolute;bottom:24px;left:24px;max-width:60%;">
        <div style="font-size:8px;letter-spacing:4px;text-transform:uppercase;color:#c06840;margin-bottom:10px;font-weight:500;">DISEÑO DE HOGAR</div>
        <div style="font-family:'Playfair Display',serif;font-size:26px;font-weight:400;color:#fff;line-height:1.05;font-style:italic;margin-bottom:14px;">Espacios que<br>inspiran.</div>
        <div style="display:inline-block;padding:8px 20px;background:#c06840;color:#fff;font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Explorar →</div>
      </div>
      <div style="position:absolute;bottom:24px;right:24px;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.5);writing-mode:vertical-rl;">SCROLL</div>
    </div>
    <div style="background:#faf8f5;padding:12px 16px 8px;border-top:1px solid #d8cec4;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div>
          <div style="font-size:8px;letter-spacing:3px;text-transform:uppercase;color:#c06840;margin-bottom:2px;">Nuestros Favoritos</div>
          <div style="font-family:'Playfair Display',serif;font-size:12px;color:#1c1410;font-style:italic;">Diseño que permanece</div>
        </div>
        <span style="font-size:8.5px;color:#c06840;letter-spacing:1px;text-transform:uppercase;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildHavenMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div>
      <div style="aspect-ratio:1;overflow:hidden;background:#f3ede4;margin-bottom:4px;position:relative;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#c06840;color:#fff;font-size:5.5px;padding:1px 5px;font-weight:600;letter-spacing:.5px;">POP</div>':''}
      </div>
      <div style="font-family:'Playfair Display',serif;font-size:6.5px;color:#1c1410;margin-bottom:1px;font-style:italic;">${p.name}</div>
      <div style="font-size:6.5px;font-weight:600;color:#1c1410;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf8f5;height:100%;display:flex;flex-direction:column;font-family:'Jost',sans-serif;">
    <div style="background:#1c1410;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:rgba(255,255,255,.6);letter-spacing:1.5px;text-transform:uppercase;">🚚 Envío gratis · ✓ Garantía 2 años</span></div>
    <div style="background:#faf8f5;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #d8cec4;flex-shrink:0;">
      <span style="font-family:'Playfair Display',serif;font-size:12px;color:#1c1410;letter-spacing:3px;">HAVEN</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#1c1410;">♡ 🛒</div>
    </div>
    <div style="height:125px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(28,20,16,0.82) 0%,rgba(28,20,16,0.2) 55%,transparent 100%);"></div>
      <div style="position:absolute;bottom:12px;left:10px;max-width:65%;">
        <div style="font-size:7px;letter-spacing:3px;text-transform:uppercase;color:#c06840;margin-bottom:6px;">HOGAR</div>
        <div style="font-family:'Playfair Display',serif;font-size:16px;color:#fff;line-height:1.05;font-style:italic;margin-bottom:7px;">Espacios que<br>inspiran.</div>
        <div style="display:inline-block;padding:3px 10px;background:#c06840;color:#fff;font-size:6px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">Explorar →</div>
      </div>
    </div>
    <div style="background:#faf8f5;border-top:1px solid #d8cec4;padding:7px 9px;flex:1;">
      <div style="font-family:'Playfair Display',serif;font-size:7px;color:#1c1410;font-style:italic;margin-bottom:6px;">Nuestros Favoritos</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">${prods}</div>
    </div>
  </div>`;
}

// ── NORDIA (Home — Escandinavo Minimalista) ────────────────────────────────

function buildNordiaDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="cursor:pointer;">
      <div style="position:relative;aspect-ratio:1;overflow:hidden;background:#f0ece4;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:8px;left:8px;background:#1e1a16;color:#fff;font-size:7px;letter-spacing:1px;padding:2px 7px;font-weight:600;">NUEVO</div>':''}
      </div>
      <div style="font-family:'Fraunces',serif;font-size:10px;font-style:italic;color:#1e1a16;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:8.5px;color:#9a8a7a;margin-bottom:3px;">Diseño nórdico</div>
      <div style="font-size:9.5px;font-weight:600;color:#1e1a16;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#f9f7f3;height:100%;overflow:hidden;font-family:'Mulish',sans-serif;">
    <div style="background:#1e1a16;height:22px;display:flex;align-items:center;justify-content:center;gap:24px;">
      <span style="font-size:8px;color:rgba(255,255,255,.55);letter-spacing:1px;">Envío gratis</span>
      <span style="width:4px;height:4px;background:#b08060;border-radius:50%;display:inline-block;"></span>
      <span style="font-size:8px;color:rgba(255,255,255,.55);letter-spacing:1px;">Madera sostenible</span>
      <span style="width:4px;height:4px;background:#b08060;border-radius:50%;display:inline-block;"></span>
      <span style="font-size:8px;color:rgba(255,255,255,.55);letter-spacing:1px;">30 días garantía</span>
    </div>
    <div style="background:rgba(249,247,243,.97);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #ddd5c8;">
      <div style="display:flex;gap:20px;"><span style="font-size:9.5px;color:#9a8a7a;">Colecciones</span><span style="font-size:9.5px;color:#9a8a7a;">Materiales</span><span style="font-size:9.5px;color:#9a8a7a;">Sobre</span></div>
      <span style="font-family:'Fraunces',serif;font-size:16px;font-weight:300;color:#1e1a16;letter-spacing:4px;">NORDIA</span>
      <div style="display:flex;gap:12px;font-size:14px;color:#1e1a16;">♡ 🛒</div>
    </div>
    <div style="height:172px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;">
      <div style="background:#f0ece4;display:flex;flex-direction:column;justify-content:center;padding:0 28px;position:relative;">
        <div style="font-size:8px;letter-spacing:4px;text-transform:uppercase;color:#b08060;margin-bottom:12px;">DISEÑO NÓRDICO</div>
        <div style="font-family:'Fraunces',serif;font-size:24px;font-weight:300;font-style:italic;color:#1e1a16;line-height:1.05;margin-bottom:16px;">Simplicidad que<br>permanece.</div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="padding:7px 18px;background:#1e1a16;color:#fff;font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Ver colección</div>
          <span style="font-size:8.5px;color:#b08060;border-bottom:1px solid #b08060;padding-bottom:1px;letter-spacing:1px;">Materiales →</span>
        </div>
        <div style="position:absolute;bottom:16px;left:28px;background:#f9f7f3;padding:10px 14px;">
          <div style="font-family:'Fraunces',serif;font-size:10px;font-style:italic;color:#1e1a16;margin-bottom:2px;">Colección Oslo</div>
          <div style="font-size:8px;color:#9a8a7a;letter-spacing:1px;text-transform:uppercase;">Madera de roble</div>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
    </div>
    <div style="background:#f9f7f3;padding:12px 16px 8px;border-top:1px solid #ddd5c8;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="font-family:'Fraunces',serif;font-size:12px;font-style:italic;color:#1e1a16;">Nuestros favoritos</div>
        <span style="font-size:8.5px;color:#b08060;letter-spacing:1px;text-transform:uppercase;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildNordiaMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div>
      <div style="aspect-ratio:1;overflow:hidden;background:#f0ece4;margin-bottom:4px;position:relative;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#1e1a16;color:#fff;font-size:5px;padding:1px 5px;font-weight:600;letter-spacing:.5px;">NEW</div>':''}
      </div>
      <div style="font-family:'Fraunces',serif;font-size:6.5px;font-style:italic;color:#1e1a16;margin-bottom:1px;">${p.name}</div>
      <div style="font-size:6.5px;font-weight:600;color:#1e1a16;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#f9f7f3;height:100%;display:flex;flex-direction:column;font-family:'Mulish',sans-serif;">
    <div style="background:#1e1a16;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:rgba(255,255,255,.55);letter-spacing:1.5px;">Envío gratis · Madera sostenible</span></div>
    <div style="background:#f9f7f3;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #ddd5c8;flex-shrink:0;">
      <span style="font-family:'Fraunces',serif;font-size:12px;font-weight:300;color:#1e1a16;letter-spacing:3px;">NORDIA</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#1e1a16;">♡ 🛒</div>
    </div>
    <div style="height:120px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;flex-shrink:0;">
      <div style="background:#f0ece4;display:flex;flex-direction:column;justify-content:center;padding:0 10px;">
        <div style="font-size:6px;letter-spacing:2px;text-transform:uppercase;color:#b08060;margin-bottom:7px;">NÓRDICO</div>
        <div style="font-family:'Fraunces',serif;font-size:14px;font-weight:300;font-style:italic;color:#1e1a16;line-height:1.05;margin-bottom:9px;">Simplicidad<br>que permanece.</div>
        <div style="display:inline-block;padding:4px 10px;background:#1e1a16;color:#fff;font-size:5.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;width:fit-content;">Ver →</div>
      </div>
      <div style="overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
    </div>
    <div style="background:#f9f7f3;border-top:1px solid #ddd5c8;padding:7px 9px;flex:1;">
      <div style="font-family:'Fraunces',serif;font-size:7px;font-style:italic;color:#1e1a16;margin-bottom:6px;">Nuestros favoritos</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">${prods}</div>
    </div>
  </div>`;
}

// ── LOFT (Home — Industrial Urbano) ────────────────────────────────────────

function buildLoftDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="background:#222220;overflow:hidden;position:relative;aspect-ratio:1;cursor:pointer;">
      <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,24,0.85) 0%,transparent 55%);"></div>
      ${i===0?'<div style="position:absolute;top:6px;left:6px;background:#b8963e;color:#1a1a18;font-size:6.5px;font-weight:700;padding:2px 6px;letter-spacing:1px;text-transform:uppercase;">NEW</div>':''}
      <div style="position:absolute;bottom:6px;left:6px;right:6px;">
        <div style="font-size:8.5px;color:#e8e4dc;font-weight:600;letter-spacing:.5px;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:9px;color:#b8963e;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#1a1a18;height:100%;overflow:hidden;font-family:'Barlow',sans-serif;">
    <div style="background:#2f2f2c;border-bottom:1px solid #333;height:22px;display:flex;align-items:center;justify-content:space-around;padding:0 16px;">
      <span style="font-size:8px;color:#e8e4dc;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">🚚 ENVÍO GRATIS</span>
      <span style="font-size:8px;color:#e8e4dc;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">⚙️ MATERIALES PREMIUM</span>
      <span style="font-size:8px;color:#e8e4dc;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">🔄 30 DÍAS</span>
    </div>
    <div style="background:#1a1a18;height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #333;">
      <div style="display:flex;gap:18px;"><span style="font-size:9px;color:#8a8a82;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Sala</span><span style="font-size:9px;color:#8a8a82;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Comedor</span><span style="font-size:9px;color:#8a8a82;letter-spacing:2px;text-transform:uppercase;font-weight:500;">Oficina</span></div>
      <span style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:900;letter-spacing:4px;color:#e8e4dc;text-transform:uppercase;">LO<span style="color:#b8963e;">FT</span></span>
      <div style="background:#b8963e;color:#1a1a18;font-size:8px;font-weight:700;padding:4px 12px;letter-spacing:1.5px;text-transform:uppercase;">Carrito</div>
    </div>
    <div style="height:176px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,24,0.92) 0%,rgba(26,26,24,0.35) 50%,transparent 100%);"></div>
      <div style="position:absolute;bottom:20px;left:22px;max-width:65%;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <div style="width:32px;height:1px;background:#b8963e;"></div>
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:8px;letter-spacing:3px;text-transform:uppercase;color:#b8963e;font-weight:600;">DISEÑO INDUSTRIAL</span>
        </div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:30px;font-weight:900;color:#e8e4dc;line-height:.9;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">ESPACIOS QUE<br><span style="color:#b8963e;">RESPIRAN.</span></div>
        <div style="display:flex;gap:8px;">
          <div style="padding:7px 16px;background:#b8963e;color:#1a1a18;font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Explorar →</div>
          <div style="padding:7px 16px;border:1px solid rgba(232,228,220,0.35);color:#e8e4dc;font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">Ver colección</div>
        </div>
      </div>
    </div>
    <div style="background:#1a1a18;padding:10px 16px 8px;border-top:1px solid #333;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div>
          <div style="font-size:7px;color:#b8963e;letter-spacing:3px;text-transform:uppercase;font-family:'Barlow Condensed',sans-serif;font-weight:600;">COLECCIONES</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:900;color:#e8e4dc;text-transform:uppercase;letter-spacing:1px;">Más vendidos</div>
        </div>
        <span style="font-size:8px;color:#b8963e;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;">${prods}</div>
    </div>
  </div>`;
}

function buildLoftMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="background:#222220;position:relative;aspect-ratio:1;overflow:hidden;">
      <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,24,0.88) 0%,transparent 55%);"></div>
      ${i===0?'<div style="position:absolute;top:3px;left:3px;background:#b8963e;color:#1a1a18;font-size:5.5px;font-weight:700;padding:1px 5px;letter-spacing:1px;text-transform:uppercase;">NEW</div>':''}
      <div style="position:absolute;bottom:5px;left:5px;right:5px;">
        <div style="font-size:6px;color:#e8e4dc;font-weight:600;margin-bottom:1px;">${p.name}</div>
        <div style="font-size:6.5px;color:#b8963e;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#1a1a18;height:100%;display:flex;flex-direction:column;font-family:'Barlow',sans-serif;">
    <div style="background:#2f2f2c;border-bottom:1px solid #333;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:#e8e4dc;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">⚙️ MATERIALES PREMIUM · ENVÍO GRATIS</span></div>
    <div style="background:#1a1a18;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #333;flex-shrink:0;">
      <span style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:900;letter-spacing:3px;color:#e8e4dc;text-transform:uppercase;">LO<span style="color:#b8963e;">FT</span></span>
      <div style="background:#b8963e;color:#1a1a18;font-size:5.5px;font-weight:700;padding:2px 8px;letter-spacing:1px;text-transform:uppercase;">CARRITO</div>
    </div>
    <div style="height:130px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,24,0.92) 0%,rgba(26,26,24,0.3) 55%,transparent 100%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;max-width:70%;">
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:6px;">
          <div style="width:20px;height:1px;background:#b8963e;"></div>
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:6px;letter-spacing:2px;text-transform:uppercase;color:#b8963e;font-weight:600;">INDUSTRIAL</span>
        </div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:900;color:#e8e4dc;line-height:.9;text-transform:uppercase;margin-bottom:8px;">ESPACIOS<br><span style="color:#b8963e;">RESPIRAN.</span></div>
        <div style="display:inline-block;padding:4px 10px;background:#b8963e;color:#1a1a18;font-family:'Barlow Condensed',sans-serif;font-size:6px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;width:fit-content;">Explorar →</div>
      </div>
    </div>
    <div style="background:#1a1a18;border-top:1px solid #333;padding:6px 7px;flex:1;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:6px;color:#b8963e;letter-spacing:2px;text-transform:uppercase;margin-bottom:5px;font-weight:600;">MÁS VENDIDOS</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">${prods}</div>
    </div>
  </div>`;
}

// ── DIAMANTE (Jewelry — Minimalista Premium) ───────────────────────────────

function buildDiamanteDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="cursor:pointer;">
      <div style="position:relative;aspect-ratio:1;overflow:hidden;background:#f9f9f9;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:8px;left:8px;background:#1a1a1a;color:#fff;font-size:7px;letter-spacing:1px;padding:2px 7px;font-weight:500;text-transform:uppercase;">Nuevo</div>':''}
      </div>
      <div style="font-family:'Bodoni Moda',serif;font-size:10px;color:#1a1a1a;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:8.5px;color:#888;margin-bottom:3px;letter-spacing:.5px;">Alta Joyería</div>
      <div style="font-size:9.5px;font-weight:500;color:#1a1a1a;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;overflow:hidden;font-family:'DM Sans',sans-serif;">
    <div style="background:#1a1a1a;height:22px;display:flex;align-items:center;justify-content:center;gap:24px;">
      <span style="font-size:7.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Envío gratuito</span>
      <span style="width:4px;height:4px;background:#c0a882;border-radius:50%;display:inline-block;"></span>
      <span style="font-size:7.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Certificado GIA</span>
      <span style="width:4px;height:4px;background:#c0a882;border-radius:50%;display:inline-block;"></span>
      <span style="font-size:7.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Garantía de por vida</span>
    </div>
    <div style="background:#fff;height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #e0e0e0;">
      <div style="display:flex;gap:20px;"><span style="font-size:9.5px;color:#888;letter-spacing:1px;">Colección</span><span style="font-size:9.5px;color:#888;letter-spacing:1px;">Novias</span><span style="font-size:9.5px;color:#888;letter-spacing:1px;">Contacto</span></div>
      <span style="font-family:'Bodoni Moda',serif;font-size:16px;font-weight:400;letter-spacing:8px;color:#1a1a1a;text-transform:uppercase;">DIAMANTE</span>
      <div style="display:flex;gap:12px;font-size:14px;color:#1a1a1a;">♡ 🛒</div>
    </div>
    <div style="height:172px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;">
      <div style="background:#f9f9f9;display:flex;flex-direction:column;justify-content:center;padding:0 28px;">
        <div style="font-size:8px;letter-spacing:4px;text-transform:uppercase;color:#8a7250;margin-bottom:14px;">ALTA JOYERÍA</div>
        <div style="font-family:'Bodoni Moda',serif;font-size:22px;line-height:1.05;color:#1a1a1a;margin-bottom:18px;">Brillo que no<br>necesita palabras.</div>
        <div style="display:flex;gap:10px;align-items:center;">
          <div style="padding:8px 18px;background:#1a1a1a;color:#fff;font-size:8.5px;font-weight:500;letter-spacing:2px;text-transform:uppercase;">Descubrir →</div>
          <span style="font-size:9px;color:#1a1a1a;border-bottom:1px solid #1a1a1a;padding-bottom:1px;">Ver todo</span>
        </div>
        <div style="margin-top:18px;padding:12px 14px;background:#fff;display:inline-flex;align-items:center;gap:10px;border:1px solid #e0e0e0;">
          <div style="font-family:'Bodoni Moda',serif;font-size:20px;font-weight:700;color:#1a1a1a;line-height:1;">4.9</div>
          <div>
            <div style="font-size:9px;color:#c9a96e;letter-spacing:2px;">★★★★★</div>
            <div style="font-size:7.5px;color:#888;letter-spacing:1px;">+2,000 reseñas</div>
          </div>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
    </div>
    <div style="background:#fff;padding:12px 16px 8px;border-top:1px solid #e0e0e0;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="font-family:'Bodoni Moda',serif;font-size:12px;color:#1a1a1a;">Piezas Destacadas</div>
        <span style="font-size:8.5px;color:#8a7250;letter-spacing:1px;text-transform:uppercase;">Ver colección →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildDiamanteMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div>
      <div style="aspect-ratio:1;overflow:hidden;background:#f9f9f9;margin-bottom:4px;position:relative;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#1a1a1a;color:#fff;font-size:5.5px;padding:1px 5px;font-weight:500;letter-spacing:.5px;">NUEVO</div>':''}
      </div>
      <div style="font-family:'Bodoni Moda',serif;font-size:6.5px;color:#1a1a1a;margin-bottom:1px;">${p.name}</div>
      <div style="font-size:6.5px;font-weight:500;color:#1a1a1a;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:'DM Sans',sans-serif;">
    <div style="background:#1a1a1a;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Envío gratuito · Certificado GIA</span></div>
    <div style="background:#fff;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #e0e0e0;flex-shrink:0;">
      <span style="font-family:'Bodoni Moda',serif;font-size:11px;font-weight:400;letter-spacing:5px;color:#1a1a1a;text-transform:uppercase;">DIAMANTE</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#1a1a1a;">♡ 🛒</div>
    </div>
    <div style="height:120px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;flex-shrink:0;">
      <div style="background:#f9f9f9;display:flex;flex-direction:column;justify-content:center;padding:0 10px;">
        <div style="font-size:6px;letter-spacing:3px;text-transform:uppercase;color:#8a7250;margin-bottom:8px;">ALTA JOYERÍA</div>
        <div style="font-family:'Bodoni Moda',serif;font-size:14px;line-height:1.1;color:#1a1a1a;margin-bottom:10px;">Brillo que<br>no necesita<br>palabras.</div>
        <div style="display:inline-block;padding:4px 10px;background:#1a1a1a;color:#fff;font-size:5.5px;font-weight:500;letter-spacing:2px;text-transform:uppercase;width:fit-content;">Descubrir →</div>
      </div>
      <div style="overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      </div>
    </div>
    <div style="background:#fff;border-top:1px solid #e0e0e0;padding:7px 9px;flex:1;">
      <div style="font-family:'Bodoni Moda',serif;font-size:7px;color:#1a1a1a;margin-bottom:6px;">Piezas Destacadas</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">${prods}</div>
    </div>
  </div>`;
}

// ── HERITAGE (Jewelry — Joyería Artesanal) ─────────────────────────────────

function buildHeritageDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="cursor:pointer;">
      <div style="position:relative;aspect-ratio:1;overflow:hidden;background:#f0e8d8;margin-bottom:8px;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:8px;left:8px;background:#2c1a10;color:#fff;font-size:7px;letter-spacing:1.5px;padding:2px 7px;font-weight:600;text-transform:uppercase;">Artesanal</div>':''}
      </div>
      <div style="font-family:'Libre Baskerville',serif;font-size:10px;color:#2c1a10;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:8.5px;color:#8a6a50;margin-bottom:3px;letter-spacing:.3px;">Hecho a mano</div>
      <div style="font-size:9.5px;font-weight:600;color:#2c1a10;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf6ef;height:100%;overflow:hidden;font-family:'Nunito',sans-serif;">
    <div style="background:#2c1a10;height:22px;display:flex;align-items:center;justify-content:center;gap:24px;">
      <span style="font-size:7.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Envío gratis</span>
      <span style="color:#c49a6c;font-size:14px;line-height:1;">·</span>
      <span style="font-size:7.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Joyería artesanal</span>
      <span style="color:#c49a6c;font-size:14px;line-height:1;">·</span>
      <span style="font-size:7.5px;color:rgba(255,255,255,.65);letter-spacing:2px;text-transform:uppercase;">Garantía de por vida</span>
    </div>
    <div style="background:rgba(250,246,239,.95);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #d4c4b0;">
      <div style="display:flex;gap:20px;"><span style="font-size:9.5px;color:#8a6a50;">Tienda</span><span style="font-size:9.5px;color:#8a6a50;">Historia</span><span style="font-size:9.5px;color:#8a6a50;">Taller</span></div>
      <span style="font-family:'Libre Baskerville',serif;font-size:14px;letter-spacing:5px;color:#2c1a10;text-transform:uppercase;">HERITAGE</span>
      <div style="display:flex;gap:12px;font-size:14px;color:#2c1a10;">♡ 🛒</div>
    </div>
    <div style="height:172px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;">
      <div style="position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        <div style="position:absolute;top:14px;left:14px;background:#c49a6c;color:#fff;font-size:7.5px;letter-spacing:3px;text-transform:uppercase;padding:4px 10px;font-weight:700;">Artesanal</div>
      </div>
      <div style="background:#f0e8d8;display:flex;flex-direction:column;justify-content:center;padding:0 24px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:24px;height:1px;background:#c49a6c;"></div>
          <span style="font-size:7.5px;letter-spacing:3px;text-transform:uppercase;color:#a0784a;">JOYERÍA ARTESANAL</span>
        </div>
        <div style="font-family:'Libre Baskerville',serif;font-size:20px;line-height:1.15;color:#2c1a10;margin-bottom:16px;">Hechas a mano,<br>hechas para <em>siempre.</em></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
          <div style="padding:7px 16px;background:#2c1a10;color:#fff;font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Ver colección →</div>
          <span style="font-size:8.5px;color:#2c1a10;border-bottom:1px solid #c49a6c;padding-bottom:1px;letter-spacing:1px;">Historia</span>
        </div>
        <div style="margin-top:14px;display:flex;gap:14px;">
          <div style="display:flex;align-items:center;gap:5px;font-size:8px;color:#8a6a50;">✓ Plata 925</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:8px;color:#8a6a50;">✓ Oro 18k</div>
        </div>
      </div>
    </div>
    <div style="background:#faf6ef;padding:12px 16px 8px;border-top:1px solid #d4c4b0;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="font-family:'Libre Baskerville',serif;font-size:12px;color:#2c1a10;font-style:italic;">Piezas Especiales</div>
        <span style="font-size:8.5px;color:#a0784a;letter-spacing:1px;text-transform:uppercase;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">${prods}</div>
    </div>
  </div>`;
}

function buildHeritageMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div>
      <div style="aspect-ratio:1;overflow:hidden;background:#f0e8d8;margin-bottom:4px;position:relative;">
        <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#c49a6c;color:#fff;font-size:5px;padding:1px 5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;">Art.</div>':''}
      </div>
      <div style="font-family:'Libre Baskerville',serif;font-size:6.5px;color:#2c1a10;margin-bottom:1px;">${p.name}</div>
      <div style="font-size:6.5px;font-weight:600;color:#2c1a10;">${p.price}</div>
    </div>`).join('');
  return `<div style="background:#faf6ef;height:100%;display:flex;flex-direction:column;font-family:'Nunito',sans-serif;">
    <div style="background:#2c1a10;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:rgba(255,255,255,.65);letter-spacing:1.5px;text-transform:uppercase;">Envío gratis · Joyería artesanal</span></div>
    <div style="background:#faf6ef;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #d4c4b0;flex-shrink:0;">
      <span style="font-family:'Libre Baskerville',serif;font-size:10px;letter-spacing:4px;color:#2c1a10;text-transform:uppercase;">HERITAGE</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#2c1a10;">♡ 🛒</div>
    </div>
    <div style="height:120px;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;flex-shrink:0;">
      <div style="position:relative;overflow:hidden;">
        <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
        <div style="position:absolute;top:6px;left:6px;background:#c49a6c;color:#fff;font-size:5.5px;letter-spacing:2px;padding:2px 6px;font-weight:700;text-transform:uppercase;">ART.</div>
      </div>
      <div style="background:#f0e8d8;display:flex;flex-direction:column;justify-content:center;padding:0 10px;">
        <div style="font-size:5.5px;letter-spacing:2px;text-transform:uppercase;color:#a0784a;margin-bottom:6px;">ARTESANAL</div>
        <div style="font-family:'Libre Baskerville',serif;font-size:13px;line-height:1.15;color:#2c1a10;margin-bottom:8px;">Hechas a<br>mano, para<br><em>siempre.</em></div>
        <div style="display:inline-block;padding:4px 10px;background:#2c1a10;color:#fff;font-size:5.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;width:fit-content;">Ver →</div>
      </div>
    </div>
    <div style="background:#faf6ef;border-top:1px solid #d4c4b0;padding:7px 9px;flex:1;">
      <div style="font-family:'Libre Baskerville',serif;font-size:7px;font-style:italic;color:#2c1a10;margin-bottom:6px;">Piezas Especiales</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">${prods}</div>
    </div>
  </div>`;
}

// ── LUMIÈRE (Jewelry — Lujo Oscuro) ────────────────────────────────────────

function buildLumiereDesktop(t: IndustryTemplate): string {
  const prods = t.products.map((p,i) => `
    <div style="position:relative;aspect-ratio:3/4;overflow:hidden;cursor:pointer;">
      <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,10,0.88) 0%,transparent 55%);"></div>
      ${i===0?'<div style="position:absolute;top:8px;left:8px;background:#c9a96e;color:#09090a;font-size:7px;font-weight:700;padding:2px 8px;letter-spacing:1.5px;text-transform:uppercase;">Exclusivo</div>':''}
      <div style="position:absolute;bottom:10px;left:10px;right:10px;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:11px;font-weight:300;color:#f0ece4;margin-bottom:2px;">${p.name}</div>
        <div style="font-size:9px;color:#c9a96e;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#09090a;height:100%;overflow:hidden;font-family:'Lato',sans-serif;">
    <div style="background:#111112;border-bottom:1px solid #2a2a2c;height:22px;display:flex;align-items:center;justify-content:center;gap:28px;">
      <span style="font-size:7.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">🚚 Envío discreto</span>
      <span style="width:4px;height:4px;background:#c9a96e;border-radius:50%;display:inline-block;"></span>
      <span style="font-size:7.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">✦ Certificado autenticidad</span>
      <span style="width:4px;height:4px;background:#c9a96e;border-radius:50%;display:inline-block;"></span>
      <span style="font-size:7.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">♦ Garantía vitalicia</span>
    </div>
    <div style="background:rgba(9,9,10,.95);height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #2a2a2c;">
      <div style="display:flex;gap:20px;"><span style="font-size:9.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">Colecciones</span><span style="font-size:9.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">Anillos</span><span style="font-size:9.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">Nosotros</span></div>
      <span style="font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:300;letter-spacing:10px;color:#c9a96e;text-transform:uppercase;">LUMIÈRE</span>
      <div style="display:flex;gap:14px;font-size:14px;color:#8a8278;">♡ 🛒</div>
    </div>
    <div style="height:172px;position:relative;overflow:hidden;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,10,0.92) 0%,rgba(9,9,10,0.35) 50%,rgba(9,9,10,0.15) 100%);"></div>
      <div style="position:absolute;bottom:20px;left:24px;max-width:60%;">
        <div style="font-size:8px;letter-spacing:5px;text-transform:uppercase;color:#c9a96e;margin-bottom:10px;">JOYERÍA DE LUJO</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:300;font-style:italic;color:#f0ece4;line-height:1.05;margin-bottom:16px;">Piezas que<br>perduran.</div>
        <div style="display:flex;gap:10px;align-items:center;">
          <div style="padding:7px 18px;background:#c9a96e;color:#09090a;font-size:8.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Explorar →</div>
          <div style="padding:7px 16px;border:1px solid rgba(201,169,110,0.35);color:#c9a96e;font-size:8.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Colecciones</div>
        </div>
      </div>
      <div style="position:absolute;bottom:20px;right:24px;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:8px;letter-spacing:3px;color:#8a8278;writing-mode:vertical-rl;">SCROLL</div>
    </div>
    <div style="background:#09090a;padding:10px 16px 8px;border-top:1px solid #2a2a2c;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div>
          <div style="font-size:7.5px;letter-spacing:4px;text-transform:uppercase;color:#c9a96e;margin-bottom:2px;">COLECCIÓN</div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:12px;font-weight:300;color:#f0ece4;font-style:italic;">Piezas Únicas</div>
        </div>
        <span style="font-size:8px;color:#c9a96e;letter-spacing:2px;text-transform:uppercase;">Ver todo →</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;">${prods}</div>
    </div>
  </div>`;
}

function buildLumiereMobile(t: IndustryTemplate): string {
  const prods = t.products.slice(0,2).map((p,i) => `
    <div style="position:relative;aspect-ratio:3/4;overflow:hidden;">
      <img src="${p.img}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,10,0.9) 0%,transparent 50%);"></div>
      ${i===0?'<div style="position:absolute;top:4px;left:4px;background:#c9a96e;color:#09090a;font-size:5px;font-weight:700;padding:1px 5px;letter-spacing:1px;text-transform:uppercase;">Excl.</div>':''}
      <div style="position:absolute;bottom:5px;left:5px;right:5px;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:6.5px;font-weight:300;color:#f0ece4;margin-bottom:1px;font-style:italic;">${p.name}</div>
        <div style="font-size:6.5px;color:#c9a96e;font-weight:700;">${p.price}</div>
      </div>
    </div>`).join('');
  return `<div style="background:#09090a;height:100%;display:flex;flex-direction:column;font-family:'Lato',sans-serif;">
    <div style="background:#111112;border-bottom:1px solid #2a2a2c;height:11px;display:flex;align-items:center;justify-content:center;"><span style="font-size:5.5px;color:#8a8278;letter-spacing:2px;text-transform:uppercase;">✦ Joyería de lujo · Envío discreto</span></div>
    <div style="background:#09090a;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid #2a2a2c;flex-shrink:0;">
      <span style="font-family:'Cormorant Garamond',serif;font-size:13px;font-weight:300;letter-spacing:6px;color:#c9a96e;text-transform:uppercase;">LUMIÈRE</span>
      <div style="display:flex;gap:7px;font-size:10px;color:#8a8278;">♡ 🛒</div>
    </div>
    <div style="height:130px;position:relative;overflow:hidden;flex-shrink:0;">
      <img src="${t.hero}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,10,0.92) 0%,rgba(9,9,10,0.3) 55%,transparent 100%);"></div>
      <div style="position:absolute;bottom:10px;left:10px;max-width:70%;">
        <div style="font-size:6.5px;letter-spacing:4px;text-transform:uppercase;color:#c9a96e;margin-bottom:7px;">JOYERÍA DE LUJO</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:300;font-style:italic;color:#f0ece4;line-height:1.05;margin-bottom:8px;">Piezas que<br>perduran.</div>
        <div style="display:inline-block;padding:4px 12px;background:#c9a96e;color:#09090a;font-size:6px;font-weight:700;letter-spacing:2px;text-transform:uppercase;width:fit-content;">Explorar →</div>
      </div>
    </div>
    <div style="background:#09090a;border-top:1px solid #2a2a2c;padding:6px 7px;flex:1;">
      <div style="font-family:'Cormorant Garamond',serif;font-size:7px;font-style:italic;color:#f0ece4;margin-bottom:5px;font-weight:300;">Piezas Únicas</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">${prods}</div>
    </div>
  </div>`;
}

export const INDUSTRY_CONTENT: Record<string, {
  hero: string;
  products: { img: string; name: string; price: string }[];
  eyebrow: string;
  title: string;
  cta: string;
}> = {
  jewelry: {
    hero: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80', name: 'Gold Ring', price: '$189.000' },
      { img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=200&q=80', name: 'Pearl Necklace', price: '$245.000' },
      { img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=200&q=80', name: 'Earrings', price: '$98.000' },
      { img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=200&q=80', name: 'Bracelet', price: '$135.000' },
    ],
    eyebrow: 'NUEVA COLECCIÓN', title: 'Joyas que hablan.', cta: 'Ver colección →',
  },
  fashion: {
    hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80', name: 'Classic Tee', price: '$89.000' },
      { img: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=200&q=80', name: 'Denim Jacket', price: '$210.000' },
      { img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=200&q=80', name: 'Hoodie', price: '$145.000' },
      { img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=200&q=80', name: 'Cap', price: '$65.000' },
    ],
    eyebrow: 'SS 2025', title: 'Viste tu estilo.', cta: 'Explorar →',
  },
  electronics: {
    hero: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80', name: 'Headphones', price: '$320.000' },
      { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80', name: 'Smart Watch', price: '$480.000' },
      { img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&q=80', name: 'Speaker', price: '$195.000' },
      { img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&q=80', name: 'Sunglasses', price: '$120.000' },
    ],
    eyebrow: 'TECH DROP', title: 'Sound. Redefined.', cta: 'Shop now →',
  },
  home: {
    hero: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=200&q=80', name: 'Candle Set', price: '$75.000' },
      { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80', name: 'Sofa Cushion', price: '$110.000' },
      { img: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=200&q=80', name: 'Wall Art', price: '$145.000' },
      { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80', name: 'Vase', price: '$88.000' },
    ],
    eyebrow: 'HOGAR', title: 'Tu espacio, tu estilo.', cta: 'Ver colección →',
  },
  beauty: {
    hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80', name: 'Lip Gloss', price: '$58.000' },
      { img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80', name: 'Face Serum', price: '$128.000' },
      { img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&q=80', name: 'Moisturizer', price: '$95.000' },
      { img: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=200&q=80', name: 'Palette', price: '$175.000' },
    ],
    eyebrow: 'BEAUTY EDIT', title: 'Brilla. Siempre.', cta: 'Discover →',
  },
  food: {
    hero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&q=80', name: 'Gift Basket', price: '$145.000' },
      { img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=200&q=80', name: 'Artisan Bread', price: '$28.000' },
      { img: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=200&q=80', name: 'Honey Jar', price: '$48.000' },
      { img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=200&q=80', name: 'Spice Set', price: '$65.000' },
    ],
    eyebrow: 'ARTISAN', title: 'Sabor con propósito.', cta: 'Ver productos →',
  },
  sports: {
    hero: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=200&q=80', name: 'Sports Bra', price: '$95.000' },
      { img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=200&q=80', name: 'Leggings', price: '$125.000' },
      { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80', name: 'Running Shoe', price: '$280.000' },
      { img: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=200&q=80', name: 'Gym Bag', price: '$115.000' },
    ],
    eyebrow: 'PERFORMANCE', title: 'Move with purpose.', cta: 'Shop now →',
  },
  other: {
    hero: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
    products: [
      { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80', name: 'Product 1', price: '$89.000' },
      { img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&q=80', name: 'Product 2', price: '$120.000' },
      { img: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=200&q=80', name: 'Product 3', price: '$75.000' },
      { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80', name: 'Product 4', price: '$95.000' },
    ],
    eyebrow: 'NUEVA LLEGADA', title: 'Tu tienda, tu mundo.', cta: 'Explorar →',
  },
};

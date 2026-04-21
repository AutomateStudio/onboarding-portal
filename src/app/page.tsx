import type { Metadata } from 'next';
import Script from 'next/script';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Automate Studio — Tu Tienda Shopify Lista en 7 Días',
  description:
    'Lanzamos tu tienda Shopify profesional en 7 días. Diseño premium, apps configuradas, pasarela de pago y soporte incluido. Sin código. Sin complicaciones. Desde $990 USD.',
  keywords: [
    'agencia shopify colombia', 'crear tienda shopify', 'ecommerce latam',
    'desarrollo shopify profesional', 'tienda online en 7 días', 'agencia digital colombia',
    'shopify en español', 'lanzar tienda online', 'diseño ecommerce',
  ],
  authors: [{ name: 'Automate Studio', url: 'https://automatestudio.com' }],
  creator: 'Automate Studio',
  publisher: 'Automate Studio',
  metadataBase: new URL('https://automatestudio.com'),
  alternates: { canonical: 'https://automatestudio.com' },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://automatestudio.com',
    siteName: 'Automate Studio',
    title: 'Automate Studio — Tu Tienda Shopify Lista en 7 Días',
    description:
      'Lanzamos tu tienda Shopify profesional en 7 días. Diseño premium, apps configuradas y listo para vender. Sin código.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Automate Studio — Agencia Shopify LATAM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automate Studio — Tu Tienda Shopify Lista en 7 Días',
    description: 'Lanzamos tu tienda Shopify en tiempo récord. Diseño profesional, apps y soporte incluido.',
    images: ['/og-image.jpg'],
    creator: '@automatestudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://automatestudio.com/#organization',
      name: 'Automate Studio',
      url: 'https://automatestudio.com',
      logo: { '@type': 'ImageObject', url: 'https://automatestudio.com/logo.png' },
      contactPoint: { '@type': 'ContactPoint', email: 'hola@automatestudio.com', contactType: 'customer service', areaServed: 'LATAM', availableLanguage: 'Spanish' },
      sameAs: ['https://instagram.com/automatestudio', 'https://linkedin.com/company/automatestudio'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://automatestudio.com/#website',
      url: 'https://automatestudio.com',
      name: 'Automate Studio',
      publisher: { '@id': 'https://automatestudio.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'Desarrollo de Tiendas Shopify',
      provider: { '@id': 'https://automatestudio.com/#organization' },
      serviceType: 'E-commerce Development',
      areaServed: { '@type': 'Place', name: 'LATAM' },
      description: 'Creación de tiendas Shopify profesionales en 7 días. Diseño premium, configuración completa de apps y soporte post-lanzamiento.',
      offers: [
        { '@type': 'Offer', name: 'Starter', price: '990', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Pro', price: '1990', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Premium', price: '3490', priceCurrency: 'USD' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿En cuánto tiempo tengo mi tienda lista?', acceptedAnswer: { '@type': 'Answer', text: 'El proceso de onboarding toma 10 minutos. De ahí en adelante, nuestro equipo entrega tu tienda funcional en un promedio de 7 días hábiles.' } },
        { '@type': 'Question', name: '¿Necesito saber de programación?', acceptedAnswer: { '@type': 'Answer', text: 'Cero. Eso es exactamente lo que hacemos nosotros. Solo necesitas contarnos sobre tu negocio y elegir lo que te gusta.' } },
        { '@type': 'Question', name: '¿El precio incluye el plan de Shopify?', acceptedAnswer: { '@type': 'Answer', text: 'El precio de nuestro servicio es de implementación. El plan de Shopify se paga directamente a Shopify (desde $29 USD/mes).' } },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingPage />
    </>
  );
}

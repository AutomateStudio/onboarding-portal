export const PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: 999000,
    appsLimit: 3,
    extraAppPrice: 200000,
    features: [
      'Configuración de tienda Shopify',
      'Tema visual personalizado',
      'Hasta 3 apps integradas',
      'Soporte 30 días',
      'Entrega en 5 días hábiles',
    ],
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    price: 1799000,
    appsLimit: 6,
    extraAppPrice: 200000,
    featured: true,
    features: [
      'Todo lo del plan Starter',
      'Diseño UI personalizado avanzado',
      'Hasta 6 apps integradas',
      'Configuración de email marketing',
      'Soporte 60 días prioritario',
      'Entrega en 7 días hábiles',
    ],
  },
  scale: {
    id: 'scale',
    name: 'Scale',
    price: 2999000,
    appsLimit: 10,
    extraAppPrice: 200000,
    features: [
      'Todo lo del plan Growth',
      'Todas las apps disponibles',
      'Tienda 100% a medida',
      'Estrategia SEO incluida',
      'Soporte 90 días VIP',
      'Entrega en 10 días hábiles',
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;

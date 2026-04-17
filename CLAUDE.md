# Automate Onboarding Portal

Portal de onboarding para clientes de Automate. Permite configurar una tienda Shopify en 6 pasos con preview en vivo.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Zustand (estado global)

## Arrancar el proyecto

```bash
npm install
npm run dev   # http://localhost:3000
```

No necesitas variables de entorno para trabajar en el frontend. Solo son necesarias para el botón de Google Drive en Step 5.

## Estructura clave

```
src/
├── app/
│   ├── page.tsx                    # Entry point
│   └── api/catalog/setup/route.ts  # API Google Drive (no tocar)
├── components/
│   ├── OnboardingLayout.tsx        # Layout principal con header + grid
│   ├── Stepper.tsx                 # Barra de progreso (mobile + desktop)
│   ├── LivePreview.tsx             # Preview iPhone sticky (solo desktop)
│   └── steps/
│       ├── Step1Welcome.tsx        # Nombre tienda, URL Shopify, industria
│       ├── Step2Brand.tsx          # Temas, paletas, tipografía
│       ├── Step3Plan.tsx           # Planes Starter / Growth / Scale
│       ├── Step4Apps.tsx           # Marketplace de apps
│       ├── Step5Content.tsx        # Tono de voz + catálogo Drive
│       └── Step6Access.tsx         # Email, WhatsApp, resumen y envío
├── stores/
│   └── brandStore.ts              # Estado global con Zustand (todos los pasos)
└── constants/
    ├── themes.ts      # 16 temas visuales con colores
    ├── palettes.ts    # 20 paletas de colores
    ├── fonts.ts       # 8 tipografías
    ├── plans.ts       # 3 planes con precios COP
    ├── apps.ts        # 10 apps del marketplace
    └── industries.ts  # Contenido por industria (imágenes, productos)
```

## Flujo de navegación

```
Step1 → Step2 → Step3 → Step4 → Step5 → Step6 → Success
```

La navegación está en `brandStore.ts` con `nextStep()` / `previousStep()`.

## Cómo agregar o modificar algo

- **Cambiar un paso**: editar el archivo en `src/components/steps/`
- **Nuevo campo en el formulario**: agregarlo en `brandStore.ts` (estado + acción) y usarlo en el step correspondiente
- **Cambiar precios o planes**: editar `src/constants/plans.ts`
- **Agregar apps**: editar `src/constants/apps.ts`
- **Cambiar temas**: editar `src/constants/themes.ts`

## Tarea pendiente principal

`Step6Access.tsx` tiene el submit del formulario con `console.log`. Hay que conectarlo a un backend real (email de confirmación, base de datos, CRM, etc.).

## Lo que NO tocar

- `src/app/api/catalog/setup/route.ts` — integración Google Drive, ya funciona
- `src/components/LivePreview.tsx` — preview del iPhone, ya funciona
- `templates/plantilla-productos-automate.xlsx` — plantilla del cliente

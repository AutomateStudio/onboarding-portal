# CLAUDE.md — Onboarding Portal

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Zustand (estado global)

## Arrancar
```bash
npm install
npm run dev   # http://localhost:3000
```

## Estructura clave
```
src/
├── app/page.tsx
├── components/
│   ├── OnboardingLayout.tsx
│   ├── LivePreview.tsx
│   └── steps/
│       ├── Step1Welcome.tsx
│       ├── Step2Brand.tsx
│       ├── Step3Plan.tsx
│       ├── Step4Apps.tsx
│       ├── Step5Content.tsx
│       └── Step6Access.tsx
├── stores/brandStore.ts
└── constants/
    ├── industryTemplates.ts
    ├── themes.ts
    ├── palettes.ts
    ├── fonts.ts
    ├── plans.ts
    └── apps.ts
public/templates/   ← templates HTML por industria
```

## Flujo de trabajo en equipo — IMPORTANTE

Este proyecto tiene dos desarrolladores trabajando en paralelo.

**Antes de empezar a trabajar siempre:**
```bash
git pull origin main
```

**Para trabajar en una feature o tarea:**
```bash
git checkout -b nombre-de-lo-que-vas-a-hacer
# trabajas, haces cambios...
git add .
git commit -m "descripción del cambio"
git push origin nombre-de-lo-que-vas-a-hacer
```
Luego avisas al otro dev para hacer merge a main.

**Nunca trabajar directamente en `main` sin hacer pull primero.**

## Lo que NO tocar
- `src/app/api/catalog/setup/route.ts` — integración Google Drive, ya funciona
- `templates/plantilla-productos-automate.xlsx` — plantilla del cliente

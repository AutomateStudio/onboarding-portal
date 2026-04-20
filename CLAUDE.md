# CLAUDE.md — Onboarding Portal

## ⚠️ REGLA CRÍTICA — LEER ANTES DE TOCAR CUALQUIER ARCHIVO

Este repositorio tiene **dos zonas de trabajo separadas**. Respeta estrictamente la tuya.

---

## Si eres el desarrollador del HTML standalone

**Solo puedes editar:**
```
portal-automate.html
```

**Nunca toques:**
- `src/` — código del portal Next.js (otro desarrollador)
- `public/templates/` — templates HTML de industrias (otro desarrollador)
- `src/constants/industryTemplates.ts` — registro de templates (otro desarrollador)
- Cualquier archivo `.tsx`, `.ts`, `.css` fuera de tu archivo

**Para abrir tu archivo en el navegador:**
```bash
start "" "http://localhost:3000/portal-automate.html"
```

---

## Si eres el desarrollador del portal Next.js

**Tu zona de trabajo:**
```
src/
public/templates/
src/constants/
```

**Nunca toques:**
- `portal-automate.html` — archivo del otro desarrollador

---

## Stack del proyecto
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Zustand (estado global)

## Arrancar
```bash
npm run dev   # http://localhost:3000
```

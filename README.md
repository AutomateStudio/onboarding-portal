# Automate Agency — Onboarding Portal

Portal de onboarding premium para clientes de Automate Agency. Guía a los dueños de tiendas Shopify a través de 6 pasos para configurar su identidad de marca, tema visual, plan, apps, contenido y acceso — en menos de 5 minutos.

---

## Inicio Rapido (HTML Standalone)

Sin instalacion. Abre directo en el navegador:

```bash
# Opcion 1: Abrir directo
open portal-automate.html

# Opcion 2: Servidor local
python -m http.server 3001
# Luego abrir: http://localhost:3001/portal-automate.html
```

---

## Lo que Incluye

### `portal-automate.html` — Portal Principal (Standalone)
Un solo archivo HTML con todo incluido. Sin dependencias, sin build.

**Funcionalidades:**
- Flujo de onboarding de 6 pasos
- 16 temas visuales con preview estilo Shopify completo
- 20 paletas de colores + 8 opciones tipograficas
- Panel de preview en tiempo real
- Selector de planes con precios en COP (Starter / Growth / Scale)
- Marketplace de apps con 20+ integraciones
- Configuracion de estrategia de contenido
- Plantilla de importacion de productos (.xlsx) generada con SheetJS
- Zona de carga de archivos drag & drop
- Validacion de formularios + persistencia en localStorage
- Notificaciones toast + animaciones suaves

---

## 16 Temas Visuales

| # | Tema | Estilo | Ideal Para |
|---|------|--------|------------|
| 1 | Elegance | Dark gold, Playfair Display | Joyeria, lujo |
| 2 | Minimal Pro | Blanco/azul, Inter | Tech, SaaS |
| 3 | Bold Shop | Dark amber, Montserrat | Marcas fuertes |
| 4 | Nordic | Crema/arena, Lora | Hogar, lifestyle |
| 5 | Jewel Box | Purpura profundo, Cormorant | Moda premium |
| 6 | Fresh & Clean | Verde, DM Sans | Organico, eco |
| 7 | Rose Gold | Rosa oscuro, Raleway | Belleza, femenino |
| 8 | Urban Street | Negro/rojo, Josefin Sans | Streetwear |
| 9 | Sakura | Rosa pastel, Raleway | K-beauty, regalos |
| 10 | Obsidian | Negro puro, Montserrat | Ultra lujo |
| 11 | Tropical | Aqua, DM Sans | Playa, verano |
| 12 | Sunset | Naranja oscuro, Cormorant | Lifestyle calido |
| 13 | Sonic | Blanco/gris, Inter | Electronica, tech |
| 14 | Ritual | Crema/dorado, Cormorant | Skincare, belleza |
| 15 | Vogue | Blanco/vino, Montserrat | Moda, activewear |
| 16 | Pulse | Vino/crema, Montserrat | Sport, athleisure |

---

## Flujo de 6 Pasos

```
Paso 1 — Bienvenida
  Nombre de tienda, URL Shopify, industria, sitio de referencia

Paso 2 — Identidad de Marca
  Tema (16 opciones), paleta de colores (20), tipografia (8)

Paso 3 — Plan
  Starter ($999.000 COP) / Growth ($1.799.000 COP) / Scale ($2.999.000 COP)

Paso 4 — Apps
  Seleccion de integraciones (limite segun plan)
  Starter: 3 apps | Growth: 6 apps | Scale: 10 apps

Paso 5 — Contenido
  Descripcion de marca, tono de voz, productos principales
  Descargar plantilla de importacion de productos (.xlsx)
  Subir plantilla completada

Paso 6 — Acceso
  Nombre, email, WhatsApp, acceso colaborador Shopify
  Resumen completo del pedido antes del envio final
```

---

## Planes y Precios (COP)

| Plan | Precio | Apps | Incluye |
|------|--------|------|---------|
| Starter | $999.000 | 3 | Setup basico, apps esenciales |
| Growth | $1.799.000 | 6 | Todo Starter + herramientas avanzadas |
| Scale | $2.999.000 | 10 | Setup agencia completa, soporte prioritario |
| App Extra | +$200.000 | +1 | Agregar mas alla del limite del plan |

---

## Plantilla de Importacion de Productos

El portal genera un `.xlsx` para importacion de productos Shopify con:
- 20 columnas compatibles con Shopify
- Etiquetas en espanol + nombres tecnicos de columnas
- Instrucciones por columna
- 3 filas de ejemplo
- Hoja "Instrucciones" con guia paso a paso

Se descarga desde el **Paso 5** dentro del portal.

---

## Apps Disponibles (Paso 4)

Categorias: Marketing, Ventas, Operaciones, Analytics

Ejemplos: Klaviyo, ReConvert, Gorgias, Yotpo, TrustPilot, Judge.me, Loox, Smile.io, Privy, SMSBump, Tidio, Hotjar, Zipify, Bold Subscriptions, y mas.

---

## Estructura del Proyecto

```
onboarding-portal/
├── portal-automate.html       # Portal principal standalone (USAR ESTO)
├── src/                       # App Next.js (en desarrollo)
│   ├── app/                   # Next.js App Router
│   ├── components/
│   │   ├── steps/             # Step1Welcome.tsx (completo)
│   │   ├── OnboardingLayout.tsx
│   │   ├── Stepper.tsx
│   │   ├── LivePreview.tsx
│   │   └── ...
│   ├── stores/                # Zustand state management
│   ├── constants/             # Colores, tipografia
│   └── types/                 # Definiciones TypeScript
├── public/
├── CLAUDE.md                  # Contexto para IA
├── DEVELOPMENT.md             # Notas de desarrollo
└── README.md
```

---

## Version Next.js (En Desarrollo)

Implementacion React/Next.js para despliegue en produccion.

```bash
npm install
npm run dev
# Abre: http://localhost:3000
```

**Stack:** Next.js 15, Tailwind CSS 3, Framer Motion 11, Zustand 4, react-hook-form 7, TypeScript

**Estado:** Paso 1 (Bienvenida) completo. Pasos 2-6 en desarrollo.

---

## Despliegue

```bash
# HTML Standalone — funciona en cualquier servidor
# Netlify, Vercel, GitHub Pages, servidor propio

# Build Next.js para produccion
npm run build
npm start
```

---

## Automate Agency

Agencia especializada en lanzamiento y automatizacion de tiendas Shopify con IA.

- Mercados: Colombia (COP) y USA
- Marcas gestionadas: Luxxo Jewellery, Crowned Jewellery USA, American Clothing
- Stack: n8n, Midjourney, ElevenLabs, Klaviyo, Microsoft Clarity
- Contacto: Santiago C.

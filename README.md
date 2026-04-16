# 🚀 Automate Onboarding Portal

Premium onboarding experience for eCommerce store setup with AI-powered automation.

## ✨ Features

- **5-Step Stepper**: Guided setup process (Welcome → Brand → Preview → Inventory → Access)
- **Live Mobile Preview**: Real-time preview of your store on a simulated iPhone
- **Typography Picker**: 3 font styles (Minimal, Elegant, Modern)
- **Color Palettes**: 4 luxury color schemes (Midnight Gold, Clean Tech, Nordic Rose, Cyber Silver)
- **Luxury Tech Aesthetic**: Premium, minimalist design with smooth animations
- **Responsive Design**: Fully responsive from mobile to desktop
- **Form Validation**: Built-in validation with react-hook-form

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **State Management**: Zustand 4
- **Form Handling**: react-hook-form 7
- **TypeScript**: Full type safety

## 📦 Installation

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm or yarn

### Setup

1. **Install dependencies**

```bash
npm install
# or
yarn install
```

2. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

3. **Open in browser**

Navigate to `http://localhost:3000` to see the portal.

## 📁 Project Structure

```
onboarding-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── Stepper.tsx        # Step navigation
│   │   ├── LivePreview.tsx    # Mobile preview mockup
│   │   ├── OnboardingLayout.tsx # Main layout
│   │   └── steps/
│   │       └── Step1Welcome.tsx  # Step 1 form
│   ├── stores/
│   │   └── brandStore.ts      # Zustand store
│   ├── hooks/
│   │   └── useBrand.ts        # Custom brand hook
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── constants/
│   │   ├── colors.ts          # Color palettes
│   │   └── typography.ts      # Typography styles
│   └── styles/
│       └── globals.css        # Global styles
├── public/
│   └── assets/                # Images, icons, etc.
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🎨 Color Palettes

### Midnight Gold
```
Primary: #0f0f0b
Secondary: #1a1a15
Accent: #d4af37 (Gold)
Light: #f5f5f3
```

### Clean Tech
```
Primary: #ffffff
Secondary: #f5f5f5
Accent: #0066ff (Blue)
Light: #fafafa
```

### Nordic Rose
```
Primary: #1a1a2e
Secondary: #16213e
Accent: #e94b6d (Rose)
Light: #f5f0f0
```

### Cyber Silver
```
Primary: #0a0e27
Secondary: #1a1f3a
Accent: #a0aec0 (Silver)
Light: #f7fafc
```

## 🔤 Typography Styles

- **Minimal**: Inter (Clean, modern sans-serif)
- **Elegant**: Playfair Display (Sophisticated serif)
- **Modern**: Montserrat (Bold geometric sans-serif)

## 📝 Development Guide

### Adding a New Step

1. Create a new file in `src/components/steps/StepXName.tsx`
2. Use `useBrandStore` for state management
3. Add the component to `OnboardingLayout.tsx`'s `renderStep()` function

### Modifying Tailwind Configuration

Edit `tailwind.config.js` to:
- Add new color variables
- Adjust spacing, borders, shadows
- Customize animations

### Using Framer Motion

All components use Framer Motion for smooth animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  Content
</motion.div>
```

## 🚀 Build & Deploy

### Build for production

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env.local` file if needed:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## 📊 State Management

The app uses Zustand for global state. Access via `useBrandStore`:

```tsx
const { config, setStoreName, currentStep, nextStep } = useBrandStore();
```

Or use the custom hook:

```tsx
const { config, setStoreName, currentStep } = useBrand();
```

## 🎯 Next Steps

- [ ] Implement Step 2 (Brand Identity) with typography and color pickers
- [ ] Implement Step 3 (Preview) with enhanced mockup
- [ ] Implement Step 4 (Inventory) with file uploads
- [ ] Implement Step 5 (Access) with API keys and collaborators
- [ ] Add form persistence (localStorage/API)
- [ ] Add email validation
- [ ] Create API routes for form submission
- [ ] Add analytics tracking
- [ ] Implement multi-language support

## 📖 Documentation

Full component documentation coming soon. For now, check the JSDoc comments in source files.

## 🐛 Troubleshooting

### Port 3000 already in use?

```bash
npm run dev -- -p 3001
```

### Styles not applying?

Make sure Tailwind CSS is properly configured in `globals.css` with all three directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📄 License

Automate Agency 2026

## 🤝 Support

For issues or questions, contact Santiago (Automate Agency)

# Development Guide - Automate Onboarding Portal

## 🎯 Project Overview

The Automate Onboarding Portal is a premium, self-service platform where clients configure their eCommerce store in 5 guided steps:

1. **Welcome & Setup**: Store name, Shopify URL, industry
2. **Brand Identity**: Typography and color palette selection
3. **Live Preview**: Mobile preview with real-time updates
4. **Inventory & Media**: Logo, banners, and product template upload
5. **Logic & Access**: Voice tone, API keys, collaborators

## 🏗️ Architecture

### State Management (Zustand)

All client state is managed in `src/stores/brandStore.ts`:

```tsx
// Access anywhere in your component
const { config, setStoreName, currentStep, nextStep } = useBrandStore();

// Or use the simplified hook
const { config, setStoreName } = useBrand();
```

The store includes:
- Brand configuration (name, URL, colors, fonts, etc.)
- Navigation state (currentStep)
- Error handling
- Loading state

### Component Hierarchy

```
OnboardingLayout
├── Stepper (Navigation indicator)
├── Step1Welcome (Current step form)
│   └── Uses react-hook-form for validation
└── LivePreview (Right sidebar)
    └── Shows real-time brand preview
```

### Key Technologies

| Tech | Purpose | Location |
|------|---------|----------|
| Framer Motion | Animations & transitions | All components |
| react-hook-form | Form validation | Step components |
| Zustand | State management | stores/brandStore.ts |
| Tailwind CSS | Styling | tailwind.config.js |
| TypeScript | Type safety | types/index.ts |

## 🔄 Adding a New Step

Let's say you want to create Step 2 (Brand Identity):

### 1. Create the Component

Create `src/components/steps/Step2Brand.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { COLOR_PALETTES } from '@/constants/colors';

export function Step2Brand() {
  const colorPalette = useBrandStore((state) => state.colorPalette);
  const setColorPalette = useBrandStore((state) => state.setColorPalette);
  const nextStep = useBrandStore((state) => state.nextStep);
  const previousStep = useBrandStore((state) => state.previousStep);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Your component JSX */}
      <h1>Choose Your Brand Identity</h1>
      
      {/* Color palette selector */}
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(COLOR_PALETTES).map(([key, palette]) => (
          <div
            key={key}
            onClick={() => setColorPalette(key)}
            className="p-4 border rounded-lg cursor-pointer"
          >
            {palette.name}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button onClick={previousStep}>Back</button>
      <button onClick={nextStep}>Continue</button>
    </motion.div>
  );
}
```

### 2. Register in OnboardingLayout

Edit `src/components/OnboardingLayout.tsx`:

```tsx
import { Step2Brand } from './steps/Step2Brand';

const renderStep = () => {
  switch (currentStep) {
    case 1:
      return <Step1Welcome key="step-1" />;
    case 2:
      return <Step2Brand key="step-2" />;  // ADD THIS
    case 3:
      return <div key="step-3">Step 3</div>;
    // ...
  }
};
```

### 3. Test Your Implementation

1. Run `npm run dev`
2. Navigate through steps using the Stepper
3. Check that state updates reflect in the LivePreview

## 🎨 Customizing Styles

### Adding New Colors

Edit `src/constants/colors.ts`:

```tsx
'luxury-palette': {
  id: 'luxury-palette',
  name: 'Luxury Gold',
  colors: {
    primary: '#2c2c2c',
    secondary: '#3d3d3d',
    accent: '#ffd700',
    light: '#f8f8f8',
  },
},
```

### Modifying Tailwind Config

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Add custom colors
      'brand-primary': '#0f0f0b',
    },
    spacing: {
      // Add custom spacing
      '128': '32rem',
    },
    // ...
  },
},
```

### Global Styles

Edit `src/styles/globals.css`:

```css
/* Add custom CSS */
.custom-class {
  @apply text-lg font-minimal;
}
```

## 🔌 Working with File Uploads

For Step 4, you'll implement file uploads. Best practices:

```tsx
// Use a dropzone library or HTML5 FileReader API
const handleFileUpload = (files: FileList) => {
  const file = files[0];
  
  // Validate
  if (!file.type.startsWith('image/')) {
    setError('logo', 'Please upload an image file');
    return;
  }

  // Convert to data URL for preview
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target?.result as string;
    setLogoUrl(dataUrl);
    setLogo(file);
  };
  reader.readAsDataURL(file);
};
```

## 📱 Mobile Responsiveness

The LivePreview is hidden on mobile (`hidden lg:block`). Adjust the grid layout in `OnboardingLayout.tsx`:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
  {/* Left: Form (full width on mobile, 2/3 on desktop) */}
  <div className="lg:col-span-2">
    {/* Step content */}
  </div>

  {/* Right: Preview (hidden on mobile, 1/3 on desktop) */}
  <div className="hidden lg:block">
    <LivePreview />
  </div>
</div>
```

## ✅ Form Validation

Use react-hook-form for clean validation:

```tsx
const { register, handleSubmit, formState: { errors }, watch } = useForm({
  defaultValues: { ... }
});

// Register field with validation
<input
  {...register('storeName', {
    required: 'Store name is required',
    minLength: { value: 3, message: 'Minimum 3 characters' },
    pattern: {
      value: /^[a-zA-Z0-9\s-]+$/,
      message: 'Invalid characters',
    },
  })}
/>

// Display errors
{errors.storeName && <span>{errors.storeName.message}</span>}
```

## 🎬 Animation Patterns

### Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
/>
```

### Slide In from Bottom
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
/>
```

### Staggered Children
```tsx
<motion.div initial="hidden" animate="visible" variants={containerVariants}>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 🔍 Debugging

### Check State
```tsx
import { useBrandStore } from '@/stores/brandStore';

// In a component
const state = useBrandStore();
console.log('Current state:', state);
```

### View Store Directly
Open browser console:
```js
// Subscribe to all changes
import { useBrandStore } from '@/stores/brandStore'
useBrandStore.subscribe(console.log)
```

## 📦 Deployment Checklist

- [ ] All environment variables set in `.env.production`
- [ ] Form submission API endpoint configured
- [ ] Error tracking (Sentry, LogRocket) added
- [ ] Analytics configured (Google Analytics, Mixpanel)
- [ ] Security headers configured in `next.config.js`
- [ ] Performance optimized (images, code splitting)
- [ ] Lighthouse score > 90
- [ ] Mobile responsiveness tested
- [ ] Cross-browser tested

## 🚀 Performance Tips

1. **Lazy load images**: Use Next.js `Image` component
2. **Code splitting**: Each step is a separate route
3. **Memoization**: Use `useMemo` for expensive computations
4. **Debounce inputs**: Debounce store updates on rapid input changes

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [react-hook-form](https://react-hook-form.com/)

## 🤝 Contributing

When adding features:
1. Follow the existing component structure
2. Use TypeScript for all files
3. Add JSDoc comments for complex functions
4. Test on mobile and desktop
5. Ensure animations are smooth (60fps)

## ❓ Common Issues

### Hydration Mismatch Error
This typically happens when server and client render differently. Solution:
```tsx
'use client'; // Add at top of component
```

### State Not Updating
Make sure to use the Zustand hook correctly:
```tsx
// ❌ Wrong - creates new function on each render
const value = useBrandStore().setStoreName;

// ✅ Right - selector is stable
const setStoreName = useBrandStore((s) => s.setStoreName);
```

### Tailwind Styles Not Working
Check that:
1. `globals.css` has `@tailwind` directives
2. `tailwind.config.js` content paths are correct
3. Class name is valid Tailwind syntax

---

Happy coding! 🚀

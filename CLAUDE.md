# CLAUDE.md - Automate Onboarding Portal

## Project Overview

Premium self-service onboarding portal for Automate eCommerce agency. Clients configure their Shopify store in 5 guided steps with real-time brand preview and luxury design.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **State**: Zustand 4
- **Forms**: react-hook-form 7
- **Language**: TypeScript

## Architecture Principles

1. **Modular Components**: Each step is a separate component in `src/components/steps/`
2. **Zustand for State**: Global state in `stores/brandStore.ts`
3. **Type Safety**: Full TypeScript in `src/types/index.ts`
4. **Constants Over Magic Strings**: Colors in `constants/colors.ts`, typography in `constants/typography.ts`
5. **Framer Motion for UX**: All transitions smooth with Framer Motion

## File Structure

```
src/
├── app/               # Next.js App Router
├── components/        # React components
│   ├── Stepper.tsx
│   ├── LivePreview.tsx
│   ├── OnboardingLayout.tsx
│   └── steps/         # Step-specific forms
├── stores/            # Zustand store
├── hooks/             # Custom React hooks
├── types/             # TypeScript definitions
├── constants/         # Static data (colors, typography)
└── styles/            # Global CSS
```

## Key Components

### Stepper
- Shows progress (1-5)
- Visual feedback on current step
- Desktop and mobile versions
- Animated connecting lines

### LivePreview
- iPhone mockup showing real-time preview
- Updates when color palette or typography changes
- Shows store name and logo
- Sticky positioning on desktop

### Step Components
- One per step (Step1Welcome, Step2Brand, etc.)
- Use react-hook-form for validation
- Update Zustand store on change
- Animated entrance/exit with Framer Motion

### OnboardingLayout
- Main container integrating Stepper + Steps + LivePreview
- Renders current step via renderStep()
- Three-column layout (hidden LivePreview on mobile)

## State Management Pattern

```tsx
// Access store
const { config, setStoreName, nextStep } = useBrandStore();

// Or use wrapper hook
const { config, setStoreName } = useBrand();

// Subscribe to specific values
const storeName = useBrandStore((s) => s.storeName);
```

## Development Workflow

1. **Add new Step**: Create file in `src/components/steps/StepXName.tsx`
2. **Register Step**: Add case to `renderStep()` in `OnboardingLayout.tsx`
3. **Update Types**: Add to `src/types/index.ts` if needed
4. **Test**: Check state updates and LivePreview reflection

## Styling Guidelines

- Use Tailwind utilities; avoid inline styles
- Luxury aesthetic: soft shadows, rounded corners, elegant spacing
- Typography: minimal (Inter), elegant (Playfair), modern (Montserrat)
- Color palettes: defined in `constants/colors.ts`
- Shadows: use `shadow-luxury-sm|md|lg|xl`
- Animations: Framer Motion preferred over CSS animations

## Form Validation

Use react-hook-form:
```tsx
const { register, errors, watch, handleSubmit } = useForm({
  defaultValues: { /* initial values */ }
});

<input {...register('fieldName', { required: '...' })} />
{errors.fieldName && <span>{errors.fieldName.message}</span>}
```

## Color Palettes

- **Midnight Gold**: Dark luxury (primary: #0f0f0b, accent: #d4af37)
- **Clean Tech**: Bright minimal (primary: #fff, accent: #0066ff)
- **Nordic Rose**: Dark modern (primary: #1a1a2e, accent: #e94b6d)
- **Cyber Silver**: Tech forward (primary: #0a0e27, accent: #a0aec0)

Add new palettes in `src/constants/colors.ts`.

## Animation Patterns

```tsx
// Fade in on load
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />

// Slide in from bottom
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} />

// Button hover/tap
<motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} />
```

## Performance Notes

- LivePreview is hidden on mobile (`hidden lg:block`)
- Image files should be optimized before upload
- Use Next.js Image component for static assets
- Avoid re-renders with proper selector usage in Zustand

## Deployment

Build command: `npm run build`
Start command: `npm start`

Environment variables in `.env.local`:
- `NEXT_PUBLIC_API_URL`: API endpoint for form submission

## Future Enhancements

- [ ] Step 2: Color and typography picker implementation
- [ ] Step 3: Enhanced preview with custom theme
- [ ] Step 4: File upload with validation
- [ ] Step 5: API key and collaborator management
- [ ] Form persistence (localStorage or database)
- [ ] Email verification
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Analytics integration

## Rules

1. Always use `'use client'` at top of client components
2. Keep components under 300 lines; split if larger
3. All async operations should have loading/error states
4. Use proper TypeScript types; avoid `any`
5. Zustand selectors should be stable (defined outside render)
6. Framer Motion: prefer `initial`/`animate` over CSS
7. Test on mobile (375px) and desktop (1280px)
8. Use semantic HTML where possible
9. All strings in `constants/` unless user-generated
10. No hardcoded colors; use `constants/colors.ts`

## Notes

- Portal must feel premium and modern
- Every interaction should have smooth animation
- Mobile-first approach but optimize for desktop
- User data should be validated before submission
- Error messages should be helpful and specific

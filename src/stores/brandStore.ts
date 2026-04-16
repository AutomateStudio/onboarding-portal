import { create } from 'zustand';
import { BrandConfig, ColorPaletteKey, TypographyStyle, VoiceTone, Industry } from '@/types';

interface BrandState extends BrandConfig {
  currentStep: number;
  isLoading: boolean;
  errors: Record<string, string>;

  // Step 1 Actions
  setStoreName: (name: string) => void;
  setShopifyUrl: (url: string) => void;
  setIndustry: (industry: Industry) => void;

  // Step 2 Actions
  setColorPalette: (palette: ColorPaletteKey) => void;
  setTypography: (typography: TypographyStyle) => void;

  // Step 3 Actions
  setLogo: (file: File) => void;
  setLogoUrl: (url: string) => void;

  // Step 4 Actions
  setBannerImages: (files: File[]) => void;
  setProductTemplate: (file: File) => void;

  // Step 5 Actions
  setVoiceTone: (tone: VoiceTone) => void;
  setWompiApiKey: (key: string) => void;
  setPayuApiKey: (key: string) => void;
  setCollaboratorEmails: (emails: string[]) => void;

  // Navigation
  goToStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;

  // General
  setError: (field: string, message: string) => void;
  clearError: (field: string) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

const initialState: BrandConfig = {
  storeName: '',
  shopifyUrl: '',
  industry: 'jewelry',
  colorPalette: 'midnight-gold',
  typography: 'minimal',
  bannerImages: [],
  voiceTone: 'professional',
  collaboratorEmails: [],
};

export const useBrandStore = create<BrandState>((set) => ({
  ...initialState,
  currentStep: 1,
  isLoading: false,
  errors: {},

  // Step 1
  setStoreName: (name) => set({ storeName: name }),
  setShopifyUrl: (url) => set({ shopifyUrl: url }),
  setIndustry: (industry) => set({ industry }),

  // Step 2
  setColorPalette: (colorPalette) => set({ colorPalette }),
  setTypography: (typography) => set({ typography }),

  // Step 3
  setLogo: (logo) => set({ logo }),
  setLogoUrl: (logoUrl) => set({ logoUrl }),

  // Step 4
  setBannerImages: (bannerImages) => set({ bannerImages }),
  setProductTemplate: (productTemplate) => set({ productTemplate }),

  // Step 5
  setVoiceTone: (voiceTone) => set({ voiceTone }),
  setWompiApiKey: (wompiApiKey) => set({ wompiApiKey }),
  setPayuApiKey: (payuApiKey) => set({ payuApiKey }),
  setCollaboratorEmails: (collaboratorEmails) => set({ collaboratorEmails }),

  // Navigation
  goToStep: (currentStep) => set({ currentStep }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
  previousStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

  // General
  setError: (field, message) =>
    set((state) => ({
      errors: { ...state.errors, [field]: message },
    })),
  clearError: (field) =>
    set((state) => ({
      errors: { ...state.errors, [field]: undefined },
    })),
  setLoading: (isLoading) => set({ isLoading }),
  reset: () => set({ ...initialState, currentStep: 1 }),
}));

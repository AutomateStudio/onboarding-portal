import { create } from 'zustand';
import { PlanKey } from '@/constants/plans';

interface BrandState {
  // Navigation
  currentStep: number;
  isLoading: boolean;
  errors: Record<string, string>;

  // Step 1 — Welcome
  storeName: string;
  shopifyUrl: string;
  industry: string;
  referenceUrl: string;

  // Step 2 — Brand Identity
  theme: string | null;
  palette: string | null;
  font: string;

  // Step 3 — Plan
  plan: PlanKey | null;

  // Step 4 — Apps
  selectedApps: string[];

  // Step 5 — Content
  voiceTone: string | null;
  brandDesc: string;
  topProducts: string;
  productsFile: File | null;

  // Step 6 — Access
  email: string;
  shopifyAccess: string;
  contactName: string;
  whatsapp: string;

  // Step 1 Actions
  setStoreName: (name: string) => void;
  setShopifyUrl: (url: string) => void;
  setIndustry: (industry: string) => void;
  setReferenceUrl: (url: string) => void;

  // Step 2 Actions
  setTheme: (theme: string | null) => void;
  setPalette: (palette: string | null) => void;
  setFont: (font: string) => void;

  // Step 3 Actions
  setPlan: (plan: PlanKey | null) => void;

  // Step 4 Actions
  setSelectedApps: (apps: string[]) => void;
  toggleApp: (appId: string) => void;

  // Step 5 Actions
  setVoiceTone: (tone: string | null) => void;
  setBrandDesc: (desc: string) => void;
  setTopProducts: (products: string) => void;
  setProductsFile: (file: File | null) => void;

  // Step 6 Actions
  setEmail: (email: string) => void;
  setShopifyAccess: (access: string) => void;
  setContactName: (name: string) => void;
  setWhatsapp: (whatsapp: string) => void;

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

const initialState = {
  currentStep: 1,
  isLoading: false,
  errors: {},

  storeName: '',
  shopifyUrl: '',
  industry: 'jewelry',
  referenceUrl: '',

  theme: null,
  palette: null,
  font: 'inter',

  plan: null as PlanKey | null,

  selectedApps: [] as string[],

  voiceTone: null,
  brandDesc: '',
  topProducts: '',
  productsFile: null,

  email: '',
  shopifyAccess: '',
  contactName: '',
  whatsapp: '',
};

export const useBrandStore = create<BrandState>((set) => ({
  ...initialState,

  // Step 1
  setStoreName: (storeName) => set({ storeName }),
  setShopifyUrl: (shopifyUrl) => set({ shopifyUrl }),
  setIndustry: (industry) => set({ industry }),
  setReferenceUrl: (referenceUrl) => set({ referenceUrl }),

  // Step 2
  setTheme: (theme) => set({ theme }),
  setPalette: (palette) => set({ palette }),
  setFont: (font) => set({ font }),

  // Step 3
  setPlan: (plan) => set({ plan }),

  // Step 4
  setSelectedApps: (selectedApps) => set({ selectedApps }),
  toggleApp: (appId) =>
    set((state) => ({
      selectedApps: state.selectedApps.includes(appId)
        ? state.selectedApps.filter((id) => id !== appId)
        : [...state.selectedApps, appId],
    })),

  // Step 5
  setVoiceTone: (voiceTone) => set({ voiceTone }),
  setBrandDesc: (brandDesc) => set({ brandDesc }),
  setTopProducts: (topProducts) => set({ topProducts }),
  setProductsFile: (productsFile) => set({ productsFile }),

  // Step 6
  setEmail: (email) => set({ email }),
  setShopifyAccess: (shopifyAccess) => set({ shopifyAccess }),
  setContactName: (contactName) => set({ contactName }),
  setWhatsapp: (whatsapp) => set({ whatsapp }),

  // Navigation
  goToStep: (currentStep) => set({ currentStep }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 6) })),
  previousStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

  // General
  setError: (field, message) =>
    set((state) => ({ errors: { ...state.errors, [field]: message } })),
  clearError: (field) =>
    set((state) => {
      const errors = { ...state.errors };
      delete errors[field];
      return { errors };
    }),
  setLoading: (isLoading) => set({ isLoading }),
  reset: () => set({ ...initialState }),
}));

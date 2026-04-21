import { useBrandStore } from '@/stores/brandStore';

export const useBrand = () => {
  const store = useBrandStore();

  return {
    // Current config
    config: {
      storeName: store.storeName,
      shopifyUrl: store.shopifyUrl,
      industry: store.industry,
      theme: store.theme,
      palette: store.palette,
      font: store.font,
      logo: store.logo,
      logoUrl: store.logoUrl,
      bannerImages: store.bannerImages,
      productTemplate: store.productTemplate,
      voiceTone: store.voiceTone,
      wompiApiKey: store.wompiApiKey,
      payuApiKey: store.payuApiKey,
      collaboratorEmails: store.collaboratorEmails,
    },

    // Step 1
    setStoreName: store.setStoreName,
    setShopifyUrl: store.setShopifyUrl,
    setIndustry: store.setIndustry,

    // Step 2
    setTheme: store.setTheme,
    setPalette: store.setPalette,
    setFont: store.setFont,

    // Navigation
    currentStep: store.currentStep,
    goToStep: store.goToStep,
    nextStep: store.nextStep,
    previousStep: store.previousStep,

    // Errors
    errors: store.errors,
    setError: store.setError,
    clearError: store.clearError,

    // Loading
    isLoading: store.isLoading,
    setLoading: store.setLoading,
  };
};

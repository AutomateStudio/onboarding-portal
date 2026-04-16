// Brand Configuration Types
export type ColorPaletteKey = 'midnight-gold' | 'clean-tech' | 'nordic-rose' | 'cyber-silver';
export type TypographyStyle = 'minimal' | 'elegant' | 'modern';
export type VoiceTone = 'professional' | 'friendly' | 'aggressive';
export type Industry = 'jewelry' | 'fashion' | 'electronics' | 'home' | 'beauty' | 'other';

export interface BrandConfig {
  // Step 1: Welcome & Setup
  storeName: string;
  shopifyUrl: string;
  industry: Industry;

  // Step 2: Brand Identity
  colorPalette: ColorPaletteKey;
  typography: TypographyStyle;

  // Step 3: Logo & Preview
  logo?: File;
  logoUrl?: string;

  // Step 4: Inventory & Media
  bannerImages: File[];
  productTemplate?: File;

  // Step 5: Logic & Access
  voiceTone: VoiceTone;
  wompiApiKey?: string;
  payuApiKey?: string;
  collaboratorEmails: string[];
}

export interface TypographyOption {
  id: TypographyStyle;
  label: string;
  fontFamily: string;
  fontClass: string;
  description: string;
}

export interface ColorPalette {
  id: ColorPaletteKey;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
  };
}

export interface StepConfig {
  id: number;
  title: string;
  description: string;
  fields: string[];
}

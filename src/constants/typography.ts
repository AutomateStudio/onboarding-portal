import { TypographyStyle } from '@/types';

export interface TypographyOption {
  id: TypographyStyle;
  label: string;
  fontFamily: string;
  fontClass: string;
  description: string;
  googleFontUrl: string;
}

export const TYPOGRAPHY_STYLES: Record<TypographyStyle, TypographyOption> = {
  minimal: {
    id: 'minimal',
    label: 'Minimal',
    fontFamily: 'Inter',
    fontClass: 'font-minimal',
    description: 'Clean and modern sans-serif',
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  },
  elegant: {
    id: 'elegant',
    label: 'Elegant',
    fontFamily: 'Playfair Display',
    fontClass: 'font-elegant',
    description: 'Sophisticated serif for premium brands',
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap',
  },
  modern: {
    id: 'modern',
    label: 'Modern',
    fontFamily: 'Montserrat',
    fontClass: 'font-modern',
    description: 'Bold geometric sans-serif',
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
  },
};

export const TYPOGRAPHY_DESCRIPTIONS: Record<TypographyStyle, string> = {
  minimal:
    'Perfect for tech-forward and minimalist brands. Clean, readable, and modern.',
  elegant:
    'Ideal for luxury and high-end brands. Sophisticated and timeless design.',
  modern:
    'Great for bold and energetic brands. Strong personality and confidence.',
};

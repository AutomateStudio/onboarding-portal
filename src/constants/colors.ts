import { ColorPaletteKey } from '@/types';

interface PaletteColors {
  primary: string;
  secondary: string;
  accent: string;
  light: string;
}

interface Palette {
  id: ColorPaletteKey;
  name: string;
  colors: PaletteColors;
}

export const COLOR_PALETTES: Record<ColorPaletteKey, Palette> = {
  'midnight-gold': {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    colors: {
      primary: '#0f0f0b',
      secondary: '#1a1a15',
      accent: '#d4af37',
      light: '#f5f5f3',
    },
  },
  'clean-tech': {
    id: 'clean-tech',
    name: 'Clean Tech',
    colors: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      accent: '#0066ff',
      light: '#fafafa',
    },
  },
  'nordic-rose': {
    id: 'nordic-rose',
    name: 'Nordic Rose',
    colors: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#e94b6d',
      light: '#f5f0f0',
    },
  },
  'cyber-silver': {
    id: 'cyber-silver',
    name: 'Cyber Silver',
    colors: {
      primary: '#0a0e27',
      secondary: '#1a1f3a',
      accent: '#a0aec0',
      light: '#f7fafc',
    },
  },
};

export const PALETTE_DESCRIPTIONS: Record<ColorPaletteKey, string> = {
  'midnight-gold': 'Sophisticated and luxurious with golden accents',
  'clean-tech': 'Minimalist and bright with modern blue',
  'nordic-rose': 'Modern dark palette with rose accents',
  'cyber-silver': 'Tech-forward with cool silver and slate tones',
};

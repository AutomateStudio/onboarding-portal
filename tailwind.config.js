/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base luxury palette
        luxury: {
          50: '#fafaf9',
          100: '#f5f5f3',
          200: '#e8e8e6',
          300: '#d4d4d0',
          400: '#a9a9a0',
          500: '#7a7a6e',
          600: '#5a5a4e',
          700: '#3d3d33',
          800: '#1a1a15',
          900: '#0f0f0b',
        },
        // Color palettes
        palettes: {
          // Midnight Gold
          'midnight-gold': {
            primary: '#0f0f0b',
            secondary: '#1a1a15',
            accent: '#d4af37',
            light: '#f5f5f3',
          },
          // Clean Tech
          'clean-tech': {
            primary: '#ffffff',
            secondary: '#f5f5f5',
            accent: '#0066ff',
            light: '#fafafa',
          },
          // Nordic Rose
          'nordic-rose': {
            primary: '#1a1a2e',
            secondary: '#16213e',
            accent: '#e94b6d',
            light: '#f5f0f0',
          },
          // Cyber Silver
          'cyber-silver': {
            primary: '#0a0e27',
            secondary: '#1a1f3a',
            accent: '#a0aec0',
            light: '#f7fafc',
          },
        },
      },
      fontFamily: {
        // Typography families
        'sans-minimal': ['Inter', 'sans-serif'],
        'serif-elegant': ['Playfair Display', 'serif'],
        'sans-modern': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '42px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'sm': '4px',
        'base': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'luxury-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'luxury-lg': '0 12px 32px rgba(0, 0, 0, 0.16)',
        'luxury-xl': '0 20px 48px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

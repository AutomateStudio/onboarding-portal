'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { useToastStore } from '@/stores/toastStore';
import { useLanguage } from '@/context/LanguageContext';
import { COLOR_PALETTES, PALETTE_DESCRIPTIONS } from '@/constants/colors';
import { TYPOGRAPHY_STYLES } from '@/constants/typography';
import { ColorPaletteKey, TypographyStyle } from '@/types';

export function Step2Brand() {
  const colorPalette = useBrandStore((s) => s.colorPalette);
  const typography = useBrandStore((s) => s.typography);
  const setColorPalette = useBrandStore((s) => s.setColorPalette);
  const setTypography = useBrandStore((s) => s.setTypography);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);
  const addToast = useToastStore((s) => s.addToast);
  const { t } = useLanguage();
  const tx = t.step2;

  const handleContinue = () => {
    addToast(tx.toast, 'success');
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-900 rounded-2xl mb-4">
          <span className="text-2xl">🎨</span>
        </div>
        <h1 className="font-minimal text-4xl font-bold text-luxury-900">{tx.title}</h1>
        <p className="text-lg text-luxury-600 max-w-xl">{tx.subtitle}</p>
      </motion.div>

      {/* Color Palettes */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-4">
        <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest">{tx.colorPalette}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(Object.keys(COLOR_PALETTES) as ColorPaletteKey[]).map((key, idx) => {
            const palette = COLOR_PALETTES[key];
            const isSelected = colorPalette === key;
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setColorPalette(key)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.07 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative text-left p-4 rounded-2xl border-2 transition-all ${isSelected ? 'border-luxury-900 shadow-luxury-md' : 'border-luxury-200 hover:border-luxury-400'}`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 w-5 h-5 bg-luxury-900 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                )}
                <div className="flex gap-2 mb-3">
                  {Object.values(palette.colors).map((color, i) => (
                    <div key={i} className="w-8 h-8 rounded-lg border border-black/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <p className="font-minimal font-semibold text-luxury-900 text-sm">{palette.name}</p>
                <p className="font-minimal text-xs text-luxury-500 mt-0.5">{PALETTE_DESCRIPTIONS[key]}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Typography */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="space-y-4">
        <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest">{tx.typography}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(Object.keys(TYPOGRAPHY_STYLES) as TypographyStyle[]).map((key, idx) => {
            const style = TYPOGRAPHY_STYLES[key];
            const isSelected = typography === key;
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setTypography(key)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + idx * 0.07 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative text-left p-4 rounded-2xl border-2 transition-all ${isSelected ? 'border-luxury-900 shadow-luxury-md' : 'border-luxury-200 hover:border-luxury-400'}`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 w-5 h-5 bg-luxury-900 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                )}
                <p className="text-2xl font-bold text-luxury-900 mb-2" style={{ fontFamily: style.fontFamily }}>Aa</p>
                <p className="font-minimal font-semibold text-luxury-900 text-sm">{style.label}</p>
                <p className="font-minimal text-xs text-luxury-500 mt-0.5">{style.description}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div className="flex gap-3 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.button type="button" onClick={previousStep} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-xl border border-luxury-200 font-minimal text-luxury-700 hover:border-luxury-400 transition-all">
          {tx.back}
        </motion.button>
        <motion.button type="button" onClick={handleContinue} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="flex-1 py-3 px-6 rounded-xl bg-luxury-900 text-white font-medium font-minimal hover:bg-luxury-800 transition-all">
          {tx.cta}
        </motion.button>
      </motion.div>

      <motion.div className="flex gap-1 justify-center pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <div key={dot} className={`h-2 rounded-full transition-all ${dot === 2 ? 'w-6 bg-luxury-900' : 'w-2 bg-luxury-200'}`} />
        ))}
      </motion.div>
    </motion.div>
  );
}

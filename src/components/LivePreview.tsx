'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { COLOR_PALETTES } from '@/constants/colors';
import { TYPOGRAPHY_STYLES } from '@/constants/typography';
import { useLanguage } from '@/context/LanguageContext';

export function LivePreview() {
  const colorPalette = useBrandStore((state) => state.colorPalette);
  const typography = useBrandStore((state) => state.typography);
  const storeName = useBrandStore((state) => state.storeName);
  const logoUrl = useBrandStore((state) => state.logoUrl);
  const { t } = useLanguage();

  const palette = COLOR_PALETTES[colorPalette];
  const typographyStyle = TYPOGRAPHY_STYLES[typography];

  return (
    <motion.div
      className="sticky top-6 hidden lg:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-80 mx-auto">
        <div className="relative bg-black rounded-3xl p-2 shadow-luxury-xl">
          <motion.div
            className="relative w-full bg-white rounded-2xl overflow-hidden"
            style={{ aspectRatio: '9 / 19.5', backgroundColor: palette.colors.light }}
          >
            <div className="h-8 flex items-center justify-between px-6 text-xs font-medium" style={{ color: palette.colors.primary }}>
              <span>9:41</span>
              <span>●●●●●</span>
            </div>

            <div className="px-6 py-8 text-center h-full overflow-y-auto scrollbar-hide flex flex-col justify-between">
              {logoUrl ? (
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-lg overflow-hidden shadow-luxury-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={logoUrl} alt="Store logo" className="w-full h-full object-cover" />
                </motion.div>
              ) : (
                <div className="w-20 h-20 mx-auto mb-6 rounded-lg bg-opacity-10" style={{ backgroundColor: palette.colors.accent }} />
              )}

              <motion.div key={`${storeName}-${typography}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h1 className={`${typographyStyle.fontClass} text-2xl font-bold mb-2`} style={{ color: palette.colors.primary }}>
                  {storeName || 'Your Store'}
                </h1>
              </motion.div>

              <p className="text-sm opacity-70 mb-8" style={{ color: palette.colors.primary }}>
                {t.livePreview.tagline}
              </p>

              <motion.button
                className="w-full py-3 rounded-lg font-medium text-sm transition-all"
                style={{ backgroundColor: palette.colors.accent, color: palette.colors.light }}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.livePreview.cta}
              </motion.button>
            </div>
          </motion.div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl" />
        </div>

        <motion.div className="mt-6 text-center text-xs text-luxury-600 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <p>{t.livePreview.label}</p>
          <p className="mt-1 text-luxury-500">{palette.name} • {typographyStyle.label}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

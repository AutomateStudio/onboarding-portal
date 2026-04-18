'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { THEME_DEFS, THEME_PREVIEW_STYLES } from '@/constants/themes';
import { PALETTES } from '@/constants/palettes';
import { FONTS } from '@/constants/fonts';
import { INDUSTRY_TEMPLATES } from '@/constants/industryTemplates';

export function Step2Brand() {
  const theme = useBrandStore((s) => s.theme);
  const palette = useBrandStore((s) => s.palette);
  const font = useBrandStore((s) => s.font);
  const industry = useBrandStore((s) => s.industry);
  const setTheme = useBrandStore((s) => s.setTheme);
  const setPalette = useBrandStore((s) => s.setPalette);
  const setFont = useBrandStore((s) => s.setFont);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);

  const industryTemplates = INDUSTRY_TEMPLATES[industry] ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl space-y-10 sm:space-y-12"
    >
      {/* Header */}
      <div>
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 2 · Identidad
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Define tu identidad visual</h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Elige el tema, la paleta de colores y la tipografía que mejor representan tu marca.
        </p>
      </div>

      {/* THEMES */}
      <section>
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 sm:mb-5">
          Tema visual
          {theme && (
            <span className="ml-2 text-gray-900 normal-case font-semibold">
              · {industryTemplates?.find(t => t.id === theme)?.name ?? THEME_DEFS.find(t => t.id === theme)?.name}
            </span>
          )}
        </h2>

        {/* Industry-specific templates (beauty, fashion) */}
        {industryTemplates ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {industryTemplates.map((t, idx) => {
              const isSelected = theme === t.id;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * idx }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all text-left ${
                    isSelected ? 'border-gray-900 shadow-lg shadow-gray-900/10' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {/* Hero preview */}
                  <div className="relative h-28 sm:h-32 w-full overflow-hidden">
                    <img
                      src={t.heroMobile}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-2 left-2.5">
                      <p className="text-white text-xs font-black tracking-wider drop-shadow">{t.name}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-2.5 bg-white">
                    <div className="flex items-center gap-1 flex-wrap mb-0.5">
                      <p className="text-[11px] font-bold text-gray-900 leading-none">{t.name}</p>
                      {t.badge && (
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase leading-none ${
                          t.badge === 'popular' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] text-gray-400 leading-snug">{t.desc}</p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-[9px]">✓</span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        ) : (
          /* Generic 16 themes */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {THEME_DEFS.map((t, idx) => {
              const style = THEME_PREVIEW_STYLES[t.id] ?? { bg: '#f5f5f5', accent: '#333', text: '#111' };
              const isSelected = theme === t.id;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all text-left ${
                    isSelected ? 'border-gray-900 shadow-lg shadow-gray-900/10' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {/* Theme preview */}
                  <div
                    className="h-16 sm:h-20 w-full flex flex-col justify-between p-2"
                    style={{ backgroundColor: style.bg }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-1.5 rounded-full w-6 sm:w-8" style={{ backgroundColor: style.accent }} />
                      <div className="flex gap-1">
                        <div className="h-1 rounded-full w-2 sm:w-3" style={{ backgroundColor: style.text, opacity: 0.4 }} />
                        <div className="h-1 rounded-full w-2 sm:w-3" style={{ backgroundColor: style.text, opacity: 0.4 }} />
                      </div>
                    </div>
                    <div>
                      <div className="h-1.5 rounded-full w-10 sm:w-12 mb-1" style={{ backgroundColor: style.text, opacity: 0.6 }} />
                      <div className="h-1 rounded-full w-6 sm:w-8" style={{ backgroundColor: style.text, opacity: 0.3 }} />
                    </div>
                    <div className="h-3 rounded w-8 sm:w-10" style={{ backgroundColor: style.accent, opacity: 0.9 }} />
                  </div>

                  {/* Info */}
                  <div className="p-2 sm:p-2.5 bg-white">
                    <div className="flex items-center gap-1 flex-wrap mb-0.5">
                      <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-none">{t.name}</p>
                      {t.badge && (
                        <span className={`text-[8px] sm:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded-full uppercase leading-none ${
                          t.badge === 'popular' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 leading-snug line-clamp-1">{t.desc}</p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-2 right-2 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px]">✓</span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        )}
      </section>

      {/* PALETTES */}
      <section>
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 sm:mb-5">
          Paleta de colores
          {palette && <span className="ml-2 text-gray-900 normal-case font-semibold">· {PALETTES.find(p => p.id === palette)?.name}</span>}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {PALETTES.map((p, idx) => {
            const isSelected = palette === p.id;
            return (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => setPalette(p.id)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * idx }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-xl border-2 p-2.5 sm:p-3 text-left transition-all ${
                  isSelected ? 'border-gray-900 shadow-md' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  {p.colors.map((color, i) => (
                    <div
                      key={i}
                      className="h-4 sm:h-5 rounded-md border border-black/5 flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-none">{p.name}</p>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* FONTS */}
      <section>
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 sm:mb-5">
          Tipografía
          {font && <span className="ml-2 text-gray-900 normal-case font-semibold">· {FONTS.find(f => f.id === font)?.name}</span>}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {FONTS.map((f, idx) => {
            const isSelected = font === f.id;
            return (
              <motion.button
                key={f.id}
                type="button"
                onClick={() => setFont(f.id)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * idx }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-xl border-2 p-2.5 sm:p-3 text-left transition-all ${
                  isSelected ? 'border-gray-900 shadow-md' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <p
                  className="text-sm sm:text-base font-bold text-gray-900 mb-1 leading-none"
                  style={{ fontFamily: f.family }}
                >
                  {f.sample}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-none">{f.name}</p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 leading-snug">{f.desc}</p>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        <motion.button
          type="button"
          onClick={previousStep}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 sm:px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-400 transition-all"
        >
          ← Volver
        </motion.button>
        <motion.button
          type="button"
          onClick={nextStep}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
        >
          Continuar a Plan →
        </motion.button>
      </div>
    </motion.div>
  );
}

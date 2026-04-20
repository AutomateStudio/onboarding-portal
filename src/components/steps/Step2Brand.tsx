'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { THEME_DEFS, THEME_PREVIEW_STYLES, FASHION_TEMPLATE_DEFS } from '@/constants/themes';
import { PALETTES } from '@/constants/palettes';
import { FONTS } from '@/constants/fonts';

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

  const isFashion = industry === 'fashion';
  const activeFashionTheme = FASHION_TEMPLATE_DEFS.find(t => t.id === theme);

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

      {/* FASHION-SPECIFIC TEMPLATES */}
      {isFashion && (
        <section>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Plantillas de Moda
            </h2>
            {activeFashionTheme && (
              <span className="text-gray-900 text-xs font-semibold normal-case">· {activeFashionTheme.name}</span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 mb-4">Diseñadas específicamente para tiendas de ropa y moda.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {FASHION_TEMPLATE_DEFS.map((t, idx) => {
              const isSelected = theme === t.id;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative rounded-2xl overflow-hidden border-2 text-left transition-all ${
                    isSelected ? 'border-gray-900 shadow-lg shadow-gray-900/10' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {/* Mini template preview */}
                  <div className="h-32 sm:h-36 w-full relative overflow-hidden" style={{ backgroundColor: t.bgColor }}>
                    {/* Announcement bar */}
                    <div className="h-4 flex items-center justify-center" style={{ backgroundColor: t.id === 'simetria' ? '#f0ede8' : 'rgba(0,0,0,0.3)' }}>
                      <div className="h-1 w-24 rounded-full" style={{ backgroundColor: t.id === 'simetria' ? '#aaa' : 'rgba(255,255,255,0.3)' }} />
                    </div>
                    {/* Nav bar */}
                    <div className="flex items-center justify-between px-3 h-7" style={{ backgroundColor: t.navColor, borderBottom: '1px solid rgba(128,128,128,0.15)' }}>
                      <div className="flex gap-2">
                        <div className="h-1 w-6 rounded-full" style={{ backgroundColor: t.id === 'aura' ? '#111' : (t.id === 'simetria' ? '#1a1a1a' : 'rgba(255,255,255,0.3)'), opacity: 0.5 }} />
                        <div className="h-1 w-6 rounded-full" style={{ backgroundColor: t.id === 'aura' ? '#111' : (t.id === 'simetria' ? '#1a1a1a' : 'rgba(255,255,255,0.3)'), opacity: 0.5 }} />
                      </div>
                      <span className="text-[8px] font-black tracking-widest" style={{ color: t.id === 'aura' ? '#111' : (t.id === 'simetria' ? '#1a1a1a' : '#fff') }}>{t.ref.toUpperCase()}</span>
                      <div className="flex gap-1">
                        <div className="h-1 w-4 rounded-full" style={{ backgroundColor: t.id === 'aura' ? '#111' : (t.id === 'simetria' ? '#1a1a1a' : 'rgba(255,255,255,0.3)'), opacity: 0.5 }} />
                      </div>
                    </div>
                    {/* Hero area */}
                    <div className="relative flex-1 h-14 flex items-end px-3 pb-2" style={{ background: t.id === 'aura' ? 'linear-gradient(135deg, #222 0%, #111 100%)' : (t.id === 'elegancia' ? 'linear-gradient(135deg, #0a1828 0%, #0d1e30 100%)' : 'linear-gradient(135deg, #e8e0d8 0%, #f5f0e8 100%)') }}>
                      <div>
                        <div className="h-0.5 w-8 rounded-full mb-1" style={{ backgroundColor: t.accentColor, opacity: 0.6 }} />
                        <div className="h-2 w-16 rounded-sm mb-1" style={{ backgroundColor: t.id === 'simetria' ? '#1a1a1a' : '#fff', opacity: 0.85 }} />
                        <div className="h-1 w-10 rounded-sm" style={{ backgroundColor: t.id === 'simetria' ? '#1a1a1a' : '#fff', opacity: 0.45 }} />
                      </div>
                    </div>
                    {/* Product grid */}
                    <div className="grid grid-cols-3 gap-1 px-2 pt-1">
                      {[0,1,2].map(i => (
                        <div key={i} className="rounded-sm overflow-hidden" style={{ height: 22, backgroundColor: t.id === 'elegancia' ? '#0a1828' : (t.id === 'simetria' ? ['#f5f0e8','#e8f0f5','#efe8f0'][i] : '#1a1a1a') }}>
                          <div className="w-full h-full opacity-40" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Card info */}
                  <div className="p-2.5 sm:p-3 bg-white">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-xs font-bold text-gray-900">{t.name}</p>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 uppercase tracking-wide">Moda</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-snug">{t.desc}</p>
                    <p className="text-[9px] text-gray-300 mt-0.5">Basado en {t.ref}</p>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-[9px]">✓</span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400 font-medium">Otros temas disponibles</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
        </section>
      )}

      {/* THEMES */}
      <section>
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 sm:mb-5">
          Tema visual
          {theme && !activeFashionTheme && <span className="ml-2 text-gray-900 normal-case font-semibold">· {THEME_DEFS.find(t => t.id === theme)?.name}</span>}
        </h2>
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

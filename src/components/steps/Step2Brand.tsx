'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { THEME_DEFS, THEME_PREVIEW_STYLES } from '@/constants/themes';
import { PALETTES } from '@/constants/palettes';
import { FONTS } from '@/constants/fonts';
import { INDUSTRY_TEMPLATES, buildDesktopHtml } from '@/constants/industryTemplates';


/** Generates a tiny HTML store-like layout to preview palette colors */
function buildPalettePreview(colors: readonly string[]): string {
  const [bg, navBg, accent, fg] = colors;
  return `
    <div style="width:100%;height:100%;background:${bg};display:flex;flex-direction:column;overflow:hidden;font-family:sans-serif">
      <div style="background:${navBg};padding:5px 7px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0">
        <div style="width:28px;height:3px;background:${fg};border-radius:2px;opacity:0.85"></div>
        <div style="display:flex;gap:3px;align-items:center">
          <div style="width:12px;height:2px;background:${fg};border-radius:1px;opacity:0.35"></div>
          <div style="width:12px;height:2px;background:${fg};border-radius:1px;opacity:0.35"></div>
          <div style="width:7px;height:7px;border-radius:50%;background:${accent};opacity:0.8"></div>
        </div>
      </div>
      <div style="padding:6px;flex:1;display:flex;flex-direction:column;gap:5px">
        <div style="background:${navBg};border-radius:5px;padding:8px 7px">
          <div style="width:55%;height:5px;background:${fg};border-radius:2px;opacity:0.75;margin-bottom:3px"></div>
          <div style="width:36%;height:3px;background:${fg};border-radius:2px;opacity:0.35;margin-bottom:7px"></div>
          <div style="display:inline-block;background:${accent};padding:3px 7px;border-radius:3px">
            <div style="width:22px;height:2px;background:${bg};border-radius:1px;opacity:0.9"></div>
          </div>
        </div>
        <div style="display:flex;gap:4px;flex:1">
          <div style="flex:1;background:${navBg};border-radius:4px;overflow:hidden">
            <div style="width:100%;height:22px;background:${accent};opacity:0.25"></div>
            <div style="padding:3px 4px">
              <div style="width:65%;height:2px;background:${fg};border-radius:1px;opacity:0.55;margin-bottom:2px"></div>
              <div style="width:38%;height:2px;background:${accent};border-radius:1px;opacity:0.85"></div>
            </div>
          </div>
          <div style="flex:1;background:${navBg};border-radius:4px;overflow:hidden">
            <div style="width:100%;height:22px;background:${accent};opacity:0.25"></div>
            <div style="padding:3px 4px">
              <div style="width:65%;height:2px;background:${fg};border-radius:1px;opacity:0.55;margin-bottom:2px"></div>
              <div style="width:38%;height:2px;background:${accent};border-radius:1px;opacity:0.85"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-4">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Paso 2 de 6</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Define tu identidad visual</h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Elige el diseño, los colores y la letra. La vista previa de la derecha se actualiza en tiempo real.
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

        {/* Industry-specific templates — full-width stacked cards */}
        {industryTemplates ? (
          <div className="flex flex-col gap-6">
            {industryTemplates.map((t, idx) => {
              const isSelected = theme === t.id;

              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx }}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-gray-900 shadow-xl shadow-gray-900/10'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  onClick={() => setTheme(t.id)}
                >
                  {/* Checkmark */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  )}

                  {/* Desktop-only preview */}
                  <div style={{ height: 340, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {/* Browser bar */}
                    <div style={{
                      height: 26, background: '#e0e0e0',
                      display: 'flex', alignItems: 'center',
                      padding: '0 12px', gap: 10, flexShrink: 0,
                    }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
                        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
                        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840', display: 'block' }} />
                      </div>
                      <div style={{
                        flex: 1, maxWidth: 240, height: 14, background: '#fff',
                        borderRadius: 8, margin: '0 auto',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 8, color: '#999', fontFamily: 'Inter, sans-serif',
                      }}>
                        mitienda.myshopify.com
                      </div>
                    </div>
                    {/* Desktop content — full width */}
                    <div
                      style={{ flex: 1, overflow: 'hidden' }}
                      dangerouslySetInnerHTML={{ __html: buildDesktopHtml(t) }}
                    />
                  </div>

                  {/* Meta footer */}
                  <div style={{ padding: '14px 16px 16px', background: '#fff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0f0f0b', margin: '0 0 3px' }}>{t.name}</h4>
                        <p style={{ fontSize: 12, color: '#888', margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                        {t.previewUrl && (
                          <a
                            href={t.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              background: '#fff',
                              color: '#0f0f0b',
                              fontSize: 12, fontWeight: 600,
                              padding: '7px 14px', borderRadius: 20,
                              border: '1.5px solid #ddd',
                              cursor: 'pointer', whiteSpace: 'nowrap',
                              textDecoration: 'none',
                              transition: 'all 0.18s',
                            }}
                          >
                            Ver demo →
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setTheme(t.id); }}
                          style={{
                            background: isSelected ? '#10b981' : '#fff',
                            color: isSelected ? '#fff' : '#0f0f0b',
                            fontSize: 12, fontWeight: 600,
                            padding: '7px 18px', borderRadius: 20,
                            border: `1.5px solid ${isSelected ? '#10b981' : '#0f0f0b'}`,
                            cursor: 'pointer', whiteSpace: 'nowrap',
                            transition: 'all 0.18s',
                          }}
                        >
                          {isSelected ? '✓ Elegido' : 'Elegir'}
                        </button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
                      {t.badge === 'popular' && (
                        <span style={{ fontSize: 9, fontWeight: 600, padding: '2px 9px', borderRadius: 20, background: '#fef3c7', color: '#92400e' }}>
                          ⭐ Popular
                        </span>
                      )}
                      {t.badge === 'new' && (
                        <span style={{ fontSize: 9, fontWeight: 600, padding: '2px 9px', borderRadius: 20, background: '#ecfdf5', color: '#065f46' }}>
                          ✦ Nuevo
                        </span>
                      )}
                      {t.tags.filter(tg => tg !== 'nuevo' && tg !== 'popular').map(tg => (
                        <span key={tg} style={{ fontSize: 9, fontWeight: 600, padding: '2px 9px', borderRadius: 20, background: '#f0f0ee', color: '#666' }}>
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
                className={`relative rounded-xl border-2 overflow-hidden text-left transition-all ${
                  isSelected ? 'border-gray-900 shadow-md' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                {/* Font preview area */}
                <div className="h-20 sm:h-24 w-full bg-gray-50 flex flex-col justify-center px-3 gap-1">
                  <p
                    className="text-base sm:text-lg font-bold text-gray-900 leading-tight line-clamp-1"
                    style={{ fontFamily: f.family }}
                  >
                    {f.sample}
                  </p>
                  <p
                    className="text-[10px] text-gray-500 leading-snug line-clamp-2"
                    style={{ fontFamily: f.family }}
                  >
                    Tu tienda · Nuevos productos
                  </p>
                </div>
                {/* Label */}
                <div className="px-2.5 py-2 bg-white">
                  <p className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-none">{f.name}</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 leading-none">{f.desc}</p>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shadow">
                    <span className="text-white text-[9px] font-bold">✓</span>
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
                className={`relative rounded-xl border-2 overflow-hidden text-left transition-all ${
                  isSelected ? 'border-gray-900 shadow-md' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                {/* Mini store preview */}
                <div
                  className="h-20 sm:h-24 w-full"
                  dangerouslySetInnerHTML={{ __html: buildPalettePreview(p.colors) }}
                />
                {/* Name row + color dots */}
                <div className="px-2.5 py-2 bg-white flex items-center justify-between gap-1">
                  <p className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-none truncate">{p.name}</p>
                  <div className="flex gap-0.5 flex-shrink-0">
                    {p.colors.map((color, i) => (
                      <div key={i} className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shadow">
                    <span className="text-white text-[9px] font-bold">✓</span>
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
          Continuar — Elige tu plan →
        </motion.button>
      </div>
    </motion.div>
  );
}

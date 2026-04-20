'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { PALETTES } from '@/constants/palettes';
import { FONTS } from '@/constants/fonts';
import { INDUSTRY_CONTENT } from '@/constants/industries';
import { THEME_NAV, THEME_COLORS, FASHION_TEMPLATE_DEFS } from '@/constants/themes';
import { PLANS, PlanKey } from '@/constants/plans';

const formatCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n);

export function LivePreview() {
  const storeName = useBrandStore((s) => s.storeName);
  const industry = useBrandStore((s) => s.industry);
  const palette = useBrandStore((s) => s.palette);
  const theme = useBrandStore((s) => s.theme);
  const font = useBrandStore((s) => s.font);
  const plan = useBrandStore((s) => s.plan);
  const selectedApps = useBrandStore((s) => s.selectedApps);

  // Resolve colors: theme base → palette override
  const paletteData = PALETTES.find((p) => p.id === palette);
  const themeColors = theme ? THEME_COLORS[theme] : null;

  const colors = paletteData
    ? { bg: paletteData.colors[0], fg: paletteData.colors[3], accent: paletteData.colors[2], navBg: paletteData.colors[1], cardBg: paletteData.colors[1], heroBg: paletteData.colors[1] }
    : themeColors
    ? { bg: themeColors.bg, fg: themeColors.text, accent: themeColors.accent, navBg: themeColors.navBg, cardBg: themeColors.cardBg, heroBg: themeColors.heroBg }
    : { bg: '#0f0f0b', fg: '#f5f0e8', accent: '#d4af37', navBg: '#0f0f0b', cardBg: '#1a1a15', heroBg: '#0f0f0b' };

  // Resolve font
  const fontData = FONTS.find((f) => f.id === font);
  const fontFamily = fontData?.family ?? "'Inter', sans-serif";

  // Resolve industry content
  const content = INDUSTRY_CONTENT[industry] ?? INDUSTRY_CONTENT['other'];

  // Resolve theme nav
  const nav = theme ? (THEME_NAV[theme] ?? THEME_NAV['minimal']) : THEME_NAV['minimal'];
  const logoText = storeName ? storeName.toUpperCase().slice(0, 10) : nav.logo;

  // Fashion template check
  const fashionTemplate = FASHION_TEMPLATE_DEFS.find(t => t.id === theme);

  // Pricing
  const currentPlan = plan ? PLANS[plan as PlanKey] : null;
  const appsLimit = currentPlan?.appsLimit ?? 0;
  const extraAppsCount = Math.max(0, selectedApps.length - appsLimit);
  const extraAppPrice = currentPlan?.extraAppPrice ?? 200000;
  const totalPrice = currentPlan ? currentPlan.price + extraAppsCount * extraAppPrice : 0;

  return (
    <div className="sticky top-6">
      {/* Window chrome */}
      <div className="bg-gray-100 rounded-t-2xl px-4 py-2.5 flex items-center gap-2 border border-gray-200 border-b-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400 font-medium">Vista Previa</span>
        </div>
      </div>

      {/* iPhone mockup */}
      <div className="relative bg-gray-900 rounded-b-3xl p-2 shadow-2xl shadow-gray-900/30 border border-gray-800 border-t-0">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-2xl z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={`${palette}-${industry}-${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: colors.bg, fontFamily }}
          >
            {/* Status bar */}
            <div
              className="flex items-center justify-between px-4 pt-6 pb-1 text-[9px] font-bold"
              style={{ color: fashionTemplate ? (fashionTemplate.id === 'simetria' ? '#555' : '#ccc') : colors.fg, opacity: 0.5 }}
            >
              <span>9:41</span>
              <span>●●●●</span>
            </div>

            {/* ── AURA fashion template ─────────────────────────── */}
            {fashionTemplate?.id === 'aura' && (
              <>
                <div className="flex items-center justify-center text-[7px] font-bold tracking-widest text-white/50 uppercase" style={{ backgroundColor: '#1e1e1e', height: 18 }}>
                  New Drop — Free Shipping
                </div>
                <div className="flex items-center justify-between px-3 py-2" style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
                  <div className="flex gap-2 text-[8px] font-semibold text-gray-500">
                    <span>Shop</span><span>Collections</span>
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-gray-900">A</span>
                  <div className="flex gap-2 text-[11px]">🔍🛒</div>
                </div>
                <div className="relative overflow-hidden" style={{ height: 110 }}>
                  <img src={content.hero} alt="hero" className="w-full h-full object-cover" style={{ filter: 'brightness(0.75)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(17,17,17,0.7) 0%, transparent 50%)' }} />
                  <div className="absolute bottom-3 right-3 text-right">
                    <p className="text-[10px] font-black text-white leading-tight">Colección<br/>Athleisure</p>
                    <div className="mt-1.5 inline-block px-2 py-1 rounded-full text-[7px] font-bold bg-white text-gray-900">Ver →</div>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-1" style={{ backgroundColor: '#f5f5f5' }}>
                  <div className="grid grid-cols-3 gap-1.5">
                    {content.products.slice(0, 3).map((prod, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a', height: 70 }}>
                        <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
                        {i === 0 && <div className="absolute bottom-1 left-1 bg-white rounded-full text-[5.5px] font-bold text-gray-900 px-1.5 py-0.5">Best seller</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── ELEGANCIA fashion template ────────────────────── */}
            {fashionTemplate?.id === 'elegancia' && (
              <>
                <div className="flex items-center justify-center text-[7px] font-bold tracking-widest uppercase" style={{ backgroundColor: '#080f1a', height: 18, color: '#8a7060' }}>
                  Free Shipping · Free Returns
                </div>
                <div className="flex items-center justify-between px-3 py-2" style={{ backgroundColor: '#0d1e30', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex gap-2 text-[7px] font-medium" style={{ color: '#b8a490' }}>
                    <span>Collections</span><span>Editorial</span>
                  </div>
                  <span className="text-[9px] font-bold tracking-widest" style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif" }}>ALLURE</span>
                  <div className="flex gap-2 text-[10px]" style={{ color: '#b8a490' }}>♡ 🛒</div>
                </div>
                <div className="relative overflow-hidden" style={{ height: 110 }}>
                  <img src={content.hero} alt="hero" className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,15,26,0.9) 0%, rgba(8,15,26,0.1) 65%)' }} />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <p className="text-[7px] font-semibold tracking-widest uppercase mb-1" style={{ color: '#b89060' }}>New Collection</p>
                    <p className="text-[11px] font-light leading-tight" style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>Find An<br/>Everlasting Look</p>
                    <div className="mt-2 inline-block px-2 py-0.5 text-[6.5px] font-semibold tracking-wider uppercase" style={{ border: '1px solid rgba(255,255,255,0.5)', color: '#fff' }}>Shop Now →</div>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-2" style={{ backgroundColor: '#0d1e30' }}>
                  <p className="text-center text-[7px] tracking-widest mb-2 font-semibold" style={{ color: '#b89060' }}>— Curated Pieces —</p>
                  <div className="grid grid-cols-3 gap-1">
                    {content.products.slice(0, 3).map((prod, i) => (
                      <div key={i} className="relative overflow-hidden" style={{ backgroundColor: '#0a1828' }}>
                        <img src={prod.img} alt={prod.name} className="w-full object-cover" style={{ height: 60, filter: 'brightness(0.85)' }} />
                        {i === 0 && <div className="absolute top-1 left-1 text-white text-[5.5px] font-bold px-1 py-0.5 uppercase" style={{ backgroundColor: '#b5334a' }}>New</div>}
                        <div className="px-1 py-1">
                          <p className="text-[6.5px] font-medium" style={{ color: '#d4bfa0' }}>{prod.name}</p>
                          <p className="text-[6.5px] font-bold" style={{ color: '#8a7060' }}>{prod.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── SIMETRÍA fashion template ─────────────────────── */}
            {fashionTemplate?.id === 'simetria' && (
              <>
                <div className="flex items-center justify-center text-[7px] font-bold tracking-widest uppercase" style={{ backgroundColor: '#f0ede8', height: 18, color: '#777' }}>
                  Free Shipping on Orders Over $75
                </div>
                <div className="flex items-center justify-between px-3 py-2" style={{ backgroundColor: '#fff', borderBottom: '1px solid #e8e8e8' }}>
                  <div className="flex gap-2 text-[7.5px] font-semibold text-gray-500">
                    <span>Shop</span><span>Collections</span>
                  </div>
                  <span className="text-[8.5px] font-black tracking-widest text-gray-900">SYMMETRY</span>
                  <div className="flex gap-2 text-[11px] text-gray-700">🔍🛒</div>
                </div>
                <div className="relative overflow-hidden flex items-center justify-center" style={{ height: 100 }}>
                  <img src={content.hero} alt="hero" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.72)' }} />
                  <div className="relative z-10 text-center px-4">
                    <p className="text-[7px] font-bold tracking-widest uppercase text-white/80 mb-1">New Arrivals</p>
                    <p className="text-[14px] font-black text-white leading-tight">Effortless<br/>Style</p>
                    <div className="mt-2 inline-block px-3 py-1 text-[6.5px] font-bold uppercase tracking-wide bg-white text-gray-900">Shop Now</div>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-2 bg-white">
                  <p className="text-center text-[7px] tracking-widest mb-1.5 font-bold text-gray-400 uppercase">Featured Products</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {content.products.slice(0, 3).map((prod, i) => (
                      <div key={i} className="overflow-hidden" style={{ backgroundColor: ['#f5f0e8','#e8f0f5','#efe8f0'][i] }}>
                        <img src={prod.img} alt={prod.name} className="w-full object-cover" style={{ height: 56 }} />
                        <div className="px-1 py-1">
                          <p className="text-[6px] text-gray-500 leading-tight">{prod.name}</p>
                          <p className="text-[6.5px] font-bold text-gray-900">{prod.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── Generic template (non-fashion themes) ─────────── */}
            {!fashionTemplate && (
              <>
                {/* Simulated navbar */}
                <div
                  className="flex items-center justify-between px-3 py-2 text-[9px] font-bold"
                  style={{ backgroundColor: colors.navBg, color: colors.fg }}
                >
                  <span className="font-black tracking-widest" style={{ fontFamily }}>{logoText}</span>
                  <div className="flex gap-2 items-center opacity-60">
                    {nav.links.slice(0, 2).map((link) => (
                      <span key={link}>{link}</span>
                    ))}
                    {nav.icons.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>

                {/* Hero image */}
                <div className="relative mx-2 rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img src={content.hero} alt="Hero" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${colors.fg}99 0%, transparent 60%)` }} />
                  <div className="absolute bottom-2 left-3 right-3">
                    <p className="text-[8px] font-bold tracking-widest uppercase opacity-80 mb-0.5" style={{ color: colors.accent }}>{content.eyebrow}</p>
                    <p className="text-sm font-bold leading-tight" style={{ color: '#ffffff', fontFamily }}>{content.title}</p>
                    <div className="mt-1.5 inline-block px-2 py-1 rounded text-[8px] font-bold" style={{ backgroundColor: colors.accent, color: colors.bg }}>{content.cta}</div>
                  </div>
                </div>

                {/* Product grid */}
                <div className="px-2 pt-3 pb-1">
                  <p className="text-[8px] font-bold tracking-widest uppercase mb-2 opacity-50" style={{ color: colors.fg }}>Destacados</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {content.products.slice(0, 4).map((prod, i) => (
                      <div key={i} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
                        <img src={prod.img} alt={prod.name} className="w-full object-cover" style={{ aspectRatio: '1/1' }} />
                        <div className="px-1.5 py-1">
                          <p className="text-[8px] font-semibold leading-tight" style={{ color: colors.fg }}>{prod.name}</p>
                          <p className="text-[8px] font-bold" style={{ color: colors.accent }}>{prod.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Bottom padding */}
            <div className="h-4" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pricing summary */}
      <div className="mt-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-sm">
        {currentPlan ? (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs">Plan {currentPlan.name}</span>
              <span className="font-semibold text-gray-900 text-xs">{formatCOP(currentPlan.price)}</span>
            </div>
            {selectedApps.length > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">{selectedApps.length} apps</span>
                <span className="text-xs text-gray-600">
                  {extraAppsCount > 0
                    ? <span className="text-amber-600 font-medium">+{formatCOP(extraAppsCount * extraAppPrice)}</span>
                    : <span className="text-green-600 font-medium">Incluidas</span>
                  }
                </span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
              <span className="font-bold text-gray-900 text-sm">Total estimado</span>
              <span className="font-bold text-gray-900">{formatCOP(totalPrice)}</span>
            </div>
          </div>
        ) : (
          <p className="text-xs text-gray-400 text-center">
            Selecciona un plan para ver el precio
          </p>
        )}
      </div>

      {/* Palette + font label */}
      {(palette || font) && (
        <div className="mt-2 text-center text-xs text-gray-400">
          {paletteData?.name && <span>{paletteData.name}</span>}
          {paletteData?.name && fontData?.name && <span> · </span>}
          {fontData?.name && <span>{fontData.name}</span>}
        </div>
      )}
    </div>
  );
}

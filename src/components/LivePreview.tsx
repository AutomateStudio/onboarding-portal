'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { PALETTES } from '@/constants/palettes';
import { FONTS } from '@/constants/fonts';
import { INDUSTRY_CONTENT } from '@/constants/industries';
import { THEME_NAV, THEME_COLORS } from '@/constants/themes';
import { PLANS, PlanKey } from '@/constants/plans';
import { INDUSTRY_TEMPLATE_IDS, getTemplateById } from '@/constants/industryTemplates';
import { TemplatePhonePreview } from '@/components/TemplatePhonePreview';

const formatCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n);

const TEMPLATE_STATUS_BG: Record<string, string> = {
  aurora:    '#faf7f2',
  onyx:      '#1a1512',
  bloom:     '#ffffff',
  aura:      '#f8f9fa',
  elegancia: '#f7f3ed',
  simetria:  '#ffffff',
};
const TEMPLATE_STATUS_TEXT: Record<string, string> = {
  aurora:    '#8a7060',
  onyx:      '#b89870',
  bloom:     '#1a1a1a',
  aura:      '#1a2a3a',
  elegancia: '#5a4a3a',
  simetria:  '#1a1a1a',
};

export function LivePreview() {
  const storeName = useBrandStore((s) => s.storeName);
  const industry = useBrandStore((s) => s.industry);
  const palette = useBrandStore((s) => s.palette);
  const theme = useBrandStore((s) => s.theme);
  const font = useBrandStore((s) => s.font);
  const plan = useBrandStore((s) => s.plan);
  const selectedApps = useBrandStore((s) => s.selectedApps);

  // Check if selected theme is an industry-specific template
  const isIndustryTemplate = theme ? INDUSTRY_TEMPLATE_IDS.has(theme) : false;
  const industryTemplate = isIndustryTemplate && theme ? getTemplateById(theme) : null;

  // Resolve colors: theme base → palette override (only for generic themes)
  const paletteData = PALETTES.find((p) => p.id === palette);
  const themeColors = !isIndustryTemplate && theme ? THEME_COLORS[theme] : null;

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
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: industryTemplate ? undefined : colors.bg,
              fontFamily,
              height: 420,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {industryTemplate ? (
              <>
                {/* Status bar con padding para el notch */}
                <div style={{
                  background: TEMPLATE_STATUS_BG[industryTemplate.id] ?? '#fff',
                  color: TEMPLATE_STATUS_TEXT[industryTemplate.id] ?? '#555',
                  paddingTop: 22, paddingBottom: 4,
                  paddingLeft: 12, paddingRight: 12,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontSize: 9, fontWeight: 700, opacity: 0.7, flexShrink: 0,
                }}>
                  <span>9:41</span>
                  <span>●●●●</span>
                </div>
                {/* Contenido del template llenando el resto */}
                <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
                  <TemplatePhonePreview template={industryTemplate} storeName={storeName} />
                </div>
              </>
            ) : (
              <>
                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-4 pt-6 pb-1 text-[9px] font-bold"
                  style={{ color: colors.fg, opacity: 0.5, flexShrink: 0 }}
                >
                  <span>9:41</span>
                  <span>●●●●</span>
                </div>

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
                  <img
                    src={content.hero}
                    alt="Hero"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${colors.fg}99 0%, transparent 60%)` }}
                  />
                  <div className="absolute bottom-2 left-3 right-3">
                    <p
                      className="text-[8px] font-bold tracking-widest uppercase opacity-80 mb-0.5"
                      style={{ color: colors.accent }}
                    >
                      {content.eyebrow}
                    </p>
                    <p
                      className="text-sm font-bold leading-tight"
                      style={{ color: '#ffffff', fontFamily }}
                    >
                      {content.title}
                    </p>
                    <div
                      className="mt-1.5 inline-block px-2 py-1 rounded text-[8px] font-bold"
                      style={{ backgroundColor: colors.accent, color: colors.bg }}
                    >
                      {content.cta}
                    </div>
                  </div>
                </div>
              </>
            )}
            {!industryTemplate && (
              <>
                {/* Product grid */}
                <div className="px-2 pt-3 pb-1">
                  <p
                    className="text-[8px] font-bold tracking-widest uppercase mb-2 opacity-50"
                    style={{ color: colors.fg }}
                  >
                    Destacados
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {content.products.slice(0, 4).map((prod, i) => (
                      <div key={i} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
                        <img
                          src={prod.img}
                          alt={prod.name}
                          className="w-full object-cover"
                          style={{ aspectRatio: '1/1' }}
                        />
                        <div className="px-1.5 py-1">
                          <p
                            className="text-[8px] font-semibold leading-tight"
                            style={{ color: colors.fg }}
                          >
                            {prod.name}
                          </p>
                          <p
                            className="text-[8px] font-bold"
                            style={{ color: colors.accent }}
                          >
                            {prod.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-4" />
              </>
            )}
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

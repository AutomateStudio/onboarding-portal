'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';

function toShopifySlug(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

const INDUSTRIES = [
  { value: 'jewelry',     label: 'Joyería y Accesorios' },
  { value: 'fashion',     label: 'Moda y Ropa' },
  { value: 'electronics', label: 'Electrónica' },
  { value: 'home',        label: 'Hogar y Jardín' },
  { value: 'beauty',      label: 'Belleza' },
  { value: 'food',        label: 'Alimentos' },
  { value: 'sports',      label: 'Deportes' },
  { value: 'other',       label: 'Otro' },
];

export function Step1Welcome() {
  const {
    hasShopifyStore, storeName, shopifyUrl, industry, referenceUrl,
    setHasShopifyStore, setStoreName, setShopifyUrl, setIndustry, setReferenceUrl,
    nextStep,
  } = useBrandStore();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [urlSlug, setUrlSlug] = useState(() =>
    shopifyUrl.replace(/\.myshopify\.com\/?$/, '').replace(/^https?:\/\//, '')
  );
  const [autoFilled, setAutoFilled] = useState(false);

  useEffect(() => {
    if (!storeName || urlSlug) return;
    const suggested = toShopifySlug(storeName);
    if (suggested) {
      setUrlSlug(suggested);
      setShopifyUrl(suggested + '.myshopify.com');
      setAutoFilled(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeName]);

  const handleSlugChange = (raw: string) => {
    const cleaned = raw
      .replace(/^https?:\/\//, '')
      .replace(/\.myshopify\.com\/?$/, '')
      .replace(/[^a-z0-9-]/g, '');
    setUrlSlug(cleaned);
    setShopifyUrl(cleaned ? cleaned + '.myshopify.com' : '');
    setAutoFilled(false);
    clearFieldError('shopifyUrl');
  };

  const handleShopifyChoice = (has: boolean) => {
    setHasShopifyStore(has);
    if (!has) {
      // limpiar URL si el usuario elige "no tengo"
      setShopifyUrl('');
      setUrlSlug('');
    }
    setErrors({});
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!storeName.trim()) {
      newErrors.storeName = 'El nombre de la marca es requerido';
    } else if (storeName.trim().length < 3) {
      newErrors.storeName = 'El nombre debe tener al menos 3 caracteres';
    }
    if (hasShopifyStore && !shopifyUrl.trim()) {
      newErrors.shopifyUrl = 'La URL de Shopify es requerida';
    }
    if (!industry) {
      newErrors.industry = 'Selecciona una industria';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFieldError = (field: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-xl"
    >
      {/* Back to home */}
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        Volver al inicio
      </a>

      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 1 · Bienvenida
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
          Cuéntanos sobre<br />tu marca
        </h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Empezamos con lo básico para configurar todo a tu medida.
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6">

        {/* ¿Tienes tienda Shopify? */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            ¿Ya tienes una tienda Shopify? <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: true,  label: 'Sí, ya tengo',  icon: '🛍️', desc: 'Tengo mi tienda creada' },
              { value: false, label: 'No, aún no',     icon: '✨', desc: 'Quiero crear una' },
            ].map(({ value, label, icon, desc }) => (
              <button
                key={String(value)}
                type="button"
                onClick={() => handleShopifyChoice(value)}
                className={`relative flex flex-col items-start gap-1 px-4 py-4 rounded-xl border-2 text-left transition-all ${
                  hasShopifyStore === value
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-semibold leading-tight">{label}</span>
                <span className={`text-xs leading-tight ${hasShopifyStore === value ? 'text-gray-300' : 'text-gray-400'}`}>
                  {desc}
                </span>
                {hasShopifyStore === value && (
                  <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-gray-900 block" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Resto del formulario — solo si eligieron */}
        <AnimatePresence>
          {hasShopifyStore !== null && (
            <motion.div
              key="form-fields"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Store / Brand Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {hasShopifyStore ? 'Nombre de la tienda' : 'Nombre de la marca'}{' '}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => {
                    setStoreName(e.target.value);
                    clearFieldError('storeName');
                    if (hasShopifyStore && (!urlSlug || autoFilled)) {
                      const suggested = toShopifySlug(e.target.value);
                      setUrlSlug(suggested);
                      setShopifyUrl(suggested ? suggested + '.myshopify.com' : '');
                      setAutoFilled(true);
                    }
                  }}
                  placeholder={hasShopifyStore ? 'Ej: Luna Joyería, Bold Studio...' : 'Ej: Luna, Bold, Kova...'}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                    errors.storeName
                      ? 'border-red-300 focus:ring-red-100'
                      : 'border-gray-200 focus:border-gray-400 focus:ring-gray-100'
                  }`}
                />
                {errors.storeName && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.storeName}</p>
                )}
              </div>

              {/* Shopify URL — solo si tiene tienda */}
              {hasShopifyStore && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre de tu tienda en Shopify <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex items-center rounded-xl border overflow-hidden transition-all focus-within:ring-2 ${
                    errors.shopifyUrl
                      ? 'border-red-300 focus-within:ring-red-100'
                      : 'border-gray-200 focus-within:border-gray-400 focus-within:ring-gray-100'
                  }`}>
                    <input
                      type="text"
                      value={urlSlug}
                      onChange={(e) => handleSlugChange(e.target.value)}
                      placeholder="mi-tienda"
                      className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none bg-white min-w-0"
                    />
                    <span className="px-3 py-3 bg-gray-50 text-gray-400 text-sm font-medium border-l border-gray-200 select-none whitespace-nowrap">
                      .myshopify.com
                    </span>
                  </div>
                  {errors.shopifyUrl ? (
                    <p className="mt-1.5 text-xs text-red-500">{errors.shopifyUrl}</p>
                  ) : urlSlug ? (
                    <p className="mt-1.5 text-xs text-gray-400 flex items-center gap-1">
                      {autoFilled && <span className="text-blue-500 font-medium">✦ Auto-completado · </span>}
                      Tu URL: <span className="font-medium text-gray-600">{urlSlug}.myshopify.com</span>
                    </p>
                  ) : (
                    <p className="mt-1.5 text-xs text-gray-400">Solo el nombre — nosotros agregamos .myshopify.com</p>
                  )}
                </div>
              )}

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industria / Categoría <span className="text-red-400">*</span>
                </label>
                <select
                  value={industry}
                  onChange={(e) => { setIndustry(e.target.value); clearFieldError('industry'); }}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 transition-all bg-white cursor-pointer ${
                    errors.industry
                      ? 'border-red-300 focus:ring-red-100'
                      : 'border-gray-200 focus:border-gray-400 focus:ring-gray-100'
                  }`}
                >
                  <option value="">Selecciona tu industria...</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind.value} value={ind.value}>
                      {ind.label}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.industry}</p>
                )}
              </div>

              {/* Reference URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tienda de referencia{' '}
                  <span className="font-normal text-gray-400">(opcional)</span>
                </label>
                <input
                  type="url"
                  value={referenceUrl}
                  onChange={(e) => setReferenceUrl(e.target.value)}
                  placeholder="https://tiendaquemegusta.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  ¿Hay alguna tienda que te guste como referencia visual?
                </p>
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => { if (validate()) nextStep(); }}
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold text-sm tracking-wide hover:bg-gray-800 active:bg-gray-950 transition-colors mt-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Continuar a Identidad →
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

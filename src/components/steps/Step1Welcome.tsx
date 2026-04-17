'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';

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
    storeName, shopifyUrl, industry, referenceUrl,
    setStoreName, setShopifyUrl, setIndustry, setReferenceUrl,
    nextStep,
  } = useBrandStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!storeName.trim()) {
      newErrors.storeName = 'El nombre de la tienda es requerido';
    } else if (storeName.trim().length < 3) {
      newErrors.storeName = 'El nombre debe tener al menos 3 caracteres';
    }
    if (!shopifyUrl.trim()) {
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
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 1 · Bienvenida
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
          Cuéntanos sobre<br />tu tienda
        </h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Vamos a configurar tu tienda Shopify desde cero. Empezamos con lo básico.
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* Store Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de la tienda <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => { setStoreName(e.target.value); clearFieldError('storeName'); }}
            placeholder="Ej: Luna Joyería, Bold Studio..."
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

        {/* Shopify URL */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            URL de tu tienda Shopify <span className="text-red-400">*</span>
          </label>
          <div className={`flex items-center rounded-xl border overflow-hidden transition-all focus-within:ring-2 ${
            errors.shopifyUrl
              ? 'border-red-300 focus-within:ring-red-100'
              : 'border-gray-200 focus-within:border-gray-400 focus-within:ring-gray-100'
          }`}>
            <span className="px-3 py-3 bg-gray-50 text-gray-400 text-sm font-medium border-r border-gray-200 select-none whitespace-nowrap">
              https://
            </span>
            <input
              type="text"
              value={shopifyUrl}
              onChange={(e) => { setShopifyUrl(e.target.value.replace(/^https?:\/\//, '')); clearFieldError('shopifyUrl'); }}
              placeholder="mitienda.myshopify.com"
              className="flex-1 px-3 py-3 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none bg-white min-w-0"
            />
          </div>
          {errors.shopifyUrl ? (
            <p className="mt-1.5 text-xs text-red-500">{errors.shopifyUrl}</p>
          ) : (
            <p className="mt-1.5 text-xs text-gray-400">Si aún no tienes tienda, escribe el nombre que quieres usar.</p>
          )}
        </div>

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
      </div>
    </motion.div>
  );
}

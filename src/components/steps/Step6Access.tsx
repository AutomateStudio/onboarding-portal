'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { PLANS, PlanKey } from '@/constants/plans';
import { APPS } from '@/constants/apps';

const formatCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n);

export function Step6Access() {
  const {
    email, shopifyAccess, contactName, whatsapp,
    setEmail, setShopifyAccess, setContactName, setWhatsapp,
    previousStep,
    plan, selectedApps,
    storeName, shopifyUrl, industry, theme, palette, font, voiceTone,
  } = useBrandStore();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentPlan = plan ? PLANS[plan as PlanKey] : null;
  const appsLimit = currentPlan?.appsLimit ?? 0;
  const extraAppPrice = currentPlan?.extraAppPrice ?? 200000;
  const extraAppsCount = Math.max(0, selectedApps.length - appsLimit);
  const totalPrice = currentPlan ? currentPlan.price + extraAppsCount * extraAppPrice : 0;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    const payload = {
      storeName, shopifyUrl, industry,
      theme, palette, font,
      plan, selectedApps,
      voiceTone,
      email, shopifyAccess, contactName,
      whatsapp: whatsapp ? `+57${whatsapp}` : '',
      totalPrice,
      submittedAt: new Date().toISOString(),
    };

    console.log('🚀 Configuración enviada:', payload);

    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl text-center py-16"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Listo! Configuración enviada</h1>
        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Recibimos tu configuración. En las próximas horas recibirás un correo en{' '}
          <strong>{email}</strong> con los próximos pasos.
        </p>
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-left space-y-2 text-sm text-gray-600">
          <p><strong>Tienda:</strong> {storeName}</p>
          <p><strong>Plan:</strong> {currentPlan?.name}</p>
          <p><strong>Total estimado:</strong> {formatCOP(totalPrice)}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-xl"
    >
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 6 · Acceso
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
          Datos de contacto
        </h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Necesitamos estos datos para enviarte el resumen y coordinar el inicio del proyecto.
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((p) => { const n = {...p}; delete n.email; return n; }); }}
            placeholder="hola@tutienda.com"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
              errors.email ? 'border-red-300 focus:ring-red-100' : 'border-gray-200 focus:border-gray-400 focus:ring-gray-100'
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Shopify Collaborator ID */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Shopify Collaborator ID{' '}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <input
            type="text"
            value={shopifyAccess}
            onChange={(e) => setShopifyAccess(e.target.value)}
            placeholder="Ej: 12345678"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
          />
          <p className="mt-1.5 text-xs text-gray-400">
            Lo encontrarás en Configuración → Partners de Shopify → Collaborators.
          </p>
        </div>

        {/* Contact name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de contacto{' '}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Ej: María García"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            WhatsApp{' '}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
            <span className="px-3 py-3 bg-gray-50 text-gray-500 text-sm font-medium border-r border-gray-200 select-none">
              +57
            </span>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))}
              placeholder="3001234567"
              className="flex-1 px-3 py-3 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Order summary */}
        {currentPlan && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-5 space-y-3"
          >
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Resumen del pedido
            </h3>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Plan {currentPlan.name}</span>
              <span className="font-semibold text-gray-900">{formatCOP(currentPlan.price)}</span>
            </div>

            {selectedApps.length > 0 && (
              <div className="space-y-1">
                {selectedApps.slice(0, appsLimit).map((appId) => {
                  const app = APPS.find((a) => a.id === appId);
                  return app ? (
                    <div key={appId} className="flex justify-between text-xs text-gray-500">
                      <span>{app.name}</span>
                      <span className="text-green-600 font-medium">Incluida</span>
                    </div>
                  ) : null;
                })}
                {selectedApps.slice(appsLimit).map((appId) => {
                  const app = APPS.find((a) => a.id === appId);
                  return app ? (
                    <div key={appId} className="flex justify-between text-xs text-gray-500">
                      <span>{app.name}</span>
                      <span className="text-amber-600 font-medium">+{formatCOP(extraAppPrice)}</span>
                    </div>
                  ) : null;
                })}
              </div>
            )}

            {extraAppsCount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{extraAppsCount} app{extraAppsCount !== 1 ? 's' : ''} adicional{extraAppsCount !== 1 ? 'es' : ''}</span>
                <span className="font-semibold text-amber-600">{formatCOP(extraAppsCount * extraAppPrice)}</span>
              </div>
            )}

            <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total estimado</span>
              <span className="text-lg font-bold text-gray-900">{formatCOP(totalPrice)}</span>
            </div>
            <p className="text-xs text-gray-400">
              El pago se coordina directamente con el equipo de automate.
            </p>
          </motion.div>
        )}

        {/* Submit */}
        <div className="flex gap-3 pt-2">
          <motion.button
            type="button"
            onClick={previousStep}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-400 transition-all"
          >
            ← Volver
          </motion.button>
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.01 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className={`flex-1 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              isSubmitting
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {isSubmitting ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block"
                >
                  ⟳
                </motion.span>
                Enviando...
              </>
            ) : (
              '🚀 Enviar mi configuración'
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

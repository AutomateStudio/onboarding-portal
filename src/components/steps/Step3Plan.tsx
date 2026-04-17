'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { PLANS, PlanKey } from '@/constants/plans';

const formatCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n);

export function Step3Plan() {
  const plan = useBrandStore((s) => s.plan);
  const setPlan = useBrandStore((s) => s.setPlan);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);

  const planList = Object.values(PLANS) as typeof PLANS[PlanKey][];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl"
    >
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 3 · Plan
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Elige tu plan</h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Todos los planes incluyen configuración profesional, soporte y entrega garantizada.
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {planList.map((p, idx) => {
          const key = p.id as PlanKey;
          const isSelected = plan === key;
          const isFeatured = 'featured' in p && p.featured;

          return (
            <motion.button
              key={key}
              type="button"
              onClick={() => setPlan(key)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-2xl p-5 text-left border-2 transition-all ${
                isSelected
                  ? 'border-gray-900 bg-gray-900 text-white shadow-xl shadow-gray-900/20'
                  : isFeatured
                  ? 'border-gray-300 bg-white hover:border-gray-500'
                  : 'border-gray-100 bg-white hover:border-gray-300'
              }`}
            >
              {isFeatured && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                  isSelected ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                }`}>
                  MÁS POPULAR
                </div>
              )}

              <div className="mb-4">
                <p className="text-xs font-bold tracking-widest uppercase mb-1 text-gray-400">
                  {p.name}
                </p>
                <p className={`text-xl sm:text-2xl font-bold leading-none ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  {formatCOP(p.price)}
                </p>
                <p className={`text-xs mt-1 ${isSelected ? 'text-gray-400' : 'text-gray-400'}`}>
                  Hasta {p.appsLimit} apps incluidas
                </p>
              </div>

              <ul className="space-y-2">
                {p.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <span className={`mt-0.5 flex-shrink-0 ${isSelected ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                    <span className={isSelected ? 'text-gray-300' : 'text-gray-600'}>{feat}</span>
                  </li>
                ))}
              </ul>

              {isSelected && (
                <div className="absolute top-3 right-3 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 text-[10px] font-bold">✓</span>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {!plan && (
        <p className="text-xs text-gray-400 text-center mb-4">
          Selecciona un plan para continuar
        </p>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
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
          onClick={() => { if (plan) nextStep(); }}
          whileHover={plan ? { scale: 1.01 } : {}}
          whileTap={plan ? { scale: 0.98 } : {}}
          className={`flex-1 py-3.5 rounded-xl font-semibold text-sm transition-all ${
            plan
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continuar a Apps →
        </motion.button>
      </div>
    </motion.div>
  );
}

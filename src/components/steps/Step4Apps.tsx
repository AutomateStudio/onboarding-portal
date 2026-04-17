'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { APPS } from '@/constants/apps';
import { PLANS, PlanKey } from '@/constants/plans';

const formatCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n);

export function Step4Apps() {
  const plan = useBrandStore((s) => s.plan);
  const selectedApps = useBrandStore((s) => s.selectedApps);
  const toggleApp = useBrandStore((s) => s.toggleApp);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);

  const currentPlan = plan ? PLANS[plan as PlanKey] : null;
  const appsLimit = currentPlan?.appsLimit ?? 0;
  const extraAppPrice = currentPlan?.extraAppPrice ?? 200000;
  const extraAppsCount = Math.max(0, selectedApps.length - appsLimit);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl"
    >
      {/* Header */}
      <div className="mb-7 sm:mb-8">
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 4 · Apps
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Potencia tu tienda</h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
          Selecciona las apps que quieres integrar. Tu plan incluye {appsLimit} apps.
        </p>
      </div>

      {/* Counter banner */}
      <div className={`flex flex-wrap items-center justify-between gap-2 px-4 py-3 rounded-xl mb-5 sm:mb-6 text-sm font-semibold ${
        extraAppsCount > 0
          ? 'bg-amber-50 border border-amber-200 text-amber-700'
          : 'bg-gray-50 border border-gray-100 text-gray-600'
      }`}>
        <span className="text-xs sm:text-sm">
          {currentPlan ? `Plan ${currentPlan.name}` : 'Sin plan'} — {selectedApps.length} app{selectedApps.length !== 1 ? 's' : ''} seleccionada{selectedApps.length !== 1 ? 's' : ''}
        </span>
        {extraAppsCount > 0 && (
          <span className="text-xs text-amber-600">
            +{extraAppsCount} extra{extraAppsCount !== 1 ? 's' : ''} ({formatCOP(extraAppsCount * extraAppPrice)})
          </span>
        )}
      </div>

      {/* Apps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-7 sm:mb-8">
        {APPS.map((app, idx) => {
          const isSelected = selectedApps.includes(app.id);
          const positionInSelection = selectedApps.indexOf(app.id);
          const isExtra = isSelected && positionInSelection >= appsLimit;

          return (
            <motion.button
              key={app.id}
              type="button"
              onClick={() => toggleApp(app.id)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * idx }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`relative text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all ${
                isSelected
                  ? isExtra
                    ? 'border-amber-300 bg-amber-50'
                    : 'border-green-300 bg-green-50'
                  : 'border-gray-100 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl flex-shrink-0">{app.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <p className="text-sm font-bold text-gray-900">{app.name}</p>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase ${
                      isExtra ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {app.cat}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-snug">{app.desc}</p>
                  {isExtra && (
                    <p className="text-xs text-amber-600 font-semibold mt-1">
                      +{formatCOP(extraAppPrice)}
                    </p>
                  )}
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                  isSelected
                    ? isExtra
                      ? 'border-amber-400 bg-amber-400'
                      : 'border-green-500 bg-green-500'
                    : 'border-gray-300'
                }`}>
                  {isSelected && <span className="text-white text-[9px] font-bold">✓</span>}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-500 mb-7 sm:mb-8">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block flex-shrink-0" />
          Incluida en el plan
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block flex-shrink-0" />
          Costo adicional
        </span>
      </div>

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
          onClick={nextStep}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
        >
          Continuar a Contenido →
        </motion.button>
      </div>
    </motion.div>
  );
}

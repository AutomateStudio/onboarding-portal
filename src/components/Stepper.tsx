'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';

const STEPS = ['Bienvenida', 'Identidad', 'Plan', 'Apps', 'Contenido', 'Acceso'];
const ICONS = ['👋', '🎨', '💎', '⚡', '📝', '🔐'];

export function Stepper() {
  const currentStep = useBrandStore((state) => state.currentStep);
  const goToStep = useBrandStore((state) => state.goToStep);

  return (
    <>
      {/* Mobile: step name + progress bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Paso {currentStep} · {STEPS[currentStep - 1]}
          </p>
          <p className="text-xs text-gray-400">{currentStep}/{STEPS.length}</p>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gray-900 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Desktop: full step indicators */}
      <div className="hidden md:flex items-center">
        {STEPS.map((title, index) => {
          const stepNum = index + 1;
          const isCompleted = currentStep > stepNum;
          const isCurrent = currentStep === stepNum;
          const isLocked = currentStep < stepNum;

          return (
            <div key={index} className="flex-1 flex items-center min-w-0">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <motion.div
                  onClick={() => isCompleted && goToStep(stepNum)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    isCompleted
                      ? 'bg-gray-900 text-white cursor-pointer'
                      : isCurrent
                      ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 cursor-default'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                  }`}
                  whileHover={isCompleted ? { scale: 1.1 } : {}}
                  transition={{ type: 'spring', stiffness: 300 }}
                  title={isLocked ? 'Completa los pasos anteriores primero' : title}
                >
                  {isCompleted ? '✓' : isLocked ? '🔒' : ICONS[index]}
                </motion.div>
                <div className="hidden lg:block">
                  <p
                    onClick={() => isCompleted && goToStep(stepNum)}
                    className={`text-[11px] font-semibold transition-colors duration-300 whitespace-nowrap ${
                      isCurrent ? 'text-gray-900' : isCompleted ? 'text-gray-500 cursor-pointer hover:text-gray-900' : 'text-gray-400 cursor-not-allowed opacity-50'
                    }`}
                  >
                    {title}
                  </p>
                </div>
              </div>

              {index < STEPS.length - 1 && (
                <div className="flex-1 mx-1.5 lg:mx-2 h-px bg-gray-200 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gray-900"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: currentStep > stepNum ? 1 : 0 }}
                    style={{ transformOrigin: 'left' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

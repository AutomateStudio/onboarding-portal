'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { useLanguage } from '@/context/LanguageContext';

const icons = ['🚀', '🎨', '👁️', '📦', '🔐'];

export function Stepper() {
  const currentStep = useBrandStore((state) => state.currentStep);
  const { lang, setLang, t } = useLanguage();
  const steps = t.stepper.steps;

  return (
    <div className="w-full bg-white border-b border-luxury-200">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Language toggle */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-luxury-100 rounded-full p-1">
          {(['en', 'es'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded-full text-xs font-minimal font-semibold transition-all ${
                lang === l ? 'bg-luxury-900 text-white' : 'text-luxury-600 hover:text-luxury-900'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile version */}
        <div className="md:hidden">
          <div className="text-center">
            <p className="text-sm text-luxury-600 font-medium">
              {t.stepper.stepOf(currentStep, steps.length)}
            </p>
            <p className="text-lg font-minimal font-semibold text-luxury-900 mt-2">
              {steps[currentStep - 1]}
            </p>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex items-center justify-between pr-24">
          {steps.map((title, index) => (
            <motion.div
              key={index}
              className="flex-1 flex items-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-minimal font-semibold text-sm transition-all duration-300 flex-shrink-0 ${
                  currentStep >= index + 1
                    ? 'bg-luxury-900 text-white shadow-luxury-md'
                    : 'bg-luxury-100 text-luxury-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {icons[index]}
              </motion.div>

              <div className="ml-3 min-w-0">
                <p className={`text-xs font-medium transition-colors duration-300 ${currentStep >= index + 1 ? 'text-luxury-900' : 'text-luxury-500'}`}>
                  {title}
                </p>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 -z-10 transition-colors duration-300 ${currentStep > index + 1 ? 'bg-luxury-900' : 'bg-luxury-200'}`}
                  style={{ width: `calc(100% - 48px)`, transform: 'translateX(48px) translateY(-50%)' }}
                  initial={{ width: 0 }}
                  animate={{ width: currentStep > index + 1 ? `calc(100% - 48px)` : 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

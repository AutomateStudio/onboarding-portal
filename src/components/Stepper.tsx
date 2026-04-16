'use client';

import { motion } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';

interface Step {
  id: number;
  title: string;
  icon: string;
}

const steps: Step[] = [
  { id: 1, title: 'Welcome', icon: '🚀' },
  { id: 2, title: 'Brand Identity', icon: '🎨' },
  { id: 3, title: 'Preview', icon: '👁️' },
  { id: 4, title: 'Inventory', icon: '📦' },
  { id: 5, title: 'Access', icon: '🔐' },
];

export function Stepper() {
  const currentStep = useBrandStore((state) => state.currentStep);

  return (
    <div className="w-full bg-white border-b border-luxury-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Mobile version */}
        <div className="md:hidden">
          <div className="text-center">
            <p className="text-sm text-luxury-600 font-medium">
              Step {currentStep} of {steps.length}
            </p>
            <p className="text-lg font-minimal font-semibold text-luxury-900 mt-2">
              {steps[currentStep - 1].title}
            </p>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex-1 flex items-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Circle */}
              <motion.div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-minimal font-semibold text-sm
                  transition-all duration-300 flex-shrink-0
                  ${
                    currentStep >= step.id
                      ? 'bg-luxury-900 text-white shadow-luxury-md'
                      : 'bg-luxury-100 text-luxury-600'
                  }
                `}
                whileHover={{ scale: 1.05 }}
              >
                {step.icon}
              </motion.div>

              {/* Label */}
              <div className="ml-3 min-w-0">
                <p
                  className={`
                    text-xs font-medium transition-colors duration-300
                    ${currentStep >= step.id ? 'text-luxury-900' : 'text-luxury-500'}
                  `}
                >
                  {step.title}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 h-0.5 -z-10
                    transition-colors duration-300
                    ${currentStep > step.id ? 'bg-luxury-900' : 'bg-luxury-200'}
                  `}
                  style={{
                    width: `calc(100% - 48px)`,
                    transform: 'translateX(48px) translateY(-50%)',
                  }}
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      currentStep > step.id ? `calc(100% - 48px)` : 0,
                  }}
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

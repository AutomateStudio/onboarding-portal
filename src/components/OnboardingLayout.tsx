'use client';

import { AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { Stepper } from './Stepper';
import { LivePreview } from './LivePreview';
import { Step1Welcome } from './steps/Step1Welcome';
import { Step2Brand } from './steps/Step2Brand';
import { Step3Plan } from './steps/Step3Plan';
import { Step4Apps } from './steps/Step4Apps';
import { Step5Content } from './steps/Step5Content';
import { Step6Access } from './steps/Step6Access';

export function OnboardingLayout() {
  const currentStep = useBrandStore((state) => state.currentStep);

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Welcome key="step-1" />;
      case 2: return <Step2Brand key="step-2" />;
      case 3: return <Step3Plan key="step-3" />;
      case 4: return <Step4Apps key="step-4" />;
      case 5: return <Step5Content key="step-5" />;
      case 6: return <Step6Access key="step-6" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <span className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">automate.</span>
          </div>
          <div className="flex-1 min-w-0">
            <Stepper />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-12">
          {/* Left: form */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>

          {/* Right: preview — desktop only */}
          <div className="hidden lg:block">
            <LivePreview />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 text-center sm:text-left">
          <span>automate. · Plataforma premium de automatización eCommerce</span>
          <span>© {new Date().getFullYear()} automate. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

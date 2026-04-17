'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { Stepper } from './Stepper';
import { LivePreview } from './LivePreview';
import { Step1Welcome } from './steps/Step1Welcome';
import { Step2Brand } from './steps/Step2Brand';
import { Step3Preview } from './steps/Step3Preview';
import { Step4Inventory } from './steps/Step4Inventory';
import { Step5Access } from './steps/Step5Access';
import { ToastContainer } from './ToastContainer';
import { Footer } from './Footer';

export function OnboardingLayout() {
  const currentStep = useBrandStore((state) => state.currentStep);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Welcome key="step-1" />;
      case 2:
        return <Step2Brand key="step-2" />;
      case 3:
        return <Step3Preview key="step-3" />;
      case 4:
        return <Step4Inventory key="step-4" />;
      case 5:
        return <Step5Access key="step-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ToastContainer />

      {/* Header with Stepper */}
      <Stepper />

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Form content (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>

          {/* Right: Live Preview (1/3 width on desktop) */}
          <div className="hidden lg:block">
            <LivePreview />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

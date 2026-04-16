'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';
import { Stepper } from './Stepper';
import { LivePreview } from './LivePreview';
import { Step1Welcome } from './steps/Step1Welcome';
import { ToastContainer } from './ToastContainer';
import { Footer } from './Footer';

export function OnboardingLayout() {
  const currentStep = useBrandStore((state) => state.currentStep);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Welcome key="step-1" />;
      case 2:
        return <div key="step-2">Step 2 - Brand Identity</div>;
      case 3:
        return <div key="step-3">Step 3 - Preview</div>;
      case 4:
        return <div key="step-4">Step 4 - Inventory</div>;
      case 5:
        return <div key="step-5">Step 5 - Access</div>;
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

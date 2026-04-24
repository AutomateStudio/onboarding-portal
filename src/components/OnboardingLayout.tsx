'use client';

import { useEffect, useRef } from 'react';
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

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let frame = 0;
    const N = 30;
    const MAX_DIST = 160;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const draw = () => {
      frame++;
      if (frame % 2 === 0) { raf = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.18 * (1 - d / MAX_DIST)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139,92,246,0.3)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
}

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
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0e1a', position: 'relative' }}>

      {/* ── Dark theme CSS overrides ── */}
      <style>{`
        /* Typography */
        .ob-form h1, .ob-form h2, .ob-form h3 { color: #fff !important; }
        .ob-form p { color: rgba(255,255,255,0.45) !important; }
        .ob-form label { color: rgba(255,255,255,0.65) !important; }
        .ob-form a { color: rgba(255,255,255,0.35) !important; transition: color .2s; }
        .ob-form a:hover { color: rgba(255,255,255,0.65) !important; }
        .ob-form span[class*="tracking-widest"] { color: rgba(255,255,255,0.28) !important; }

        /* Inputs / Select */
        .ob-form input,
        .ob-form select,
        .ob-form textarea {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.1) !important;
          color: #fff !important;
        }
        .ob-form input:hover,
        .ob-form select:hover,
        .ob-form textarea:hover {
          border-color: rgba(255,255,255,0.18) !important;
        }
        .ob-form input:focus,
        .ob-form select:focus,
        .ob-form textarea:focus {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(139,92,246,0.7) !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12) !important;
          outline: none !important;
        }
        .ob-form input::placeholder,
        .ob-form textarea::placeholder { color: rgba(255,255,255,0.2) !important; }
        .ob-form select option { background: #111827; color: #fff; }

        /* .myshopify.com suffix + input wrapper borders */
        .ob-form [class*="bg-gray-50"] {
          background: rgba(255,255,255,0.03) !important;
          color: rgba(255,255,255,0.28) !important;
        }
        .ob-form [class*="border-gray-2"]:not(button):not(input):not(select) {
          border-color: rgba(255,255,255,0.1) !important;
        }
        .ob-form [class*="border-gray-1"]:not(button):not(input):not(select) {
          border-color: rgba(255,255,255,0.06) !important;
        }

        /* Hint / helper text */
        .ob-form [class*="text-gray-4"] { color: rgba(255,255,255,0.28) !important; }
        .ob-form [class*="text-gray-5"] { color: rgba(255,255,255,0.38) !important; }
        .ob-form [class*="text-gray-6"] { color: rgba(255,255,255,0.48) !important; }
        .ob-form [class*="text-gray-7"] { color: rgba(255,255,255,0.6) !important; }
        .ob-form [class*="text-gray-9"] { color: #fff !important; }

        /* Auto-fill badge */
        .ob-form [class*="text-blue"] { color: #818cf8 !important; }

        /* Error states */
        .ob-form [class*="text-red"] { color: #f87171 !important; }
        .ob-form [class*="border-red"] { border-color: rgba(248,113,113,0.45) !important; }
        .ob-form [class*="focus\\:ring-red"],
        .ob-form [class*="focus-within\\:ring-red"] { box-shadow: 0 0 0 3px rgba(248,113,113,0.1) !important; }

        /* ── Buttons ── */

        /* Unselected choice/option cards (border-2, bg-white) */
        .ob-form button[class*="border-2"]:not([class*="w-full"]) {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.1) !important;
          color: rgba(255,255,255,0.7) !important;
        }
        .ob-form button[class*="border-2"]:not([class*="w-full"]):hover {
          background: rgba(255,255,255,0.07) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }

        /* Selected choice cards (border-gray-900 bg-gray-900) */
        .ob-form button[class*="border-gray-9"]:not([class*="w-full"]),
        .ob-form button[class*="bg-gray-9"]:not([class*="w-full"]) {
          background: rgba(99,102,241,0.18) !important;
          border-color: #6366f1 !important;
          color: #fff !important;
        }

        /* Sub-text inside choice cards */
        .ob-form button [class*="text-gray"] { color: rgba(255,255,255,0.35) !important; }
        .ob-form button[class*="border-gray-9"] [class*="text-gray"],
        .ob-form button[class*="bg-gray-9"] [class*="text-gray"] {
          color: rgba(255,255,255,0.55) !important;
        }

        /* Radio dot indicators inside cards */
        .ob-form button [class*="bg-white"][class*="rounded-full"] {
          background: rgba(255,255,255,0.9) !important;
        }
        .ob-form button [class*="bg-gray-9"][class*="rounded-full"],
        .ob-form button [class*="bg-gray-9"][class*="block"] {
          background: #6366f1 !important;
        }

        /* Outlined secondary buttons (Anterior, back) */
        .ob-form button[class*="border"][class*="text-gray"]:not([class*="border-2"]):not([class*="w-full"]) {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.12) !important;
          color: rgba(255,255,255,0.5) !important;
        }
        .ob-form button[class*="border"][class*="text-gray"]:not([class*="border-2"]):not([class*="w-full"]):hover {
          background: rgba(255,255,255,0.07) !important;
          color: rgba(255,255,255,0.8) !important;
        }

        /* Primary CTA (w-full bg-gray-900) */
        .ob-form button[class*="w-full"][class*="bg-gray"] {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
          border: none !important;
          color: #fff !important;
          box-shadow: 0 4px 20px rgba(99,102,241,0.28) !important;
        }
        .ob-form button[class*="w-full"][class*="bg-gray"]:hover {
          background: linear-gradient(135deg, #5457e8 0%, #7140e0 100%) !important;
          box-shadow: 0 6px 28px rgba(99,102,241,0.4) !important;
        }

        /* Section dividers inside steps */
        .ob-form [class*="border-t"],
        .ob-form [class*="border-b"] {
          border-color: rgba(255,255,255,0.07) !important;
        }

        /* Selected indicator checkmark area */
        .ob-form [class*="bg-indigo"],
        .ob-form [class*="bg-violet"],
        .ob-form [class*="bg-purple"] { /* keep as-is */ }

        /* Stepper dark */
        .ob-stepper [class*="bg-gray-1"],
        .ob-stepper [class*="bg-gray-2"] {
          background: rgba(255,255,255,0.08) !important;
        }
        .ob-stepper [class*="bg-gray-9"] {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .ob-stepper [class*="text-gray-9"] { color: #fff !important; }
        .ob-stepper [class*="text-gray-5"] { color: rgba(255,255,255,0.45) !important; }
        .ob-stepper [class*="text-gray-4"] { color: rgba(255,255,255,0.3) !important; }
        .ob-stepper [class*="bg-gray-1"][class*="rounded-full"] {
          background: rgba(255,255,255,0.08) !important;
        }
        .ob-stepper [class*="bg-gray-2"][class*="h-px"] {
          background: rgba(255,255,255,0.08) !important;
        }
      `}</style>

      <NetworkCanvas />

      {/* Radial glow top */}
      <div style={{
        position: 'fixed', top: '-10%', left: '25%', width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Header */}
      <header
        className="w-full sticky top-0 z-30"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(10,14,26,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <span
              className="text-lg sm:text-xl font-black tracking-tight"
              style={{ color: '#fff' }}
            >
              automate.
            </span>
          </div>
          <div className="flex-1 min-w-0 ob-stepper">
            <Stepper />
          </div>
        </div>
      </header>

      {/* Main */}
      <main
        className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-8 lg:gap-12">
          {/* Form */}
          <div className="ob-form min-w-0">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>

          {/* Preview */}
          <div className="hidden lg:block">
            <LivePreview />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-5 px-4 sm:px-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', zIndex: 1 }}
      >
        <div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-center sm:text-left"
          style={{ color: 'rgba(255,255,255,0.22)' }}
        >
          <span>automate. · Plataforma premium de automatización eCommerce</span>
          <span>© {new Date().getFullYear()} automate. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

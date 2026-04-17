'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { useToastStore } from '@/stores/toastStore';
import { useLanguage } from '@/context/LanguageContext';

export function Step3Preview() {
  const logoUrl = useBrandStore((s) => s.logoUrl);
  const setLogo = useBrandStore((s) => s.setLogo);
  const setLogoUrl = useBrandStore((s) => s.setLogoUrl);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);
  const addToast = useToastStore((s) => s.addToast);
  const { t } = useLanguage();
  const tx = t.step3;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) { addToast(tx.toastErrorType, 'error'); return; }
    if (file.size > 5 * 1024 * 1024) { addToast(tx.toastErrorSize, 'error'); return; }
    setLogo(file);
    setLogoUrl(URL.createObjectURL(file));
    addToast(tx.toastSuccess, 'success');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-900 rounded-2xl mb-4">
          <span className="text-2xl">👁️</span>
        </div>
        <h1 className="font-minimal text-4xl font-bold text-luxury-900">{tx.title}</h1>
        <p className="text-lg text-luxury-600 max-w-xl">{tx.subtitle}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest mb-4">{tx.sectionLabel}</h2>
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${isDragging ? 'border-luxury-900 bg-luxury-900/5' : 'border-luxury-200 hover:border-luxury-400 hover:bg-luxury-50'}`}
        >
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
          {logoUrl ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-4">
              <img src={logoUrl} alt="Logo preview" className="w-32 h-32 object-contain rounded-xl shadow-luxury-md" />
              <p className="font-minimal text-sm text-luxury-600">{tx.replaceHint}</p>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-luxury-100 flex items-center justify-center text-2xl">🖼️</div>
              <div>
                <p className="font-minimal font-semibold text-luxury-900">{tx.dropTitle}</p>
                <p className="font-minimal text-sm text-luxury-500 mt-1">{tx.dropSubtitle}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tx.tips.map((tip, i) => (
          <div key={i} className="p-4 rounded-2xl border border-luxury-200 text-center">
            <span className="text-2xl">{tip.icon}</span>
            <p className="font-minimal font-semibold text-luxury-900 text-sm mt-2">{tip.title}</p>
            <p className="font-minimal text-xs text-luxury-500 mt-1">{tip.desc}</p>
          </div>
        ))}
      </motion.div>

      <motion.div className="flex gap-3 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <motion.button type="button" onClick={previousStep} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-xl border border-luxury-200 font-minimal text-luxury-700 hover:border-luxury-400 transition-all">
          {tx.back}
        </motion.button>
        <motion.button
          type="button"
          onClick={() => { addToast(tx.toastSaved, 'success'); nextStep(); }}
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="flex-1 py-3 px-6 rounded-xl bg-luxury-900 text-white font-medium font-minimal hover:bg-luxury-800 transition-all">
          {logoUrl ? tx.ctaContinue : tx.ctaSkip}
        </motion.button>
      </motion.div>

      <motion.div className="flex gap-1 justify-center pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <div key={dot} className={`h-2 rounded-full transition-all ${dot === 3 ? 'w-6 bg-luxury-900' : 'w-2 bg-luxury-200'}`} />
        ))}
      </motion.div>
    </motion.div>
  );
}

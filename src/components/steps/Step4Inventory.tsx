'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useBrandStore } from '@/stores/brandStore';
import { useToastStore } from '@/stores/toastStore';
import { useLanguage } from '@/context/LanguageContext';

export function Step4Inventory() {
  const setBannerImages = useBrandStore((s) => s.setBannerImages);
  const setProductTemplate = useBrandStore((s) => s.setProductTemplate);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);
  const addToast = useToastStore((s) => s.addToast);
  const { t } = useLanguage();
  const tx = t.step4;

  const bannerRef = useRef<HTMLInputElement>(null);
  const templateRef = useRef<HTMLInputElement>(null);
  const [bannerPreviews, setBannerPreviews] = useState<string[]>([]);
  const [templateName, setTemplateName] = useState('');
  const [isDraggingBanner, setIsDraggingBanner] = useState(false);

  const handleBanners = (files: FileList) => {
    const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
    if (imageFiles.length === 0) { addToast(tx.toastErrorType, 'error'); return; }
    setBannerImages(imageFiles);
    setBannerPreviews(imageFiles.map((f) => URL.createObjectURL(f)));
    addToast(tx.toastBanners(imageFiles.length), 'success');
  };

  const handleTemplate = (file: File) => {
    const allowed = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!allowed.includes(file.type) && !file.name.endsWith('.csv')) { addToast(tx.toastErrorTemplate, 'error'); return; }
    setProductTemplate(file);
    setTemplateName(file.name);
    addToast(tx.toastTemplate, 'success');
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
          <span className="text-2xl">📦</span>
        </div>
        <h1 className="font-minimal text-4xl font-bold text-luxury-900">{tx.title}</h1>
        <p className="text-lg text-luxury-600 max-w-xl">{tx.subtitle}</p>
      </motion.div>

      {/* Banners */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest mb-4">{tx.bannersLabel}</h2>
        <div
          onClick={() => bannerRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDraggingBanner(true); }}
          onDragLeave={() => setIsDraggingBanner(false)}
          onDrop={(e) => { e.preventDefault(); setIsDraggingBanner(false); if (e.dataTransfer.files.length) handleBanners(e.dataTransfer.files); }}
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${isDraggingBanner ? 'border-luxury-900 bg-luxury-900/5' : 'border-luxury-200 hover:border-luxury-400 hover:bg-luxury-50'}`}
        >
          <input ref={bannerRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { if (e.target.files) handleBanners(e.target.files); }} />
          {bannerPreviews.length > 0 ? (
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap justify-center">
                {bannerPreviews.map((url, i) => (
                  <img key={i} src={url} alt={`Banner ${i + 1}`} className="h-20 w-32 object-cover rounded-lg shadow-luxury-sm" />
                ))}
              </div>
              <p className="font-minimal text-sm text-luxury-600">{tx.bannersReplace(bannerPreviews.length)}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-luxury-100 flex items-center justify-center text-2xl">🖼️</div>
              <div>
                <p className="font-minimal font-semibold text-luxury-900">{tx.bannersDropTitle}</p>
                <p className="font-minimal text-sm text-luxury-500 mt-1">{tx.bannersDropSubtitle}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Template */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest mb-4">
          {tx.templateLabel} <span className="normal-case text-luxury-400 font-normal">(CSV / Excel)</span>
        </h2>
        <div onClick={() => templateRef.current?.click()}
          className="border-2 border-dashed border-luxury-200 rounded-2xl p-8 text-center cursor-pointer hover:border-luxury-400 hover:bg-luxury-50 transition-all">
          <input ref={templateRef} type="file" accept=".csv,.xlsx,.xls" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleTemplate(e.target.files[0]); }} />
          {templateName ? (
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">✅</span>
              <p className="font-minimal font-semibold text-luxury-900">{templateName}</p>
              <p className="font-minimal text-sm text-luxury-500">{tx.templateReplace}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-luxury-100 flex items-center justify-center text-2xl">📄</div>
              <div>
                <p className="font-minimal font-semibold text-luxury-900">{tx.templateDropTitle}</p>
                <p className="font-minimal text-sm text-luxury-500 mt-1">{tx.templateDropSubtitle}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div className="flex gap-3 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <motion.button type="button" onClick={previousStep} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-xl border border-luxury-200 font-minimal text-luxury-700 hover:border-luxury-400 transition-all">
          {tx.back}
        </motion.button>
        <motion.button type="button" onClick={() => { addToast(tx.toastSaved, 'success'); nextStep(); }}
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          className="flex-1 py-3 px-6 rounded-xl bg-luxury-900 text-white font-medium font-minimal hover:bg-luxury-800 transition-all">
          {tx.cta}
        </motion.button>
      </motion.div>

      <motion.div className="flex gap-1 justify-center pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <div key={dot} className={`h-2 rounded-full transition-all ${dot === 4 ? 'w-6 bg-luxury-900' : 'w-2 bg-luxury-200'}`} />
        ))}
      </motion.div>
    </motion.div>
  );
}

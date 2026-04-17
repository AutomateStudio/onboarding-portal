'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useBrandStore } from '@/stores/brandStore';
import { useToastStore } from '@/stores/toastStore';
import { useLanguage } from '@/context/LanguageContext';
import { Industry } from '@/types';
import { useState, useEffect } from 'react';
import { FormField } from '../FormField';

interface Step1FormData {
  storeName: string;
  shopifyUrl: string;
  industry: Industry;
}

export function Step1Welcome() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const tx = t.step1;

  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<Step1FormData>({
    mode: 'onChange',
    defaultValues: {
      storeName: useBrandStore((state) => state.storeName),
      shopifyUrl: useBrandStore((state) => state.shopifyUrl),
      industry: useBrandStore((state) => state.industry),
    },
  });

  const setStoreName = useBrandStore((state) => state.setStoreName);
  const setShopifyUrl = useBrandStore((state) => state.setShopifyUrl);
  const setIndustry = useBrandStore((state) => state.setIndustry);
  const nextStep = useBrandStore((state) => state.nextStep);
  const addToast = useToastStore((state) => state.addToast);

  const storeName = watch('storeName');
  const shopifyUrl = watch('shopifyUrl');
  const industry = watch('industry');

  useEffect(() => {
    setStoreName(storeName);
    setShopifyUrl(shopifyUrl);
    setIndustry(industry);
    if (typeof window !== 'undefined') {
      localStorage.setItem('brand-store', JSON.stringify({ storeName, shopifyUrl, industry }));
    }
  }, [storeName, shopifyUrl, industry, setStoreName, setShopifyUrl, setIndustry]);

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      addToast(tx.toast(storeName), 'success');
      nextStep();
    } catch {
      addToast(tx.toastError, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <motion.div className="text-center space-y-4 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-900 rounded-2xl mb-4">
          <span className="text-2xl">🚀</span>
        </div>
        <h1 className="font-minimal text-4xl font-bold text-luxury-900">{tx.title}</h1>
        <p className="text-lg text-luxury-600 max-w-xl mx-auto">{tx.subtitle}</p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
        <FormField label={tx.storeName} error={errors.storeName} delay={0.2} helpText={tx.storeNameHelp}>
          <input
            {...register('storeName', {
              required: tx.storeNameRequired,
              minLength: { value: 3, message: tx.storeNameMin },
              maxLength: { value: 50, message: tx.storeNameMax },
            })}
            type="text"
            placeholder={tx.storeNamePlaceholder}
            className="w-full px-4 py-3 border border-luxury-200 rounded-xl font-minimal text-base text-luxury-900 placeholder-luxury-400 focus:outline-none focus:border-luxury-900 focus:ring-2 focus:ring-luxury-900 focus:ring-opacity-5 transition-all"
          />
        </FormField>

        <FormField label={tx.shopifyUrl} error={errors.shopifyUrl} delay={0.3} helpText={tx.shopifyUrlHelp}>
          <div className="flex items-center gap-2">
            <span className="text-luxury-600 font-minimal text-sm whitespace-nowrap">https://</span>
            <input
              {...register('shopifyUrl', {
                required: tx.shopifyUrlRequired,
                pattern: { value: /^[a-zA-Z0-9-]+\.myshopify\.com$/, message: tx.shopifyUrlFormat },
              })}
              type="text"
              placeholder={tx.shopifyUrlPlaceholder}
              className="flex-1 px-4 py-3 border border-luxury-200 rounded-xl font-minimal text-base text-luxury-900 placeholder-luxury-400 focus:outline-none focus:border-luxury-900 focus:ring-2 focus:ring-luxury-900 focus:ring-opacity-5 transition-all"
            />
          </div>
        </FormField>

        <FormField label={tx.industry} error={errors.industry} delay={0.4} helpText={tx.industryHelp}>
          <select
            {...register('industry')}
            className="w-full px-4 py-3 border border-luxury-200 rounded-xl font-minimal text-base text-luxury-900 focus:outline-none focus:border-luxury-900 focus:ring-2 focus:ring-luxury-900 focus:ring-opacity-5 transition-all appearance-none bg-white cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%231a1a15' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              paddingRight: '36px',
            }}
          >
            {(Object.entries(tx.industries) as [Industry, string][]).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </FormField>

        <motion.div className="flex gap-3 pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <motion.button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`flex-1 py-3 px-6 rounded-xl font-medium font-minimal focus:outline-none focus:ring-2 focus:ring-luxury-900 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 ${
              !isValid || isSubmitting ? 'bg-luxury-300 text-luxury-700 cursor-not-allowed' : 'bg-luxury-900 text-white hover:bg-luxury-800'
            }`}
            whileHover={isValid && !isSubmitting ? { scale: 1.02 } : {}}
            whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>⟳</motion.span>
                {tx.processing}
              </>
            ) : tx.cta}
          </motion.button>
        </motion.div>

        <motion.div className="flex gap-1 justify-center pt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          {[1, 2, 3, 4, 5].map((dot) => (
            <div key={dot} className={`h-2 rounded-full transition-all ${dot === 1 ? 'w-6 bg-luxury-900' : 'w-2 bg-luxury-200'}`} />
          ))}
        </motion.div>
      </form>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-luxury-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {tx.features.map((feature, idx) => (
          <motion.div key={idx} className="text-center" whileHover={{ y: -4 }}>
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="font-minimal font-semibold text-luxury-900 mt-2">{feature.title}</h3>
            <p className="text-sm text-luxury-600 mt-1">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

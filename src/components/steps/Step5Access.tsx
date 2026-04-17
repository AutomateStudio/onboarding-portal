'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useBrandStore } from '@/stores/brandStore';
import { useToastStore } from '@/stores/toastStore';
import { useLanguage } from '@/context/LanguageContext';
import { VoiceTone } from '@/types';
import { FormField } from '../FormField';

interface Step5FormData {
  wompiApiKey: string;
  payuApiKey: string;
}

export function Step5Access() {
  const voiceTone = useBrandStore((s) => s.voiceTone);
  const collaboratorEmails = useBrandStore((s) => s.collaboratorEmails);
  const setVoiceTone = useBrandStore((s) => s.setVoiceTone);
  const setWompiApiKey = useBrandStore((s) => s.setWompiApiKey);
  const setPayuApiKey = useBrandStore((s) => s.setPayuApiKey);
  const setCollaboratorEmails = useBrandStore((s) => s.setCollaboratorEmails);
  const previousStep = useBrandStore((s) => s.previousStep);
  const addToast = useToastStore((s) => s.addToast);
  const { t } = useLanguage();
  const tx = t.step5;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emails, setEmails] = useState<string[]>(collaboratorEmails);
  const [emailInput, setEmailInput] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<Step5FormData>();

  const addEmail = () => {
    const email = emailInput.trim();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { addToast(tx.toastInvalidEmail, 'error'); return; }
    if (emails.includes(email)) { addToast(tx.toastDuplicateEmail, 'error'); return; }
    const updated = [...emails, email];
    setEmails(updated);
    setCollaboratorEmails(updated);
    setEmailInput('');
  };

  const removeEmail = (email: string) => {
    const updated = emails.filter((e) => e !== email);
    setEmails(updated);
    setCollaboratorEmails(updated);
  };

  const onSubmit = async (data: Step5FormData) => {
    setIsSubmitting(true);
    if (data.wompiApiKey) setWompiApiKey(data.wompiApiKey);
    if (data.payuApiKey) setPayuApiKey(data.payuApiKey);
    await new Promise((r) => setTimeout(r, 800));
    addToast(tx.toastSuccess, 'success');
    setIsSubmitting(false);
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
          <span className="text-2xl">🔐</span>
        </div>
        <h1 className="font-minimal text-4xl font-bold text-luxury-900">{tx.title}</h1>
        <p className="text-lg text-luxury-600 max-w-xl">{tx.subtitle}</p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Voice tone */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest mb-4">{tx.voiceLabel}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tx.voiceTones.map((tone, i) => {
              const isSelected = voiceTone === tone.value as VoiceTone;
              return (
                <motion.button
                  key={tone.value}
                  type="button"
                  onClick={() => setVoiceTone(tone.value as VoiceTone)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative text-left p-4 rounded-2xl border-2 transition-all ${isSelected ? 'border-luxury-900 shadow-luxury-md' : 'border-luxury-200 hover:border-luxury-400'}`}
                >
                  {isSelected && (
                    <span className="absolute top-3 right-3 w-5 h-5 bg-luxury-900 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  )}
                  <span className="text-2xl mb-2 block">{tone.icon}</span>
                  <p className="font-minimal font-semibold text-luxury-900 text-sm">{tone.label}</p>
                  <p className="font-minimal text-xs text-luxury-500 mt-0.5">{tone.desc}</p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Payment keys */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="space-y-4">
          <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest">
            {tx.paymentLabel} <span className="normal-case text-luxury-400 font-normal">{tx.optional}</span>
          </h2>
          <FormField label="Wompi API Key" error={errors.wompiApiKey} delay={0.35}>
            <input {...register('wompiApiKey')} type="password" placeholder={tx.wompiPlaceholder}
              className="w-full px-4 py-3 border border-luxury-200 rounded-xl font-minimal text-base text-luxury-900 placeholder-luxury-400 focus:outline-none focus:border-luxury-900 focus:ring-2 focus:ring-luxury-900 focus:ring-opacity-5 transition-all" />
          </FormField>
          <FormField label="PayU API Key" error={errors.payuApiKey} delay={0.4}>
            <input {...register('payuApiKey')} type="password" placeholder={tx.payuPlaceholder}
              className="w-full px-4 py-3 border border-luxury-200 rounded-xl font-minimal text-base text-luxury-900 placeholder-luxury-400 focus:outline-none focus:border-luxury-900 focus:ring-2 focus:ring-luxury-900 focus:ring-opacity-5 transition-all" />
          </FormField>
        </motion.div>

        {/* Collaborators */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          <h2 className="font-minimal text-sm font-semibold text-luxury-500 uppercase tracking-widest mb-4">
            {tx.collaboratorsLabel} <span className="normal-case text-luxury-400 font-normal">{tx.optional}</span>
          </h2>
          <div className="flex gap-2">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addEmail(); } }}
              placeholder={tx.collaboratorsPlaceholder}
              className="flex-1 px-4 py-3 border border-luxury-200 rounded-xl font-minimal text-base text-luxury-900 placeholder-luxury-400 focus:outline-none focus:border-luxury-900 focus:ring-2 focus:ring-luxury-900 focus:ring-opacity-5 transition-all"
            />
            <motion.button type="button" onClick={addEmail} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl border border-luxury-200 font-minimal text-luxury-900 hover:border-luxury-400 transition-all font-medium">
              {tx.addBtn}
            </motion.button>
          </div>
          {emails.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 mt-3">
              {emails.map((email) => (
                <span key={email} className="inline-flex items-center gap-2 px-3 py-1.5 bg-luxury-100 rounded-full font-minimal text-sm text-luxury-900">
                  {email}
                  <button type="button" onClick={() => removeEmail(email)} className="text-luxury-500 hover:text-luxury-900 transition-colors">×</button>
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div className="flex gap-3 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          <motion.button type="button" onClick={previousStep} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-xl border border-luxury-200 font-minimal text-luxury-700 hover:border-luxury-400 transition-all">
            {tx.back}
          </motion.button>
          <motion.button type="submit" disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}} whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className={`flex-1 py-3 px-6 rounded-xl font-medium font-minimal transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'bg-luxury-300 text-luxury-700 cursor-not-allowed' : 'bg-luxury-900 text-white hover:bg-luxury-800'}`}>
            {isSubmitting ? (
              <>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>⟳</motion.span>
                {tx.processing}
              </>
            ) : tx.cta}
          </motion.button>
        </motion.div>

        <motion.div className="flex gap-1 justify-center pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          {[1, 2, 3, 4, 5].map((dot) => (
            <div key={dot} className={`h-2 rounded-full transition-all ${dot === 5 ? 'w-6 bg-luxury-900' : 'w-2 bg-luxury-200'}`} />
          ))}
        </motion.div>
      </form>
    </motion.div>
  );
}

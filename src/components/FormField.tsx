'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  error?: FieldError;
  children: ReactNode;
  delay?: number;
  helpText?: string;
}

export function FormField({
  label,
  error,
  children,
  delay = 0,
  helpText,
}: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <label className="block text-sm font-medium text-luxury-900 mb-2">
        {label}
      </label>
      {children}
      {helpText && !error && (
        <p className="text-xs text-luxury-600 mt-1.5">{helpText}</p>
      )}
      {error && (
        <motion.p
          className="text-red-500 text-sm mt-2 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error.message}
        </motion.p>
      )}
    </motion.div>
  );
}

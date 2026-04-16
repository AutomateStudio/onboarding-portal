'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
}

const toastStyles: Record<ToastType, { bg: string; icon: string; border: string }> = {
  success: {
    bg: 'bg-green-50',
    icon: '✓',
    border: 'border-green-200',
  },
  error: {
    bg: 'bg-red-50',
    icon: '✕',
    border: 'border-red-200',
  },
  info: {
    bg: 'bg-blue-50',
    icon: 'ℹ',
    border: 'border-blue-200',
  },
  warning: {
    bg: 'bg-yellow-50',
    icon: '⚠',
    border: 'border-yellow-200',
  },
};

const textColors: Record<ToastType, string> = {
  success: 'text-green-900',
  error: 'text-red-900',
  info: 'text-blue-900',
  warning: 'text-yellow-900',
};

export function Toast({ message, type, duration = 4000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const style = toastStyles[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 max-w-sm ${style.bg} border ${style.border} rounded-lg shadow-luxury-lg p-4 flex items-center gap-3 z-50`}
        >
          <span className="text-xl font-bold">{style.icon}</span>
          <p className={`${textColors[type]} font-minimal text-sm font-medium`}>
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

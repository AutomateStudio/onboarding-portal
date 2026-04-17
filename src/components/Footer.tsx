'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-luxury-200 bg-white mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-minimal font-semibold text-luxury-900">Automate</p>
            <p className="text-xs text-luxury-600 mt-1">{t.footer.tagline}</p>
          </div>

          <div className="flex gap-6 text-sm text-luxury-600">
            {t.footer.links.map((link) => (
              <a key={link} href="#" className="hover:text-luxury-900 transition-colors font-minimal">
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-luxury-500 font-minimal">
            {t.footer.copyright(currentYear)}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

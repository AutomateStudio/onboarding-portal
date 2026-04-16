'use client';

import { motion } from 'framer-motion';

export function Footer() {
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
          {/* Brand info */}
          <div className="text-center md:text-left">
            <p className="font-minimal font-semibold text-luxury-900">Automate</p>
            <p className="text-xs text-luxury-600 mt-1">
              Premium eCommerce automation platform
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-luxury-600">
            <a
              href="#"
              className="hover:text-luxury-900 transition-colors font-minimal"
            >
              Documentation
            </a>
            <a
              href="#"
              className="hover:text-luxury-900 transition-colors font-minimal"
            >
              Support
            </a>
            <a
              href="#"
              className="hover:text-luxury-900 transition-colors font-minimal"
            >
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-luxury-500 font-minimal">
            © {currentYear} Automate Agency. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

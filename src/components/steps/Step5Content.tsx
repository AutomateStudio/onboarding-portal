'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandStore } from '@/stores/brandStore';

const VOICE_TONES = [
  { id: 'luxury',   icon: '👑', label: 'Luxury',   desc: 'Exclusivo, sofisticado, premium' },
  { id: 'friendly', icon: '😊', label: 'Friendly',  desc: 'Cercano, cálido, accesible' },
  { id: 'bold',     icon: '⚡', label: 'Bold',     desc: 'Directo, fuerte, atrevido' },
  { id: 'minimal',  icon: '🧘', label: 'Minimal',  desc: 'Simple, limpio, esencial' },
];

type CatalogState = 'idle' | 'modal' | 'loading' | 'success' | 'error';

export function Step5Content() {
  const voiceTone = useBrandStore((s) => s.voiceTone);
  const brandDesc = useBrandStore((s) => s.brandDesc);
  const topProducts = useBrandStore((s) => s.topProducts);
  const storeName = useBrandStore((s) => s.storeName);
  const setVoiceTone = useBrandStore((s) => s.setVoiceTone);
  const setBrandDesc = useBrandStore((s) => s.setBrandDesc);
  const setTopProducts = useBrandStore((s) => s.setTopProducts);
  const nextStep = useBrandStore((s) => s.nextStep);
  const previousStep = useBrandStore((s) => s.previousStep);

  const [catalogState, setCatalogState] = useState<CatalogState>('idle');
  const [catalogEmail, setCatalogEmail] = useState('');
  const [folderUrl, setFolderUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleCatalogSubmit = async () => {
    if (!catalogEmail.trim() || !catalogEmail.includes('@')) return;
    setCatalogState('loading');
    try {
      const res = await fetch('/api/catalog/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: catalogEmail.trim(), storeName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al crear carpeta');
      setFolderUrl(data.folderUrl);
      setCatalogState('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido');
      setCatalogState('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="max-w-xl"
    >
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
          Paso 5 · Contenido
        </span>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          Cuéntanos tu historia
        </h1>
        <p className="mt-3 text-gray-500 text-base leading-relaxed">
          Esta información nos ayuda a configurar los textos y el tono de tu tienda.
        </p>
      </div>

      <div className="space-y-8">
        {/* Voice tone */}
        <section>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Tono de voz de tu marca
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {VOICE_TONES.map((tone, idx) => {
              const isSelected = voiceTone === tone.id;
              return (
                <motion.button
                  key={tone.id}
                  type="button"
                  onClick={() => setVoiceTone(tone.id)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * idx }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative text-left p-4 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-100 bg-white hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl block mb-2">{tone.icon}</span>
                  <p className={`text-sm font-bold leading-none ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                    {tone.label}
                  </p>
                  <p className={`text-xs mt-1 leading-snug ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>
                    {tone.desc}
                  </p>
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-[9px] font-bold">✓</span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Brand description */}
        <section>
          <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Descripción de tu marca{' '}
            <span className="normal-case font-normal text-gray-400">(opcional)</span>
          </label>
          <textarea
            value={brandDesc}
            onChange={(e) => setBrandDesc(e.target.value)}
            rows={4}
            placeholder="Ej: Somos una marca de joyería artesanal colombiana que crea piezas únicas para mujeres modernas..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all resize-none"
          />
          <p className="mt-1.5 text-xs text-gray-400">
            Usaremos esto para personalizar los textos de tu tienda.
          </p>
        </section>

        {/* Top products */}
        <section>
          <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Productos estrella{' '}
            <span className="normal-case font-normal text-gray-400">(opcional)</span>
          </label>
          <input
            type="text"
            value={topProducts}
            onChange={(e) => setTopProducts(e.target.value)}
            placeholder="Ej: Anillo solitario, Collar perlas, Pulsera dorada"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
          />
          <p className="mt-1.5 text-xs text-gray-400">
            Separa los productos con comas. Los destacaremos en tu home.
          </p>
        </section>

        {/* Catalog section */}
        <section>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Catálogo de productos{' '}
            <span className="normal-case font-normal text-gray-400">(opcional)</span>
          </h2>

          <AnimatePresence mode="wait">
            {catalogState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-green-50 border border-green-200 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">¡Carpeta lista en Google Drive!</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Invitamos a <strong>{catalogEmail}</strong> como editor.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  La carpeta contiene la plantilla de productos en Google Sheets y una carpeta <strong>Fotos de Productos</strong>. Revisa tu correo para acceder.
                </p>
                <a
                  href={folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Abrir carpeta en Drive →
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">Plantilla de productos en Drive</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Te creamos una carpeta en Google Drive con la plantilla lista y una carpeta para subir las fotos de tus productos.
                  </p>
                </div>
                <motion.button
                  type="button"
                  onClick={() => setCatalogState('modal')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-shrink-0 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors"
                >
                  Preparar carpeta
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Navigation */}
        <div className="flex gap-3 pt-2">
          <motion.button
            type="button"
            onClick={previousStep}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-400 transition-all"
          >
            ← Volver
          </motion.button>
          <motion.button
            type="button"
            onClick={nextStep}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
          >
            Continuar a Acceso →
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {(catalogState === 'modal' || catalogState === 'loading' || catalogState === 'error') && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={(e) => { if (e.target === e.currentTarget && catalogState !== 'loading') setCatalogState('idle'); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
            >
              {catalogState === 'error' ? (
                <div className="text-center py-4">
                  <span className="text-4xl block mb-3">⚠️</span>
                  <p className="text-sm font-bold text-gray-900 mb-1">No se pudo crear la carpeta</p>
                  <p className="text-xs text-gray-500 mb-5">{errorMsg}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setCatalogState('idle')}
                      className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => setCatalogState('modal')}
                      className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold"
                    >
                      Reintentar
                    </button>
                  </div>
                </div>
              ) : catalogState === 'loading' ? (
                <div className="text-center py-8">
                  <div className="w-10 h-10 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-sm font-semibold text-gray-900">Creando tu carpeta en Drive…</p>
                  <p className="text-xs text-gray-400 mt-1">Esto puede tardar unos segundos</p>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-xl">📁</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Preparar carpeta de productos</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Ingresa el correo Gmail que usará para subir las fotos y completar la plantilla. Le enviaremos una invitación de Google Drive.
                    </p>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={catalogEmail}
                      onChange={(e) => setCatalogEmail(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleCatalogSubmit(); }}
                      placeholder="tucorreo@gmail.com"
                      autoFocus
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setCatalogState('idle')}
                      className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-gray-300 transition-all"
                    >
                      Cancelar
                    </button>
                    <motion.button
                      type="button"
                      onClick={handleCatalogSubmit}
                      disabled={!catalogEmail.trim() || !catalogEmail.includes('@')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Crear carpeta
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

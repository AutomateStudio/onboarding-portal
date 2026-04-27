'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { INDUSTRY_TEMPLATES, type IndustryTemplate } from '@/constants/industryTemplates';

type TemplateWithCategory = IndustryTemplate & { category: string };

const BG = '#0a0e1a';
const ACCENT = '#6366f1';

const CATEGORY_LABELS: Record<string, string> = {
  all: 'Todos',
  beauty: 'Belleza',
  fashion: 'Moda',
  jewelry: 'Joyería',
  food: 'Alimentos',
  home: 'Hogar',
  electronics: 'Electrónica',
  sports: 'Deportes',
  general: 'General',
};

const CATEGORY_ORDER = ['all', 'beauty', 'fashion', 'jewelry', 'food', 'home', 'electronics', 'sports', 'general'];

const ALL_TEMPLATES: TemplateWithCategory[] = Object.entries(INDUSTRY_TEMPLATES).flatMap(
  ([category, templates]) => templates.map(t => ({ ...t, category }))
);

/* ─── Mesh canvas ────────────────────────────── */
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number, frame = 0;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    resize();

    const N = 32, MAX_DIST = 150;
    type Pt = { x: number; y: number; vx: number; vy: number };
    const pts: Pt[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
    }));

    function draw() {
      if (!canvas) return;
      frame++;
      if (frame % 2 === 0) { raf = requestAnimationFrame(draw); return; }
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(100,165,255,${(1 - d / MAX_DIST) * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(120,180,255,0.4)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
}

/* ─── Template card ──────────────────────────── */
function TemplateCard({ template, onClick }: { template: TemplateWithCategory; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(99,102,241,0.45)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        boxShadow: hovered ? '0 20px 60px rgba(99,102,241,0.18)' : 'none',
      }}
    >
      {/* Hero image */}
      <div style={{ position: 'relative', height: 190, overflow: 'hidden' }}>
        <img
          src={template.hero}
          alt={template.name}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.45s ease',
          }}
        />
        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(5,5,20,0.65)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontSize: 13, fontWeight: 700, color: '#fff',
            padding: '10px 26px', borderRadius: 50,
            border: '1.5px solid rgba(255,255,255,0.6)',
            backdropFilter: 'blur(8px)',
            background: 'rgba(99,102,241,0.25)',
          }}>
            Ver demo →
          </span>
        </div>
        {/* Category badge */}
        {template.badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            fontSize: 10, fontWeight: 800, letterSpacing: 0.8,
            padding: '3px 10px', borderRadius: 50, textTransform: 'uppercase',
            background: template.badge === 'popular' ? ACCENT : '#10b981',
            color: '#fff',
          }}>
            {template.badge === 'popular' ? 'Popular' : 'Nuevo'}
          </span>
        )}
        {/* Live demo pill */}
        {template.previewUrl && (
          <span style={{
            position: 'absolute', bottom: 10, right: 10,
            fontSize: 9, fontWeight: 700, letterSpacing: 0.5,
            padding: '3px 8px', borderRadius: 4,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.55)',
          }}>
            DEMO EN VIVO
          </span>
        )}
      </div>

      {/* Product thumbnails */}
      <div style={{ display: 'flex', gap: 4, padding: '10px 10px 0' }}>
        {template.products.slice(0, 4).map((p, i) => (
          <div key={i} style={{ flex: 1, aspectRatio: '1', overflow: 'hidden', borderRadius: 6, background: 'rgba(255,255,255,0.04)' }}>
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* Name + category */}
      <div style={{ padding: '10px 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: -0.3 }}>{template.name}</h3>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
          {CATEGORY_LABELS[template.category]}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Demo modal ─────────────────────────────── */
function DemoModal({ template, onClose }: { template: TemplateWithCategory; onClose: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', flexDirection: 'column', background: 'rgba(5,5,16,0.98)' }}
    >
      {/* Modal header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', flexShrink: 0,
        background: 'rgba(10,14,26,0.97)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={onClose}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '7px 16px', borderRadius: 50,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            ← Volver
          </button>
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)' }} />
          <div className="modal-header-info" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{template.name}</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{template.desc}</span>
            {template.badge && (
              <span style={{
                fontSize: 9, fontWeight: 800, letterSpacing: 0.8,
                padding: '2px 8px', borderRadius: 50, textTransform: 'uppercase',
                background: template.badge === 'popular' ? ACCENT : '#10b981', color: '#fff',
              }}>
                {template.badge === 'popular' ? 'Popular' : 'Nuevo'}
              </span>
            )}
          </div>
        </div>
        <a
          href="/onboarding"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 24px', borderRadius: 50,
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
          }}
        >
          Usar este diseño →
        </a>
      </div>

      {/* Content */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {template.previewUrl ? (
          <>
            {loading && (
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 16, background: BG, zIndex: 1,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '3px solid rgba(99,102,241,0.2)',
                  borderTopColor: ACCENT,
                  animation: 'spin 0.7s linear infinite',
                }} />
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>Cargando preview...</p>
              </div>
            )}
            <iframe
              src={template.previewUrl}
              onLoad={() => setLoading(false)}
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              title={`Demo ${template.name}`}
            />
          </>
        ) : (
          <div style={{
            height: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '40px',
            gap: 24,
          }}>
            <div style={{ maxWidth: 960, width: '100%', position: 'relative' }}>
              {/* Browser chrome mockup */}
              <div style={{
                background: 'rgba(255,255,255,0.05)', borderRadius: '12px 12px 0 0',
                padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <div style={{
                  flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 4,
                  padding: '3px 12px', marginLeft: 8, fontSize: 11, color: 'rgba(255,255,255,0.3)',
                }}>
                  tutienda.myshopify.com
                </div>
              </div>
              <img
                src={template.hero}
                alt={template.name}
                style={{
                  width: '100%', display: 'block',
                  borderRadius: '0 0 12px 12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
                }}
              />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
              Vista interactiva disponible próximamente · Personalizable al 100%
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main page ──────────────────────────────── */
export default function DiseniosPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState<TemplateWithCategory | null>(null);

  const filtered = useMemo(
    () => activeCategory === 'all' ? ALL_TEMPLATES : ALL_TEMPLATES.filter(t => t.category === activeCategory),
    [activeCategory]
  );

  const categories = CATEGORY_ORDER.filter(c => c === 'all' || c in INDUSTRY_TEMPLATES);

  return (
    <div style={{ minHeight: '100vh', background: BG, color: '#fff', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; cursor: pointer; border: none; outline: none; background: none; }
        @keyframes spin { to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 6px; height: 4px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 3px; }
        .cat-pill:hover { border-color: rgba(99,102,241,0.5) !important; color: rgba(255,255,255,0.85) !important; }
        .filters-bar::-webkit-scrollbar { display: none; }
        @media (max-width: 1100px) {
          .templates-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 800px) {
          .templates-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-title { font-size: 52px !important; letter-spacing: -2.5px !important; }
          .page-hero { padding: 140px 24px 60px !important; }
          .filters-inner { padding: 0 24px !important; }
          .main-grid { padding: 32px 24px 60px !important; }
        }
        @media (max-width: 480px) {
          .templates-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 40px !important; letter-spacing: -2px !important; }
          .modal-header-info { display: none !important; }
        }
      `}</style>

      <NetworkCanvas />

      {/* ── Nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
        background: 'rgba(10,14,26,0.88)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 900, letterSpacing: -0.5, color: '#fff' }}>
          automate<span style={{ color: ACCENT }}>.</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            {ALL_TEMPLATES.length}+ diseños premium
          </span>
          <a
            href="/onboarding"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '9px 22px', borderRadius: 50,
              background: ACCENT, color: '#fff', fontSize: 13, fontWeight: 700,
              boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
            }}
          >
            Empieza ahora →
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="page-hero" style={{ position: 'relative', zIndex: 1, padding: '160px 40px 70px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: ACCENT, textTransform: 'uppercase' }}>
            Diseños premium
          </span>
          <h1
            className="hero-title"
            style={{
              fontSize: 72, fontWeight: 900, letterSpacing: -3.5, marginTop: 16, lineHeight: 1.04,
              background: 'linear-gradient(135deg, #fff 35%, #a78bfa 65%, #ec4899 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Templates que<br />convierten.
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.42)', marginTop: 20, lineHeight: 1.65 }}>
            Haz clic en cualquier diseño para ver el demo en vivo.
          </p>
        </motion.div>
      </section>

      {/* ── Category filters (sticky) ── */}
      <div style={{
        position: 'sticky', top: 62, zIndex: 50,
        background: 'rgba(10,14,26,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div className="filters-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div className="filters-bar" style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '12px 0', scrollbarWidth: 'none' }}>
            {categories.map(cat => {
              const active = activeCategory === cat;
              const count = cat !== 'all' ? (INDUSTRY_TEMPLATES[cat] || []).length : ALL_TEMPLATES.length;
              return (
                <button
                  key={cat}
                  className="cat-pill"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    flexShrink: 0, padding: '8px 18px', borderRadius: 50,
                    border: `1px solid ${active ? 'rgba(99,102,241,0.55)' : 'rgba(255,255,255,0.09)'}`,
                    background: active ? 'rgba(99,102,241,0.18)' : 'transparent',
                    color: active ? '#a5b4fc' : 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: active ? 700 : 500,
                    transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6,
                  }}
                >
                  {CATEGORY_LABELS[cat]}
                  <span style={{ fontSize: 10, opacity: 0.55, fontWeight: 600 }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Templates grid ── */}
      <main className="main-grid" style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '40px 40px 80px' }}>
        <motion.div
          className="templates-grid"
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((template, i) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, delay: Math.min(i * 0.04, 0.2) }}
              >
                <TemplateCard template={template} onClick={() => setSelected(template)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* ── Footer CTA ── */}
      <section style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
        padding: '70px 40px 80px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -2, marginBottom: 14, color: '#fff' }}>
            ¿Ya encontraste tu diseño?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.38)', marginBottom: 36, maxWidth: 420, margin: '0 auto 36px' }}>
            Empieza el onboarding — 10 minutos y nosotros nos encargamos del resto.
          </p>
          <a
            href="/onboarding"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '18px 52px', borderRadius: 50,
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              color: '#fff', fontSize: 16, fontWeight: 700,
              boxShadow: '0 8px 40px rgba(99,102,241,0.4)',
            }}
          >
            Empieza ahora →
          </a>
        </motion.div>
      </section>

      {/* ── Demo modal ── */}
      <AnimatePresence>
        {selected && (
          <DemoModal template={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

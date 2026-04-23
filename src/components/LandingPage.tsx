'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ─── Helpers ─────────────────────────────── */
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return { ref, count };
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Network Canvas (triangulated mesh) ─── */
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let frame = 0;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const N = 42;
    const MAX_DIST = 160;
    type Pt = { x: number; y: number; vx: number; vy: number };

    const pts: Pt[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }));

    function draw() {
      frame++;
      // Skip every other frame for performance
      if (frame % 2 === 0) { raf = requestAnimationFrame(draw); return; }

      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Build edges only — no triangle fill (avoids O(N³))
      const pairs: [number, number, number][] = [];
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) pairs.push([i, j, d]);
        }
      }

      // Draw edges
      for (const [i, j, d] of pairs) {
        const alpha = (1 - d / MAX_DIST) * 0.25;
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(100,165,255,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Draw nodes
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(120,180,255,0.5)';
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

/* ─── Floating badge ─────────────────────── */
function Badge({ icon, text, delay, style, className }: { icon: React.ReactNode; text: string; delay: number; style: React.CSSProperties; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
      transition={{ opacity: { delay, duration: 0.5 }, scale: { delay, duration: 0.5 }, y: { delay: delay + 0.5, duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
      style={{
        position: 'absolute', display: 'flex', alignItems: 'center', gap: 9,
        padding: '10px 18px', borderRadius: 50,
        background: 'rgba(10,14,30,0.82)', backdropFilter: 'blur(14px)',
        border: '1px solid rgba(100,140,255,0.18)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        fontSize: 13, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap',
        zIndex: 5, pointerEvents: 'none',
        ...style,
      }}
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
}

/* ─── Static data ─────────────────────────── */
const STATS = [
  { value: 50, suffix: '+', label: 'Tiendas lanzadas' },
  { value: 7, suffix: ' días', label: 'Tiempo promedio de entrega' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
  { value: 24, suffix: '/7', label: 'Soporte en español' },
];

const COMPARISON_ROWS = [
  { label: 'TIEMPO DE ENTREGA', bad: '2–3 meses', good: '7 días', badge: '8X MÁS RÁPIDO' },
  { label: 'REVISIONES', bad: 'Limitadas', good: 'Ilimitadas', badge: null },
  { label: 'ONBOARDING', bad: 'Reuniones y llamadas', good: 'Portal 100% online', badge: null },
  { label: 'SOPORTE POST-LAUNCH', bad: 'Por horas, cobrado aparte', good: 'Incluido', badge: null },
  { label: 'APPS CONFIGURADAS', bad: 'Costo extra', good: 'Todo incluido', badge: null },
];

const STEPS = [
  { n: '01', title: 'Cuéntanos tu negocio', desc: 'En 5 minutos completas el onboarding: industria, nombre, referentes y lo que quieres vender.', icon: '🧠' },
  { n: '02', title: 'Elegimos tu diseño', desc: 'Seleccionas el template que mejor representa tu marca. Personalizamos colores, tipografía y tono.', icon: '🎨' },
  { n: '03', title: 'Tu tienda en vivo', desc: 'Configuramos productos, pasarelas de pago, apps esenciales y desplegamos. Tú solo vendes.', icon: '🚀' },
];

const PLANS = [
  {
    name: 'Starter', price: '990', currency: 'USD', badge: '',
    desc: 'Ideal para emprendedores que quieren lanzar rápido.',
    features: ['Tienda Shopify completa', 'Hasta 50 productos cargados', '1 template premium', 'Pasarela de pago configurada', '7 días de soporte post-lanzamiento'],
    cta: 'Empezar con Starter', featured: false,
  },
  {
    name: 'Pro', price: '1.990', currency: 'USD', badge: 'MÁS POPULAR',
    desc: 'Para marcas que quieren diferenciarse desde el día 1.',
    features: ['Todo lo de Starter', 'Hasta 200 productos', 'Diseño UI personalizado', 'Apps de marketing incluidas', 'SEO técnico configurado', '30 días de soporte prioritario'],
    cta: 'Empezar con Pro', featured: true,
  },
  {
    name: 'Premium', price: '3.490', currency: 'USD', badge: '',
    desc: 'Solución completa para marcas con ambición de escala.',
    features: ['Todo lo de Pro', 'Productos ilimitados', 'Branding completo (logo, paleta, voz)', 'Integraciones avanzadas (ERP, CRM)', 'Estrategia de lanzamiento', '90 días de soporte dedicado'],
    cta: 'Empezar con Premium', featured: false,
  },
];

const FAQS = [
  { q: '¿En cuánto tiempo tengo mi tienda lista?', a: 'El proceso de onboarding toma 10 minutos. De ahí en adelante, nuestro equipo entrega tu tienda funcional en un promedio de 7 días hábiles. Proyectos Premium pueden tomar hasta 14 días.' },
  { q: '¿Necesito saber de programación o diseño?', a: 'Cero. Eso es exactamente lo que hacemos nosotros. Solo necesitas contarnos sobre tu negocio y elegir lo que te gusta. Nos encargamos de todo lo técnico.' },
  { q: '¿Qué pasa después de que lanza mi tienda?', a: 'Cada plan incluye soporte post-lanzamiento. Te ayudamos con ajustes, dudas y optimizaciones. También ofrecemos planes de mantenimiento mensual si los necesitas.' },
  { q: '¿Puedo migrar mi tienda actual a Shopify?', a: 'Sí. Si tienes productos en WooCommerce, Tiendanube, PrestaShop o cualquier otra plataforma, podemos migrar tu catálogo y clientes a Shopify.' },
  { q: '¿El precio incluye el plan de Shopify?', a: 'El precio de nuestro servicio es de implementación. El plan de Shopify se paga directamente a Shopify (desde $29 USD/mes). Te ayudamos a elegir el plan más adecuado para tu etapa.' },
  { q: '¿Tienen garantía?', a: 'Sí. Si al entregar tu tienda no estás satisfecho con el resultado, hacemos las correcciones necesarias sin costo adicional. Tu satisfacción es nuestra prioridad.' },
];

const TESTIMONIALS = [
  { name: 'Valentina Ríos', role: 'Fundadora · Ámbar Studio', text: 'En 6 días tenía mi tienda de joyería funcionando. Lo que me hubiera tomado meses hacerlo sola, ellos lo resolvieron perfectamente.', stars: 5, avatar: 'VR' },
  { name: 'Carlos Mendoza', role: 'CEO · FitEdge Colombia', text: 'Lanzamos nuestra línea de ropa deportiva con una tienda que parece de marca internacional. Las ventas empezaron en la primera semana.', stars: 5, avatar: 'CM' },
  { name: 'Daniela Torres', role: 'Propietaria · Grano Verde', text: 'Mi tienda de alimentos orgánicos quedó exactamente como la imaginaba. El equipo entiende de diseño y de conversión, no solo de código.', stars: 5, avatar: 'DT' },
  { name: 'Sebastián Mora', role: 'Director · Lumen Tech', text: 'Probamos otras agencias antes. Ninguna entregó en el tiempo prometido. Automate Studio cumplió hasta el día. Ahora manejamos 3 tiendas con ellos.', stars: 5, avatar: 'SM' },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, count } = useCounter(value);
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-num" style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: -2, lineHeight: 1 }}>
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div className="stat-label" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, fontWeight: 400 }}>{label}</div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>{q}</span>
        <span style={{ fontSize: 22, color: '#6366f1', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', lineHeight: 1 }}>+</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            <p style={{ paddingTop: 16, fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Shared section background ──────────── */
const BG = '#0a0e1a';
const BG2 = '#080b16';

/* ─── Main ───────────────────────────────── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const container: React.CSSProperties = { maxWidth: 1180, margin: '0 auto', padding: '0 40px' };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: BG, color: '#fff', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: ${BG}; } ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 3px; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; cursor: pointer; border: none; outline: none; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes pulse-ring { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0.5); } 70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(99,102,241,0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0); } }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-badge { display: none !important; }
          .hero-section { padding: 100px 20px 60px !important; }
          .hero-h1 { font-size: 38px !important; letter-spacing: -1.5px !important; }
          .hero-p { font-size: 16px !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { justify-content: center !important; }
          .hero-trust { flex-direction: column !important; gap: 6px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-border { border-right: none !important; }
          .stat-num { font-size: 36px !important; letter-spacing: -1px !important; }
          .stat-label { font-size: 11px !important; }
          .section-pad { padding: 60px 20px !important; }
          .section-title { font-size: 32px !important; letter-spacing: -1px !important; }
          .comp-headers { display: none !important; }
          .comp-mobile-header { display: grid !important; }
          .comp-row { grid-template-columns: 1fr 1fr !important; }
          .comp-label { display: none !important; }
          .summary-cards { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .plans-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .cta-title { font-size: 36px !important; letter-spacing: -1.5px !important; }
          .cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .cta-btns a { justify-content: center !important; }
          .wrap { padding: 0 20px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        padding: '18px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(8,11,22,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s',
      }}>
        <a href="/" style={{ fontSize: 22, fontWeight: 900, letterSpacing: -1, color: '#fff' }}>
          automate<span style={{ color: '#6366f1' }}>.</span>
        </a>
        <nav className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {[['#diseños', 'Diseños'], ['#casos', 'Casos'], ['#precios', 'Precios'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >{label}</a>
          ))}
          <a href="/onboarding" style={{
            padding: '10px 24px', borderRadius: 10,
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: '#fff', fontWeight: 600, fontSize: 14,
            boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(99,102,241,0.55)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(99,102,241,0.4)'; }}
          >Contacto</a>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', color: '#fff', fontSize: 24, alignItems: 'center', justifyContent: 'center' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: BG2, zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
            {[['#diseños', 'Diseños'], ['#casos', 'Casos'], ['#precios', 'Precios'], ['#faq', 'FAQ']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>{label}</a>
            ))}
            <a href="/onboarding" onClick={() => setMenuOpen(false)} style={{ padding: '14px 36px', borderRadius: 12, background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', fontWeight: 700, fontSize: 18 }}>Empieza Ahora →</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ minHeight: '100vh', background: BG, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        <NetworkCanvas />

        {/* Glow blobs */}
        <div style={{ position: 'absolute', width: 600, height: 600, top: '10%', left: '-10%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, top: '20%', right: '-10%', background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 800, height: 400, bottom: '20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        {/* Floating badges */}
        <Badge className="hero-badge" icon={<span style={{ fontSize: 16 }}>❤️</span>} text="+200 marcas lanzadas" delay={0.8} style={{ left: '6%', top: '38%' }} />
        <Badge className="hero-badge" icon={<span style={{ fontSize: 14, color: '#fbbf24' }}>★</span>} text="Rating 4.9/5" delay={1.0} style={{ left: '4%', bottom: '28%' }} />
        <Badge className="hero-badge" icon={<span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />} text="Entrega en 7 días" delay={0.9} style={{ right: '5%', top: '34%' }} />
        <Badge className="hero-badge" icon={<span style={{ fontSize: 14, color: '#6366f1' }}>⚡</span>} text="Shopify Partners" delay={1.1} style={{ right: '4%', bottom: '30%' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 900 }}>
          {/* Top pill badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 50, border: '1px solid rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.1)', marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1', animation: 'pulse-ring 2s infinite', flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>AI-powered · Shopify Partners oficiales</span>
          </motion.div>

          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 82, fontWeight: 900, color: '#fff', lineHeight: 1.02, letterSpacing: -3.5, marginBottom: 28 }}
          >
            Lanzamos tu tienda<br />
            <span style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 45%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Shopify en tiempo
            </span><br />
            <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              récord.
            </span>
          </motion.h1>

          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontSize: 20, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: 580, margin: '0 auto 44px', fontWeight: 300 }}
          >
            Diseño profesional, apps configuradas y tienda lista para vender — en días, no meses.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="hero-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
            <a href="/onboarding" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 38px', borderRadius: 50,
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              color: '#fff', fontWeight: 700, fontSize: 16,
              boxShadow: '0 8px 32px rgba(99,102,241,0.45)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(99,102,241,0.6)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(99,102,241,0.45)'; }}
            >
              Empieza ahora →
            </a>
            <a href="/disenos.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 50,
              border: '1.5px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
              color: '#fff', fontWeight: 500, fontSize: 16,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
            >
              ▷ Ver Diseños
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="hero-trust" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex' }}>
              {['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f43f5e'].map((c, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: c, border: '2px solid rgba(10,14,26,0.8)', marginLeft: i === 0 ? 0 : -8, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>
                  {['VR', 'CM', 'DT', 'SM', '+'][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginLeft: 8 }}>
              <strong style={{ color: '#fff' }}>+200 marcas</strong> vendiendo ya
            </span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>·</span>
            <span style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#fbbf24', fontSize: 13 }}>★</span>)}
            </span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>4.9/5 rating</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-pad" style={{ background: BG2, padding: '80px 40px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="wrap" style={container}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {STATS.map((st, i) => (
              <FadeUp key={st.label} delay={i * 0.08}>
                <div className={i < 3 ? 'stats-border' : ''} style={{ textAlign: 'center', padding: '16px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <Stat {...st} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="section-pad" style={{ background: BG, padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, bottom: 0, right: '-5%', background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ ...container, position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>Por qué elegirnos</span>
              <h2 className="section-title" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, marginTop: 12, lineHeight: 1.05, color: '#fff' }}>La diferencia es clara.</h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>Mismos resultados. Una fracción del tiempo y el costo.</p>
            </div>
          </FadeUp>

          {/* Comparison headers — hidden on mobile */}
          <FadeUp delay={0.1}>
            <div className="comp-headers" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginBottom: 8 }}>
              <div />
              <div style={{ padding: '14px 20px', textAlign: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Comparado con</span>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  Agencia tradicional
                </div>
              </div>
              <div style={{ padding: '14px 20px', background: 'rgba(99,102,241,0.12)', borderRadius: '12px 12px 0 0', border: '1px solid rgba(99,102,241,0.25)', borderBottom: 'none', textAlign: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#6366f1', textTransform: 'uppercase' }}>Tu solución</span>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
                  Automate Studio
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            {/* Header visible solo en móvil */}
            <div className="comp-mobile-header" style={{ display: 'none', gridTemplateColumns: '1fr 1fr', marginBottom: 4 }}>
              <div style={{ padding: '10px 16px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '10px 0 0 0', border: '1px solid rgba(255,255,255,0.08)', borderRight: 'none' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  Agencia
                </span>
              </div>
              <div style={{ padding: '10px 16px', textAlign: 'center', background: 'rgba(99,102,241,0.12)', borderRadius: '0 10px 0 0', border: '1px solid rgba(99,102,241,0.3)', borderLeft: 'none' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#818cf8' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
                  Automate
                </span>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
              {COMPARISON_ROWS.map((row, i) => (
                <div key={row.label} className="comp-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <div className="comp-label" style={{ padding: '18px 24px', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>{row.label}</div>
                  <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 10, borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#ef4444', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>✗</span>
                    <div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500, marginBottom: 4 }}>{row.bad}</div>
                      <div style={{ height: 3, borderRadius: 2, background: 'rgba(239,68,68,0.4)', width: '70%' }} />
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(99,102,241,0.08)', borderLeft: '1px solid rgba(99,102,241,0.2)' }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, color: '#fff', fontWeight: 600, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                        {row.good}
                        {row.badge && <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1, background: '#22c55e', color: '#000', padding: '2px 7px', borderRadius: 4, whiteSpace: 'nowrap' }}>{row.badge}</span>}
                      </div>
                      <div style={{ height: 3, borderRadius: 2, background: 'linear-gradient(to right, #6366f1, #a855f7)', width: '85%' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Summary cards */}
          <FadeUp delay={0.25}>
            <div className="summary-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 32 }}>
              {[
                { n: '8x', label: 'Más rápido' },
                { n: '90%', label: 'Menor costo' },
                { n: '100%', label: 'Online, sin reuniones' },
              ].map(c => (
                <div key={c.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 44, fontWeight: 900, background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: -2 }}>{c.n}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{c.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad" style={{ background: BG2, padding: '120px 40px' }}>
        <div style={container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>El proceso</span>
              <h2 className="section-title" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, marginTop: 12, color: '#fff' }}>3 pasos hacia tu tienda.</h2>
            </div>
          </FadeUp>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {STEPS.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.12}>
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: '36px 32px', border: '1px solid rgba(99,102,241,0.15)', position: 'relative', overflow: 'hidden', height: '100%' }}>
                  <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 72, fontWeight: 900, color: 'rgba(99,102,241,0.07)', lineHeight: 1 }}>{step.n}</div>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{step.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#fff' }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <a href="/onboarding" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', borderRadius: 50,
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color: '#fff', fontWeight: 700, fontSize: 16,
                boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(99,102,241,0.55)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(99,102,241,0.4)'; }}
              >Empezar ahora — es gratis →</a>
              <p style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>Completa el onboarding en menos de 10 minutos</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── DESIGNS MARQUEE ── */}
      <section id="diseños" style={{ background: BG, padding: '80px 0 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ ...container, textAlign: 'center', marginBottom: 60 }}>
          <FadeUp>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>Diseños premium</span>
            <h2 style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, marginTop: 12, color: '#fff' }}>Templates que convierten.</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>Creados con las mejores prácticas de UX y CRO para maximizar ventas.</p>
          </FadeUp>
        </div>
        {[
          ['Joyería · Lumière', 'Moda · Aura', 'Alimentos · Cosecha', 'Belleza · Aurora', 'Electrónica · Volt', 'Hogar · Haven'],
          ['Deportes · Apex', 'Alimentos · Levain', 'Moda · Elegancia', 'Joyería · Diamante', 'General · Bazaar', 'Hogar · Nordia'],
        ].map((row, ri) => (
          <div key={ri} style={{ overflow: 'hidden', padding: '10px 0', marginBottom: ri === 0 ? 0 : 20 }}>
            <div style={{ display: 'flex', gap: 14, animation: `marquee ${ri === 0 ? 28 : 22}s linear infinite${ri === 1 ? ' reverse' : ''}`, width: 'max-content' }}>
              {[...row, ...row].map((item, j) => (
                <div key={j} style={{ padding: '13px 26px', borderRadius: 50, border: '1px solid rgba(99,102,241,0.2)', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap', background: 'rgba(99,102,241,0.06)' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: '48px 40px 80px' }}>
          <a href="/disenos.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderRadius: 50,
            border: '1.5px solid rgba(99,102,241,0.35)', color: '#fff', fontWeight: 600, fontSize: 15,
            background: 'rgba(99,102,241,0.08)', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.7)'; (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.16)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.35)'; (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.08)'; }}
          >Ver los 20+ diseños ↗</a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="casos" className="section-pad" style={{ background: BG2, padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>Resultados reales · 20+ tiendas en vivo</span>
              <h2 className="section-title" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, marginTop: 12, color: '#fff' }}>
                Casos <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>de Éxito.</span>
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginTop: 16, maxWidth: 500, margin: '16px auto 0' }}>Tiendas que pasaron de cero a vender de forma consistente en su primer mes.</p>
            </div>
          </FadeUp>
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: '32px', border: '1px solid rgba(255,255,255,0.07)', height: '100%' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                    {Array.from({ length: t.stars }).map((_, j) => <span key={j} style={{ color: '#fbbf24', fontSize: 16 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 24 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="precios" className="section-pad" style={{ background: BG, padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>Precios</span>
              <h2 className="section-title" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, marginTop: 12, color: '#fff' }}>Inversión transparente.</h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginTop: 16 }}>Un precio. Todo incluido. Sin sorpresas.</p>
            </div>
          </FadeUp>
          <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1}>
                <div style={{
                  borderRadius: 20, padding: '40px 32px',
                  background: plan.featured ? 'linear-gradient(180deg, rgba(99,102,241,0.15) 0%, rgba(10,14,26,0) 100%)' : 'rgba(255,255,255,0.03)',
                  border: plan.featured ? '1.5px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: plan.featured ? '0 0 60px rgba(99,102,241,0.12)' : 'none',
                  position: 'relative', height: '100%',
                }}>
                  {plan.badge && (
                    <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: 1.5, padding: '5px 16px', borderRadius: '0 0 10px 10px', textTransform: 'uppercase' }}>{plan.badge}</div>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{plan.currency} </span>
                    <span style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: -2 }}>${plan.price}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}> único</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 28, lineHeight: 1.6 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <span style={{ color: '#6366f1', flexShrink: 0, marginTop: 1 }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <a href="/onboarding" style={{
                    display: 'block', textAlign: 'center', padding: '14px', borderRadius: 50,
                    background: plan.featured ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255,255,255,0.07)',
                    color: '#fff', fontWeight: 600, fontSize: 15, transition: 'all 0.3s',
                    border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    boxShadow: plan.featured ? '0 4px 20px rgba(99,102,241,0.35)' : 'none',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >{plan.cta} →</a>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 40, fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>
              ¿Tienes un proyecto especial? <a href="mailto:hola@automatestudio.com" style={{ color: '#6366f1' }}>Hablemos</a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-pad" style={{ background: BG2, padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>FAQ</span>
              <h2 className="section-title" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, marginTop: 12, color: '#fff' }}>Preguntas frecuentes.</h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div>{FAQS.map(faq => <FAQItem key={faq.q} {...faq} />)}</div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad" style={{ background: BG, padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 700, height: 700, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ ...container, textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#6366f1', textTransform: 'uppercase' }}>¿Listo para lanzar?</span>
            <h2 className="cta-title" style={{ fontSize: 60, fontWeight: 900, letterSpacing: -3, marginTop: 16, lineHeight: 1.02, color: '#fff' }}>
              Empieza a vender<br />
              <span style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>en internet hoy mismo.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginTop: 20, maxWidth: 500, margin: '20px auto 0' }}>
              El onboarding toma 10 minutos. Tu tienda estará lista en 7 días.
            </p>
            <div className="cta-btns" style={{ marginTop: 48, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/onboarding" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 48px', borderRadius: 50,
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color: '#fff', fontWeight: 700, fontSize: 17,
                boxShadow: '0 8px 40px rgba(99,102,241,0.45)', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 52px rgba(99,102,241,0.6)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(99,102,241,0.45)'; }}
              >Configurar mi tienda gratis →</a>
              <a href="mailto:hola@automatestudio.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '18px 36px', borderRadius: 50,
                border: '1.5px solid rgba(255,255,255,0.15)', color: '#fff', fontWeight: 600, fontSize: 16,
                background: 'rgba(255,255,255,0.04)', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >Hablar con el equipo</a>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Sin tarjeta de crédito · Sin contratos · Garantía incluida</p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: BG2, padding: '80px 40px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={container}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: -1, marginBottom: 16 }}>automate<span style={{ color: '#6366f1' }}>.</span></div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 260 }}>
                Agencia especializada en lanzamiento de tiendas Shopify para marcas de LATAM. Rápido, profesional y sin complicaciones.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Servicios</div>
              {['Tiendas Shopify', 'Diseño UI/UX', 'Migración', 'SEO E-commerce'].map(item => (
                <a key={item} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >{item}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Empresa</div>
              {[['#diseños', 'Diseños'], ['#casos', 'Casos de Éxito'], ['#precios', 'Precios'], ['#faq', 'FAQ']].map(([href, label]) => (
                <a key={label} href={href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Contacto</div>
              <a href="mailto:hola@automatestudio.com" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>hola@automatestudio.com</a>
              <span style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>Colombia, LATAM</span>
              <a href="/onboarding" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, padding: '10px 20px', borderRadius: 50, background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', fontSize: 13, fontWeight: 600 }}>Iniciar proyecto</a>
            </div>
          </div>
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2026 Automate Studio. Todos los derechos reservados.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacidad', 'Términos'].map(item => (
                <a key={item} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
                >{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

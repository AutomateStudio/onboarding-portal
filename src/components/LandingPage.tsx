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

/* ─── Static data ─────────────────────────── */
const STATS = [
  { value: 7, suffix: ' días', label: 'Tiempo promedio de lanzamiento' },
  { value: 98, suffix: '%', label: 'Tasa de satisfacción de clientes' },
  { value: 200, suffix: '+', label: 'Tiendas lanzadas en LATAM' },
  { value: 0, suffix: ' líneas', label: 'De código que necesitas saber' },
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

/* ─── Components ──────────────────────────── */
function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let t = 0;
    function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);
    function draw() {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const cols = 14, rows = 10;
      const cw = w / cols, ch = h / rows;
      ctx.strokeStyle = 'rgba(59,130,246,0.13)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= cols; i++) {
        const x = i * cw;
        const wave = Math.sin(t * 0.012 + i * 0.4) * 18;
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const y = j * ch + wave * Math.sin(j * 0.5);
          j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        const y = j * ch;
        const wave = Math.sin(t * 0.009 + j * 0.5) * 14;
        ctx.beginPath();
        for (let i = 0; i <= cols; i++) {
          const x = i * cw + wave * Math.sin(i * 0.4);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      t++;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, count } = useCounter(value);
  return (
    <div style={{ textAlign: 'center', padding: '0 24px' }}>
      <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: -2, lineHeight: 1 }}>
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 8, fontWeight: 400 }}>{label}</div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '24px 0',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>{q}</span>
        <span style={{
          fontSize: 22, color: '#3b82f6', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.3s',
          lineHeight: 1,
        }}>+</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingTop: 16, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main ───────────────────────────────── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s: Record<string, React.CSSProperties> = {
    container: { maxWidth: 1180, margin: '0 auto', padding: '0 40px' },
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#000', color: '#fff', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #000; } ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 3px; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; cursor: pointer; border: none; outline: none; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-ring { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); } 70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(59,130,246,0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); } }
        @media (max-width: 768px) {
          .hero-h1 { font-size: 42px !important; letter-spacing: -1px !important; }
          .hero-p { font-size: 16px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .plans-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .vs-grid { flex-direction: column !important; }
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .container { padding: 0 20px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        padding: '20px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'all 0.4s',
      }}>
        <a href="/" style={{ fontSize: 22, fontWeight: 900, letterSpacing: -1, color: '#fff' }}>automate<span style={{ color: '#3b82f6' }}>.</span></a>
        <nav className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {[['#diseños', 'Diseños'], ['#casos', 'Casos'], ['#precios', 'Precios'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >{label}</a>
          ))}
          <a href="/onboarding" style={{
            padding: '10px 24px', borderRadius: 8,
            background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
            color: '#fff', fontWeight: 600, fontSize: 14,
            transition: 'all 0.3s',
            boxShadow: '0 4px 16px rgba(59,130,246,0.35)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(59,130,246,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(59,130,246,0.35)'; }}
          >Empieza Ahora</a>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', color: '#fff', fontSize: 24,
          alignItems: 'center', justifyContent: 'center',
        }}>{menuOpen ? '✕' : '☰'}</button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}
          >
            {[['#diseños', 'Diseños'], ['#casos', 'Casos'], ['#precios', 'Precios'], ['#faq', 'FAQ']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>{label}</a>
            ))}
            <a href="/disenos.html" onClick={() => setMenuOpen(false)} style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>Ver Diseños</a>
            <a href="/onboarding" onClick={() => setMenuOpen(false)} style={{ padding: '14px 36px', borderRadius: 10, background: '#3b82f6', color: '#fff', fontWeight: 700, fontSize: 18 }}>Empieza Ahora →</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        <HeroGrid />
        <div style={{ position: 'absolute', width: 700, height: 400, bottom: '25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 880 }}>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 50, border: '1px solid rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.08)', marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6', animation: 'pulse-ring 2s infinite' }} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>+200 tiendas lanzadas en LATAM</span>
          </motion.div>

          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 76, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: -3, marginBottom: 28 }}
          >
            Tu tienda Shopify,<br />
            <span style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 50%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>lista en 7 días.</span>
          </motion.h1>

          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 600, margin: '0 auto 44px', fontWeight: 300 }}
          >
            Diseño profesional, apps configuradas y listo para vender — sin escribir una sola línea de código.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="/onboarding" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 36px', borderRadius: 12,
              background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
              color: '#fff', fontWeight: 700, fontSize: 16,
              boxShadow: '0 8px 32px rgba(59,130,246,0.4)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(59,130,246,0.55)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(59,130,246,0.4)'; }}
            >
              Configurar mi tienda →
            </a>
            <a href="/disenos.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 12,
              border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 500, fontSize: 16,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Ver diseños
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            {['★★★★★ 4.9/5', 'Sin contratos', 'Garantía de satisfacción', 'Soporte en español'].map(t => (
              <span key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#3b82f6' }}>✓</span> {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#0a0a0a', padding: '80px 40px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={s.container}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
            {STATS.map((st, i) => (
              <FadeUp key={st.label} delay={i * 0.08}>
                <div style={{ textAlign: 'center', padding: '16px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: -2, lineHeight: 1 }}>
                    <Stat {...st} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ background: '#fff', padding: '120px 40px', color: '#000' }}>
        <div style={s.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>Por qué Automate</span>
              <h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, marginTop: 12, lineHeight: 1.1 }}>No somos una agencia más.</h2>
              <p style={{ fontSize: 18, color: '#666', marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>Somos un sistema de lanzamiento. Velocidad sin sacrificar calidad.</p>
            </div>
          </FadeUp>
          <div className="vs-grid" style={{ display: 'flex', gap: 24, alignItems: 'stretch' }}>
            {/* Traditional */}
            <FadeUp delay={0.1}>
              <div style={{ flex: 1, background: '#f8f8f8', borderRadius: 20, padding: '40px 36px', border: '1px solid #e8e8e8' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#999', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>Agencia Tradicional</div>
                {['2–6 meses de espera', 'Presupuesto opaco', 'Revisiones interminables', 'Sin garantías reales', 'Comunicación lenta', 'Costo elevado oculto'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.06)', fontSize: 15, color: '#666' }}>
                    <span style={{ color: '#ff4444', fontSize: 18 }}>✗</span> {item}
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* VS divider */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 8px' }}>
              <div style={{ background: '#000', color: '#fff', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800 }}>VS</div>
            </div>

            {/* Automate */}
            <FadeUp delay={0.2}>
              <div style={{ flex: 1, background: '#000', borderRadius: 20, padding: '40px 36px', border: '2px solid #3b82f6', boxShadow: '0 0 60px rgba(59,130,246,0.15)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#3b82f6', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>Automate Studio</div>
                {['7 días de entrega garantizados', 'Precio fijo y transparente', 'Proceso guiado y claro', 'Garantía de satisfacción', 'Soporte en tiempo real (ES)', 'Sin costos ocultos'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <span style={{ color: '#3b82f6', fontSize: 18 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: '#fff', padding: '80px 40px 120px', color: '#000' }}>
        <div style={s.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>El proceso</span>
              <h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, marginTop: 12 }}>3 pasos hacia tu tienda.</h2>
            </div>
          </FadeUp>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 36, left: '16%', right: '16%', height: 2, background: 'linear-gradient(to right, #3b82f6, #7c3aed)', opacity: 0.3, pointerEvents: 'none' }} className="nav-links" />
            {STEPS.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.12}>
                <div style={{ background: '#f8f9ff', borderRadius: 20, padding: '36px 32px', border: '1px solid rgba(59,130,246,0.12)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 72, fontWeight: 900, color: 'rgba(59,130,246,0.06)', lineHeight: 1 }}>{step.n}</div>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{step.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#000' }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: '#666', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <a href="/onboarding" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', borderRadius: 12,
                background: '#000', color: '#fff', fontWeight: 700, fontSize: 16, transition: 'all 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1a1a'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#000'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >Empezar ahora — es gratis →</a>
              <p style={{ marginTop: 14, fontSize: 13, color: '#999' }}>Completa el onboarding en menos de 10 minutos</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── DESIGNS MARQUEE ── */}
      <section id="diseños" style={{ background: '#000', padding: '120px 0 0', overflow: 'hidden' }}>
        <div style={{ ...s.container, textAlign: 'center', marginBottom: 60 }}>
          <FadeUp>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>Diseños premium</span>
            <h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, marginTop: 12, color: '#fff' }}>Templates que convierten.</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>Creados con las mejores prácticas de UX y CRO para maximizar ventas.</p>
          </FadeUp>
        </div>
        {/* Marquee rows */}
        {[
          ['Joyería · Lumière', 'Moda · Aura', 'Alimentos · Cosecha', 'Belleza · Aurora', 'Electrónica · Volt', 'Hogar · Haven'],
          ['Deportes · Apex', 'Alimentos · Levain', 'Moda · Elegancia', 'Joyería · Diamante', 'General · Bazaar', 'Hogar · Nordia'],
        ].map((row, ri) => (
          <div key={ri} style={{ overflow: 'hidden', padding: '12px 0', marginBottom: ri === 0 ? 0 : 24 }}>
            <div style={{ display: 'flex', gap: 16, animation: `marquee ${ri === 0 ? 28 : 22}s linear infinite${ri === 1 ? ' reverse' : ''}`, width: 'max-content' }}>
              {[...row, ...row].map((item, j) => (
                <div key={j} style={{
                  padding: '14px 28px', borderRadius: 50, border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap',
                  background: 'rgba(255,255,255,0.04)',
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: '48px 40px 80px' }}>
          <a href="/disenos.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderRadius: 10,
            border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, fontSize: 15, transition: 'all 0.3s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6'; (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >Explorar todos los diseños en el portal →</a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#0a0a0a', padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={s.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>Testimonios</span>
              <h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, marginTop: 12, color: '#fff' }}>Lo que dicen nuestros clientes.</h2>
            </div>
          </FadeUp>
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div style={{ background: '#111', borderRadius: 20, padding: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                    {Array.from({ length: t.stars }).map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: 16 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 24 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="precios" style={{ background: '#000', padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={s.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>Precios</span>
              <h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, marginTop: 12, color: '#fff' }}>Inversión transparente.</h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginTop: 16 }}>Un precio. Todo incluido. Sin sorpresas.</p>
            </div>
          </FadeUp>
          <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.1}>
                <div style={{
                  borderRadius: 20, padding: '40px 32px',
                  background: plan.featured ? 'linear-gradient(180deg, #1a2440 0%, #0d1117 100%)' : '#0a0a0a',
                  border: plan.featured ? '2px solid #3b82f6' : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: plan.featured ? '0 0 60px rgba(59,130,246,0.15)' : 'none',
                  position: 'relative', height: '100%',
                }}>
                  {plan.badge && (
                    <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 16px', borderRadius: '0 0 8px 8px', textTransform: 'uppercase' }}>{plan.badge}</div>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{plan.currency} </span>
                    <span style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: -2 }}>${plan.price}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}> único</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 28, lineHeight: 1.6 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                        <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: 1 }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <a href="/onboarding" style={{
                    display: 'block', textAlign: 'center', padding: '14px', borderRadius: 10,
                    background: plan.featured ? 'linear-gradient(135deg, #3b82f6, #1e40af)' : 'rgba(255,255,255,0.08)',
                    color: '#fff', fontWeight: 600, fontSize: 15, transition: 'all 0.3s',
                    border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >{plan.cta} →</a>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 40, fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>
              ¿Tienes un proyecto especial? <a href="mailto:hola@automatestudio.com" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Hablemos</a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: '#0a0a0a', padding: '120px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ ...s.container, maxWidth: 760 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>FAQ</span>
              <h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, marginTop: 12, color: '#fff' }}>Preguntas frecuentes.</h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div>
              {FAQS.map(faq => <FAQItem key={faq.q} {...faq} />)}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: '#fff', padding: '120px 40px', color: '#000' }}>
        <div style={{ ...s.container, textAlign: 'center' }}>
          <FadeUp>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#3b82f6', textTransform: 'uppercase' }}>¿Listo para lanzar?</span>
            <h2 style={{ fontSize: 56, fontWeight: 900, letterSpacing: -3, marginTop: 16, lineHeight: 1.05 }}>
              Empieza a vender en<br />
              <span style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>internet hoy mismo.</span>
            </h2>
            <p style={{ fontSize: 18, color: '#666', marginTop: 20, maxWidth: 500, margin: '20px auto 0' }}>
              El onboarding toma 10 minutos. Tu tienda estará lista en 7 días.
            </p>
            <div style={{ marginTop: 44, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/onboarding" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 44px', borderRadius: 12,
                background: '#000', color: '#fff', fontWeight: 700, fontSize: 17,
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'; }}
              >
                Configurar mi tienda gratis →
              </a>
              <a href="mailto:hola@automatestudio.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '18px 36px', borderRadius: 12,
                border: '2px solid #e5e5e5', color: '#000', fontWeight: 600, fontSize: 16, transition: 'all 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#000'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e5e5e5'; }}
              >Hablar con el equipo</a>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: '#999' }}>Sin tarjeta de crédito · Sin contratos · Garantía incluida</p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#000', padding: '80px 40px 40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={s.container}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: -1, marginBottom: 16 }}>automate<span style={{ color: '#3b82f6' }}>.</span></div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 260 }}>
                Agencia especializada en lanzamiento de tiendas Shopify para marcas de LATAM. Rápido, profesional y sin complicaciones.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Servicios</div>
              {['Tiendas Shopify', 'Diseño UI/UX', 'Migración', 'SEO E-commerce'].map(item => (
                <a key={item} href="#" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >{item}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Empresa</div>
              {[['#diseños', 'Diseños'], ['#casos', 'Casos de Éxito'], ['#precios', 'Precios'], ['#faq', 'FAQ']].map(([href, label]) => (
                <a key={label} href={href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Contacto</div>
              <a href="mailto:hola@automatestudio.com" style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>hola@automatestudio.com</a>
              <span style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Colombia, LATAM</span>
              <a href="/onboarding" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, padding: '10px 20px', borderRadius: 8, background: '#3b82f6', color: '#fff', fontSize: 13, fontWeight: 600 }}>Iniciar proyecto</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>© 2026 Automate Studio. Todos los derechos reservados.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacidad', 'Términos'].map(item => (
                <a key={item} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
                >{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

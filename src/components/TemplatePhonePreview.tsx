'use client';

import { IndustryTemplate } from '@/constants/industryTemplates';

type Props = { template: IndustryTemplate; storeName?: string };

export function TemplatePhonePreview({ template: t, storeName }: Props) {
  const logoText = storeName ? storeName.toUpperCase().slice(0, 10) : t.nav.logo;

  if (t.id === 'aurora') return <AuroraMobile t={t} logoText={logoText} />;
  if (t.id === 'onyx')   return <OnyxMobile t={t} logoText={logoText} />;
  if (t.id === 'bloom')  return <BloomMobile t={t} logoText={logoText} />;
  if (t.id === 'aura')   return <AuraMobile t={t} logoText={logoText} />;
  if (t.id === 'elegancia') return <EleganciaMobile t={t} logoText={logoText} />;
  if (t.id === 'simetria')  return <SimetriaMobile t={t} logoText={logoText} />;
  return null;
}

type TProps = { t: IndustryTemplate; logoText: string };

function AuroraMobile({ t, logoText }: TProps) {
  return (
    <div style={{ background: '#faf7f2', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ background: '#f0ebe3', height: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5.5, color: '#8a7060', letterSpacing: 1, fontWeight: 600 }}>
        ENVÍO GRATIS
      </div>
      <div style={{ background: '#fff', height: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 9px', borderBottom: '1px solid #ede8e0', flexShrink: 0 }}>
        <span style={{ fontSize: 6.5, fontWeight: 700, letterSpacing: 2.5, color: '#1a1410' }}>{logoText}</span>
        <div style={{ display: 'flex', gap: 7, fontSize: 10, color: '#777' }}>♡ 🛒</div>
      </div>
      <div style={{ height: 110, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={t.heroMobile} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,15,10,0.68) 0%, transparent 52%)' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>Brilla desde<br />adentro.</div>
          <div style={{ marginTop: 6, display: 'inline-block', padding: '3px 10px', background: '#fff', color: '#1a1410', fontSize: 6, fontWeight: 700, borderRadius: 100 }}>Descubrir</div>
        </div>
      </div>
      <div style={{ background: '#fff', padding: '7px 9px', flex: 1 }}>
        {t.products.slice(0, 2).map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '5px 0', borderBottom: '1px solid #f0ede8' }}>
            <div style={{ width: 30, height: 30, background: '#f5f0ea', borderRadius: 5, overflow: 'hidden', flexShrink: 0 }}>
              <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div>
              <div style={{ fontSize: 6.5, color: '#3d3530', fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 6.5, color: '#8a7060', fontWeight: 700 }}>{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnyxMobile({ t, logoText }: TProps) {
  return (
    <div style={{ background: '#1a1512', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'Cormorant Garamond', serif" }}>
      <div style={{ background: '#110e0a', height: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5.5, color: '#b89870', letterSpacing: 2, fontWeight: 600 }}>
        SKINCARE DE LUJO
      </div>
      <div style={{ background: '#1a1512', height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(184,152,112,0.12)', flexShrink: 0 }}>
        <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 4, color: '#f5ede0' }}>{logoText}</span>
      </div>
      <div style={{ height: 110, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={t.heroMobile} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(26,21,18,0.92) 0%, rgba(26,21,18,0.15) 58%)' }} />
        <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: '#f5ede0', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.2, fontFamily: "'Cormorant Garamond', serif" }}>Cuida tu<br />piel con nosotros.</div>
          <div style={{ marginTop: 5, display: 'inline-block', padding: '2px 8px', border: '1px solid rgba(245,237,224,0.4)', color: '#f5ede0', fontSize: 5.5, letterSpacing: 1 }}>Explorar</div>
        </div>
      </div>
      <div style={{ background: '#1a1512', padding: '7px 9px', flex: 1 }}>
        {t.products.slice(0, 2).map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '5px 0', borderBottom: '1px solid rgba(184,152,112,0.1)' }}>
            <div style={{ width: 30, height: 30, background: '#3a3025', borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
              <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div>
              <div style={{ fontSize: 6.5, color: '#c8b898', fontFamily: "'Cormorant Garamond', serif" }}>{p.name}</div>
              <div style={{ fontSize: 6.5, color: '#b89870', fontWeight: 700 }}>{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BloomMobile({ t, logoText }: TProps) {
  const colors = ['#fef4c8', '#f0e8ff'];
  return (
    <div style={{ background: '#fff', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'Raleway', sans-serif" }}>
      <div style={{ background: '#fdf4e8', height: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5.5, color: '#c07830', fontWeight: 700, letterSpacing: 0.5 }}>
        ✨ REGALO GRATIS ✨
      </div>
      <div style={{ background: '#fff', height: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 9px', borderBottom: '1px solid #f0f0f0', flexShrink: 0 }}>
        <span style={{ fontSize: 7.5, fontWeight: 900, letterSpacing: 2, color: '#1a1a1a' }}>{logoText}</span>
        <div style={{ display: 'flex', gap: 6, fontSize: 10, color: '#1a1a1a' }}>🔍 🛒</div>
      </div>
      <div style={{ height: 110, position: 'relative', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={t.heroMobile} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,20,0.48)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: -1.5, lineHeight: 1 }}>belleza</div>
          <div style={{ marginTop: 6, display: 'inline-block', padding: '3px 11px', background: '#fff', color: '#1a1a1a', fontSize: 6, fontWeight: 700, borderRadius: 100 }}>Comprar</div>
        </div>
      </div>
      <div style={{ padding: '7px 7px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, flex: 1, background: '#fff' }}>
        {t.products.slice(0, 2).map((p, i) => (
          <div key={i} style={{ background: colors[i], borderRadius: 8, padding: 6 }}>
            <div style={{ height: 36, borderRadius: 5, overflow: 'hidden', marginBottom: 4 }}>
              <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div style={{ fontSize: 6, color: '#1a1a1a', fontWeight: 700 }}>{p.name}</div>
            <div style={{ fontSize: 6, color: '#c07830', fontWeight: 700 }}>{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuraMobile({ t, logoText }: TProps) {
  return (
    <div style={{ background: '#f8f9fa', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'Montserrat', sans-serif" }}>
      <div style={{ background: '#e3f2fd', height: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, color: '#0d47a1', letterSpacing: 1.5, fontWeight: 800, textTransform: 'uppercase' }}>
        Envío Gratis
      </div>
      <div style={{ background: '#fff', height: 26, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 11px', borderBottom: '2px solid #f0f2f5', flexShrink: 0 }}>
        <span style={{ fontSize: 7.5, fontWeight: 900, letterSpacing: 3, color: '#0d47a1', textTransform: 'uppercase' }}>{logoText}</span>
        <div style={{ display: 'flex', gap: 9, fontSize: 11, color: '#333' }}>♡ 🛒</div>
      </div>
      <div style={{ height: 120, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={t.heroMobile} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,71,161,0.65) 0%, transparent 75%)' }} />
        <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: -0.5 }}>Ropa para tu<br />mejor versión.</div>
          <div style={{ marginTop: 7, display: 'inline-block', padding: '4px 12px', background: '#2196f3', color: '#fff', fontSize: 6.5, fontWeight: 800, borderRadius: 5, letterSpacing: 0.5, textTransform: 'uppercase' }}>Explorar</div>
        </div>
      </div>
      <div style={{ background: '#fff', padding: '10px 11px', flex: 1 }}>
        {t.products.slice(0, 2).map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f0f2f5' }}>
            <div style={{ width: 36, height: 36, background: '#f0f2f5', borderRadius: 6, overflow: 'hidden', flexShrink: 0, border: '1px solid #e8ecf1' }}>
              <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div>
              <div style={{ fontSize: 7, color: '#1a2a3a', fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontSize: 7, color: '#2980b9', fontWeight: 800 }}>{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EleganciaMobile({ t, logoText }: TProps) {
  return (
    <div style={{ background: '#f7f3ed', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'Cormorant Garamond', serif" }}>
      <div style={{ background: '#e5d8ca', height: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, color: '#5a4a3a', letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>
        Premium
      </div>
      <div style={{ background: '#f7f3ed', height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '2px solid #f0e8db', flexShrink: 0 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: '#3a2f25', textTransform: 'uppercase' }}>{logoText}</span>
      </div>
      <div style={{ height: 120, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={t.heroMobile} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(247,243,237,0.92) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}>
          <div style={{ fontSize: 12, color: '#2a1f15', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.25, fontFamily: "'Cormorant Garamond', serif", letterSpacing: -0.5 }}>Sofisticación<br />sin esfuerzo.</div>
          <div style={{ marginTop: 6, display: 'inline-block', padding: '3px 10px', border: '1.5px solid #9b7c5f', color: '#2a1f15', fontSize: 6, letterSpacing: 1.2, fontWeight: 700, textTransform: 'uppercase' }}>Descubrir</div>
        </div>
      </div>
      <div style={{ background: '#f7f3ed', padding: '10px 11px', flex: 1 }}>
        {t.products.slice(0, 2).map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(107,83,68,0.12)' }}>
            <div style={{ width: 36, height: 36, background: '#ede8e1', borderRadius: 5, overflow: 'hidden', flexShrink: 0, border: '1px solid #e0d9ce' }}>
              <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div>
              <div style={{ fontSize: 7, color: '#4a3a30', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 7, color: '#9b7c5f', fontWeight: 800 }}>{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimetriaMobile({ t, logoText }: TProps) {
  const colors = ['#fef4e9', '#e9f5fb'];
  return (
    <div style={{ background: '#fff', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: '#f6f6f6', height: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, color: '#1a1a1a', letterSpacing: 1, fontWeight: 800, textTransform: 'uppercase' }}>
        Envío Gratis
      </div>
      <div style={{ background: '#fff', height: 26, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 11px', borderBottom: '2px solid #f6f6f6', flexShrink: 0 }}>
        <span style={{ fontSize: 8.5, fontWeight: 900, letterSpacing: 2, color: '#1a1a1a', textTransform: 'uppercase' }}>{logoText}</span>
        <div style={{ display: 'flex', gap: 8, fontSize: 11, color: '#1a1a1a' }}>🔍 🛒</div>
      </div>
      <div style={{ height: 128, position: 'relative', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={t.heroMobile} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(220,220,220,0.2)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#1a1a1a', letterSpacing: -1, lineHeight: 1 }}>Crece tu<br />negocio.</div>
          <div style={{ marginTop: 8, display: 'inline-block', padding: '4px 12px', background: '#1a1a1a', color: '#fff', fontSize: 6.5, fontWeight: 800, borderRadius: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Ver Más</div>
        </div>
      </div>
      <div style={{ padding: '9px 9px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flex: 1, background: '#fff' }}>
        {t.products.slice(0, 2).map((p, i) => (
          <div key={i} style={{ background: colors[i], borderRadius: 7, padding: 7 }}>
            <div style={{ height: 48, borderRadius: 5, overflow: 'hidden', marginBottom: 6 }}>
              <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
            <div style={{ fontSize: 6.5, color: '#1a1a1a', fontWeight: 800 }}>{p.name}</div>
            <div style={{ fontSize: 6.5, color: '#333', fontWeight: 700, marginTop: 1 }}>{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

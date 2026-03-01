/**
 * KADENCE BLOCKS VERSION - B2BGuide.tsx
 * B2B Guide page with Kadence-style components
 */

export default function B2BGuideKadence() {
  const chapters = [
    { num: '01', title: 'Fundamentos B2B', desc: 'Entender el ciclo de venta B2B' },
    { num: '02', title: 'CRM para B2B', desc: 'Elegir y configurar tu CRM' },
    { num: '03', title: 'Automatización', desc: 'Automatizar procesos de venta' },
    { num: '04', title: 'Métricas', desc: 'KPIs y análisis de resultados' },
    { num: '05', title: 'Escalabilidad', desc: 'Hacer crecer tu operación' },
  ];

  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', minHeight: '100vh' }}>
      
      {/* Hero */}
      <div style={{ 
        background: 'linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}>
        <span style={{
          display: 'inline-block',
          padding: '8px 16px',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'rgba(255,255,255,0.7)',
        }}>
          📖 Guía Gratuita
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Guía B2B para Pymes
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Aprende a vender más y mejor con nuestra guía completa para empresas B2B.
        </p>
      </div>

      {/* Download CTA */}
      <div style={{ maxWidth: '800px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #d4dce8',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          <span style={{ fontSize: '64px', display: 'block', marginBottom: '16px' }}>📚</span>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332', marginBottom: '8px' }}>
            Descargá la guía completa
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7a8d', marginBottom: '32px' }}>
            50+ páginas con estrategias probadas para hacer crecer tu negocio B2B
          </p>
          
          <form 
            style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email && email.includes('@')) {
                alert('Gracias por tu interés. Te enviaremos la guía a: ' + email);
                e.target.reset();
              } else {
                alert('Por favor, ingresa un email válido');
              }
            }}
          >
            <input 
              name="email"
              type="email" 
              placeholder="Tu email profesional" 
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '1px solid #d4dce8',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              background: '#002B5C',
              color: '#ffffff',
              padding: '14px 40px',
              borderRadius: '8px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}>
              Descargar gratis →
            </button>
          </form>
          
          <p style={{ fontSize: '12px', color: '#6b7a8d', marginTop: '16px' }}>
            🔒 No spam. Solo contenido de valor.
          </p>
        </div>
      </div>

      {/* Chapters */}
      <div style={{ maxWidth: '900px', margin: '80px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', marginBottom: '32px', textAlign: 'center' }}>
          Lo que vas a aprender
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {chapters.map((ch, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '24px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#002B5C',
                background: 'rgba(0,43,92,0.1)',
                padding: '8px 16px',
                borderRadius: '8px',
                minWidth: '60px',
                textAlign: 'center',
              }}>
                {ch.num}
              </span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>{ch.title}</h3>
                <p style={{ fontSize: '13px', color: '#6b7a8d', marginTop: '2px' }}>{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/**
 * KADENCE BLOCKS VERSION - Partners.tsx
 * Partners page with Kadence-style components
 */

export default function PartnersKadence() {
  const partners = [
    { name: 'Mercado Libre', category: 'E-commerce', logo: '🛒' },
    { name: 'Shopify', category: 'E-commerce', logo: '🛍️' },
    { name: 'WhatsApp', category: 'Comunicación', logo: '💬' },
    { name: 'Google', category: 'Ads & Analytics', logo: '🔍' },
    { name: 'Microsoft', category: 'Cloud', logo: '☁️' },
    { name: 'AWS', category: 'Infraestructura', logo: '🖥️' },
  ];

  const benefits = [
    { icon: '💰', title: 'Comisiones competitivas', desc: 'Hasta 30% de comisión porreferencias que convierten.' },
    { icon: '📚', title: 'Capacitación gratuita', desc: 'Acceso a nuestro programa de certificación partner.' },
    { icon: '🎯', title: 'Leads cualificados', desc: 'Te conectamos con empresas que buscan tu expertise.' },
    { icon: '🛠️', title: 'Soporte prioritario', desc: 'Equipo técnico dedicado para resolver tus casos.' },
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
          🤝 Programa de Partners
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
         growincome con nuestra red
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Unite a nuestro programa de partners y generá ingresos extras ofreciendo Clientum.
        </p>
      </div>

      {/* Benefits */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {benefits.map((b, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '16px' }}>{b.icon}</span>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>{b.title}</h3>
              <p style={{ fontSize: '13px', color: '#6b7a8d', lineHeight: 1.5 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '16px' }}>
            Tecnologías que integramos
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7a8d', textAlign: 'center', marginBottom: '48px' }}>
            Clientum se conecta con las herramientas que ya usás.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {partners.map((p, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #d4dce8',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>{p.logo}</span>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>{p.name}</div>
                  <div style={{ fontSize: '13px', color: '#6b7a8d' }}>{p.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ 
        background: 'linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 700 }}>
          ¿Querés convertirte en partner?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
          Completá el formulario y te contactamos para explicarte todos los beneficios.
        </p>
        <div style={{ marginTop: '32px' }}>
          <a href="/contacto" style={{
            backgroundColor: '#ffffff',
            color: '#2b4a7a',
            padding: '14px 40px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Aplicar como partner →
          </a>
        </div>
      </div>

    </div>
  );
}

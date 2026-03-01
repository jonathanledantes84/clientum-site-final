/**
 * KADENCE BLOCKS VERSION - WebDevelopment.tsx
 * Web Development services page with Kadence-style components
 */

export default function WebDevelopmentKadence() {
  const services = [
    { title: 'Sitios Web', desc: 'Institucionales, landing pages y e-commerce', icon: '🌐' },
    { title: 'Tiendas Online', desc: 'E-commerce con pasarelas de pago', icon: '🛒' },
    { title: 'Apps Web', desc: 'Aplicaciones SPA y dashboards', icon: '📱' },
    { title: 'APIs', desc: 'Integraciones y servicios backend', icon: '⚙️' },
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Entendemos tu negocio y objetivos' },
    { step: '02', title: 'Diseño', desc: 'Creamos mockups y prototipos' },
    { step: '03', title: 'Desarrollo', desc: 'Implementamos con las mejores tecnologías' },
    { step: '04', title: 'Lanzamiento', desc: 'Deploy y monitoreo continuo' },
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
          💻 Desarrollo Web
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Transformamos ideas en soluciones digitales
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Desarrollo web a medida para empresas que quieren destacar en el mundo digital.
        </p>
      </div>

      {/* Services */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '48px' }}>
          Nuestros servicios
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {services.map((s, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '32px 24px',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>{s.icon}</span>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '13px', color: '#6b7a8d' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '48px' }}>
            Nuestro proceso
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {process.map((p, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#002B5C',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>{p.step}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '4px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: '#6b7a8d' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', marginBottom: '16px' }}>
          ¿Tenés un proyecto en mente?
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7a8d', marginBottom: '32px' }}>
          Conversemos sobre tu próximo proyecto web.
        </p>
        <a href="/contacto" style={{
          background: '#002B5C',
          color: '#ffffff',
          padding: '14px 40px',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'inline-block',
        }}>
          Solicitar presupuesto →
        </a>
      </div>

    </div>
  );
}

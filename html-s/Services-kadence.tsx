/**
 * KADENCE BLOCKS VERSION - Services.tsx
 * Services page with Kadence-style components
 */

export default function ServicesKadence() {
  const services = [
    { icon: '🗄️', title: 'ERP / CRM', features: ['Migración de datos', 'Configuración personalizada', 'Capacitación del equipo'] },
    { icon: '🛒', title: 'E-commerce', features: ['Catálogo sincronizado', 'Pasarelas de pago', 'Logística integrada'] },
    { icon: '⚙️', title: 'Automatización', features: ['Seguimiento automático', 'Alertas y notificaciones', 'Triggers configurables'] },
    { icon: '📣', title: 'Marketing Digital', features: ['Email marketing', 'SEO / SEM', 'Análisis de campañas'] },
    { icon: '🌐', title: 'Desarrollo Web', features: ['Diseño responsive', 'Performance optimizado', 'SEO técnico'] },
    { icon: '🎨', title: 'Diseño & Comunicación', features: ['Branding integral', 'Diseño UI/UX', 'Material corporativo'] },
  ];

  const process = [
    { num: '01', title: 'Diagnóstico', desc: 'Analizamos tu operación actual e identificamos oportunidades.' },
    { num: '02', title: 'Diseño', desc: 'Proponemos la arquitectura ideal con un plan claro.' },
    { num: '03', title: 'Implementación', desc: 'Configuramos, migramos datos y capacitamos.' },
    { num: '04', title: 'Acompañamiento', desc: 'Soporte continuo y evolución de la plataforma.' },
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
          Servicios
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Soluciones integrales para tu negocio
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '700px', margin: '16px auto 0' }}>
          Desde la estrategia hasta la ejecución, te acompañamos en cada paso de tu transformación digital.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {services.map((service, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}>
              <span style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '56px',
                height: '56px',
                background: 'rgba(43,74,122,0.1)',
                borderRadius: '12px',
                fontSize: '24px',
                marginBottom: '20px',
              }}>
                {service.icon}
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>
                {service.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0' }}>
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', color: '#6b7a8d', fontSize: '13px' }}>
                    <span style={{ color: '#2db87a', fontWeight: 700 }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'rgba(43,74,122,0.1)',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#2b4a7a',
            }}>
              Metodología
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a2332', marginTop: '16px' }}>
              Nuestro proceso de trabajo
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7a8d', marginTop: '16px' }}>
              Un enfoque estructurado que garantiza resultados medibles.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {process.map((step, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #d4dce8',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(43,74,122,0.2)' }}>{step.num}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a2332', marginTop: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7a8d', marginTop: '8px', lineHeight: 1.6 }}>{step.desc}</p>
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
        <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 700 }}>Trabajemos juntos</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
          Contanos tu desafío y diseñamos la solución perfecta para tu empresa.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
          <a href="/contacto" style={{
            backgroundColor: '#ffffff',
            color: '#2b4a7a',
            padding: '14px 40px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Solicitar presupuesto →
          </a>
          <a href="https://wa.me/5492984510883" target="_blank" style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '14px 40px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            WhatsApp directo
          </a>
        </div>
      </div>

    </div>
  );
}

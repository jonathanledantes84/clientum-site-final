/**
 * KADENCE BLOCKS VERSION - Support.tsx
 * Support page with Kadence-style components
 */

export default function SupportKadence() {
  const resources = [
    { title: '📚 Base de Conocimentos', desc: 'Guías paso a paso y tutoriales', count: '50+ artículos' },
    { title: '🎓 Academia Clientum', desc: 'Cursos y certificaciones', count: '12 cursos' },
    { title: '💬 Comunidad', desc: 'Foro de usuarios y mejores prácticas', count: '500+ miembros' },
    { title: '🎫 Tickets', desc: 'Soporte técnico especializado', count: '24/7' },
  ];

  const faqs = [
    { q: '¿Cómo cambio mi plan?', a: 'Podés cambiar tu plan desde Configuración > Suscripción. Los cambios se aplican el mes siguiente.' },
    { q: '¿Puedo exportar mis datos?', a: 'Sí, desde Configuración > Exportar podés descargar todos tus datos en formato CSV o JSON.' },
    { q: '¿Cómo integro con Mercado Libre?', a: 'Ve a Configuración > Integraciones > Mercado Libre y sigue los pasos de autorización.' },
    { q: '¿Qué pasa si excedo mi límite?', a: 'Te notificamos antes y podés upgradear tu plan o comprar créditos adicionales.' },
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
          🎧 Soporte
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          ¿Cómo podemos ayudarte?
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Tenemos múltiples canales de soporte para resolver tus dudas.
        </p>
      </div>

      {/* Quick Actions */}
      <div style={{ maxWidth: '1200px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {resources.map((r, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{r.title.split(' ')[0]}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#1a2332', marginBottom: '4px' }}>
                {r.title.split(' ').slice(1).join(' ')}
              </h3>
              <p style={{ fontSize: '12px', color: '#6b7a8d', marginBottom: '8px' }}>{r.desc}</p>
              <span style={{ fontSize: '11px', color: '#2b4a7a', fontWeight: 500 }}>{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <div style={{ maxWidth: '900px', margin: '80px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '32px' }}>
          Contactanos directamente
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <a href="https://wa.me/5492984510883" target="_blank" style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            textDecoration: 'none',
          }}>
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>💬</span>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>WhatsApp</h3>
            <p style={{ fontSize: '13px', color: '#6b7a8d' }}>Respuesta inmediata</p>
          </a>
          
          <a href="mailto:soporte@clientum.com" style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            textDecoration: 'none',
          }}>
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>✉️</span>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>Email</h3>
            <p style={{ fontSize: '13px', color: '#6b7a8d' }}>respuesta en 24hs</p>
          </a>
          
          <a href="/academia" style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            textDecoration: 'none',
          }}>
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>🎓</span>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>Academia</h3>
            <p style={{ fontSize: '13px', color: '#6b7a8d' }}>Cursos gratuitos</p>
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '32px' }}>
            Preguntas frecuentes
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #d4dce8',
                borderRadius: '12px',
                padding: '20px 24px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#1a2332' }}>{faq.q}</h4>
                  <span style={{ color: '#6b7a8d' }}>▼</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

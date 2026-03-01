/**
 * KADENCE BLOCKS VERSION - Webinar.tsx
 * Webinar page with Kadence-style components
 */

export default function WebinarKadence() {
  const upcomingWebinars = [
    { title: 'CRM para Pymes: Guía 2025', date: '25 de Febrero', time: '16:00 hs', speaker: 'Emiliano C.', attendees: 120 },
    { title: 'Automatización de Ventas', date: '4 de Marzo', time: '16:00 hs', speaker: 'Martin S.', attendees: 85 },
    { title: 'E-commerce con Clientum', date: '11 de Marzo', time: '16:00 hs', speaker: 'Laura G.', attendees: 95 },
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
          🎙️ Webinars
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Aprende con nuestros expertos
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Talleres gratuitos en vivo sobre ventas, CRM y growth para Pymes.
        </p>
      </div>

      {/* Featured */}
      <div style={{ maxWidth: '900px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #d4dce8',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(43,74,122,0.1), rgba(74,111,165,0.05))',
            padding: '48px',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '64px' }}>🎯</span>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332', marginTop: '16px' }}>
              Próximo Webinar
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7a8d', marginTop: '8px' }}>
              CRM para Pymes: Guía completa 2025
            </p>
          </div>
          <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', borderTop: '1px solid #d4dce8' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#6b7a8d', marginBottom: '4px' }}>Fecha</div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>25 de Febrero</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#6b7a8d', marginBottom: '4px' }}>Hora</div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>16:00 hs (ARG)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: '#6b7a8d', marginBottom: '4px' }}>Inscriptos</div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>120 personas</div>
            </div>
          </div>
          <div style={{ padding: '0 32px 32px' }}>
            <a href="/contacto" style={{
              display: 'block',
              background: '#2b4a7a',
              color: '#ffffff',
              padding: '14px 40px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}>
              Registrarse gratis →
            </a>
          </div>
        </div>
      </div>

      {/* Upcoming */}
      <div style={{ maxWidth: '900px', margin: '80px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', marginBottom: '32px', textAlign: 'center' }}>
          Próximos webinars
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {upcomingWebinars.map((w, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>{w.title}</h3>
                <p style={{ fontSize: '13px', color: '#6b7a8d', marginTop: '4px' }}>
                  {w.date} · {w.time} · Por {w.speaker}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#6b7a8d' }}>{w.attendees} inscriptos</span>
                <a href="/contacto" style={{
                  background: 'transparent',
                  color: '#2b4a7a',
                  border: '1px solid #d4dce8',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}>
                  Registrarse
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/**
 * KADENCE BLOCKS VERSION - Careers.tsx
 * Careers/Jobs page with Kadence-style components
 */

export default function CareersKadence() {
  const jobs = [
    { title: 'Desarrollador Fullstack', type: 'Remoto', location: 'Argentina', team: 'Producto', icon: '💻' },
    { title: 'Especialista en Ventas', type: 'Híbrido', location: 'Buenos Aires', team: 'Ventas', icon: '📊' },
    { title: 'Diseñador UX/UI', type: 'Remoto', location: 'LatAm', team: 'Producto', icon: '🎨' },
    { title: 'Customer Success Manager', type: 'Presencial', location: 'Córdoba', team: 'CX', icon: '🤝' },
    { title: 'Analista de Datos', type: 'Remoto', location: 'Argentina', team: 'Analytics', icon: '📈' },
  ];

  const benefits = [
    { icon: '🏠', title: 'Trabajo remoto', desc: 'Modalidad 100% remota o híbrida' },
    { icon: '🕐', title: 'Horarios flexibles', desc: 'Organizá tu tiempo como prefieras' },
    { icon: '📚', title: 'Learning budget', desc: '$500 USD anuales para cursos' },
    { icon: '🏥', title: 'Cobertura médica', desc: 'Plan de salud premium' },
    { icon: '💼', title: 'Equipo propio', desc: 'MacBook y accesorios' },
    { icon: '🎉', title: 'Team building', desc: 'Encuentros presenciales mensuales' },
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
          💼 Trabaja con Nosotros
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Unite al equipo Clientum
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Buscamos personas talentosas para construir el futuro de la gestión empresarial en LatAm.
        </p>
      </div>

      {/* Benefits */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '48px' }}>
          ¿Por qué trabajar en Clientum?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {benefits.map((b, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}>
              <span style={{ fontSize: '28px', flexShrink: 0 }}>{b.icon}</span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332' }}>{b.title}</h3>
                <p style={{ fontSize: '13px', color: '#6b7a8d', marginTop: '4px' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '16px' }}>
            Positions disponibles
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7a8d', textAlign: 'center', marginBottom: '48px' }}>
            Encontrá tu próximo desafío profesional.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jobs.map((job, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #d4dce8',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '32px' }}>{job.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a2332' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', marginTop: '4px', fontSize: '13px', color: '#6b7a8d' }}>
                      <span>🏢 {job.team}</span>
                      <span>📍 {job.location}</span>
                      <span>⏱ {job.type}</span>
                    </div>
                  </div>
                </div>
                <a href="/contacto" style={{
                  backgroundColor: 'transparent',
                  color: '#2b4a7a',
                  border: '1px solid #d4dce8',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '14px',
                }}>
                  Aplicar →
                </a>
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
          ¿No Encontrás tu lugar?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
          Envianos tu CV y te contactamos cuando haya una posición que coincida con tu perfil.
        </p>
        <div style={{ marginTop: '32px' }}>
          <a href="mailto:clientumlatam@proton.me" style={{
            backgroundColor: '#ffffff',
            color: '#2b4a7a',
            padding: '14px 40px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Enviar CV →
          </a>
        </div>
      </div>

    </div>
  );
}

/**
 * KADENCE BLOCKS VERSION - CaseStudies.tsx
 * Case Studies page with Kadence-style components
 */

export default function CaseStudiesKadence() {
  const cases = [
    { 
      company: 'Retail Plus', 
      industry: 'Retail',
      challenge: 'Multiplicar ventas online sin aumentar equipo',
      result: '+45% ventas en 6 meses',
      icon: '🛒',
      quote: 'Clientum nos permitió duplicar operaciones sin contratar más personal.'
    },
    { 
      company: 'TechBA', 
      industry: 'Tecnología',
      challenge: 'Centralizar datos de múltiples fuentes',
      result: '100% datos unificados en tiempo real',
      icon: '💻',
      quote: 'Ahora tomamos decisiones basadas en datos confiables.'
    },
    { 
      company: 'Constructora Norte', 
      industry: 'Construcción',
      challenge: 'Control de presupuestos y subcontractors',
      result: '-30% costos operativos',
      icon: '🏗️',
      quote: 'El control de obra es ahora preciso y transparente.'
    },
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
          📊 Casos de Éxito
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          transformaciones Reales
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Empresas que confiaron en Clientum y lograron resultados medibles.
        </p>
      </div>

      {/* Cases */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {cases.map((c, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(43,74,122,0.1), rgba(74,111,165,0.05))',
                padding: '48px',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '64px' }}>{c.icon}</span>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(43,74,122,0.1)',
                  color: '#2b4a7a',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  marginBottom: '16px',
                }}>
                  {c.industry}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a2332', marginBottom: '8px' }}>
                  {c.company}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7a8d', marginBottom: '16px', lineHeight: 1.6 }}>
                  <strong>Desafío:</strong> {c.challenge}
                </p>
                <div style={{
                  background: 'rgba(45,184,122,0.1)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '16px',
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#2db87a' }}>{c.result}</div>
                </div>
                <p style={{ fontSize: '14px', color: '#6b7a8d', fontStyle: 'italic', lineHeight: 1.6 }}>
                  "{c.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332' }}>
          ¿Querés ser el próximo caso de éxito?
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7a8d', marginTop: '12px', maxWidth: '400px', margin: '12px auto 0' }}>
          Agendá una demo y descubrí cómo podemos ayudarte.
        </p>
        <div style={{ marginTop: '24px' }}>
          <a href="/contacto" style={{
            backgroundColor: '#2b4a7a',
            color: '#ffffff',
            padding: '14px 40px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Solicitar demo →
          </a>
        </div>
      </div>

    </div>
  );
}

/**
 * KADENCE BLOCKS VERSION - Testimonials.tsx
 * Testimonials page with Kadence-style components
 */

export default function TestimonialsKadence() {
  const testimonials = [
    { name: 'Martín Rodriguez', company: 'Retail Plus', text: 'Desde que usamos Clientum, nuestras ventas online aumentaron un 45%. La integración con Mercado Libre es impecable.', role: 'Director Comercial', avatar: '👨‍💼', rating: 5 },
    { name: 'Laura Gómez', company: 'TechBA', text: 'La migración fue sorprendentemente rápida. En 2 semanas ya estábamos operando al 100%.', role: 'CEO', avatar: '👩‍💼', rating: 5 },
    { name: 'Carlos Mendoza', company: 'Constructora Norte', text: 'Pudimos unificar todas nuestras áreas en una sola plataforma. El soporte siempre está disponible.', role: 'Gerente de Operaciones', avatar: '👨‍🔧', rating: 5 },
    { name: 'Ana Fernández', company: 'GastroNet', text: 'Desde el control de stock hasta las comandas, todo fluye. Nuestro restaurant es más eficiente.', role: 'Fundadora', avatar: '👩‍🍳', rating: 5 },
    { name: 'Diego Pérez', company: 'Servicios Digitales', text: 'El CRM más completo para Pymes. Relación precio-calidad excelente.', role: 'Director', avatar: '👨‍💻', rating: 5 },
    { name: 'María López', company: 'AutoSur', text: 'Pudimos automatizar todo nuestro seguimiento de clientes. El equipo ahora se focaliza en vender.', role: 'Jefa de Ventas', avatar: '👩‍💼', rating: 5 },
  ];

  const stats = [
    { value: '500+', label: 'Empresas' },
    { value: '98%', label: 'Satisfacción' },
    { value: '15+', label: 'Años' },
    { value: '24/7', label: 'Soporte' },
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
          ⭐ Testimonios
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Lo que dicen nuestros clientes
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Más de 500 empresas confían en Clientum para gestionar su negocio.
        </p>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: '1000px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          background: '#ffffff',
          border: '1px solid #d4dce8',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ padding: '32px', textAlign: 'center', borderRight: idx < 3 ? '1px solid #d4dce8' : 'none' }}>
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#2b4a7a' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#6b7a8d', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#f59e0b', fontSize: '16px' }}>⭐</span>
                ))}
              </div>
              <p style={{ fontSize: '15px', color: '#1a2332', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #d4dce8', paddingTop: '16px' }}>
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '48px', 
                  height: '48px', 
                  background: 'rgba(43,74,122,0.1)', 
                  borderRadius: '50%',
                  fontSize: '20px',
                }}>
                  {t.avatar}
                </span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a2332' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: '#6b7a8d' }}>{t.role} @ {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ 
        background: 'linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 700 }}>
          ¿Querés ser el próximo éxito?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
          Unite a las +500 empresas que ya transformaron su negocio con Clientum.
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
            Solicitar demo gratuita →
          </a>
        </div>
      </div>

    </div>
  );
}

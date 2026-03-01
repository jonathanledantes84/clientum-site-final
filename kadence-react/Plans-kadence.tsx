/**
 * KADENCE BLOCKS VERSION - Plans.tsx
 * Pricing page with Kadence-style components
 */

export default function PlansKadence() {
  const planes = [
    {
      nombre: "CLIENTUM START",
      precio: "$720.000",
      periodo: "anual",
      destacado: false,
      caracteristicas: [
        "Publicación destacada en resultados",
        "Visualización en mapa",
        "Banner rotativo en búsquedas",
        "Ficha completa de empresa",
        "Logo, fotos y video",
        "75% OFF en sitio web institucional"
      ]
    },
    {
      nombre: "CLIENTUM PRO",
      precio: "$900.000",
      periodo: "anual",
      destacado: true,
      caracteristicas: [
        "Todo lo del plan START",
        "Banner destacado premium",
        "Mayor visibilidad",
        "Google Ads - Publicidad",
        "Optimización continua",
        "Reportes mensuales",
        "100% OFF en sitio web institucional"
      ]
    },
    {
      nombre: "CLIENTUM PERFORMANCE",
      precio: "$200.000",
      periodo: "mensual",
      destacado: false,
      caracteristicas: [
        "Campañas de Google Ads optimizadas",
        "Posicionamiento estratégico",
        "Landing page propia",
        "Formularios integrados",
        "Leads directos al CRM",
        "Reportes avanzados"
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', minHeight: '100vh' }}>
      
      {/* Hero */}
      <div style={{ 
        background: 'linear-gradient(135deg, #001529 0%, #002B5C 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
          Planes CLIENTUM
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
          Soluciones flexibles adaptadas a PyMEs reales. Elegí el plan que mejor se adapte a tu negocio.
        </p>
      </div>

      {/* Benefits Strip */}
      <div style={{ maxWidth: '1200px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          background: '#f5f7fa', 
          borderRadius: '16px', 
          padding: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {[
            { icon: '✓', text: '4 cuotas sin interés con débito' },
            { icon: '✓', text: '10% descuento pago anual' },
            { icon: '✓', text: 'Gestión profesional' },
            { icon: '✓', text: 'Soporte continuo' },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#4A90E2', fontWeight: 700 }}>{item.icon}</span>
              <span style={{ fontSize: '14px', color: '#6b7a8d' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Plans Grid */}
      <div style={{ maxWidth: '1200px', margin: '48px auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {planes.map((plan, index) => (
            <div key={index} style={{
              background: plan.destacado 
                ? 'linear-gradient(135deg, #002B5C 0%, #4A90E2 100%)' 
                : '#ffffff',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: plan.destacado 
                ? '0 20px 40px rgba(0,43,92,0.3)' 
                : '0 4px 16px rgba(0,0,0,0.08)',
              transform: plan.destacado ? 'scale(1.05)' : 'scale(1)',
              position: 'relative',
            }}>
              {plan.destacado && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  background: '#fbbf24',
                  color: '#000',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}>
                  ⭐ Más Popular
                </div>
              )}
              
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 700, 
                color: plan.destacado ? '#ffffff' : '#002B5C',
                marginBottom: '8px',
              }}>
                {plan.nombre}
              </h3>
              
              <p style={{ 
                fontSize: '14px', 
                color: plan.destacado ? 'rgba(255,255,255,0.8)' : '#6b7a8d',
                marginBottom: '24px',
              }}>
                {plan.destacado ? 'Máxima visibilidad y resultados' : 'Ideal para comenzar'}
              </p>
              
              <div style={{ marginBottom: '24px' }}>
                <span style={{ 
                  fontSize: '40px', 
                  fontWeight: 800, 
                  color: plan.destacado ? '#ffffff' : '#002B5C',
                }}>
                  {plan.precio}
                </span>
                <span style={{ 
                  fontSize: '14px', 
                  color: plan.destacado ? 'rgba(255,255,255,0.8)' : '#6b7a8d',
                  marginLeft: '8px',
                }}>
                  /{plan.periodo}
                </span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {plan.caracteristicas.map((carac, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '8px', 
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: plan.destacado ? 'rgba(255,255,255,0.9)' : '#6b7a8d',
                  }}>
                    <span style={{ color: plan.destacado ? '#4ade80' : '#4A90E2', fontWeight: 700 }}>✓</span>
                    {carac}
                  </li>
                ))}
              </ul>
              
              <a href="/contacto" style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px 24px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                background: plan.destacado ? '#ffffff' : '#4A90E2',
                color: plan.destacado ? '#002B5C' : '#ffffff',
              }}>
                Contratar ahora →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div style={{ maxWidth: '800px', margin: '0 auto 48px', padding: '0 24px' }}>
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '16px', 
          padding: '32px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#002B5C', marginBottom: '24px' }}>
            Formas de Pago
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
            {['Transferencia', 'Débito automático', 'Mercado Pago', 'Tarjetas', 'Pagos electrónicos'].map((method, idx) => (
              <div key={idx} style={{ padding: '16px', borderRadius: '8px', background: '#f5f7fa' }}>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>{method}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ 
          background: '#f5f7fa', 
          borderRadius: '24px', 
          padding: '48px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#002B5C', marginBottom: '16px' }}>
            ¿Tenés dudas sobre qué plan elegir?
          </h3>
          <p style={{ fontSize: '16px', color: '#6b7a8d', marginBottom: '24px' }}>
            Dejanos tu mensaje y te asesoramos sin compromiso
          </p>
          <a href="/contacto" style={{
            display: 'inline-block',
            padding: '14px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            background: '#4A90E2',
            color: '#ffffff',
          }}>
            Quiero más info →
          </a>
        </div>
      </div>

    </div>
  );
}

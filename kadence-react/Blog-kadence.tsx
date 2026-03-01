/**
 * KADENCE BLOCKS VERSION - Blog.tsx
 * Blog page with Kadence-style components
 */

export default function BlogKadence() {
  const posts = [
    { category: 'Transformación Digital', title: '5 Claves para Digitalizar tu PyME en 2025', desc: 'Estrategias esenciales para llevar tu empresa al siguiente nivel.', icon: '🚀', date: '2025-02-10', readTime: '5 min' },
    { category: 'Tecnología', title: 'CRM vs ERP: ¿Cuál Necesita tu Empresa?', desc: 'Entendé las diferencias y elegí la solución correcta.', icon: '💻', date: '2025-02-05', readTime: '7 min' },
    { category: 'Automatización', title: 'Automatización Comercial: Guía Completa', desc: 'Cómo implementar automatizaciones que ahorran tiempo.', icon: '⚙️', date: '2025-01-28', readTime: '8 min' },
    { category: 'Marketing', title: 'Marketing Digital para PyMEs Argentinas', desc: 'Estrategias efectivas para potenciar tu presencia online.', icon: '📣', date: '2025-01-20', readTime: '6 min' },
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
          📖 Centro de Recursos
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Blog & Recursos
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Guías prácticas, tendencias y estrategias para potenciar tu negocio.
        </p>
      </div>

      {/* Featured Post */}
      <div style={{ maxWidth: '1200px', margin: '-48px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #d4dce8',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(43,74,122,0.1), rgba(74,111,165,0.05))',
            padding: '48px',
          }}>
            <span style={{ fontSize: '80px' }}>🚀</span>
          </div>
          <div style={{ padding: '32px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'rgba(43,74,122,0.1)',
              color: '#2b4a7a',
              fontSize: '12px',
              fontWeight: 600,
              borderRadius: '9999px',
              marginBottom: '16px',
              width: 'fit-content',
            }}>
              Transformación Digital
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332', marginBottom: '12px' }}>
              5 Claves para Digitalizar tu PyME en 2025
            </h2>
            <p style={{ color: '#6b7a8d', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
              Descubrí las estrategias esenciales para llevar tu empresa al siguiente nivel digital.
            </p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#6b7a8d', marginBottom: '24px' }}>
              <span>⏱ {posts[0].readTime}</span>
              <span>{posts[0].date}</span>
            </div>
            <a href="#" style={{
              backgroundColor: '#2b4a7a',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              width: 'fit-content',
            }}>
              Leer artículo →
            </a>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: '1200px', margin: '48px auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {posts.slice(1).map((post, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(43,74,122,0.08), rgba(74,111,165,0.05))',
              }}>
                <span style={{ fontSize: '48px' }}>{post.icon}</span>
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(43,74,122,0.1)',
                  color: '#2b4a7a',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  marginBottom: '12px',
                }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '8px', lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7a8d', lineHeight: 1.5, marginBottom: '16px' }}>
                  {post.desc}
                </p>
                <div style={{ borderTop: '1px solid #d4dce8', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#6b7a8d' }}>⏱ {post.readTime} · {post.date}</span>
                  <a href="#" style={{ fontSize: '14px', color: '#2b4a7a', fontWeight: 500 }}>Leer →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div style={{ 
        background: 'linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700 }}>
          Recibí contenido exclusivo en tu inbox
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginTop: '16px', maxWidth: '400px', margin: '16px auto 0' }}>
          Sumate a +2.000 profesionales que reciben nuestras guías semanales.
        </p>
        <form style={{ marginTop: '24px', display: 'flex', gap: '12px', maxWidth: '400px', margin: '24px auto 0', justifyContent: 'center' }}>
          <input type="email" placeholder="tu@email.com" style={{
            flex: 1,
            minWidth: '200px',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.1)',
            color: '#ffffff',
            fontSize: '14px',
          }} />
          <button type="submit" style={{
            backgroundColor: '#ffffff',
            color: '#2b4a7a',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            padding: '12px 24px',
            cursor: 'pointer',
          }}>
            Suscribirme
          </button>
        </form>
      </div>

    </div>
  );
}

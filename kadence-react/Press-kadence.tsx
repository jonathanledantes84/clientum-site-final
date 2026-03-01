/**
 * KADENCE BLOCKS VERSION - Press.tsx
 * Press/Media page with Kadence-style components
 */

export default function PressKadence() {
  const articles = [
    { title: 'Clientum lanza nueva versión de su CRM para Pymes', source: 'El Cronista', date: '2025-02-15', category: 'Producto' },
    { title: 'Cómo las Pymes argentinas están digitalizando sus ventas', source: 'La Nación', date: '2025-01-28', category: 'Mercado' },
    { title: 'Clientum recibe inversión para expandirse en LatAm', source: 'Bloomberg', date: '2025-01-10', category: 'Empresa' },
    { title: '5 herramientas esenciales para comercio electrónico', source: 'Infobae', date: '2024-12-20', category: 'Guía' },
  ];

  const mentions = ['📰', '📊', '📡', '🎙️', '📺', '📖'];

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
          📰 Prensa
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Clientum en los medios
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Enterate de las últimas noticias y apariciones de Clientum en medios        </p>
.
      </div>

      {/* Mentions */}
      <div style={{ background: '#f5f7fa', padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#6b7a8d', marginBottom: '24px' }}>Mencionado en</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', opacity: 0.6 }}>
          {mentions.map((m, i) => (
            <span key={i} style={{ fontSize: '32px' }}>{m}</span>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', marginBottom: '32px' }}>
          Últimas noticias
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {articles.map((article, idx) => (
            <a key={idx} href="#" style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              padding: '24px',
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(43,74,122,0.1)',
                  color: '#2b4a7a',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  marginBottom: '8px',
                }}>
                  {article.category}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '4px' }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7a8d' }}>
                  {article.source} · {article.date}
                </p>
              </div>
              <span style={{ fontSize: '20px', color: '#6b7a8d' }}>→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div style={{ 
        background: 'linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700 }}>
          ¿Sos periodista?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginTop: '16px', maxWidth: '400px', margin: '16px auto 0' }}>
          Contactanos para entrevistas, información o recursos gráficos.
        </p>
        <div style={{ marginTop: '24px' }}>
          <a href="mailto:prensa@clientum.com" style={{
            backgroundColor: '#ffffff',
            color: '#2b4a7a',
            padding: '14px 40px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Contactar Prensa →
          </a>
        </div>
      </div>

    </div>
  );
}

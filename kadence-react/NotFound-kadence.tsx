/**
 * KADENCE BLOCKS VERSION - NotFound.tsx
 * 404 Not Found page with Kadence-style components
 */

export default function NotFoundKadence() {
  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Main Content */}
      <div style={{ 
        flex: 1,
        background: 'linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          fontSize: '96px',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.2)',
          lineHeight: 1,
        }}>
          404
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '36px', fontWeight: 700, marginTop: '24px' }}>
          Página no encontrada
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '400px', margin: '16px auto 0' }}>
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        
        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/" style={{
            background: '#ffffff',
            color: '#002B5C',
            padding: '14px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            ← Volver al inicio
          </a>
          <a href="/contacto" style={{
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '14px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Contactar soporte
          </a>
        </div>
      </div>

    </div>
  );
}

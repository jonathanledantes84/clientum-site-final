/**
 * KADENCE BLOCKS VERSION - ThankYou.tsx
 * Thank You page with Kadence-style components
 */

export default function ThankYouKadence() {
  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Content */}
      <div style={{ 
        maxWidth: '600px', 
        padding: '80px 24px', 
        textAlign: 'center',
      }}>
        {/* Success Icon */}
        <div style={{ 
          width: '100px', 
          height: '100px', 
          background: 'rgba(45,184,122,0.1)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0 auto 32px',
          fontSize: '48px',
        }}>
          ✅
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#1a2332', marginBottom: '16px' }}>
          ¡Mensaje enviado!
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '18px', color: '#6b7a8d', lineHeight: 1.7, marginBottom: '32px' }}>
          Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá en menos de 2 horas durante horario comercial.
        </p>

        {/* What's Next */}
        <div style={{ 
          background: '#f5f7fa', 
          borderRadius: '16px', 
          padding: '32px',
          marginBottom: '32px',
          textAlign: 'left',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', marginBottom: '16px' }}>
            ¿Qué sigue?
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#6b7a8d' }}>
              <span style={{ color: '#2db87a', fontWeight: 700 }}>✓</span>
              <span>Recibirás un email de confirmación en tu bandeja de entrada</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#6b7a8d' }}>
              <span style={{ color: '#2db87a', fontWeight: 700 }}>✓</span>
              <span>Un asesor comercial te contactará para agendar tu demo</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#6b7a8d' }}>
              <span style={{ color: '#2db87a', fontWeight: 700 }}>✓</span>
              <span>Te enviaremos información relevante sobre Clientum</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ fontSize: '14px', color: '#6b7a8d', marginBottom: '32px' }}>
          <p>¿Prefieres comunicarte inmediatamente?</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '16px' }}>
            <a href="https://wa.me/5492984510883" target="_blank" style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#2b4a7a', textDecoration: 'none', fontWeight: 500 
            }}>
              💬 WhatsApp
            </a>
            <a href="tel:+5492984510883" style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#2b4a7a', textDecoration: 'none', fontWeight: 500 
            }}>
              📞 Llamar ahora
            </a>
          </div>
        </div>

        {/* CTA to Home */}
        <a href="/" style={{
          display: 'inline-block',
          background: '#2b4a7a',
          color: '#ffffff',
          padding: '14px 40px',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          ← Volver al inicio
        </a>
      </div>

    </div>
  );
}

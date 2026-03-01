/**
 * KADENCE BLOCKS VERSION - Contact.tsx
 * Contact page with Kadence-style components
 */

export default function ContactKadence() {
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
          Hablemos
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Contactanos
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Solicita una demo personalizada o consultanos cualquier duda sobre Clientum.
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px' }}>
          
          {/* Form */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #d4dce8',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332' }}>Solicitar Demo</h2>
            <p style={{ fontSize: '14px', color: '#6b7a8d', marginTop: '8px' }}>Completa el formulario y elegí cómo contactarnos.</p>
            
            <form style={{ marginTop: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>Nombre *</label>
                  <input type="text" placeholder="Tu nombre completo" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>Empresa</label>
                  <input type="text" placeholder="Nombre de tu empresa" style={inputStyle} />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>Email *</label>
                  <input type="email" placeholder="tu@empresa.com.ar" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>Teléfono</label>
                  <input type="tel" placeholder="+54 11 1234-5678" style={inputStyle} />
                </div>
              </div>
              
              <div style={{ marginTop: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>Mensaje *</label>
                <textarea placeholder="Cuéntanos qué necesitas..." rows={5} style={{ ...inputStyle, height: 'auto', padding: '12px 16px' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                <a href="https://wa.me/5492984510883" target="_blank" style={primaryButtonStyle}>
                  💬 Enviar por WhatsApp
                </a>
                <a href="mailto:clientumlatam@proton.me" style={outlineButtonStyle}>
                  ✉️ Enviar por Email
                </a>
              </div>
            </form>
          </div>
          
          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Contact Info */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a2332' }}>Información de Contacto</h3>
              
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={iconBoxStyle}>✉️</span>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7a8d' }}>Email</div>
                    <a href="mailto:clientumlatam@proton.me" style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332', textDecoration: 'none' }}>clientumlatam@proton.me</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={iconBoxStyle}>📱</span>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7a8d' }}>WhatsApp</div>
                    <a href="tel:+5492984510883" style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332', textDecoration: 'none' }}>+54 9 298 4510883</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={iconBoxStyle}>📍</span>
                  <div>
                    <div style={{ fontSize: '12px', color: '#6b7a8d' }}>Ubicación</div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>Argentina</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a2332' }}>¿Por qué elegirnos?</h3>
              
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ ...iconBoxStyle, width: '32px', height: '32px', fontSize: '14px' }}>⏱</span>
                  <span style={{ fontSize: '14px', color: '#6b7a8d' }}>Respondemos en menos de 2hs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ ...iconBoxStyle, width: '32px', height: '32px', fontSize: '14px' }}>🛡️</span>
                  <span style={{ fontSize: '14px', color: '#6b7a8d' }}>Demo sin compromiso</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ ...iconBoxStyle, width: '32px', height: '32px', fontSize: '14px' }}>→</span>
                  <span style={{ fontSize: '14px', color: '#6b7a8d' }}>Implementación en 7 días</span>
                </div>
              </div>
            </div>
            
            {/* Guarantee */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(43,74,122,0.05), rgba(74,111,165,0.05))',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2332' }}>🔒 30 días de garantía</p>
              <p style={{ fontSize: '12px', color: '#6b7a8d', marginTop: '4px' }}>Satisfacción garantizada o devolución total</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: '44px',
  padding: '0 16px',
  border: '1px solid #d4dce8',
  borderRadius: '8px',
  fontSize: '14px',
  background: '#f5f7fa',
  color: '#1a2332',
};

const primaryButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  backgroundColor: '#2b4a7a',
  color: '#ffffff',
  borderRadius: '8px',
  fontWeight: 600,
  padding: '14px 24px',
  textDecoration: 'none',
  boxShadow: '0 8px 32px rgba(43,74,122,0.25)',
};

const outlineButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  backgroundColor: 'transparent',
  color: '#2b4a7a',
  border: '1px solid #d4dce8',
  borderRadius: '8px',
  fontWeight: 600,
  padding: '14px 24px',
  textDecoration: 'none',
};

const iconBoxStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  background: 'rgba(43,74,122,0.1)',
  borderRadius: '10px',
  fontSize: '18px',
  flexShrink: 0,
};

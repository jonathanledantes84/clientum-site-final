/**
 * KADENCE BLOCKS VERSION - FAQ.tsx
 * FAQ page with Kadence-style accordion components
 */

export default function FAQKadence() {
  const faqs = [
    { q: '¿Qué es Clientum CRM?', a: 'Clientum es una plataforma integral de gestión empresarial que combina ERP, CRM, ventas y operaciones en una única solución cloud-native diseñada para Pymes latinoamericanas.' },
    { q: '¿Cuánto cuesta la implementación?', a: 'El precio depende del tamaño de tu empresa y los módulos que necesites. Ofrecemos planes desde $200.000/año con implementación gratuita y capacitación incluida.' },
    { q: '¿Cuánto tiempo tarda la implementación?', a: 'La implementación típica toma entre 7 y 30 días, dependiendo de la complejidad de tu operación y la cantidad de datos a migrar.' },
    { q: '¿Puedo integrar con otros sistemas?', a: 'Sí, Clientum se integra con Mercado Libre, Shopify, WhatsApp API, bancos, sistemas contables y más mediante API REST y conectores nativos.' },
    { q: '¿Qué incluye el soporte?', a: 'Soporte técnico por email, chat y WhatsApp, capacitación inicial, actualizaciones continuas y un account manager dedicado en planes Pro.' },
    { q: '¿Puedo probar antes de comprar?', a: 'Sí, oferecemos 14 días de prueba gratuita con acceso a todas las funcionalidades. No se requiere tarjeta de crédito.' },
    { q: '¿Mis datos están seguros?', a: 'Implementamos encriptación de grado bancario, backups diarios, certificación de seguridad y cumplimiento con normativas de protección de datos.' },
    { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí, podés cancelar tu suscripción cuando quieras. No hay cláusulas de permanencia forzada. Te devolvemos el proporcional de meses no usados.' },
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
          ❓ Centro de Ayuda
        </span>
        <h1 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 700, marginTop: '24px' }}>
          Preguntas Frecuentes
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', maxWidth: '600px', margin: '16px auto 0' }}>
          Respondemos las dudas más comunes sobre Clientum.
        </p>
      </div>

      {/* FAQ Grid */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '32px',
                    height: '32px',
                    background: 'rgba(43,74,122,0.1)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    flexShrink: 0,
                    color: '#2b4a7a',
                    fontWeight: 600,
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a2332', lineHeight: 1.5 }}>
                    {faq.q}
                  </h3>
                </div>
                <span style={{ fontSize: '20px', color: '#6b7a8d', flexShrink: 0 }}>▼</span>
              </div>
              <div style={{
                padding: '0 24px 24px 72px',
                color: '#6b7a8d',
                fontSize: '14px',
                lineHeight: 1.7,
              }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#f5f7fa', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332' }}>
          ¿No encontraste lo que buscabas?
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7a8d', marginTop: '12px', maxWidth: '400px', margin: '12px auto 0' }}>
          Nuestro equipo está disponible para responder cualquier pregunta.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
          <a href="/contacto" style={{
            backgroundColor: '#2b4a7a',
            color: '#ffffff',
            padding: '12px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Contactar soporte →
          </a>
          <a href="https://wa.me/5492984510883" target="_blank" style={{
            backgroundColor: 'transparent',
            color: '#2b4a7a',
            border: '1px solid #d4dce8',
            padding: '12px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}

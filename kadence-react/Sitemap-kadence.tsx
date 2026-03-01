/**
 * KADENCE BLOCKS VERSION - Sitemap.tsx
 * Sitemap page with Kadence-style components
 */

export default function SitemapKadence() {
  const sections = [
    {
      title: 'Producto',
      links: [
        { name: 'Inicio', url: '/' },
        { name: 'Soluciones', url: '/soluciones' },
        { name: 'Servicios', url: '/servicios' },
        { name: 'Planes y Precios', url: '/planes' },
        { name: 'Blog', url: '/blog' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nosotros', url: '/about' },
        { name: 'Testimonios', url: '/testimonios' },
        { name: 'Casos de Éxito', url: '/casos-de-exito' },
        { name: 'Prensa', url: '/prensa' },
        { name: 'Careers', url: '/careers' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Academia', url: '/academia' },
        { name: 'Webinars', url: '/webinars' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Soporte', url: '/soporte' },
        { name: 'Partners', url: '/partners' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos y Condiciones', url: '/terminos' },
        { name: 'Política de Privacidad', url: '/privacidad' },
        { name: 'Contacto', url: '/contacto' },
      ]
    },
  ];

  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', minHeight: '100vh', background: '#f5f7fa' }}>
      
      {/* Header */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #d4dce8', padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#1a2332', marginBottom: '8px' }}>
          Mapa del Sitio
        </h1>
        <p style={{ fontSize: '16px', color: '#6b7a8d' }}>
          Navegá por todas las páginas de Clientum
        </p>
      </div>

      {/* Links */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1a2332', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {section.title}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.url} style={{ fontSize: '14px', color: '#2b4a7a', textDecoration: 'none' }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#ffffff', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a2332', marginBottom: '8px' }}>
          ¿Necesitás ayuda?
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7a8d', marginBottom: '24px' }}>
          Nuestro equipo está listo para responder tus consultas.
        </p>
        <a href="/contacto" style={{
          display: 'inline-block',
          background: '#2b4a7a',
          color: '#ffffff',
          padding: '12px 32px',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          Contactar →
        </a>
      </div>

    </div>
  );
}

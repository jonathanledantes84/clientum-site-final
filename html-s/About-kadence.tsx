/**
 * KADENCE BLOCKS VERSION - About.tsx
 * About page with Kadence-inspired components
 */

import { KadenceRowLayout, KadenceAdvancedHeading, KadenceInfoBox } from './Home-kadence';

const team = [
  { name: "Emiliano C.", role: "Founder & Strategy", roleColor: "text-green-400", image: "👨‍💼" },
  { name: "Laura G.", role: "UX/UI Lead", roleColor: "text-blue-400", image: "👩‍💼" },
  { name: "Martin S.", role: "Fullstack Dev", roleColor: "text-purple-400", image: "👨‍💻" },
  { name: "Diego M.", role: "B2B Consultant", roleColor: "text-gray-500", image: "👨‍🔧" },
];

const values = [
  { title: "Transparencia Total", description: "Sin costos ocultos ni tecnicismos confusos.", icon: "👁️" },
  { title: "Velocidad de Ejecución", description: "El mercado no espera. Implementamos soluciones rápidas.", icon: "⚡" },
  { title: "Foco en Resultados", description: "No medimos el éxito en código, sino en crecimiento.", icon: "📈" },
];

export default function AboutKadence() {
  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', background: '#0a0a0a', minHeight: '100vh' }}>
      
      {/* Hero */}
      <KadenceRowLayout 
        background="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)"
        padding={[160, 24, 80, 24]}
      >
        <span style={{
          display: 'inline-block',
          padding: '8px 16px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#4ade80',
          marginBottom: '24px',
        }}>
          Nuestra Historia
        </span>
        
        <KadenceAdvancedHeading level={1} size={64} color="#ffffff" weight={800}>
          Humano detrás de <span style={{ color: '#4ade80', fontStyle: 'italic' }}>lo digital</span>
        </KadenceAdvancedHeading>
        
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '700px', margin: '24px auto 0', lineHeight: 1.75 }}>
          Nacimos en el sur de Argentina con una misión clara: convertir la complejidad tecnológica en una ventaja competitiva para los negocios que mueven el país.
        </p>
      </KadenceRowLayout>
      
      {/* Mission & Vision */}
      <KadenceRowLayout padding={[80, 24, 80, 24]}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '64px', alignItems: 'start' }}>
          <div style={{ paddingLeft: '32px', borderLeft: '4px solid #4ade80' }}>
            <KadenceAdvancedHeading level={3} size={24} align="left" color="#ffffff">
              Nuestra Misión
            </KadenceAdvancedHeading>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', lineHeight: 1.75 }}>
              Acompañar a las empresas en su transición hacia un modelo de negocio inteligente, donde la tecnología no sea un gasto, sino el motor principal de su rentabilidad.
            </p>
          </div>
          <div style={{ paddingLeft: '32px', borderLeft: '4px solid #60a5fa' }}>
            <KadenceAdvancedHeading level={3} size={24} align="left" color="#ffffff">
              Nuestra Visión
            </KadenceAdvancedHeading>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', lineHeight: 1.75 }}>
              Ser el referente líder en transformación digital del interior del país, demostrando que desde la Patagonia se puede exportar calidad y eficiencia al mundo.
            </p>
          </div>
        </div>
      </KadenceRowLayout>
      
      {/* Values */}
      <KadenceRowLayout background="rgba(255,255,255,0.02)" padding={[80, 24, 80, 24]}>
        <>
          <KadenceAdvancedHeading level={6} size={12} weight={800} color="rgba(255,255,255,0.5)" style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Nuestros Pilares
          </KadenceAdvancedHeading>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginTop: '48px' }}>
            {values.map((value, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{value.icon}</div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', fontStyle: 'italic' }}>{value.title}</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </>
      </KadenceRowLayout>
      
      {/* Team */}
      <KadenceRowLayout padding={[80, 24, 80, 24]}>
        <>
          <KadenceAdvancedHeading level={2} size={40} color="#ffffff" weight={800}>
            Liderazgo Estratégico
          </KadenceAdvancedHeading>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '48px' }}>
            {team.map((member, idx) => (
              <div key={idx}>
                <div style={{ 
                  height: '320px', 
                  background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '64px',
                  marginBottom: '16px',
                }}>
                  {member.image}
                </div>
                <h5 style={{ fontWeight: 700, color: '#ffffff', fontSize: '18px' }}>{member.name}</h5>
                <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: member.roleColor }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </>
      </KadenceRowLayout>
      
    </div>
  );
}

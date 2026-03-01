/**
 * KADENCE BLOCKS VERSION - Home.tsx
 * 
 * This version uses Kadence-inspired components and styling.
 * Use with @kadence/blocks-react or convert to Kadence Blocks in WordPress.
 * 
 * Instructions:
 * 1. Install @kadence/blocks-react or use Kadence Blocks in WordPress
 * 2. Use the Kadence theme customizer to match brand colors:
 *    - Primary: #2b4a7a
 *    - Accent: #4a6fa5
 *    - Background: #f5f7fa
 */

import { useState } from 'react';
import Link from 'next/link';

// ============================================
// KADENCE-INSPIRED COMPONENTS
// ============================================

// Kadence Row Layout Component
interface RowLayoutProps {
  children: React.ReactNode;
  background?: string;
  padding?: [number, number, number, number];
  className?: string;
}

export function KadenceRowLayout({ children, background, padding, className }: RowLayoutProps) {
  const style: React.CSSProperties = {
    background: background || 'transparent',
    padding: padding ? `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px` : '0',
  };
  return (
    <section className={`wp-block-kadence-rowlayout ${className || ''}`} style={style}>
      <div className="kt-row-layout-container">
        <div className="kt-row-inner kt-row-col-1 alignwide" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </div>
      </div>
    </section>
  );
}

// Kadence Advanced Heading Component
interface AdvancedHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  size?: number;
  weight?: number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function KadenceAdvancedHeading({ 
  children, 
  level = 1, 
  color = '#1a2332', 
  size = 32, 
  weight = 700,
  align = 'center',
  className 
}: AdvancedHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const style: React.CSSProperties = {
    color,
    fontSize: `${size}px`,
    fontWeight: weight,
    textAlign: align,
    margin: level === 1 ? '24px 0 0 0' : '16px 0 0 0',
  };
  
  return (
    <Tag className={`kt-blocks-advanced-heading-dr ${className || ''}`} style={style}>
      {children}
    </Tag>
  );
}

// Kadence Info Box Component
interface InfoBoxProps {
  icon?: string;
  title: string;
  subtitle?: string;
  href?: string;
}

export function KadenceInfoBox({ icon, title, subtitle, href }: InfoBoxProps) {
  const content = (
    <div className="wp-block-kadence-infobox" style={{
      background: '#ffffff',
      border: '1px solid #d4dce8',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(26,35,50,0.04),0 4px 16px rgba(26,35,50,0.06)',
      textAlign: 'left',
    }}>
      <span style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '56px',
        height: '56px',
        background: 'rgba(43,74,122,0.1)',
        borderRadius: '12px',
        fontSize: '24px',
        marginBottom: '16px',
      }}>
        {icon}
      </span>
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a2332', marginBottom: '8px' }}>
        {title}
      </h3>
      {subtitle && (
        <p style={{ fontSize: '14px', color: '#6b7a8d', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
  
  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

// Kadence Buttons Component
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export function KadenceButton({ 
  children, 
  href, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className 
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
  };
  
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '10px 20px', fontSize: '14px' },
    md: { padding: '12px 24px', fontSize: '15px' },
    lg: { padding: '14px 32px', fontSize: '16px' },
  };
  
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: '#2b4a7a',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 8px 32px rgba(43,74,122,0.25)',
    },
    secondary: {
      background: '#4a6fa5',
      color: '#ffffff',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: '#2b4a7a',
      border: '1px solid #d4dce8',
    },
  };
  
  const style: React.CSSProperties = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(isHovered && { opacity: 0.9, transform: 'translateY(-1px)' }),
  };
  
  const button = (
    <button 
      style={style}
      className={`kt-button ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
  
  if (href) {
    return <Link href={href} style={{ textDecoration: 'none' }}>{button}</Link>;
  }
  return button;
}

// Kadence Advanced Form (Contact Form)
interface FormInputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
}

export function KadenceFormInput({ label, type = 'text', placeholder, required }: FormInputProps) {
  const style: React.CSSProperties = {
    width: '100%',
    height: type === 'textarea' ? 'auto' : '44px',
    padding: type === 'textarea' ? '12px 16px' : '0 16px',
    border: '1px solid #d4dce8',
    borderRadius: '8px',
    fontSize: '14px',
    background: '#f5f7fa',
    color: '#1a2332',
    resize: type === 'textarea' ? 'vertical' : 'none',
  };
  
  if (type === 'textarea') {
    return (
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>
          {label} {required && '*'}
        </label>
        <textarea style={style} placeholder={placeholder} required={required} rows={5} />
      </div>
    );
  }
  
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a2332', marginBottom: '6px' }}>
        {label} {required && '*'}
      </label>
      <input type={type} style={style} placeholder={placeholder} required={required} />
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function HomeKadence() {
  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: '#1a2332', lineHeight: 1.6 }}>
      
      {/* HERO SECTION */}
      <KadenceRowLayout 
        background="linear-gradient(135deg, #111d2e 0%, #1e3a5f 50%, #4a6fa5 100%)"
        padding={[96, 24, 96, 24]}
      >
        <span style={{
          display: 'inline-block',
          padding: '6px 16px',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'rgba(255,255,255,0.7)',
        }}>
          Plataforma Enterprise
        </span>
        
        <KadenceAdvancedHeading level={1} size={48} color="#ffffff">
          Goberná tu empresa con <span style={{ color: '#4a6fa5' }}>datos confiables</span>
        </KadenceAdvancedHeading>
        
        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '20px',
          maxWidth: '700px',
          margin: '16px auto 0',
        }}>
          Plataforma enterprise que integra ERP, CRM, ventas y operaciones en una única fuente de verdad para la toma de decisiones estratégicas.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
          <KadenceButton href="/contacto" variant="primary" size="lg">
            Solicitar demo →
          </KadenceButton>
          <KadenceButton href="https://wa.me/5492984510883" variant="outline" size="lg" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
            Consultar por WhatsApp
          </KadenceButton>
        </div>
      </KadenceRowLayout>
      
      {/* TRUSTED STRIP */}
      <div style={{ background: 'rgba(255,255,255,0.05)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', textAlign: 'center' }}>
        <span style={{ 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em', 
          color: 'rgba(255,255,255,0.7)',
          fontSize: '14px',
          fontWeight: 600,
        }}>
          Confían en nosotros: <span style={{ color: '#999', marginLeft: '16px' }}>
            Retail Plus · AutoSur · TechBA · Constructora Norte · GastroNet · Servicios Digitales
          </span>
        </span>
      </div>
      
      {/* METRICS SECTION */}
      <KadenceRowLayout padding={[80, 24, 80, 24]}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '24px',
        }}>
          {[
            { icon: '👥', value: '500+', label: 'Empresas confían en nosotros' },
            { icon: '⭐', value: '98%', label: 'Satisfacción del cliente' },
            { icon: '🎧', value: '24/7', label: 'Soporte permanente' },
            { icon: '📅', value: '15+', label: 'Años de experiencia' },
          ].map((metric, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              border: '1px solid #d4dce8',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(26,35,50,0.04),0 4px 16px rgba(26,35,50,0.06)',
            }}>
              <span style={{ fontSize: '24px', marginBottom: '12px', display: 'block' }}>{metric.icon}</span>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#1a2332' }}>{metric.value}</div>
              <div style={{ fontSize: '14px', color: '#6b7a8d', marginTop: '4px' }}>{metric.label}</div>
            </div>
          ))}
        </div>
      </KadenceRowLayout>
      
      {/* PLATFORM MODULES */}
      <KadenceRowLayout background="#f5f7fa" padding={[80, 24, 80, 24]}>
        <>
          <KadenceAdvancedHeading level={6} size={12} weight={600} color="#2b4a7a">
            Plataforma
          </KadenceAdvancedHeading>
          <KadenceAdvancedHeading level={2} size={36}>
            Todo lo que necesitás en un solo lugar
          </KadenceAdvancedHeading>
          <p style={{ textAlign: 'center', color: '#6b7a8d', fontSize: '18px', maxWidth: '600px', margin: '16px auto 0' }}>
            Módulos integrados que trabajan juntos para darte visibilidad total de tu operación.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginTop: '48px',
          }}>
            {[
              { icon: '🗄️', title: 'CRM Avanzado', desc: 'Pipeline visual, scoring de leads y automatización de seguimiento.' },
              { icon: '📊', title: 'Business Intelligence', desc: 'Dashboards en tiempo real con predicciones y alertas inteligentes.' },
              { icon: '🤖', title: 'Automatización IA', desc: 'Workflows inteligentes que eliminan tareas repetitivas.' },
              { icon: '🛡️', title: 'ERP Integrado', desc: 'Facturación, stock, compras y contabilidad en un solo lugar.' },
            ].map((item, idx) => (
              <KadenceInfoBox 
                key={idx}
                icon={item.icon}
                title={item.title}
                subtitle={item.desc}
              />
            ))}
          </div>
        </>
      </KadenceRowLayout>
      
      {/* CTA BANNER */}
      <KadenceRowLayout padding={[80, 24, 80, 24]}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #d4dce8',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          boxShadow: '0 4px 16px rgba(26,35,50,0.08)',
        }}>
          <KadenceAdvancedHeading level={2} size={32}>
            ¿Listo para transformar tu empresa?
          </KadenceAdvancedHeading>
          <p style={{ color: '#6b7a8d', fontSize: '18px', maxWidth: '500px', margin: '16px auto 0' }}>
            Agendá una demo personalizada y descubrí cómo Clientum puede impulsar tu crecimiento con datos confiables.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            <KadenceButton href="/contacto" variant="primary" size="lg">
              Solicitar Demo Gratuita
            </KadenceButton>
            <KadenceButton href="/planes" variant="outline" size="lg">
              Ver Planes
            </KadenceButton>
          </div>
        </div>
      </KadenceRowLayout>
      
    </div>
  );
}

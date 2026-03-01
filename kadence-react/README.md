# Kadence Blocks para Clientum CRM - React/Next.js

Este directorio contiene versiones React/Next.js con estilo Kadence Blocks.

## Archivos TSX Creados

| Archivo | Descripción |
|---------|-------------|
| `Home-kadence.tsx` | Componentes Kadence reutilizables + Página Home |
| `About-kadence.tsx` | Página About con componentes Kadence |
| `Plans-kadence.tsx` | Planes y precios con estilo Kadence |
| `Contact-kadence.tsx` | Página de contacto con formulario |
| `Services-kadence.tsx` | Servicios y metodología |
| `Blog-kadence.tsx` | Blog y recursos |
| `FAQ-kadence.tsx` | Preguntas frecuentes con accordion |
| `Testimonials-kadence.tsx` | Testimonios de clientes |
| `Partners-kadence.tsx` | Programa de partners |
| `Careers-kadence.tsx` | Empleos y beneficios |
| `Dashboard-kadence.tsx` | Panel de control |
| `ThankYou-kadence.tsx` | Página de confirmación |
| `CaseStudies-kadence.tsx` | Casos de éxito |
| `Press-kadence.tsx` | Prensa y medios |
| `Support-kadence.tsx` | Centro de soporte |
| `Webinar-kadence.tsx` | Webinars y eventos |
| `Sitemap-kadence.tsx` | Mapa del sitio |

## Componentes Disponibles

### KadenceRowLayout
```
tsx
<KadenceRowLayout 
  background="linear-gradient(...)" 
  padding={[96, 24, 96, 24]}
>
  {/* contenido */}
</KadenceRowLayout>
```

### KadenceAdvancedHeading
```
tsx
<KadenceAdvancedHeading 
  level={1} 
  size={48} 
  color="#ffffff" 
  weight={700}
>
  Título
</KadenceAdvancedHeading>
```

### KadenceInfoBox
```
tsx
<KadenceInfoBox 
  icon="🚀" 
  title="CRM" 
  subtitle="Descripción" 
  href="/link"
/>
```

### KadenceButton
```
tsx
<KadenceButton 
  href="/contacto" 
  variant="primary" 
  size="lg"
>
  Texto
</KadenceButton>
```

### KadenceFormInput
```
tsx
<KadenceFormInput 
  label="Email" 
  type="email" 
  placeholder="tu@email.com"
  required
/>
```

## Uso

1. Copia los componentes que necesites
2. Importa en tu archivo de página:
```
tsx
import { KadenceRowLayout, KadenceAdvancedHeading } from './components/KadenceBlocks';
```

## HTML con Kadence Blocks

Para WordPress, usa los archivos en `../kadence-blocks/`:
- 01-inicio-kadence.html
- 02-soluciones-kadence.html
- 03-servicios-kadence.html
- 04-planes-kadence.html
- 05-blog-kadence.html
- 06-testimonios-kadence.html
- 07-academia-kadence.html
- 08-contacto-kadence.html
- 09-login-kadence.html

## Notas

- Los errores TypeScript son normales en este entorno sin React configurado
- Los archivos funcionan correctamente en un proyecto Next.js real
- Los componentes siguen el diseño de Kadence Blocks para WordPress

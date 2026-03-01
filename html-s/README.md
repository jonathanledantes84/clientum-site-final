# Kadence Blocks - Clientum CRM

Este directorio contiene versiones de las páginas HTML convertidas a bloques Kadence para WordPress.

## Archivos Incluidos

| Archivo | Descripción |
|---------|-------------|
| `01-inicio-kadence.html` | Página de inicio |
| `02-soluciones-kadence.html` | Soluciones por industria |
| `03-servicios-kadence.html` | Servicios ofrecidos |
| `04-planes-kadence.html` | Planes y precios |
| `05-blog-kadence.html` | Blog y recursos |
| `06-testimonios-kadence.html` | Casos de éxito |
| `07-academia-kadence.html` | Academia de cursos |
| `08-contacto-kadence.html` | Formulario de contacto |
| `09-login-kadence.html` | Página de login |

## Instalación

### 1. Instalar Kadence Theme
```
bash
# Desde WordPress Admin:
# Apariencia > Temas > Añadir nuevo
# Busca "Kadence Theme" e instala
```

### 2. Instalar Kadence Blocks
```
bash
# Plugins > Añadir nuevo > Buscar:
# "Kadence Blocks - Gutenberg Page Builder"
```

### 3. Configurar Colores
En **Apariencia > Personalizar > Colores**:
- Primary: `#2b4a7a`
- Accent: `#4a6fa5`
- Background: `#f5f7fa`
- Text: `#1a2332`
- Muted: `#6b7a8d`

## Cómo Usar

### Método 1: Custom HTML Block
1. Crear nueva página en WordPress
2. Añadir bloque "HTML Personalizado"
3. Copiar código del archivo correspondiente
4. Pegar y publicar

### Método 2: Code Snippets Plugin
```bash
# Instalar "WPCode" o "Code Snippets"
# Crear snippet con el contenido HTML
# Insertar con shortcode en la página
```

### Método 3: Kadence Elements
```
bash
# Kadence > Elements > Add New
# Importar HTML como layout
# Usar como template de página
```

## Notas Importantes

### Funcionalidades que no funcionan en Gutenberg:
- ❌ Animaciones (Framer Motion)
- ❌ Filtros interactivos (Blog/Testimonios)
- ❌ Toggle mensual/anual de Planes
- ❌ Formularios dinámicos

### Soluciones:
- **Formularios**: Usar Contact Form 7 o WPForms
- **Filtros**: Mostrar todos los items
- **Animaciones**: Agregar con CSS o plugin adicional
- **Links**: Actualizar URLs según estructura de WordPress

## Branding

### Colores Clientum CRM
```
css
:root {
  --cl-primary: #2b4a7a;      /* Azul oscuro */
  --cl-accent: #4a6fa5;       /* Azul medio */
  --cl-bg: #f5f7fa;           /* Fondo gris claro */
  --cl-fg: #1a2332;           /* Texto principal */
  --cl-muted: #6b7a8d;        /* Texto secundario */
  --cl-success: #2db87a;       /* Verde éxito */
  --cl-hero-from: #111d2e;    /* Hero inicio gradiente */
  --cl-hero-to: #4a6fa5;      /* Hero fin gradiente */
}
```

### Fuentes
- Primary: **Open Sans** (Google Fonts)
- Incluir en functions.php:
```
php
wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
```

## Estructura de Bloques Usados

- **Kadence Row Layout** - Contenedores principales
- **Kadence Advanced Heading** - Títulos
- **Kadence Info Box** - Tarjetas de servicios
- **Kadence Buttons** - Llamadas a acción
- **Kadence Advanced Form** - Formularios
- **Kadence Posts** - Listados de blog
- **Kadence Testimonials** - Testimonios
- **Kadence Accordion** - FAQs

##Soporte

Para más información:
- Documentación: https://www.kadence-theme.com/documentation/
- Videos: https://www.youtube.com/c/KadenceTheme

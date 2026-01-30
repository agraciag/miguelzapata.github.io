# Miguel Zapata - Sitio Web Oficial

Sitio web en memoria del escultor, pintor y grabador español Miguel Zapata (1940-2014).

## 🎨 Características

- ✅ Sitio estático generado con Astro
- ✅ Totalmente bilingüe (Español/Inglés)
- ✅ Landing page con video de fondo
- ✅ Galerías de obra organizadas por categoría
- ✅ Diseño responsive con Tailwind CSS
- ✅ Optimizado para GitHub Pages

## 🚀 Desarrollo

### Requisitos previos

- Node.js 18+
- npm o pnpm

### Instalación

```bash
npm install
```

### Desarrollo local

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Build para producción

```bash
npm run build
```

Los archivos estáticos se generarán en el directorio `dist/`

### Preview del build

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
miguelzapata.github.io/
├── src/
│   ├── layouts/          # Layouts base
│   ├── pages/            # Páginas del sitio
│   │   ├── index.astro   # Landing page con selector de idioma
│   │   ├── es/           # Versión en español
│   │   └── en/           # Versión en inglés
│   ├── components/       # Componentes reutilizables
│   ├── content/          # Contenido en MDX
│   └── styles/           # Estilos globales
├── public/               # Archivos estáticos
│   ├── intro/            # Video y assets del intro
│   └── images/           # Imágenes de las galerías
└── astro.config.mjs      # Configuración de Astro
```

## 🌐 URLs del Sitio

- Landing page: `/`
- Español: `/es/`
- English: `/en/`

## 🎯 Tareas Pendientes

- [ ] Implementar galerías con lightbox modal
- [ ] Migrar contenido completo de WordPress (biografía, obras)
- [ ] Optimizar imágenes y generar thumbnails
- [ ] Optimizar video del intro (292MB actualmente)
- [ ] Configurar GitHub Pages y dominio personalizado

## 📝 Notas

- El video del intro (`miguel.mp4`) pesa 292MB y necesita optimización
- Las galerías compartirán imágenes entre idiomas (mismo banco de imágenes)
- Total de 179 obras digitalizadas en el WordPress original

## 🔗 Enlaces

- Sitio en producción: https://miguelzapata.es
- Repositorio: https://github.com/miguelzapata/miguelzapata.github.io

---

**En memoria de Miguel Zapata (1940-2014)**

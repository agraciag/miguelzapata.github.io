# Próxima Sesión - Tareas Pendientes

## 🎯 Objetivo Principal
Organizar las 77 imágenes en sus categorías correctas según la estructura original de WordPress.

## 📋 Tareas Específicas

### 1. Mapeo de Imágenes a Categorías
**Prioridad:** Alta

Extraer del SQL de WordPress el mapeo exacto de:
- IDs de imagen → Nombres de archivo
- Asignar a cada categoría sus imágenes correspondientes

**Categorías WordPress:**
- Página 31 (Collage): 15 imágenes - IDs: 161,158,164,187,186,157,416,163,160,162,413,165,166,415,159
- Página 33 (Dibujo): 48 imágenes - IDs: 115,135,138,142,151,113,126,128,114,133,112,134,105,109,130,116...
- Página 39 (Técnica Mixta): ~78 imágenes - IDs: 233,232,231,230,226,225,220,215,213,211,205,204,203...
- Página 41 (Grabado): 8 imágenes - IDs: 103,102,101,100,99,98,97,96
- Página 44 (Óleo): 9 imágenes - IDs: (pendiente extraer)
- Página 57 (Escultura): 15 imágenes - IDs: (pendiente extraer)

**Archivos a consultar:**
```bash
/mnt/d/dev_projects/miguel_zapata/20151007 Miguel Zapata/ES/1445354629_-_db569286244.sql
```

### 2. Actualizar Páginas de Categorías
Una vez tengamos el mapeo:
- Modificar cada `src/pages/es/obra/{categoria}/index.astro`
- Modificar cada `src/pages/en/artwork/{category}/index.astro`
- Filtrar imágenes según categoría

### 3. Limpieza DNS (IONOS)
Eliminar registros AAAA obsoletos:
```
AAAA    @      2001:8d8:100f:f000:0:0:0:2d1
AAAA    ftp    2001:8d8:100f:f000:0:0:0:2d1
```

### 4. Mejoras Opcionales (Si hay tiempo)

#### SEO
- [ ] Agregar Open Graph tags
- [ ] Agregar Twitter cards
- [ ] Generar sitemap.xml
- [ ] Agregar meta descriptions específicas por página

#### Performance
- [ ] Lazy loading para imágenes
- [ ] Preload de fuentes críticas
- [ ] Optimizar carga del video

#### Analytics (Opcional)
- [ ] Google Analytics
- [ ] Privacy-friendly alternative (Plausible, etc.)

---

## 🔧 Comandos Preparados

### Para extraer mapeo de imágenes del SQL:
```bash
# Buscar nombres de archivo por ID
grep "INSERT INTO.*mz_posts" "/mnt/d/dev_projects/miguel_zapata/20151007 Miguel Zapata/ES/1445354629_-_db569286244.sql" | grep "post_type.*'attachment'"

# Extraer galerías con IDs
grep -oP '\[gallery[^\]]+\]' "/mnt/d/dev_projects/miguel_zapata/20151007 Miguel Zapata/ES/1445354629_-_db569286244.sql" | grep "ids="
```

### Para desarrollo:
```bash
cd /mnt/d/dev_projects/miguel_zapata/miguelzapata.github.io
npm run dev
# http://localhost:4322/
```

### Para desplegar cambios:
```bash
git add .
git commit -m "Organize images by category

Co-Authored-By: Claude (claude-sonnet-4-5) <noreply@anthropic.com>"
git push
```

---

## 📊 Estado Actual

### ✅ Funcionando
- Sitio publicado en https://miguelzapata.es
- 6 categorías con thumbnails
- Todas las páginas sin 404s
- Galerías mostrando colección completa

### ⚠️ Por Mejorar
- Categorías muestran todas las 77 imágenes (no filtradas)
- Falta mapeo real de WordPress

---

## 💡 Notas para la Próxima Sesión

1. **Enfoque:** Priorizar el mapeo de imágenes antes que otras mejoras
2. **Estrategia:** Extraer info del SQL → Crear estructura de datos → Actualizar páginas
3. **Testing:** Verificar que cada categoría muestre el número correcto de imágenes
4. **Deploy:** Hacer push solo cuando el mapeo esté completo

---

## 📁 Archivos Importantes

```
miguelzapata.github.io/
├── PROJECT_STATUS.md           # Estado general del proyecto
├── NEXT_SESSION.md            # Este archivo
├── DEPLOY.md                  # Guía de despliegue
└── src/pages/{es,en}/obra/    # Páginas a modificar
```

---

**Preparado:** 30 Enero 2026, 21:25 CST
**Para:** Próxima sesión de desarrollo

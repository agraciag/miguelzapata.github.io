# Guía de Despliegue - Miguel Zapata Website

## 📋 Requisitos Previos

1. Cuenta de GitHub
2. Dominio miguelzapata.es en IONOS
3. Git instalado localmente

## 🚀 Pasos para Desplegar en GitHub Pages

### 1. Crear Repositorio en GitHub

```bash
# Opción A: Usar nombre de usuario (recomendado)
# Crear repositorio: https://github.com/new
# Nombre: miguelzapata.github.io

# Opción B: Usar nombre personalizado
# Nombre: miguelzapata-website
```

### 2. Configurar Git Local

```bash
# Ya inicializado, ahora vincular con GitHub
git add .
git commit -m "Initial commit - Miguel Zapata website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/miguelzapata.github.io.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. El workflow se ejecutará automáticamente

### 4. Configurar Dominio Personalizado en GitHub

1. Settings → Pages → Custom domain
2. Escribe: `miguelzapata.es`
3. Click en "Save"
4. Espera a que GitHub verifique el dominio

## 🌐 Configuración DNS en IONOS

### Opción A: Usar CNAME (Recomendado)

Modifica SOLO estos registros en IONOS:

```
Tipo    Nombre de host    Valor                           TTL
A       @                 185.199.108.153                 3600
A       @                 185.199.109.153                 3600
A       @                 185.199.110.153                 3600
A       @                 185.199.111.153                 3600
CNAME   www               TU_USUARIO.github.io            3600
```

**IMPORTANTE:** Elimina los registros A y AAAA actuales de @ y www (217.160.0.58 y IPv6).

### DNS Actuales a MANTENER

Estos registros NO los toques (son para email):

```
MX      @                 mx00.ionos.es
MX      @                 mx01.ionos.es
CNAME   s1-ionos._domainkey    s1.dkim.ionos.com
CNAME   s2-ionos._domainkey    s2.dkim.ionos.com
CNAME   s42582890._domainkey   s42582890.dkim.ionos.com
CNAME   autodiscover           adsredir.ionos.info
TXT     @                      "v=spf1 include:_spf-eu.ionos.com ~all"
CNAME   _domainconnect         _domainconnect.1and1.com
```

### DNS Actuales a ELIMINAR

```
A       @                 217.160.0.58           ❌ ELIMINAR
AAAA    @                 2001:8d8:100f:...      ❌ ELIMINAR
A       ftp               217.160.0.58           ❌ ELIMINAR (si no usas FTP)
AAAA    ftp               2001:8d8:100f:...      ❌ ELIMINAR (si no usas FTP)
A       www               217.160.0.58           ❌ ELIMINAR
AAAA    www               2001:8d8:100f:...      ❌ ELIMINAR
```

### Resumen de Cambios en IONOS

1. **Eliminar**: Todos los registros A y AAAA de @ y www que apuntan a 217.160.0.58
2. **Agregar**: 4 registros A para @ apuntando a GitHub Pages IPs
3. **Modificar**: CNAME de www para apuntar a TU_USUARIO.github.io

## ⏱️ Tiempo de Propagación

- DNS puede tardar 1-24 horas en propagarse
- GitHub Pages tarda ~10 minutos en verificar el dominio
- Certificado SSL se genera automáticamente (puede tardar 1 hora)

## ✅ Verificación

Después de 24 horas, verifica:

```bash
# Verificar DNS
nslookup miguelzapata.es
nslookup www.miguelzapata.es

# Probar en navegador
https://miguelzapata.es
https://www.miguelzapata.es
```

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

GitHub Actions desplegará automáticamente.

## 📊 Estado Actual del Proyecto

- **Tamaño total**: ~73 MB
- **Video optimizado**: 29 MB (720p)
- **Imágenes**: 82 obras optimizadas (JPG + WebP)
- **Páginas**: Landing + Biografías (ES/EN) + Galerías

## 🔗 URLs Finales

- Principal: https://miguelzapata.es
- Español: https://miguelzapata.es/es/
- English: https://miguelzapata.es/en/

---

**Nota**: Si tienes problemas con la configuración DNS, contacta al soporte de IONOS para asistencia.

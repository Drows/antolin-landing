# AL Clínica — antolin.cl

Sitio de AL Clínica construido con Astro y desplegado automáticamente en Cloudflare Pages.

## Ramas y despliegues

- `main`: versión oficial publicada en `https://antolin.cl`.
- `develop`: versión de pruebas publicada en `https://develop.cannaclinic.pages.dev`.

Los cambios nuevos deben comenzar en `develop`. Solo después de revisar la vista previa se fusionan a `main`.

## Flujo de trabajo

```bash
git switch develop
git pull

# realizar cambios y probarlos
npm run dev
npm run build

git add .
git commit -m "Descripción del cambio"
git push
```

Cloudflare generará automáticamente la vista previa de `develop`.

Cuando la vista previa esté aprobada:

```bash
git switch main
git pull
git merge --no-ff develop
git push
git switch develop
```

## Contenido del blog

Los artículos se guardan como archivos Markdown dentro de:

```text
src/content/blog/
```

Cada archivo debe incluir título, descripción, fecha, categoría y autor en su encabezado.

## Comandos

- `npm run dev`: servidor local.
- `npm run build`: compilación de producción.
- `npm run preview`: revisión local de la compilación.


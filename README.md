# Flitware Docs — Guía de usuario

Documentación de usuario final de Flitware (español, tono no técnico),
generada con capturas reales de la aplicación sobre el tenant demo.

## Ver en local

```bash
npm install
npm start -- --port 3123
```

Abrir en el navegador: http://localhost:3123

## Estructura

- `docs/cuenta/` — Configuración y cuenta (perfil, usuarios, seguridad, tenant, campos, facturación)
- `docs/soporte/` — Solicitudes de soporte
- `docs/operacion/` — Módulos de operación (flotas, conductores, documentos, servicios, mantenimiento, plantillas)
- `docs/primeros-pasos/` — Acceso, inicio, notificaciones, búsqueda, marketplace, MCP, portal conductor
- `docs/shots/` — Capturas reales (español, 1440x900)

## Publicar (GitHub Pages)

Sitio público: https://flitware-oss.github.io/docs/ (requiere activar Pages
una vez: Settings → Pages → Source: **GitHub Actions**).

El workflow `.github/workflows/deploy.yml` publica automáticamente en cada
push a `main`.

## Regla

Todo cambio en `flitware-app` que afecte la UI visible debe actualizar la
guía correspondiente aquí (pasos + capturas) y publicarse junto con ese cambio.

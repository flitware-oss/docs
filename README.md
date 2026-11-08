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

- `docs/fase1/` — Configuración y cuenta (perfil, usuarios, seguridad, tenant, campos, facturación)
- `docs/fase2/` — Soporte
- `docs/fase3/` — Módulos de operación (flotas, conductores, documentos, servicios, mantenimiento, plantillas)
- `docs/fase4/` — Transversal (acceso, inicio, notificaciones, búsqueda, marketplace, MCP, portal conductor)
- `docs/shots/` — Capturas reales (español, 1440x900)

## Publicar (GitHub Pages)

Ajustar `url` y `baseUrl` en `docusaurus.config.js` según el repositorio
remoto (TODO pendiente de definir remoto), luego el workflow
`.github/workflows/deploy.yml` publica automáticamente a `gh-pages` en cada
push a `main`.

## Regla

Todo cambio en `flitware-app` que afecte la UI visible debe actualizar la
guía correspondiente aquí (pasos + capturas) y publicarse junto con ese cambio.

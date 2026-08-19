# Protocolo Nostromo — Índice de documentación

## ¿Qué es?

Experiencia narrativa interactiva estilo terminal retro ambientada en el universo Weyland-Yutani (USCSS Nostromo). El visitante "inicia el rescate del sistema" y atraviesa paradas del protocolo.

> ⚠️ **WIP:** `index.html` funcional; `parada1-4.html` vacías (contenido pendiente).

## Documentación

| Documento | Contenido |
|---|---|
| [README](../README.md) | Qué es, estado, ejecución |
| [Arquitectura](ARQUITECTURA.md) | Estructura, flujo, motor de escritura, cómo añadir paradas |

## Resumen rápido

- **Stack:** HTML/CSS/JS vanilla · Firebase Hosting
- **Flujo:** index → parada1 → parada2 → parada3 → parada4
- **Motor:** `main.js` escribe texto carácter a carácter (20–60 ms aleatorio) y muestra el botón al terminar
- **Deploy:** `firebase deploy` (estático, sin build)
# Protocolo Nostromo

Experiencia narrativa interactiva estilo **terminal retro** ambientada en el universo Weyland-Yutani (USCSS Nostromo, 2122). El visitante debe "iniciar el rescate del sistema" atravesando una serie de paradas, narradas como protocolos de la computadora MADRE.

## Estado actual

> ⚠️ **Proyecto en desarrollo.** `index.html` (secuencia inicial con efecto máquina de escribir) está funcional. Las paradas `parada1.html` a `parada4.html` existen como archivos **aún vacíos** — el contenido narrativo de cada parada está pendiente.

## Stack

HTML + CSS + JavaScript vanilla (sin dependencias) · Firebase Hosting (estático)

## Ejecutar

```bash
# Local: sirve public/ con cualquier servidor estático
python -m http.server 8080 --directory public

# Producción
firebase deploy
```

## Estructura

```
protocolo-nostromo/
├── public/
│   ├── index.html      # Portada: reporte inicial de MADRE + botón INICIAR
│   ├── parada1-4.html  # Paradas de la experiencia (WIP: vacías)
│   ├── 404.html
│   └── assets/
│       ├── css/style.css
│       └── js/main.js  # Efecto máquina de escribir + lógica del terminal
├── firebase.json       # Hosting → public/
└── .firebaserc
```

## Documentación

- [Índice de documentación](docs/INDICE.md)
- [Arquitectura](docs/ARQUITECTURA.md)
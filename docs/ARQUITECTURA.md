# Protocolo Nostromo — Arquitectura

Sitio estático (sin framework) que presenta una experiencia narrativa tipo terminal: texto que se escribe solo y un botón para avanzar entre "paradas" del protocolo.

## Estructura

```
public/
├── index.html      # Portada (secuencia inicial)
├── parada1.html    # Paradas del protocolo (WIP)
├── parada2.html
├── parada3.html
├── parada4.html
├── 404.html        # Página de error personalizada
└── assets/
    ├── css/style.css   # Tema terminal (Courier Prime, pantalla verde/ámbar)
    └── js/main.js      # Motor de escritura + navegación
```

## Flujo del usuario

```
index.html
   │  main.js: efecto máquina de escribir (velocidad aleatoria 20-60 ms)
   ▼
[ INICIAR RESCATE DEL SISTEMA ]  →  parada1.html
   │
   ▼
parada2.html → parada3.html → parada4.html  (contenido pendiente)
```

## Motor de escritura (`main.js`)

- Al cargar la página, el texto del reporte se imprime carácter por carácter.
- Velocidad aleatoria por carácter (20–60 ms) para simular procesamiento.
- Al terminar, se muestra el botón de navegación (`display: block`).

## Cómo añadir contenido a una parada

1. Cada `paradaN.html` sigue la estructura de `index.html`: `main.pantalla-nostromo` + `#salida-texto` + `#btn-iniciar`.
2. El texto narrativo se define en un `const textoReporte` dentro de un bloque `DOMContentLoaded` (o se reutiliza `main.js` con el texto por parada).
3. El botón enlaza a la siguiente parada (`parada(N+1).html`).
4. Desplegar: `firebase deploy` (solo Hosting).

## Despliegue

`firebase.json` sirve `public/`. Sin build, sin dependencias: el contenido es directamente HTML/CSS/JS.

## Docs relacionados

- [Índice](INDICE.md)
- [README](../README.md)
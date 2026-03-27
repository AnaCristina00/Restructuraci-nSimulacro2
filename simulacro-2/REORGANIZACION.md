# Propuesta de reorganizacion para `simulacro-2`

## Objetivo

Reducir el acoplamiento actual de `simulacro-2/index.html` sin cambiar el stack del proyecto:

- seguir en HTML, CSS y JavaScript vanilla
- no introducir build system
- mantener compatibilidad con PWA
- dejar una estructura facil de leer, editar y extender

## Diagnostico actual

Hoy `simulacro-2/index.html` concentra casi todo:

- app shell, vistas y modales
- estilos globales y de componentes
- un SVG inline grande para el logo
- banco de preguntas completo de Matematicas y Lectura Critica
- informacion de niveles y umbrales
- estado global y flujo del quiz
- render de pantallas
- handlers inline como `onclick`
- assets embebidos como `data:image`

Referencia del monolito actual:

- CSS inline: `index.html` lineas 15-220 aprox.
- SVG inline del encabezado: `index.html` desde la linea 230 aprox.
- vistas principales: `index.html` desde la linea 812 aprox.
- assets inline y banco de preguntas: `index.html` desde la linea 923 aprox.
- niveles, estado y logica de app: `index.html` desde la linea 1302 aprox.

Indicadores rapidos del archivo actual:

- ~1608 lineas
- ~444k caracteres
- 21 funciones en un mismo script
- 15 `onclick`
- 116 `style=""` inline
- 2 imagenes embebidas en `data:image`

## Principios de la reorganizacion

1. Separar por responsabilidad, no por ocurrencia.
2. Hacer pocos cortes, pero bien definidos.
3. Mantener una carga simple por `link` y `script type="module"`.
4. Extraer primero datos y estilos, porque son los bloques mas voluminosos.
5. No fragmentar en exceso: mejor 10 archivos claros que 40 microarchivos.

## Estructura recomendada

```text
simulacro-2/
|-- index.html
|-- manifest.json
|-- sw.js
|-- REORGANIZACION.md
|-- assets/
|   |-- icons/
|   |   |-- icon-192.png
|   |   |-- icon-512.png
|   |   `-- icon-escudo.svg
|   |-- img/
|   |   |-- cuy-correcto.png
|   |   |-- cuy-incorrecto.png
|   |   `-- logo-sed.svg
|   `-- questions/
|       |-- matematicas/
|       `-- lectura-critica/
|-- css/
|   |-- tokens.css
|   |-- base.css
|   |-- layout.css
|   |-- components.css
|   `-- screens.css
`-- js/
    |-- main.js
    |-- app/
    |   |-- state.js
    |   |-- dom.js
    |   |-- router.js
    |   `-- events.js
    |-- data/
    |   |-- subjects.js
    |   |-- niveles.js
    |   |-- assets.js
    |   `-- banks/
    |       |-- matematicas.js
    |       `-- lectura-critica.js
    |-- features/
    |   |-- home.js
    |   |-- intro.js
    |   |-- quiz.js
    |   |-- results.js
    |   |-- feedback.js
    |   `-- modal.js
    `-- utils/
        |-- shuffle.js
        |-- score.js
        `-- format.js
```

## Rol de cada bloque

### `index.html`

Debe quedar como app shell:

- metadatos
- enlaces a CSS
- contenedor principal
- modales base
- carga de `js/main.js`

Idealmente no deberia contener:

- banco de preguntas
- estilos grandes
- SVGs enormes
- logica de negocio

### `assets/`

Usar esta carpeta para todo lo visual o estatico:

- mover los `data:image` del cuy a archivos reales
- sacar el SVG inline del encabezado a `assets/img/logo-sed.svg`
- guardar imagenes futuras de preguntas por materia

Beneficio: baja mucho el peso visual de `index.html` y facilita reemplazos.

### `css/`

Propuesta de reparto:

- `tokens.css`: variables `:root`, colores, radios, sombras, tipografia
- `base.css`: reset, `html`, `body`, elementos base
- `layout.css`: top bar, app shell, grids, wrappers
- `components.css`: botones, cards, chips, badges, modal, stepper, feedback
- `screens.css`: home, intro, pregunta, resultados, revision

No hace falta mas detalle que eso al inicio.

### `js/data/`

Este es el primer gran corte recomendado.

- `banks/matematicas.js`: solo preguntas de matematicas
- `banks/lectura-critica.js`: solo preguntas de lectura critica
- `subjects.js`: metadata de cada prueba, sin mezclar logica
- `niveles.js`: `NIVEL_INFO`, `NIVEL_THRESHOLDS` y helpers relacionados
- `assets.js`: mapa de imagenes si todavia se necesita una capa de lookup

Esto evita que el archivo principal mezcle contenido pedagogico con comportamiento.

### `js/app/`

Nucleo pequeno y estable:

- `state.js`: estado global y funciones de reinicio
- `dom.js`: selectores reutilizados y helpers de render
- `router.js`: `goScreen`, progreso y navegacion entre vistas
- `events.js`: registro de listeners, reemplazando `onclick`

### `js/features/`

Separar por flujo de usuario:

- `home.js`: seleccion de materia y configuraciones iniciales
- `intro.js`: pantalla de introduccion por prueba
- `quiz.js`: pregunta actual, opciones, seleccion, avance
- `results.js`: puntajes, niveles y revision final
- `feedback.js`: confetti, cuy, caja de retroalimentacion
- `modal.js`: modal de regreso y modal de nivel

Esta division coincide con lo que ya existe en la interfaz.

### `js/utils/`

Solo utilidades puras:

- `shuffle.js`: aleatorizacion de opciones
- `score.js`: calculos de aciertos, porcentaje, nivel
- `format.js`: helpers chicos de texto o labels

Si una funcion necesita DOM, no va aqui.

## Como deberia verse el flujo

```text
main.js
  -> carga data
  -> crea estado inicial
  -> registra eventos
  -> muestra home

home.js
  -> selecciona materia
  -> inicia prueba

quiz.js
  -> toma preguntas desde data
  -> renderiza pregunta actual
  -> registra respuesta
  -> delega scoring a score.js

results.js
  -> calcula puntajes
  -> pinta tabla y revision
  -> consulta niveles.js
```

## Orden recomendado de migracion

### Fase 1: cortes seguros y de alto impacto

- mover CSS inline a `css/`
- mover `IMGS` a `assets/` o `js/data/assets.js`
- mover `QB` a `js/data/banks/`
- mover `NIVEL_INFO` y umbrales a `js/data/niveles.js`

Con esto, el monolito baja mucho sin tocar el flujo principal.

### Fase 2: separar comportamiento

- crear `js/main.js`
- mover estado, helpers y render a modulos
- reemplazar `onclick` por `addEventListener`

Esta fase mejora mantenibilidad y pruebas manuales.

### Fase 3: limpiar plantilla HTML

- dejar `index.html` como shell
- extraer SVG inline a archivo
- reducir `style=""` inline a clases reutilizables

### Fase 4: endurecer la PWA

- actualizar `sw.js` para cachear nuevos CSS, JS e imagenes
- revisar `manifest.json` si cambian rutas de iconos

## Corte minimo que yo recomendaria hacer primero

Si quisieramos un primer paso pragmatico, haria esto:

1. `index.html` conserva solo estructura HTML.
2. Todo el CSS pasa a `css/main.css`.
3. El banco de preguntas se divide en:
   - `js/data/banks/matematicas.js`
   - `js/data/banks/lectura-critica.js`
4. Los niveles van a `js/data/niveles.js`.
5. La logica queda temporalmente en `js/main.js`.

Ese punto medio ya quita la mayor parte del dolor sin obligarnos a una refactorizacion completa de una vez.

## Convenciones sugeridas

- usar `type="module"` para el JS nuevo
- nombrar archivos en kebab-case o lowercase consistente
- mantener nombres de variables en espanol
- evitar HTML gigante dentro de strings cuando se pueda encapsular por feature
- si una parte es contenido pedagogico, debe vivir en `js/data/`, no en `js/features/`

## Lo que no recomiendo

- meter todo en una sola carpeta `js/` sin subestructura
- pasar a framework solo para ordenar archivos
- convertir cada funcion en un modulo distinto
- dejar preguntas, assets y logica mezclados otra vez en `main.js`

## Resultado esperado

Con esta reorganizacion, `simulacro-2` quedaria mas facil de mantener porque:

- el contenido academico estaria separado del comportamiento
- cada pantalla tendria una responsabilidad clara
- los assets dejarian de inflar el HTML principal
- el service worker tendria un inventario de archivos mas claro
- agregar una nueva prueba o materia seria un cambio localizado

## Siguiente paso sugerido

Tomar esta propuesta y ejecutar primero la Fase 1. Es la que mas reduce complejidad con menor riesgo tecnico.

# Taller de Guitarra: mmg

App web para aprender guitarra: escalas, acordes, lectura de partitura y tablatura, oído, canciones y práctica diaria. Funciona sin conexión una vez abierta y se instala como app.

## Archivos

- `index.html`: la app.
- `Afinador.html`: afinador, lectura con micrófono y grabadora (necesita HTTPS para usar el micrófono).
- `Partituras.html`: partituras para tocar encima. Biblioteca de piezas, importación de MusicXML (.musicxml, .xml, .mxl), MIDI, tablatura de texto y foto o PDF (con IA y tu clave de Anthropic). Modos: escuchar, practicar nota a nota con el micrófono y examen con puntuación. Bucle de compases, tempo, metrónomo y exportación a MusicXML y MIDI.
- `manifest.webmanifest`, `sw.js`: lo que permite instalarla y usarla sin conexión.
- `icon-*.png`, `apple-touch-icon.png`, `favicon.svg`, `icon.svg`: iconos de guitarra.

## Publicar gratis en GitHub Pages

1. Crea una cuenta en github.com (si no tienes).
2. Pulsa **New** (nuevo repositorio). Nombre: `taller-guitarra`. Déjalo **Public** y créalo.
3. En el repositorio vacío, pulsa **uploading an existing file**. Arrastra **todos los archivos de esta carpeta** (no el zip) y pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y **Save**.
5. Espera 1 o 2 minutos. Tu app estará en `https://TU-USUARIO.github.io/taller-guitarra/`.

## Instalarla como app

- **Android (Chrome):** menú ⋮ → *Instalar aplicación* (o *Añadir a pantalla de inicio*).
- **iPhone/iPad (Safari):** botón Compartir → *Añadir a pantalla de inicio*.
- **Ordenador (Chrome/Edge):** icono de instalar a la derecha de la barra de direcciones.

## Pasar tus datos de la versión anterior

Los datos (racha, canciones, progreso) se guardan en cada dirección web por separado. En la versión anterior: **Estudio → Copia de seguridad → Copiar mis datos**. En la nueva: pega el código en **Restaurar datos**.

## Actualizar la app

Sustituye el archivo cambiado en GitHub (**Add file → Upload files**) y, en `sw.js`, cambia `VERSION='v31'` por `'v24'` (y así sucesivamente). Al volver a abrir la app se actualiza sola.

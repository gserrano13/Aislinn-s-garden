# Para Aislinn 🌸

Sitio personal para mi novia, con un jardín de mensajes en forma de ramos y una galería de los ramos que le he regalado.

---

## Cómo publicarlo en GitHub Pages (paso a paso)

### 1. Crea una cuenta en GitHub (si no tienes)
Ve a [github.com](https://github.com) y registra una cuenta.

### 2. Crea un repositorio nuevo
- Click en el botón **+** arriba a la derecha → **New repository**
- Nombre: algo como `para-aislinn` o `nosotros`
- Marca **Public**
- **NO** marques "Add a README" (vamos a subir los nuestros)
- Click en **Create repository**

### 3. Sube los archivos
En la página del repo vacío verás un enlace que dice **"uploading an existing file"**. Haz click ahí.
- Arrastra el archivo `index.html` que te di
- Abajo, en "Commit changes", deja el mensaje por defecto y click **Commit changes**

### 4. Activa GitHub Pages
- En el repo, click en **Settings** (arriba a la derecha)
- En el menú izquierdo, click en **Pages**
- En **Source**, selecciona la rama `main` y carpeta `/ (root)`
- Click **Save**
- Espera 1-2 minutos

Tu sitio estará en: `https://TU-USUARIO.github.io/para-aislinn/`

---

## Cómo agregar nuevos ramos y fotos

Aquí está la parte buena: **no necesitas tocar código.**

### Para agregar contenido nuevo:

1. Abre tu sitio en el navegador pero agrega `?admin=true` al final de la URL:
   ```
   https://TU-USUARIO.github.io/para-aislinn/?admin=true
   ```

2. Verás un botón redondo rosa abajo a la derecha. Click ahí.

3. Llena el formulario:
   - **Ramo nuevo**: título, fecha, estilo, colores y mensaje. Hay vista previa.
   - **Foto de ramo**: sube una foto desde tu teléfono/compu o pon la ruta a una imagen.

4. Click en **Agregar**. Verás cómo aparece en el jardín o galería.

5. Cuando termines de agregar (puedes agregar varios a la vez), baja en el panel y click en **Exportar datos para GitHub** → luego **Copiar al portapapeles**.

6. Ve a GitHub, abre el archivo `index.html`, click en el lápiz para editar, busca la línea que dice `const DATA = {` (cerca del JS), selecciona desde ahí hasta el `};` que cierra el bloque, y pega lo que copiaste.

7. Abajo, click en **Commit changes**.

8. Listo. En 1 minuto Aislinn verá las novedades.

---

## Para las fotos de ramos reales

Tienes dos opciones:

**Opción A (fácil pero hace el archivo más pesado):**
- Sube la foto directamente desde el panel admin → se guarda como data URL dentro del archivo.

**Opción B (más limpio, recomendado para muchas fotos):**
- En GitHub, crea una carpeta llamada `images/` en tu repo (cuando subes un archivo, escribe `images/nombre.jpg` en el campo de nombre).
- Sube tus fotos ahí.
- En el panel admin, en lugar de subir archivo, escribe en "ruta del archivo": `images/nombre-de-tu-foto.jpg`

---

## Personalizar más

Si quieres cambiar algo del contenido fijo (la frase del hero, el saludo del footer, etc.), abre `index.html` en GitHub y busca el texto. Cambia lo que quieras y commit.

Si te animas a más cambios visuales, los colores están definidos en la sección `:root { ... }` arriba del CSS. Cambias el hex y se cambia todo el sitio.

---

## ¿Y si quiero cambiar la URL?

Si quieres algo como `https://aislinn.mi-dominio.com`, eso requiere comprar un dominio (~$10 USD/año) y configurarlo en GitHub Pages. Es un paso opcional para más adelante.

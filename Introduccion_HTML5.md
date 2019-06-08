# Introducción HTML5

HTML5 no está en todos los navegadores.

- Comprobar si la caracteristica HTML5 y CSS3 que se quiere usar esta soportada en los navegadores requeridos por tu proyecto: 
    https://caniuse.com/
    Con caniuse, podemos probar a la hora de desarrollar.

- También puedes detectar cuando una caracteristica no esta soportada y programar una alternativa.
    https://modernizr.com/
    Con modernizr nos diria en el mismo momento si una caracteristica esta soportada.

- ¿Que necesita?

```html
    <!DOCTYPE html>
```

# Nuevos Elementos

Una de las cosa nuevas de hmtl5 son los elementos semanticos, aportan un sentido o significado al contenido que muestran.
Indican su comentido tanto al navegador como al desarrollador.
Al final funcionan como un div, ya que se podran dar estilos con CSS.
Nos evita a vencer la gerarquia de DIV's

Nuevos elementos:

* NAV : `<nav>` define un conjunto de enlaces de navegacion, esto va a estar en la cabecera

```html
    <nav>
        <a href="novedades">Novedades</a>
        <a href="reviews">Reviews</a>
        <a href="entrevistas">Entrevistas</a>
    </nav>
```

* SECTION: `<section>` agrupar contenido por temática. por ejemplo una pagina de música. Agrupar todo aquelo lo que este relacionado con una tematica.

```html
   <section><!--Novedades--></section> 
   <section><!--Reviews--></section> 
   <section><!--Entrevistas--></section> 
```

* ARTICLE: `<article>` DEtalle contenido independiente, que tiene sentido por sí solo. puedebn ir dentro de una seccion.

```html
    <article><!--Novedad 1--></article>
    <article><!--Novedad 2--></article>
    <article><!--Novedad 3--></article>
```

* ASIDE : `<aside>` Pretende mostrar contenido relacionado con lo que le rodea o lo que se está mostrando en pantalla, como enlaces de interes, no es informacion totalmente relevante o importante. Ejm. EStamos en el article de la Novedad 1, en el aside se puede hacer recomendaciones relacionadas con la Novedad 1


```html
    <aside>
        <!-- Recomendaciones relacionadas con la Novedad 1-->
    </aside>
```

* HEADER: `<header>` Especifica un encabezamiento para una seccion o artículo. Tendra un título y un poco de información.

```html
    <section>
        <header>
            <h1>Novedades</h1>
        </header>
        <!-- Cuerpo de la sección-->
    </section>
```

* FOOTER: `<footer>` Especifica un pie para una sección o artículo.

```html
    <section>
        <!-- Cuerpo de la sección-->
        <footer>
            <small>Publicado hace 1 día</small>
        </footer>        
    </section>
```

> Nota: Estos elementos nuevos no estan soportados en versiones de Internet Explore anteriores a la 9. PAra solventar esta carencia, es posible usar la libreria `HTML5 Shiv` creada por Sjoerd Visscher.

    https://github.com/aFarkas/html5shiv

Está libreria de HMLT Shiv, nos ayuda a poder usar los elementos de html5 en internet explore 8 
Se carga antes que cualquier elemento del DOM, y cree los elementos vacios y ocultos, y le va a decir al navegador que use estos elementos.

# Demo

Hay que pensar bien en donde vamos a colocar nuestros elementos semanticos de HTML5 para que otorgue un mejor perso para el reposicionamiento SEO.
Si queremos que indexe corretamente en los motores de busqueda, los elementos deben estar bien pensados. mi h1 no es un div, mi articulo no es div.

Podemos en el código del DEMO en `..Base_HTML5_CSS3\index.html`

# Formulario

Hmtl5 mejoran elementos de formulario, y se pontencia el elemento `input`:
- Añade nuevos tipos para poder seleccionar un color o una fecha, por ejemplo: seleccion de color, fecha, etc.
  El problema es que solo google chrome soporta todo.

- Añadiendo nuevos atributos para hacer autofocus del elemento o aplicar un patrón de entrada, por ejemplo.

* Seleccion de color
```html
    <input type="color"/>
```

* Seleccion de fecha
```html
    <input type="date"/>
```

* Seleccion de rango
```html
    <input type="range" min="0" max="0"/>
```

# Demo Formulario

Hay que tener en cuenta que todas las funcionalidades de `date` estan implementadas en todos los navegadores.

PAra ver el código `..Base_HTML5_CSS3\demo_Formulario.html`

# Audio y Video

Antes de HTML5, no existia un estandar de reproduccion de audio y video.
Se hacia a travez de plugins de terceros, como adobe flash.
Lo malo es que no todos los formatos habidos estan aceptados.
PEro evita al usuario la instalacion de un plugin.

Ahroa se usa el elemento `<audio controls>`, y actualmente se soportan formatos MP3, Wav y Ogg. Y hay que ver que formato soporta cada navegador.

```html
    <audio controls>
        <source src="robben_ford.mp3" type="audio/mpeg">
    </audio controls>
```

Otro elemento es el `<video controls>` y soporta los formatos Mp4, WebM y Ogg.

```html
    <video controls>
        <source src="robben_ford.mp4" type="audio/mp4">
    </video controls>
```

# Demo Audio / video

Podemos ver el código en `..Base_HTML5_CSS3\demo_Audio_Video.html`

# Canvas

Es un elemento que sirve para dibujar, es nada mas que un lienzo. 
Nos da un espacio de trabajo para pintar/dibujar en el.
No es nada mas un lienzo para pintar en el.
Como pintamos en el? Hay una API de java script para pintar en el, esta documentada y podemos pintar en 3D y 2D.
Pintas con javascript dentro de un elemento canvas.

* Como se usa el CANVAS
Con un elemento `<canvas>` y objeto `context`
Context es el objeto que tiene todas las propiedades y métodos para dibujar.

Se debe establecer un id, para poder pintar con javascript es para lelgar al canvas.
```html
    <!-- Elemento canvas -->
    <canvas id="my-canvas"></canvas>

    //Obteniendo el contexto
    <script>
        var element = document.getElementById("my-canvas");
        var context = element.getContext("2d");
    </script>
```
Luego con javascript debo llegar al elemento canvas, y luego para pintar hay que obtener el contexto.
Con el context accedemos al API de dibujo, con esto se le va ainyectar un monton de funcionalidades en 2D.

* Objeto `context`para 2D y 3D
PAra poder dibujar en 2D se debe obtener la referencia al elemento canvas y se obtiene el contexto 2D de ese canvas y ya tenemos la api disponible en el elemento para dibujar.

```html
    <script>
        var element = document.getElementById("my-canvas");
        var context = element.getContext("2d");
    </script>
```

Para dibujar en 3Dse usa el contexto `webgl` que ofrece herramientas para dibujar gráficos en 3 dimensiones.
Webgl, nos devuelve la api para dibujar en 3D.
Hay apis que son openGL que son libres, y se apoyan en el hardware gráfico.
Cuando se obtiene el contexto de webgl, es una capa sobre opengl, y se puede usar el hardware grafico de la máquina directamente desde el navegador.
Ejm: Hay juegos en html5, usan canvas con el contexto webgl que se apoya por debajo con `opengl`.

```html
    <script>
        var element = document.getElementById("my-canvas");
        var context = element.getContext("webgl");
    </script>
```

Hay que ver el soporte de esete elemento `<canvas>`, ya que no esta soportado en las versiones 8 y anteriores de Internet Explorer, asi como en demás navegadores.

Por su lado WebGL no esta soportado en todos los navegadores. Si necesitas un contexto 3D, cerciórarse de comprobar de que lo tienes disponible:

En el caso de hacer diseño o dibujo en 3D, hay una forma de saber si el navegador lo soporta y es con esta línea:
```js
    if (window.WebGLRenderingContext) {...}
```
Si esto devuelve `true`podriamos pintar, en caso contratrio no.

* Ejemplos
- 2D
    http://www.effectgames.com/demos/canvascycle/
- 3D
    http://www.chromeexperiments.com/webgl/


# Geolocalización

- Se ofrece la API `navigator.geolocation`, es pequeña y lo que hace es obtener un punto.
- Su uso requiere autorización por parte del usuario (se va a acceder a tu localizacion, estás de acuerdo si o no)
- La precisión es más alta en terminales con GPS.

- API `navigator.geolocation`

```html
    <script>
        // El navegador soporta geolocalizacion
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                // Una vez obtiene la posicion
                // Latitud: data.coords.latitude
                // Longitu: data.coords.longitude
                function(data) {/*Código*/}
                // El usuario no autorizó el suso de la geolocalización
                function() {/*Código*/}
            );
        }
        // El navegador no soporta geolocalizacion
        else {/*Código*/} 
    </script>
```

Tener en cuenta que html5 no va a pintar un mapa, simplemente va a devolver las coordenadas.

# Demo Geolocalizacion

PAra ver el código en `..Base_HTML5_CSS3\demo_Geolocalizacion.html`

Luego de que se obtenga la latitud y longitud, simplemente a alguna APi de mapas se le pasa estos datos (coordenadas).

# Almacenamiento | Web Storage
Web storage es un almacen para guardar datos, y viene a mejorar todas las cookies.
Desventajas de las cookies:
    - LAs cookies se pueden exportar a otroas paginas, ya que se pueden intersectar.
    - LAs cookies ocupan ancho de banda ya que se envian o viajan de un lado para otro. 
LA propuesta de html5 para mejorar est de las cookies es:
- El `web storage` es un almacen local de pares key-value de strings, como un hashmap.
    - Puedes escribir json o numeros pero se deben transformar a strings 
- MAs seguro y rápido que las tradicionales cookies
    - Cada página tiene acceso solo a sus datos locales.
    - Los datos no se incluyen en cada petición

* ¿Como funciona `web storage`?
Web storage nos da 2 propuestas, dependiendo de la funcionalidad.
- Una es `localStorage`, esta no tiene tiempo de expiración, podemos borrarlo, borrando los datos del navegador.
- Otra es `SessionStorage`

Funciona con el API `localStorage`
El almacen `localStorage` no tiene fecha de expiración

```html
    <script>
        //El navegador soporta Web Storage
        if (typeof(Storage) !== "undefined") {
            //Setter
            localStorage.setItem("pageSize", 10);
            //Getter
            var size = Number(localStorage.getItem("pageSize"));
        } 
        // El navegador no soporta Web Storage
        else {
            /*Código*/
        }
    </script>
```

El `sessionStorage` solo guarda datos de una session, si cerramos la pestaña, el dato guardado se pierde.
Este expira con la sesión actual, al cerrar la pestaña o ventana del navegador.

```html
    <script>
        //El navegador soporta Web Storage
        if (typeof(Storage) !== "undefined") {
           //Getter
           var pages = Number(sessionStorage.getItem("pagesNavigated")) + 1;
           //Setter
           sessionStorage.setItem("pagesNavigated", pages);
        } 
        // El navegador no soporta Web Storage
        else {
            /*Código*/
        }
    </script>
```
Lo usamos para gauardar datos de sesion, el ejm antertior, sirve para guardar el numero de paginas que hemos navegados y guardarlo en un contador.

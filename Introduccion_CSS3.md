# CSS3

CSS son las siglas de Cascading Style Sheets.
- Es un lenguaje para definir la presentación de documentos HTML.
- Pretende separa la estructura y presentacion de los documentos.
- Es un estandar del consorcio W3C
- desde el año 1966 surgio CSS y en el 2008 ya desde la version CCS3.

Así como en HTML5 algunas funcionalidades de CSS3 no estan soportadas en todos los navegadores.
Para copribar si la caracteristica de CSS3 que quieres usar esta soportada en los navegadores requeridos por tu proyecto podemos usar la siguiente página:

    https://caniuse.com/

Que nos aporta esta neuva version de CSS3

# Selectores

- Forma en la que con CSS llegamos a los elementos que son suceptibles de poder cambiar su estilo.
- La gerarquia de los elementos de HTML para dar estilo vamos a usar selectores.
- Al final las reglas son algo como esto:
    Cuando queremos mediante css posicionarnos en un elemento para darles estilo.

```html
    <style>
        /* Elementos 'a' cuyo atributo href comience por 'http://www.keepc' */
        a[href^="http://www.keepc"] { color: orange; }
    </style>

    <ul>
        <li><a href="https://keepcoding.io/es/">Ir a keepcoding</a></li>
        <li><a href="https://www.w3.org/">Ir a W3C</a></li>
        <li><a href="https://angular.io/">Ir a Angular</a></li>
        <li><a href="https://vuejs.org/">Ir a VueJs</a></li>
        <li><a href="https://reactjs.org/">Ir a ReactJs</a></li>
    </ul>
```

Como vemos en el bloque `style` vemos el `href^`, es un nuevo selector en CSS3.
Podemos llegar a los elementos tambien con el id.
Con los selectores nuevos podemos seleccionar segun el atributo, como vemos en el ejemplo anterior.
Seleccionamos los elementos a cuya propiedad href usando el circunflejo, seleccionamos elementos a cuyo atributo de href empieza con http://www.keepc.

Otro ejemplo de selector por el atributo es el siguiente:

```html
    <style>
        /* Elementos 'a' cuyo atributo href termine por 'es' */
        a[href$="io"] { color: red; }
    </style>

    <ul>
        <li><a href="https://keepcoding.io/es/">Ir a keepcoding</a></li>
        <li><a href="https://www.w3.org/">Ir a W3C</a></li>
        <li><a href="https://angular.io/">Ir a Angular</a></li>
        <li><a href="https://vuejs.org/">Ir a VueJs</a></li>
        <li><a href="https://reactjs.org/">Ir a ReactJs</a></li>
    </ul>
```
El signo dolar lo que nos indica es final de línea o que termine con el valor es.

Por último otro nivel de atributo es cuando se selecciona un atributo que contenga algun contenido usando el asterisoc '*'.

```html
    <style>
        /* Elementos 'a' cuyo atributo href contenga 'vuejs' */
        a[href*="vuejs"] { color: green; }
    </style>

    <ul>
        <li><a href="https://keepcoding.io/es/">Ir a keepcoding</a></li>
        <li><a href="https://www.w3.org/">Ir a W3C</a></li>
        <li><a href="https://angular.io/">Ir a Angular</a></li>
        <li><a href="https://vuejs.org/">Ir a VueJs</a></li>
        <li><a href="https://reactjs.org/">Ir a ReactJs</a></li>
    </ul>
```

Que otros selectores de textoo tenemos:

- Tenemos uno para seleccionar la primera linea de un elemento:

```html
<style>
    /* Primera línea del texto de un elemento 'p'*/
    p::first-line { color: red} ;
</style>
```

Esto establece estilo de color rojo solo a la primera línea de un párrafo.

- Tenemos uno para seleccionar la primera letra de un texto:

```html
<style>
    /* Primera línea del texto de un elemento 'p'*/
    p::first-letter { font-size: 24px} ;
</style>
```

Esto le da a la primera letra de un texto un tamaño de 24 pixeles tipo una letra capital.

- Tenemos uno para seleccionar la parte del texto que se selecciona o subraya con el puntero:

```html
<style>
    /* Texto seleccionado de un elemento 'p'*/
    p::selection { color: white; background-color: green; }
</style>
```

# Demo Selectores

El código lo podemos ver en `demo_Selectores.html`.

# Degradados

Antes los degradados se hacian con imagenes, se hacia la imagen degradada en phtoshop y se ponia como fondo de la caja esa imagen de degradado.

Ahora CSS3, nos ofrece 2 posibilidades de degradado:

* Degradado Lineal

Este se lo podia hacer por el atributo `id` del elemento, en este caso el id de este elemento tiene el nombre de "linear".

La lista de colores aquí es indefinida.

```html
<style>
    /* Degradado lineal con inclinación de 45 grados */
    #linear{
        background: linear-gradient(45deg, red, yellow, green, blue);
    }
</style>
```


* Degradado Radial

Al ser radial los grados no aplican.

La lista de colores aquí es indefinida.

```html
<style>
    /* Degradado radial */
    #radial{
        background: linear-gradient(red, yellow, green, blue);
    }
</style>
```

# Demo degradados

Podemos ver el código en `demo_Degradados.html`.

# Sombras

Las sombras al igual que los degradados es un elemento que nos ofrece CSS3.
Como aplicamos sombras con css3:

```html
<style>
    /* Sombra con 2px de distancia vertical y horizontal, 20px de tamaño y color gris */
    #shadow {
        box-shadow: 2px 2px 20px #888;
    }
</style>

<div id="shadow"></div>

```

La sombra se pinta tanto fuera o dentro de la caja.
Empieza a íntarse de forma vertical osea arriba a abajo lo que representa el 1er atributo. 2px derecha
Luego en forma horizontal de izquierda a derecha que representa al 2do atributo. 2px
El tercer atributo  es el tamaño de la sombra o el alfa, el porcentaje de transparencia.

# Demo Sombras

Para ver el código de la demo de sombras en `demo_Sombras.html`.

# Tipografias

Las tipografias siempre han sido muy estandar en la web, solo se podian usar las que estaban en todos los sistemas operativos.

Ahora el navegador se descarga la tipografia para renderizar localmente.

CSS3 soporta los siguientes formatos de tipografías:
* OTF / TTF, OpenType Font / Truetype Font.
* WOFF, Web Open Forn Format, impulsada por Modzilla.
* SVG, Scalable Vector Graphics, solo Safari lo lee como tipografia.
* EOT, Embedded Open Type, impulsada por Microsoft

Como se utilizan las tipografias personalizadas: a traves de reglas.

* Que sean definidas en una regla de css3 `@font-face`, aquí vamos a establecer caracteristicas de la tipografia a usar en la regla, como especie de setting, forma, caracteristicas, luego lo usamos a travez del atributo `font-family` con ese atacariamos esa regla. Ejm.

```html
<style>
    @font-face {
        font-family: "Lobster";
        font-style: normal;
        font-weight: 400;
        src: url(lobster.woff2);
    }
    p { font-family: "Lobster"; }
</style>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde minima quod nesciunt tempora maiores asperiores omnis ab cumque officiis aut adipisci magnam rerum dolores odit laborum, similique pariatur labore?</p>
```


# Demo Tipografias

Podemos ver el código en `demo_Tipografias.html`.

# Animaciones

Con CSS3 Se pueden hacer pequeños movimientos de traslación, cambiar tamaños y colores de cajas.
Las animaciones requieren:
* Que sean definidas en una regla `@keyframes`, son las caracteristicas de la animación, la mecanica es identica a la de las tipografias personalizadas que se vio anteriormente.
* que se usen a través de la propiedad animation, haciendo referencia al nombre asignado en la regla.
  
En el siguiente código vemos el código de una animación, lo que se poner dentro de la regla _myFirstAnimation_ son los **stoppers** o **keyframe**.
Ademas se definen los keyframes, que son los puntos de la animación siendo los keyframes que sean necesarios o como se requieran.

```html
<style>
    #animated {
        animation: myFirstAnimation 5s;
    }

    @keyframes myFirstAnimation {
        0% { background: red; }
        50% { background: yellow; }
        100% { background: red; }
    }
</style>

<div id="animated"></div>
```

Para usar, primero seleccionamos la caja con el id, luego usando la propiedad `animation` la usamos, esta en el primer valor a pasarle es el nombre de la regla o animación que se creo, luego el tiempo de duración de la animación en segundos.

* Consejos:

Por temas de compatibilidad en navegadores Chrome, Safari y Opera, hay que añadir `-webkit-` tanto en la definición de la regla como al hacer uso de ella:

```html
<style>
    /* Sintaxis estándar */
    @keyframes myAnimation {}
    #animated { animation: myFirstAnimation 5s; }

    /* Chrome, Safari y Opera */
    @-webkit-keyframes myAnimation {}
    #animated { -webkit-animation: myAnimation 5s; }
</style>
```

Esto porque algunos navegadores no soportan estos comando animation, y obligan a que se usen el -webkit-

# Demo Animaciones

Para ver el código en `demo_Animaciones.html`.

# Diseño Adaptativo - Responsive Design

Conocido como Responsive Design.
El diseño responsive pretende:
* Adaptar la aparencia de una pagina o aplicación web al dispositivo donde se muestra.
* Es decir, tener un solo diseño y que éste pueda adaptarse.
* Evitar desarrollos ad-hoc para cada dispositivo.
* Evitar la complejidad de tener varias versiones de una misma página o aplicación.

Se encarga que el ocntenido de la página se adapte al contenedor o navegador.
la forma de trabajar es a base de columnas, esto está inspirado en la prensa impresa, ya que esto se distribuye o imprime en columnas.

- Un formato de escritorio esta conformada de 5 columnas.
- Un formato de tablet, tiene 4 columnas. Hay que evitar los scrollbar horizontales, ya que se vuelve poco usable.
- Un formato de Smartphone, es de 3 columnas. Se redistribuye  todo el contenido.

# Media Queries

Comprendiendo las `@media` queries, que son reglas de CSS3.

```css
@media tipo_de_dispositivo and|not|only (atributo) {
    /* Estilos */
}
```

Van a poyadas en el espacio disponibles del contenedor o navegador.

El primer valor que pasamos es a los media querys en el dispotivo.

Tipos de dispositivo:
* **all**, para cualquier tipo de dispositivo
* **print**, para impresoras
* **screen**, para pantallas de ordenador, tablet o smartphone
* **speech**, para dispositivos que leen la pantalla.

Lo segundo que se le pasa a los media querys son los modificadores:
Tiene esta serie de modificadores:
* and = sumaria
* not = negaria
* only =  si y solo sí.

Luego se pasan los atributos en donde podríamos usar estos diferentes:
Atributos:
* **max-width**, indica el ancho máximo de área disponible no resolución del dispositivo.
* **max-device-width**, indica el ancho máximo del dispositivo
* **orientation**, indica la disposición del dispositivo

en función de donde este corriendo esta media query, va a devolver true o false y a partir de ahi aplicar los diferentes estilos css.

# Ejemplos Media Queries

Aqui algunos ejemplos de media queries:

```css
/* Pantalla de ordenado, tablet o smartphone dispuesta horizontalmente */
@media screen and (orientation: landscape) { ... }

/* Impresión dispuesta verticalmente, o bien cualquier dispositivo cuyo ancho máximo sea 800px */
@media print and (orientation: portrait), (max-width: 800px) { ... }

/* Solo pantallas de ordenador, tablet o smartphone en color */
@media only screen and (color) { ... }
```

Hay un monto de atributos que se pueden usar. 

Una forma adecuada o mas optima para escribir y usar media queries es linkeando a archivos css externos.

```html
<!-- Pantalla de ordenado, tablet o smartphone dispuesta horizontalmente -->
<link rel="stylesheet" media="screen and (orientation: landscape)" href="my_stylesheet_01.css">

<!-- Impresión dispuesta verticalmente, o bien cualquier dispositivo cuyo ancho máximo sea 800px -->
<link rel="stylesheet" media="print and (orientation: portrait), (max-width: 800px)" href="my_stylesheet_02.css">

<!-- Solo pantallas de ordenador, tablet o smartphone en color -->
<link rel="stylesheet" media="only screen and (color)" href="my_stylesheet_03.css">
```

* Consejos:

No hagas trabajo de más. Hay muchos frameworks CSS3 que aportan diseño adaptativo a tus páginas y aplicaciones web, como Bootstrap, Foundation o Skeleton. Haz uso de ellos y adapta solo aquellos aspectos que no encajan con los requerimientos de tus diseños.
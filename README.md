# Desafío - Sugerencia de Vídeos

### Alumno: Javier Alejandro Castillo Oñatt

Es importante destacar que el propósito de este desafío es trabajar directamente en un
archivo JavaScript, por lo tanto, en el archivo denominado Apoyo Desafío - Sugerencia de
Vídeos, encontrarás todos los archivos necesarios, como: imagen, maqueta HTML y hoja de
estilos. Igualmente, el menú colapsable ya está funcionando con Bootstrap, solo hace falta
que se muestren los videos automáticamente cuando se cargue la página y queden
disponibles cuando el usuario haga un clic sobre cada título del menú. Estos videos serán
insertados dinámicamente desde JavaScript implementando clases, polimorfismo, closures
y patrón módulo.

## Requerimientos

1. Implementar el Patrón Módulo mediante IIFE para crear tres variables privadas, cada
una correspondiente al elemento HTML donde se mostraran los videos. Estos
elementos se encuentran ya identificados con un “id” en el archivo HTML. (2 Punto)
2. Crear tres funciones privadas que permitan insertar el video recibido en el
documento HTML, utilizando las variables privadas declaradas anteriormente. Dato:
puedes utilizar la instrucción “insertAdjacentHTML” para manipular el DOM. (1
Punto)
3. La función autoejecutable (IIFE), debe retornar tres funciones públicas que reciban el
elemento (video) a mostrar y realicen el llamado a las funciones internas (privadas)
para insertar el elemento recibido. (1 Punto)
4. Crear tres variables públicas con los elementos pertenecientes a los videos fuera del
IIFE. Estos elementos pueden ser etiquetas <iframe> como las que entregan
plataformas en línea de reproducción de videos. (1 Punto)
5. Establecer una clase padre denominada Video, que reciba las tres variables públicas
creadas anteriormente. Igualmente se deben proteger los atributos de la clase padre
implementado closures. Además de agregar tres métodos que permitan llamar a las
funciones públicas de la IIFE para poder insertar los videos. (2 Punto)
6. Implementar una clase para cada categoría del menú que sean hijas de la clase
padre Video. Cada clase tendrá un método que llamará a la función pública para
insertar el video correspondiente dependiendo de la categoría del menú. (2 Punto)
7. Instanciar cada clase hija pasando como argumento las variables públicas creadas
con los elementos pertenecientes a los videos, para así hacer el llamado
correspondiente al método de cada clase que permite insertar los videos en el
documento HTML. (1 Punto)

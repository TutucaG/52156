Proyecto "Intérprete de textos"

Este proyecto es un analizador sintáctico para un lenguaje personalizado enfocado en declaración de variables, 
definición y ejecución de funciones, transformaciones de cadenas de texto, impresión y retorno de valores.

🧠 ¿Qué hace el analizador?

✅ Reconoce declaraciones de variables con asignación opcional.

✅ Permite definir funciones con argumentos y un bloque de instrucciones.

✅ Soporta transformaciones de texto como mayúsculas, minúsculas, invertir texto, obtener longitud y reemplazar contenido.

✅ Permite imprimir valores y retornar resultados desde funciones.

⚠️ No contempla operaciones aritméticas complejas ni estructuras condicionales o de repetición.


//ATENCION:

 Hay palabras que se llaman en el programa pero despues no se declaran como:

_ejecucion, variable, numeros, concatenar.
_concatenar: nunca es llamado por el programa.
_Se decidio hacer las siguientes derivacions:
_Ejecucion: 1-se derivo para poder hacer una llamado a una funcion asi mostrar el resultado en consola.
            2-se derivo hacia impresion para poder mostrar las variables declaradas en consola.
_Variable: se hizo una derivacion hacia NOMBRE
_Numeros: de hizo su respecta derivacion a [0-9]+

//Estas declaraciones fueron consultadas con los profesores antes de hacerlas...


 Requisitos para inicializar el interprete:

Antes de ejecutar el proyecto, asegurate de tener instalado:

Node.js, Java (JDK), ANTLR4 Extensión ANTLR4 Grammar Syntax Support en Visual Studio Code (para depurar y ver el árbol)

 ¿Cómo preparar el proyecto? 

1-Cloná el repositorio: 

copia el link del repositorio y abri simbolo del sistema y escribi:

git clone "pega el link del repositorio"

2-Opciones para ejecutarlo:

a- Mediante Simbolo del Sistema:

Para ello abra el buscandor de windows y busque simbolo del sistema y abra el programa
 
Ingrese: cd "direccion de donde se encuentra el archivo".Presione enter.
NOTA: para buscar la direccion del archivo: vaya a la direccion donde se 
encuentra el archivo, haga click derecho y aprete en copiar direccion del archivo.

Luego ingrese: "npm start" (esto iniciara la ejecucion del interprete)

Posteriormente se le pedira ingrese una cadena, vaya a la carpeta Ejemplos.txt y copie uno de los ejemplos(Ctrl + c) y peguelo 
en el simbolo del sistema (Ctrl + v).Presione enter.

En unos instantes se le habra generado la tabla de tokens y lexemas, el arbol de derivacion (no graficamente), la traduccion del input ingresado a JavaScript
y el resultado en consola...

Para seguir probando ejemplos ingrese nuevamente "npm start" y se le mostrata nuevamente la opcion de colocar otra cadena, prosiga como explicado anteriormente.

Asi puede hacer con cada uno de los ejemplos.

✅ Si no hay errores de sintaxis, verás un mensaje de entrada válido.

❌ Si hay errores, se mostrara cual y mostrara la linea donde surge.

📝 Se mostrará el código JavaScript generado a partir del código fuente.

✅ Se mostrara el resultado de la traduccion.


b-Mediante Visual Studio code:

Abra Visual Studio Code.

Vaya a File o archivo(arriba a la izquierda) y busque Open folder o abrir carpeta.
Busque la carpeta del archivo clonado y abralo.

La gramatica del interprete se encontrara en el archivo Mi_analizador2, haga click para que ANTLR4 lo detecte.
Posteriormente vaya a los tres puntitos ... (arriba a la izquierda) y aprete terminal-New terminal.
Para inicializar el programa escriba:
node index.js (presione enter)

Se le pedira ingresar una cadena:
Copie uno de los ejemplos que se encuentra en la carpeta Ejemplos (Ctrl + c) y pegalo  (Ctrl + v).(Presione enter)

En unos instantes se le habra generado la tabla de tokens y lexemas, el arbol de derivacion (no graficamente), la traduccion del input ingresado a JavaScript
y el resultado en consola...

Para seguir probando ejemplos ingrese nuevamente node index.js y se le mostrata nuevamente la opcion de colocar otra cadena, prosiga como explicado anteriormente.

Asi puede hacer con cada uno de los ejemplos.

✅ Si no hay errores de sintaxis, verás un mensaje de entrada válido.

❌ Si hay errores, se mostrara cual y mostrara la linea donde surge.

📝 Se mostrará el código JavaScript generado a partir del código fuente.

✅ Se mostrara el resultado de la traduccion.

Opcional: Ver el arbol graficamente(SOLO EN VISUAL STUDIO CODE):
Dirijase a input.txt ahi es donde se colocaran los ejemplos.
Para hacerlo:
Copie uno de los ejemplos que se encuentra en la carpeta Ejemplos (Ctrl + c) y pegalo en input.txt (Ctrl + v).
Guarda el ejemplo (Ctrl + s)  y luego proceda a hacer funcionar el programa con f5 o colocando Start debugging en el boton de run(en el panel de arriba a la izquierda).
Si hay errores se podran en el grafico del arbol marcado con rojo sino estara todo en verde.
Puede hacer lo mismo para cada uno de los ejemplos.

FIN



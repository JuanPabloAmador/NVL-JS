/*  1º Crear array con al menos 3 elementos dobles
    2º Indicar longitud array
    3º Indicar longitud de uno de los elementos del array
    4º Mostrar por pantalla el valor del segundo elemento,
    contenido en el TERCER elemento del array" */

//Creando un nuevo array.
var newArray = new Array();
newArray[0] = [1,2];
newArray[1] = [3,4];
newArray[2] = [5,6];
newArray[3] = [7,8];

//Indicar la longitud del array.
document.write ("La longitud del Array 'newArray' es: " + newArray.length + "<br>");

//Indicar la longitud de uno de los elementos del array.

document.write("La longitud del elemento indice 1 del Array 'newArray es: " + newArray[1].length + "<br>");

//Mostrar por pantalla el valor del segundo elemento del contenido del tercer elemento del array.

document.write("El valor del segundo elemento, del elemento indice 2 del array 'newArray? es: " + newArray[2][1]);
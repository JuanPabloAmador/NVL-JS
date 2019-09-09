var arPares = new Array;
var arImpares = new Array;

function numerosAleatoriosArrays(cantidadNumeros) {
    for (i = 0; i <= cantidadNumeros; i++) {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        if (randomNumber % 2 == 0) {
            arPares.push(randomNumber);
        }
        else { arImpares.push(randomNumber) }
    }

}
numerosAleatoriosArrays(50);

document.write("El array de numeros impares contiene: ")
document.write(arImpares);
document.write("<br>")
document.write("El array de numeros pares contiene: ")
document.write(arPares);
document.write("<br>");
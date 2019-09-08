//Creación de variables con ciudades y dias

var dias = ("Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo");
var ciudades = ("Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti");
// Convertir las variables en Arrays
arDias = dias.split(",");
arCiudades = ciudades.split(".");

// Iterar por el primer array para añadirle a cada indice el parametro ciudad
for (i=0; i<arCiudades.length; i++){

arDias[i] = [arDias[i],arCiudades[i]]

document.write(arDias[i] + "<br>")
}


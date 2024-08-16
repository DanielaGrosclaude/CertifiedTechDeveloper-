//Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()
let array1 = ['a','b','c'];
let array2 = ['d','f','g'];

let arrayUnido = array1.concat(array2);
console.log(arrayUnido);
//Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro 
//y elimine el primer elemento. La función debe devolver el elemento eliminado.

function eliminarPrimerElemento (a){

    let eliminarElemento = a.shift();

}
let arrayParaEliminar = ["1","2","3","4"];
eliminarPrimerElemento(arrayParaEliminar);

console.log(arrayParaEliminar);

//Convertir texto: Crea una función que reciba un string por parámetro y 
//lo convierta a mayúsculas y minúsculas respectivamente. 
//La función deberá mostrar los resultados por consola. 
//Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()

function convertirTexto(string){

    let fraseMayuscula = string.toUpperCase()
    let fraseMinuscula = string.toLowerCase()

    console.log(fraseMayuscula);
    console.log(fraseMinuscula);
}

let string = "hola";
convertirTexto(string);

//Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. 
//Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores.
//Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’.
//Llama nuevamente a la función creada para visualizar el cambio efectuado.

let persona = {
    nombre : "Lucio",
    edad : 18,
    ocupacion : "Estudiante",
    ubicacion : {
        codigoPostal : 1405,
        ciudad : "Moron",
        calle : "Pacheco",
        numero : 1305
    }
}
/*
function mostrarObjeto(objeto){

    console.log(objeto.nombre);
    console.log(objeto.edad);
    console.log(objeto.ocupacion)
    console.log(objeto.habilidad);

}

mostrarObjeto(persona);

persona.habilidad = "Calistenia";
persona.ocupacion = "Abogado";

mostrarObjeto(persona);*/

//Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, 
//donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. 
//Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

function eliminarPropiedad (objeto, propiedad){
    switch(propiedad){
        case "nombre":
            delete objeto.nombre;
        break;
        case "edad":
            delete objeto.edad;
        break;
        case "ocupacion":
            delete objeto.ocupacion;
        break;
        case "habilidad":
            delete objeto.habilidad;
        break;
        case "ubicacion":
            delete objeto.ubicacion;
        break;
    }
}

eliminarPropiedad(persona, "nombre");
console.log(persona);
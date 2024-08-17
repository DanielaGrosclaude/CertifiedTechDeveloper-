// strings y accesos unicos

let saludo = "Hola Mundo!";
console.log(saludo[10]);

//.length retorna la total cantidad de caracteres que tiene el string + espacios
let miSerie = "Mad Men";
console.log(miSerie.length);

// .indexOf() 

let saludoMundo = "Hola! Mundo!";
console.log(saludoMundo.indexOf("o"));


// .slice() 

let frase = "Hola, como estas?";

//opcion 1 
console.log(frase.slice(2,5));

//opcion 2

console.log(frase.slice(6));

// opcion 3 contabiliza desde atras hacia delante

console.log(frase.slice(-3));

//.trim() elimina los espacios del principio y del final

let nombreCompleto = "     Homero Simpson";
console.log(nombreCompleto.trim());

//.split()

let saluditos = "Hola, como te va?";

let arrayNuevo = saluditos.split(", ");
console.log(arrayNuevo);

//.replace()

let frases = "Me encanta Java";
let fraseNueva = frase.replace("Java", "Javascript");
console.log(fraseNueva);

/* .slice()
Sintaxis: let newArray = arrayOriginal.slice(inicio, fin);
*/

let frutas = ["Manzana", "Naranja", "Banana", "Kiwi"];

let primerasTres = frutas.slice(0,3);
console.log(primerasTres);

let desdeNaranja = frutas.slice(1);
console.log(desdeNaranja);

let ultimasDos = frutas.slice(-2);
console.log(ultimasDos);

let entreDosindices = frutas.slice(-3, 3);
console.log(entreDosindices);

/* .splice()
Sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...);
 */

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// meses.splice(1, 2, "NuevoMes1" );
// console.log(meses);

meses.splice(2,0,"NuevoMes3");
console.log(meses);

/*.sort()
arrayOriginal.sort();
*/

let numero = [5,6,34,4,6,3];

numero.sort();
console.log(numero);

let palabras = ["Hola", "Leo", "Mate", "Koshka"];

console.log(palabras.sort());

/* .find()
Sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));
 */

let edades = [1,18,30,15,22];

let mayorDeEdad = edades.find(edad => edad >= 18);

console.log(mayorDeEdad);

// .map()

let numeros = [2,4,6];
let numerosMultiplicados = numeros.map(function(num){
    return num * 2;
});

console.log(numerosMultiplicados);

// .filter()

let edad = [16, 14, 29, 34, 56];

let mayores = edad.filter(function(edad){
    return edad > 18
});

console.log(mayores);


// .reduce()

let nums = [5,7,18];
let suma = nums.reduce(function(acum,num){
    return acum + num;
});

console.log(suma);

// .forEach()

let paises = ["Argentina", "Colombia", "Brasil"];

paises.forEach(function(pais){
    console.log(pais);
});
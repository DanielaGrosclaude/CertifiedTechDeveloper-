let edades = [25, 57, 18, 29, 3];


console.log(edades[1]);

let nombrecitos = ["Juana", "Daniela", "Javier", "Luis"];

let combinados = ["12", 32, "Hola", true];


for(let i = 0; i < 5; i++){
    console.log(nombrecitos[i]);
}

//algoritmos clasicos con arrays

let numeros = [10,20,30,40,50];

//modificar cada uno de los elementos del array e imprimirlo

//for (let i=0; i<numeros.length; i++){
//    numeros [i] = i+1;
//}

// numeros [1] = 44;

for (let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}

// AGREGAR ELEMENTOS AL ARRAY 

let notas = [4,8,9,3];

notas [3] = 7;

notas[notas.length] = 7;

for (let i=0; i<numeros.length; i++){
    console.log(notas[i]);
}

//EXTRAER ELEMENTOS DE UN ARRAY A UNA VARIABLE

let nombres = ["Julio", "Adriana", "Pedro"];

let nombreSeleccionado = nombres [1];
console.log(nombreSeleccionado);

// EXTRAER TODOS LOS ELEMENTOS DE UN ARRAY

let numerillos = [10,20,30,40,50];
sumaNumeros = 0;

for (let i=0; i< numerillos.length; i++){
//  sumaNumeros = sumaNumeros + numeros [i];
    sumaNumeros += numerillos[i];
}

let promedio = sumaNumeros / numerillos.length;

console.log("El promedio es de: " + promedio)


//ENCONTRAR EL MAYOR O MENOR

let nums = [10, 20, 4, 2, 3];
let menor = nums [0];

for(let i = 0; i < nums.length; i++){
    if (nums[i]< menor){
        menor = nums[i];
    }else{
        console.log("el numero"+ [i] + "no es menor")
    }
}

console.log(menor);

//METODOS CON ARRAYS

//.push() 
/*let colores = ["Rojo", "Naranja", "Azul"];

colores.push("Violeta", "Gris");
console.log(colores);
*/
//.pop() elimina el ultimo elemento de un arreglo
let colores = ["Rojo", "Naranja", "Azul"];
let coloresEliminado = colores.pop();

console.log(colores);
console.log(coloresEliminado);

//.shift() elimina el primer elemento de un arreglo
let nombre = ["Sandra", "Lautaro", "Ezequiel"];
let nombreEliminado = nombre.shift();

console.log(nombre);
console.log(nombreEliminado);
//.unshift() agrega uno o mas elementos adelante

let marcas = ["Audi"];

marcas.unshift("Toyota");
console.log(marcas);

//.join() une los elementos a un solo string

let dias = ["Lunes", "Martes", "Miercoles"]
let separadosPorComa = dias.join();

console.log(separadosPorComa);
let separadosPorGuion = dias.join(" - ");
console.log(separadosPorGuion);

//.indexOf() busca un elemento por array y retorna el indice 

let frutas = ["Manzana", "Banana", "Frutilla"];

let indiceEcontrado = frutas.indexOf("Aguacate");
console.log(indiceEcontrado);

//.lastIndexOf()  busca un elemento por array y retorna el indice pero al reves

let clubes = ["River", "Boca", "Lanus", "Newells"];
let posicionEncontrada = clubes.lastIndexOf("Boca");
console.log(posicionEncontrada);

//.includes(); busca un elemento y retorna un booleano

let equipos = ["Equipo1", "Equipo2", "Equipo3"];
let equipoEncontrado = equipos.includes("Boca");
console.log(equipoEncontrado);
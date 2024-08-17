 function separar(){
    console.log("--------------------")
 }
 
 // crear una matriz 

 // [fila 0 [1,2,3,4], fila 2[4,5,6], fila 3[7,8,9]];
let matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

// opcion 2
let arrayMatriz = [];

let fila1 =["x0", "x1", "x2"];
let fila2 =["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

// visualizar una matriz
console.table(matriz);
console.table(arrayMatriz);

// acceder a un elemento especifico

console.log(matriz[1][1]);

// modificar un elemento especifico

matriz[0][1] = 15;

console.table(matriz);

//recorrer una columna especifica
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i][0]);
}

//recorrer una fila especifica 

for(let i = 0; i < matriz.length; i++){
    console.log(matriz[0][i]);
}
separar();
// Recorrer la totalidad de datos de la matriz

console.table(matriz);

for(let i = 0; i < matriz.length; i++){ // for para recorrer las filas 
    for(let j = 0; j< matriz.length; j++){

        console.log(matriz[i][j]);

    }
}
separar();
//Filtrar dentro de matrices
//Este recorre el array para determinar si es numero par o no
for (let i = 0; i < matriz.length; i++){
    for(let j = 0; j< matriz.length; j++){
        if(matriz[i][j]% 2 == 0){
            console.log(matriz[i][j]);
        }
    }
}
separar();
// Otra matriz


let otraMatriz = [
    [1,2,3],
    [4,5,6],
];

for (let i = 0; i < otraMatriz.length; i++){
    for(let j = 0; j< otraMatriz[i].length; j++){
        if(otraMatriz[i][j]% 2 == 0){
            console.log(otraMatriz[i][j]);
        }
    }
}
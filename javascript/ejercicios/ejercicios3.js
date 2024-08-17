/*
Matrices
Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, 
al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
 Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
 Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una
semana específica. Recordemos que cada fila representa una semana. 
El número de semana deberá recibirse por parámetro.
Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un 
día específico de la semana. 
Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. 
El número correspondiente al día deberá recibirse por parámetro. 
Recuerda que el número de día es determinado por las columnas.
Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. 
La función deberá retornar dicho valor.
Callbacks
Gastos por semana:
Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales.
 En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. 
 Será obligatorio el uso de callbacks para esta función.
*/
const prompt = require("prompt-sync")({ sigint: true });

let mes = [
    [1,2,3,4,5,7],
    [1,2,3,4,5,7],
    [1,2,3,4,5,7],
    [1,2,3,4,5,7]
];

let gasto = parseInt(prompt("Por favor ingrese el gasto total del dia: "));
mes[0][1] = gasto;

console.table(mes);
sumaDeGastos = 0;

function gastoSemana (indice){
    for(let i = 0; i < mes.length; i++){
        
        sumaDeGastos += sumaDeGastos;
        console.log(mes[0][i]);
    }
    console.log("La suma de gastos semanal es de: " + sumaDeGastos);
}
console.log(gastoSemana)
console.log(mes);
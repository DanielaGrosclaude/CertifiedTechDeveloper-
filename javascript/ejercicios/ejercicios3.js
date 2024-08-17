/*
Matrices
Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, 
al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
 Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
 Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
- Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una
semana específica. Recordemos que cada fila representa una semana. El número de semana deberá recibirse por parámetro.
Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un 
día específico de la semana. Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. 
El número correspondiente al día deberá recibirse por parámetro. Recuerda que el número de día es determinado por las columnas.
- Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. 
La función deberá retornar dicho valor.
- Gastos por semana: Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales.
 En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. 
 Será obligatorio el uso de callbacks para esta función.
*/
let mes = [ 
    [16, 245, 35, 412, 556, 7567, 34, 2900],      //semana 1 
    [145, 243, 32, 42, 534, 7789, 3443, 1200],    //semana 2
    [12, 32, 3, 4756, 5756, 79, 9000, 220],       //semana 3
    [1234, 2543, 386, 4657, 50, 765, 3230]        //semana 4 
];

function gastosDeUnaSemana (matriz, semana){
    
    let sumaDeGastos = 0;

    for (let i = 0; i < matriz[semana].length; i++){
        sumaDeGastos += matriz[semana-1][i];
    }
    return sumaDeGastos;
}

let sumaDeGastosSemanales = gastosDeUnaSemana(mes, 2);    
console.log("Los gastos de la semana 2 fueron: " + sumaDeGastosSemanales);



function gastosDeUnDiaDeLaSemana(matriz, numDeDia){

    gastosdeUnDia = 0;

    for(let i = 0; i < matriz.length; i++){
        gastosdeUnDia += matriz[i][numDeDia-1];
    }
    return gastosDeUnDiaDeLaSemana;
}

let gastosTotales = gastosDeUnDiaDeLaSemana(mes, 1);
console.log("Los gastos de todos los lunes fueron: " + gastosTotales);


// Gastos totalees

function gastosDeTodoElMes(matriz){

    let gastoMensual = 0;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0 ; j < matriz[i].length; j ++){
            gastoMensual += matriz[i][j];
        }
    }
    return gastoMensual;
}

let gastosMensuales = gastosDeTodoElMes(mes);
console.log("Los gastos de todo el mes fueron: " + gastosMensuales);


// Callbacks gastos por semana 

let totalGastosPorSemana = [];
let gastosSemanales = 0; 
function calcularTotalDeGastosPorSemana(matriz, callback){

    matriz.forEach(function(semana) {
        gastosSemanales = semana.reduce(function(total, dia){

        return total + dia;
        });

        totalGastosPorSemana.push(gastosSemanales);

    },0);

    callback(totalGastosPorSemana);
}

// otra funcion
function mostrarResultados(resultados){
    console.log("Total de gastos por semana: " + resultados);
}

calcularTotalDeGastosPorSemana(mes, mostrarResultados);
console.log("")
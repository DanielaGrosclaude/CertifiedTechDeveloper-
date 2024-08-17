
const prompt = require("prompt-sync")({ sigint: true });

// let numero = prompt("Por favor, ingrese un numero que desee:");
// console.log("El numero que ha seleccionado es: ", numero);


function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

let resultadoSuma = suma();
console.log(resultadoSuma);

//Resta

function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

let resultadoResta = resta();
console.log(resultadoResta);

//Dividir

function division(num1, num2){
    if (num2 == 0){
        console.log("No se puede dividir por 0.")
    }else{
    return  num1/ num2;}
}

let resultadoDivision= division(10,0);
console.log(resultadoDivision);

// Multiplicacion 

function multiplicacion(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

let resultadoMultiplicacion = multiplicacion();
console.log(resultadoMultiplicacion);



console.log("Bienvenido a su calculadora digital!");
console.log("Indique que operacion desea realizar: ");
console.log("1. Suma")
console.log("2. Resta")
console.log("3. Multiplicacion")
console.log("4. Division")
let opcion = parseInt(prompt("Indique que operacion desea realizar: "));

let numero1;
let numero2;
let resultado;


switch(opcion){
    case 1:
        numero1 = parseInt(prompt("Indique el primer numero"));
        numero2 = parseInt(prompt("Indique el segundo numero"));
        resultado = suma(numero1, numero2);
        console.log("El resultado de la suma es:"+ resultado);
        break;
    case 2:
        numero1 = parseInt(prompt("Indique el primer numero"));
        numero2 = parseInt(prompt("Indique el segundo numero"));
        resultado = resta(numero1, numero2);
        console.log("El resultado de la resta es: " + resultado);
        break;
    case 3:
        numero1 = parseInt(prompt("Indique el primer numero"));
        numero2 = parseInt(prompt("Indique el segundo numero"));
        resultado = multiplicacion(numero1, numero2);
        console.log("El resultado de la multiplicacion es: " + resultado);
        break;
    case 4:
        numero1 = parseInt(prompt("Indique el primer numero"));
        numero2 = parseInt(prompt("Indique el segundo numero"));
        resultado = division(numero1, numero2);
        console.log("El resultado de la division es: " + resultado);
        if(typeof resultado =="string"){
            console.log(resultado);
        }
        break;          
    default:
        console.log("Ingreso una opcion no valida.")
        break;
}
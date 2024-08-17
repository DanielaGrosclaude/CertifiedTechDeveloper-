let nota1 = 7;
let nota2 = 5;
let resultado;


// and true false
resultado = (nota1 > 6) || (nota2 > 6);
console.log(resultado);


// definicion o declaracion de una funcion

function saludar (){
    console.log ("hola")
}

// invocacion o llamado de una funcion

saludar();
saludar();
saludar();
saludar();
saludar();


//declarar la funcion

function suma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

//llamarla
let resultadoSuma = suma(3,5);
console.log(resultadoSuma)

// meter una funcion dentro de otra 
function promedio(){
    let resultadoSuma = suma(3,45,4);
    let resultadoProm = resultadoSuma / 3;
    return resultadoProm
}

let promedioObtenido = promedio();
console.log(promedioObtenido);


// 

let edad = 4;
if (edad >= 18){
    console.log("la persona es mayor de edad");
}else{
    console.log("es menor de edad");
}

//condicionales multiples y anidados

let clima = "soleado";
let temperatura = 28;
let mensaje ="";

if (clima === "soleado" || temperatura >= 25){
    console.log("el dia esta caluroso");
}else{
    console.log("El dia no esta caluroso");
}

// tradicional / ternario

let numero = 10;
if (numero > 0){
    console.log("Es positivo.")
}else{
    console.log("Es negativo.")
}

(numero > 0) ? console.log ("Es positivo.") : console.log("Es negativo.");


// asignacion a variable

let anios = 29;
let devuelve ="";

devuelve = (anios >= 18) ? "Es mayor" : "Es menor"; 

console.log(devuelve)


// otra manera

let esMayor = "Es mayor";
let esMenor = "Es menor";

(anios >= 18)?(
    console.log(esMayor)): (
        console.log(esMenor)
);


// switch 

let diaSemana = 6;
let dia = "";

switch(diaSemana){
   case 1: 
        dia = "Hoy es lunes."
        break;
    case 2:
        dia = "hoy es martes."
        break;
    case 3:
        dia = "Hoy es Miercoles."
        break;
    case 4:
        dia = "Hoy es Jueves."
        break;  
    case 5:
        dia = "Hoy es Viernes."
        break;
    case 6:
        dia = "Hoy es Sabado."
        break;
    case 7:
        dia = "Hoy es Domingo."
        break;
}

console.log(dia)
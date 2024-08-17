// Funcion para separar 
function separar(){
    console.log("--------------------")
 }
 
// Funciones declaradas
function suma(num1, num2){
    return num1 + num2;
}

console.log(suma(2,2));

// Funciones expresadas
 
let resta = function(num1, num2){
    return num1 - num2
}

// Funciones flecha(Arrow Functions)

let multiplicacion = (num1, num2) =>{
    return num1 * num2;
}

console.log(multiplicacion(4,3));

separar(); 

let objeto = {
    valor : 10,
    doble : ()=>{
        return this.valor * 2;
    }
}

console.log(objeto.doble());
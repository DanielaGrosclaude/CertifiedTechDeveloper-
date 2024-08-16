/*Te invitamos a completar los siguientes algoritmos, donde podrás integrar y aplicar todos los conceptos aprendidos hasta ahora. Estos ejercicios te permitirán fusionar habilidades y crear proyectos increíbles. ¡Comencemos!
*/



/*
    Validador de contraseña: Crea una variable llamada ‘contraseña’ donde guardes un valor específico. 
    Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales,
    verifica si dicho parámetro coincide con la variable llamada ‘contraseña’. 
    La función deberá mostrar por consola si la contraseña recibida es válida o no.
*/

let contraseña = 123456;

//LE DOY UN PARAMETRO QUE VA A USAR LA FUNCION 
function contraseñaCorrecta (correcta){
    
    if (correcta === contraseña){
        console.log("La contraseña es correcta.")
    } else{
        console.log("La contraseña es incorrecta.")
    }
}
//HAY QUE PASARLE EL ARGUMENTO 
contraseñaCorrecta(123456);


/*
    Calculadora de Índice de Masa Corporal (IMC): 
    Crea una función que calcule el IMC utilizando los parámetros de peso y altura. 
    Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC 
    (bajo peso, peso normal, sobrepeso, etc.).
*/

function calculadoraPeso(peso, altura){

    let imc = peso / altura;

    if (imc >= 30){
        console.log("Obeso");
    }else if (imc >= 25 && imc < 29.9){
        console.log("Sobrepeso");
    }else if (imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal");
    }else {
        console.log("Bajo peso.");
    }
}

calculadoraPeso(53, 157);





/*
    Conversor de Monedas: Crea una función que convierta una cantidad de dinero de una moneda a otra. 
    Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
*/

function conversor (cantidad, tipoCambio){

    let resultado = cantidad * tipoCambio;
    return resultado;
} 

let cantidad = conversor(100, 0.87)
console.log("Cantiad de euros:" + cantidad)


/*
    Evaluador de Rango de Edad: Escribe una función que determine en qué categoría de edad 
    se encuentra una persona.
     Utiliza las estructuras que consideres necesarias para clasificar a las personas en rangos como niño, 
     adolescente, adulto joven, adulto, etc., según su edad.
*/

function categoria (edad){
    
    if (edad >= 0 && edad < 11){
        console.log("Pertenece al grupo etario niñez.");
    } else if (edad >= 12 && edad <= 18){
        console.log("Pertenece al grupo etario adolescente.");
    }else if( edad >= 19 && edad <= 30){
        console.log("Pertenece al grupo etario joven.");        
    }else if(edad >= 30 && edad <= 60){
        console.log("Pertenece al grupo etario adultez.");
    }else {
        console.log("Pertenece al grupo etario vejez.")
    }

}
categoria(56);

/*
    Generador de Mensajes Personalizados: 
    Crea una función que genere un mensaje personalizado para un usuario según su nombre 
    y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). 
    Utiliza concatenación e interpolación para construir el mensaje, y condicionales (if ternario) 
    para incluir diferentes saludos*/

 function generarMensaje(nombre, momentoDelDia) {
        // Definimos el saludo utilizando un condicional ternario
        let saludo = momentoDelDia === "mañana" ? "Buenos días" : "Buenas tardes";
        
        // Creamos el mensaje utilizando interpolación
        let mensaje = `${saludo}, ${nombre}! Espero que tengas un excelente ${momentoDelDia}.`;
    
        // Imprimimos el mensaje en la consola
        console.log(mensaje);
    }
    
    // Ejemplos de uso
    generarMensaje("Ana", "mañana"); // Output: Buenos días, Ana! Espero que tengas un excelente mañana.
    generarMensaje("Juan", "tarde"); // Output: Buenas tardes, Juan! Espero que tengas un excelente tarde.
    


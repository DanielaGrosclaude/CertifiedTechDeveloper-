// crear un objeto
let persona = {
    nombre : "Daniela",
    apellido : "Grosclaude",
    edad : 29,
    coloresFavortios : ["Violeta", "Rosa", "Negro"],
    saludar : function(){
        return "Hola como estas? Soy " + this.nombre;
    }
};

//acceder a las propiedades de un objeto
//console.log(persona.coloresFavortios[0]);

//cargar una nueva propiedad
persona.deporteFavorito = "Volley";
persona.edad = 30;
console.log(persona);

// eliminar una propiedad 

delete persona.coloresFavortios;
console.log(persona);


// acceder a un metodo de un objeto 

let saludoDaniela = persona.saludar();
console.log(saludoDaniela);
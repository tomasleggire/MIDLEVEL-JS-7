/////////////////////////////////////////PETICION HTTP///////////////////////////////////////
//Le enviamos una peticion http a un servidor y el servidor nos devuelve una respuesta.
//Cliente y servidor: 
//Cliente interactua con la estructura frontend, y el servidor maneja la informacion.

//Como se trabaja con esto? Antes tenemos que ver como funcionan los datos JSON:

///////////////////////////////////DATOS ESTRUCTURADOS (JSON)///////////////////////////////////
//Es igual que un objeto, pero las propiedades se ponen entre comillas ("") para no generar problemas cuando pidamos datos al servidor.

                                                                  /*

const objeto = {
    "variable1" : "pedro",
    "variable2" :"jorge"
};

console.log(objeto.variable1);

//Un JSON serializado es un JSON pero pasado a string.
//Cuando enviamos datos, enviamos un JSON serializado, y cuando recibimos datos tambien.
//EJ:

const objeto2 = `{"variable1" : "PEDRO", "variable2" : "JORGE"}`; //Igual pero todo entre (``).


//2 funciones, una para serializar un JSON y otra para deserializarlo.

                                                                     */
              
                                                                     /*
const deserializado = {"variable1" : "PEDRO", "variable2" : "JORGE"};

const serializado = JSON.stringify(deserializado);
console.log(typeof serializado); //devuelve string.
                                                                     */
//Y para deserializarlo es lo mismo pero con JSON.parse()
                                                                     /*
const serializado = `{"variable1" : "PEDRO", "variable2" : "JORGE"}`;

const deserializado = JSON.parse(serializado);
console.log(typeof deserializado); //devuelve objeto JSON.

                                                                     */


////////////////////////////////////////      AJAX         ////////////////////////////////////////////


console.log("hola");


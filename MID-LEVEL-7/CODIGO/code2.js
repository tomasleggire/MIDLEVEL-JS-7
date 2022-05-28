/////////////////////////////////////    AJAX   ////////////////////////////////////////////////
//XMLHttpRequest: con este objeto podemos enviar peticiones.
//Con el metodo .open() abrimos peticiones y podemos usar GET o POST.


//////////////////////////////////////////////.open("GET") :
                                                                        /*
const peticion = new XMLHttpRequest();


//Con este evento accedemos al readyState y nos muestra cada vez que cambia de estado, tiene (4).
peticion.addEventListener("readystatechange",()=>{ 
    console.log(peticion.readyState); // readyState estado
    console.log(peticion.response); //Respuesta     
    console.log(peticion.status); // Estado de respuesta, mas comunes son: 404 (no se encontro) y 200 (todo bien).   
})

// Estado 1 : La peticion se creo correctamente.
// Estado 2 : La peticion se envio correctamente.
// Estado 3 : La peticon se esta procesando.
// Estado 4 : La peticion ya tiene respuesta y se puede utilizar.


peticion.open("GET","informacion.txt");

peticion.send(); //Con .send() enviamos la peticion.

                                                                        */            
        
//Esta forma de validar ya no se hace, es mejor usar el evento "load" :
                                                                        /*
const peticion = new XMLHttpRequest();

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "No se ha encontrado el recurso"
    console.log(respuesta);
})

peticion.open("GET","informacion.txt");

peticion.send();
                                                                          */

//Objeto ActiveXObject("Microsoft.XMLHTTP"); 
//Este objeto sirve para que las peticiones tambien funcionen en internet explorer y es una validacion.
//Como se usa:
                                                                          /*
let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "No se ha encontrado el recurso"
    console.log(JSON.parse(respuesta));
})

peticion.open("GET","informacion.txt");

peticion.send();

                                                                         */


//////////////////////////////////////////////.open("POST") :

                                                                          /*

let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "No se ha encontrado el recurso"
    console.log(JSON.parse(respuesta));
})

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type","application/json;charset=UTF8"); //Se agrega esta linea de codigo.


//A send se le agrega el JSON.stingify porq estamos enviando datos con la peticion.
peticion.send(JSON.stringify({
    "nombre": "morfeo" ,
    "trabajo": "líder"
}));

                                                                           */


////////////////////TODO AJAX(es decir todo lo que vimos), se trabaja mejor con FETCH//////////////////

//Fetch: otra forma de trabajar XMLHttpRequest y siempre devuelve una promera encapsulada.
                                                                           /*

//fetch() por defecto siempre es una peticion GET, al menos que declaremos otro tipo de peticion.
peticion = fetch("https://reqres.in/api/unknown/2");

//como acceder a los datos de la promesa que devuelve:

peticion
    .then(res=>res.text())
    .then(res=> console.log(res))

console.log(peticion);

//res.text() y res.json() => desencapsulamos la promesa en un texto en un json.
                                                                           */

//Como trabajar fetch con una peticion POST:
                                                                          /*
fetch("https://reqres.in/api/unknown/2",{
    method : "POST",
    body : `{"nombre" : "Tomas","apellido" : "Leggire"}`,
    headers : {"Content-type" : "application/json"}
})
    .then(res=>res.json())
    .then(res=> console.log(res)) 

                                                                          */

////////////////////////////////////////LIBRERIA AXIOS//////////////////////////////////


////////////////////////////////////LIBRERIA AXIOS//////////////////////////////////
//Optimizacion de fetch:
                                                                  /*
axios("informacion.txt")
    .then(res=>console.log(res.data))

//Podemos enviar json sin necesidad de serializarlo
//Para trabajar con post es: axios.post(), o abrir llaves en el segundo parametro y trabajar las caracteristicas

                                                                   */
                           
                                                                   /*
axios.post("https://reqres.in/api/users",{
    "nombre" : "Tomás"
})
   .then(res=>{
       console.log(res)
   }) 

                                                                    */

////////////////////////////////AWAIT Y ASYNS CON FETCH Y AXIOS/////////////////////////////////////
                                                                    /*
const getName = async ()=>{
    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = resultado.data.nombre;
    document.body.appendChild(div);
}

const getAge = async ()=>{
    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.innerHTML = resultado.data.edad;
    document.body.appendChild(div);
}

document.getElementById("getName").addEventListener("click",getName);

document.getElementById("getAge").addEventListener("click",getAge);


                                                                       */


////////////////////////////////////////PROBLEMA COFLA////////////////////////////////////////////

const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try {
        resultado = await axios("informacion2.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados; 
    } catch(e){
        aprobados.innerHTML = "La API falló";
        desaprobados.innerHTML = "La API falló"; 
    }
}

document.getElementById("getInfo").addEventListener("click",getInfo);
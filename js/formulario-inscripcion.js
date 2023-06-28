let agregar= document.querySelector(".simbolo_agregar");
let contenedor = document.querySelector(".contenedor");

let input = document.querySelectorAll(".input");

let quitarValores = document.querySelector(".quitarValores");
let totalPesos = document.querySelector(".totalPesos");

let botonInscribirse = document.querySelector(".inscribirse");

let modal = document.querySelector(".section-modal");
let iconoCerrar = document.querySelector(".icono_cerrar"); 

let formulario_inscripcion__div = document.querySelector(".formulario_inscripcion__div");



quitarValores.addEventListener("click", (e)=> {
    input.forEach((item)=>{ 
        item.value="";
    });
});

function funcionInscripcion(e){
    let inputs = document.querySelectorAll(".inputs");
    
    let contador = 0;
    inputs.forEach((item)=>{

        if(item.value ==""){
            contador++;
        }

    });

    if(contador==0){
        console.log(contador);
        e.preventDefault();
        modal.classList.remove("ocultar");
    }
}

agregar.addEventListener("click", (e)=>{
    //1- Agregamos campos para una persona
    let nodoDiv = document.createElement("div");

    nodoDiv.classList.add("formulario_inscripcion__div");

    nodoDiv.innerHTML= ` 
    
    <input class="inputs" type="text" id="nombre" name="nombre" placeholder="Nombre" required>

    <input class="inputs" type="text" id="apellido" name="apellido" placeholder="Apellido" required>

    <input  class="inputs" type="number" id="dni" name="dni" placeholder="DNI" required>
    
    <input  class="inputs" type="email" id="email" name="email" placeholder="Email" required>

    <input  class="inputs" type="number" id="telefono" name="telefono" placeholder="Telefono" required>

    <span class="material-symbols-outlined quitar"> do_not_disturb_on</span>

    `;

    contenedor.appendChild(nodoDiv);

    let quitar = document.querySelectorAll(".quitar");

    quitar.forEach((item)=>{
        item.addEventListener("click", function(){
            this.parentNode.remove();

            //recalculamos el total
            let cantidadNodosHijos = contenedor.childNodes.length;
            var pesosTotales = 10000*cantidadNodosHijos;
            totalPesos.innerHTML=`$${pesosTotales} ARS`;
        });
    });

    //recalculamos el total
    let cantidadNodosHijos = contenedor.childNodes.length;
    var pesosTotales = 10000*cantidadNodosHijos;
    totalPesos.innerHTML=`$${pesosTotales} ARS`;

    
    botonInscribirse.addEventListener("click", function(e){
        funcionInscripcion(e)
    });
    
});

botonInscribirse.addEventListener("click", function(e){
    funcionInscripcion(e)
});


iconoCerrar.addEventListener("click", (e)=>{
    modal.classList.add("ocultar");
});




let agregar= document.querySelector(".simbolo_agregar");
let contenedor = document.querySelector(".contenedor");

let input = document.querySelectorAll(".input");

let quitarValores = document.querySelector(".quitarValores");
let totalPesos = document.querySelector(".totalPesos");

let botonInscribirse = document.querySelector(".inscribirse");

let sectionModal = document.querySelector(".section-modal");


let inputs = document.querySelectorAll(".inputs");

let modal = document.querySelector(".modal");


quitarValores.addEventListener("click", (e)=> {
    input.forEach((item)=>{ 
        item.value="";
    });
});

function funcionInscripcion(e, formulario_inscripcion__div){
    let inputs = document.querySelectorAll(".inputs");
    /* e.preventDefault(); */
    

    modal.innerHTML=` 
        <h2 class="texto-centrado">Personas Inscriptas</h2>
        <div class="modal__java">
            

        </div>
        <div>
            <i class="fa-sharp fa-solid fa-circle-xmark fa-2xl icono_cerrar"></i>
        </div>
    `
    
    let modalJAva = document.querySelector(".modal__java");
    modalJAva.innerHTML="";


    formulario_inscripcion__div.forEach((item)=>{
      /*   console.log(item); */

      let valorNombre = "";
      let valorApellido = "";
      let valorDni = "";

      item.childNodes.forEach((itemInput)=>{

       
        

        if(itemInput.id=="nombre"){
            valorNombre = itemInput.value;
        }
        if(itemInput.id=="apellido"){
            valorApellido = itemInput.value;
        }
        if(itemInput.id=="dni"){
            valorDni = itemInput.value;
        }

        });

        modalJAva.innerHTML+=`

        <div class="nodoContenedorDeInscriptos">

            <p class="nombre-apellido">${valorNombre} ${valorApellido}</p>
            <p class="dni-nuevo">${valorDni} </p>

        </div>
        
        `
        
        
        
    });

    let contador = 0;
    inputs.forEach((item)=>{

        if(item.value ==""){
            contador++;
        }
    });



    if(contador==0){
        /* console.log(contador); */
        e.preventDefault();
        sectionModal.classList.remove("ocultar");
    }

    let iconoCerrar = document.querySelector(".icono_cerrar"); 
    iconoCerrar.addEventListener("click", (e)=>{
        sectionModal.classList.add("ocultar");
    });

    
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


    
});


botonInscribirse.addEventListener("click", function(e){

    let formulario_inscripcion__div = document.querySelectorAll(".formulario_inscripcion__div");
    funcionInscripcion(e, formulario_inscripcion__div);
});


 /* botonInscribirse.addEventListener("click", function(e){
    funcionInscripcion(e, formulario_inscripcion__div);
}); */






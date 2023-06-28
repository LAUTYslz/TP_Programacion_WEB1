let inscribirse = document.querySelector("#informacion-curso__inscribirse");
let modal = document.querySelector(".section-modal");

let iconoCerrar = document.querySelector(".icono_cerrar");


inscribirse.addEventListener("click",()=>{
    modal.classList.remove("ocultar");
});

iconoCerrar.addEventListener("click", ()=>{
  modal.classList.add("ocultar");
});



$(".acordeon").on("click", ".acordeon-cabecera", function() {
  $(this).toggleClass("active").next().slideToggle();
});

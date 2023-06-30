let inscribirse = document.querySelector("#informacion-curso__inscribirse");
let modal = document.querySelector(".section-modal");

let contadorDeCursos = 0;
let contador = document.querySelector("#contador");
let cantidadDeCursosObtenidos = sessionStorage.getItem("cantidadDeCursosObtenidos");
contador.innerHTML = cantidadDeCursosObtenidos;

let iconoCerrar = document.querySelector(".icono_cerrar");


inscribirse.addEventListener("click",()=>{
    modal.classList.remove("ocultar");
    // Permite guardar un dato en session storage
    sessionStorage.setItem("cantidadDeCursosObtenidos", `${++contadorDeCursos}`);

    // trae datos de session storage
    
  });
  






iconoCerrar.addEventListener("click", ()=>{
  modal.classList.add("ocultar");
});


$(".acordeon").on("click", ".acordeon-cabecera", function() {
  $(this).toggleClass("active").next().slideToggle();
});







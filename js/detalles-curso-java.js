let inscribirse = document.querySelector("#inscribirse");
let modal = document.querySelector(".modal");


inscribirse.addEventListener("click",(e)=>{
    modal.classList.remove("ocutar");
});

$(".acordeon").on("click", ".acordeon-cabecera", function() {
  $(this).toggleClass("active").next().slideToggle();
});

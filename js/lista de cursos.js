let listaCursos = document.getElementById("lista_cursos");
let contador_curso = document.getElementById("contador");
let mensajeLista = document.querySelector("#mensajeLista");

function actualizarListaCursos() {
    if (parseInt(contador_curso.textContent) === 0) {
        mensajeLista.textContent = "Todavía no se obtuvieron cursos";
    } else {
        mensajeLista.textContent = "Agregar cursos";
    }
}

// Mostrar u ocultar la lista de cursos al hacer clic en el contador
contador_curso.addEventListener('click', function() {
    if (listaCursos.style.display === "none") {
        listaCursos.style.display = "block";
    } else {
        listaCursos.style.display = "none";
    }
});

// Actualizar la lista de cursos cuando se carga la página
window.addEventListener('load', actualizarListaCursos);



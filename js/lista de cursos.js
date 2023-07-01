let listaCursos = document.getElementById("lista_cursos");
let contador_curso = document.getElementById("contador");
let mensajeLista = document.querySelector("#mensajeLista");
let botonesComprar = document.querySelectorAll('.boton_comprar');
let btnEntendido= document.querySelector("#btnEntendido");


let botonInscribirse = document.querySelector("#informacion-curso__inscribirse");

function actualizarListaCursos() {
    if (parseInt(contador_curso.textContent) === 0) {
        mensajeLista.textContent = "Todavía no se obtuvieron cursos";
    } else {
        mensajeLista.textContent ="";
        cursos.forEach((curso) =>{
            const nuevoCurso = document.createElement('p');
            nuevoCurso.textContent=curso;
            mensajeLista.appendChild(nuevoCurso);
        });        
    }
}

// Mostrar u ocultar la lista de cursos al hacer clic en el contador
contador_curso.addEventListener('click', function() {
    if (listaCursos.style.display === "none") {
        listaCursos.style.display = "flex";
    } else {
        listaCursos.style.display = "none";
    }
});

btnEntendido.addEventListener('click', function() {
    if (listaCursos.style.display === "none") {
        listaCursos.style.display = "flex";
    } else {
        listaCursos.style.display = "none";
    }
});


// Actualizar la lista de cursos cuando se carga la página
window.addEventListener('load', actualizarListaCursos);

let cursos=[];
let cantidadCursos= 0;

function guardarCursos() {
    localStorage.setItem("cursos", JSON.stringify(cursos));
    localStorage.setItem("cantidadCursos", cantidadCursos);
}

function cargarCursosGuardados() {
    const cursosGuardados = localStorage.getItem("cursos");
    const cantidadCursosGuardados = localStorage.getItem("cantidadCursos");
    
    if (cursosGuardados) {
        cursos = JSON.parse(cursosGuardados);
        cantidadCursos = parseInt(cantidadCursosGuardados);
        
        contador_curso.textContent = cantidadCursos.toString();
        actualizarListaCursos();
        
        cursos.forEach((curso) => {
            const nuevoCurso = document.createElement('p');
            nuevoCurso.textContent = curso;
            mensajeLista.appendChild(nuevoCurso);
        });
    }
}

// Actualizar la lista de cursos cuando se carga la página
window.addEventListener('load', function() {
    cargarCursosGuardados();
    actualizarListaCursos();
});


botonesComprar.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        const curso = boton.parentElement;
        const titulo = curso.querySelector('h3').textContent;

        cursos.push(titulo);
        cantidadCursos++;

        contador_curso.textContent=cantidadCursos.toString();
        actualizarListaCursos();

        mensajeLista.textContent="";
        cursos.forEach((curso) =>{
            const nuevoCurso = document.createElement('p');
            nuevoCurso.textContent=curso;
            mensajeLista.appendChild(nuevoCurso);
        });

        guardarCursos();
    })
})


botonInscribirse.addEventListener("click",()=>{
    const curso = botonInscribirse.parentElement.parentElement.querySelector("h1").textContent;
    cursos.push(curso);
    cantidadCursos++;

    contador_curso.textContent=cantidadCursos.toString();
    actualizarListaCursos();

    mensajeLista.textContent="";
    cursos.forEach((curso) =>{
        const nuevoCurso = document.createElement('p');
        nuevoCurso.textContent=curso;
        mensajeLista.appendChild(nuevoCurso);
    });

    guardarCursos();
    
});
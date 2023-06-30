let regexTelefono = /^([0-9]{4}-?[0-9]{4}){1}$/;
//restriccion para telefonos
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
// Restriccion para emails


let form= document.querySelector("form");
let mensaje = document.querySelector("#mensaje");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validar();
});

function validar(){
    let error=false;
    let mensajesError="";
    let nombre=document.querySelector("#nombre").value;
    let apellido=document.querySelector("#apellido").value;
    let telefono=document.querySelector("#telefono").value;
    let mail=document.querySelector("#mail").value;
    
    if(nombre==""){
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacio</p>";
    }
    if(apellido==""){
        error=true;
        mensajesError+="<p>El campo apellido no puede estar vacio</p>"
    }
    if(telefono==""){
        error=true;
        mensajesError+="<p>El campo telefono no puede estar vacio</p>"
    }else if (!regexTelefono.test(telefono)) {
        error = true;
        mensajesError += "<p>El teléfono debe tener un formato válido</p>";
    }
    if(mail==""){
        error=true;
        mensajesError+="<p>El campo correo no puede estar vacio</p>"
    }else if(!regexEmail.test(mail)){
        error=true;
        mensajesError+="<p>Tiene que ser un correo valido</p>";
    }

    if(error){
        // muestra los errores
        mensaje.innerHTML=mensajesError;
    }else{
        mostrarPopup();
        mensaje.innerHTML="";
    }
}

// consulta

const consulta = document.getElementById('consulta');
const contador = document.getElementById('contador_texto');

consulta.addEventListener('input', function() {
  const caracteresIngresados = consulta.value.length;
  const caracteresRestantes = 1000 - caracteresIngresados;

  contador.textContent = `Caracteres ingresados: ${caracteresIngresados}. Caracteres restantes: ${caracteresRestantes}`;
});

function mostrarPopup() {
    popup.classList.remove('hidden');
  }

let giftCardPara = document.querySelector(".giftCardPara");
let nombre = document.querySelector("#nombre");
let nombreGiftCard = document.querySelector(".nombreDestinatario");

let tamanioFuente = document.getElementsByName("tamanio-fuente");

let color = document.getElementsByName("color");  

let monto = document.querySelector("#monto");
let precio = document.querySelector(".precio");

let ubicacionPrecio = document.getElementsByName("ubicacion");//ubicacion precio
let precioGiftCard = document.querySelector(".precio");

let fondos = document.getElementsByName("fondo");
let fondoGiftCard = document.querySelector(".conteiner-giftCard");

nombre.addEventListener("keyup", (e)=> {
    nombreGiftCard.innerHTML = nombre.value;
})

color.forEach((item)=>{
    item.addEventListener("click",(e)=>{
    
        nombreGiftCard.classList.remove("azul","celeste","violeta","naranja","negro");
        nombreGiftCard.classList.add(item.value);
        //console.log(item.value);

        giftCardPara.classList.remove("azul","celeste","violeta","naranja","negro");
        giftCardPara.classList.add(item.value);

    });
});

tamanioFuente.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        nombreGiftCard.classList.remove("t20px","t28px","t32px","t48px","t60px");
        nombreGiftCard.classList.add(item.value);
        console.log(item.value);
    });
});

monto.addEventListener("keyup",(e)=>{
    if(monto.value==""){
        precio.innerHTML = "$0.-";
    }else{
        precio.innerHTML ="$"+ monto.value + ".-";
    }
});

ubicacionPrecio.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        precioGiftCard.classList.remove("abajoDerecha", "arribaIzquierda", "arribaDerecha");
        precioGiftCard.classList.add(item.value);
    });
});

fondos.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        fondoGiftCard.classList.remove("fondo1","fondo2","fondo3","fondo4","fondo5");
        fondoGiftCard.classList.add(item.value);
    });
});
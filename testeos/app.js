const buttonEl = document.querySelector(".btn-el");
const cartaEl = document.querySelector(".carta");

// EVENT LISTENER

buttonEl.addEventListener("click", modifyBeforePseudoElement);

// FUNCIONES

function modifyBeforePseudoElement(){
    console.log("hola");

    cartaEl.setAttribute('data-before', 'que ondaaa jankmdgh sajn d gaaskj ndsajkdhg saasdsadsa dkjsgdvjndsa');
}


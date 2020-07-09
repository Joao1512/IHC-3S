// id => botaoEscolhido
window.onload = () => {
  if (AFRAME.utils.device.isMobile() == false) { // DESKTOP
        var el = document.getElementById("mycursor");
        el.setAttribute('cursor', 'rayOrigin: mouse;fuse: false');
    } else {
        var el = document.getElementById("mycursor"); // MOBILE
        el.setAttribute('cursor', 'rayOrigin: cursor;fuse: true');
        el.object3D.visible = true;
    }
}

//botao escolhido no html
const _1A = document.getElementById("1A");
const _1B = document.getElementById("1B");
const _2A = document.getElementById("2A");
const _2B = document.getElementById("2B");

// funcao botao ir para ir para direita
function andarPraDireita() {
  botao.object3D.rotation.y += 0.1;
  porta.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0 0 0 ;loop: false;'); 
  
}

//adicionando evento de click, com a função andarParaDireita feita acima
botao.addEventListener("click", andarPraDireita);
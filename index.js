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

const _1A = document.getElementById("1A");
const _1B = document.getElementById("1B");
const _2A = document.getElementById("2A");
const _2B = document.getElementById("2B");

console.log("1A: " + _1A)

function mover1A() {
  console.log("1A")
  _1A.setAttribute('animation', 'property: position; dur: 0; from: 2 0 7; to: -0.5 0.4 1 ;loop: false;'); 
  
}
function mover1B() {
  console.log("1B")
  _1B.setAttribute('animation','property: position; dur: 0; from: 3 0 7; to: -0.5 0.4 1 ;loop: false;'); 
  
}
function mover2A() {
  console.log("2A")
  _2A.setAttribute('animation', 'property: position; dur: 2000; from: 4 0 3; to: -0.5 0.4 0 ;loop: false;'); 
  
}
function mover2B() {
  console.log("2B")
  _2B.setAttribute('animation', 'property: position; dur: 2000; from: 3 -1.4 3; to: -0.5 0.4 0 ;loop: false;'); 
  
}

//adicionando evento de click, com a função andarParaDireita feita acima
_1A.addEventListener("click", mover1A);
_1B.addEventListener("click", mover1B);
_2A.addEventListener("click", mover2A);
_2B.addEventListener("click", mover2B);


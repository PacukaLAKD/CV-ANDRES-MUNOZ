
let modal1 = document.getElementById("miModal-1");
let btn1 = document.getElementById("boton-modal-1");
let span1 = document.getElementsByClassName("cerrar-1")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
  modal2.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

let modal2 = document.getElementById("miModal-2");
let btn2 = document.getElementById("boton-modal-2");
let span2 = document.getElementsByClassName("cerrar-2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


let modal4 = document.getElementById("miModal-4");
let btn4 = document.getElementById("boton-modal-4");
let span4 = document.getElementsByClassName("cerrar-4")[0];
btn4.onclick = function() {
  modal5.style.display = "none";
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

let modal5 = document.getElementById("miModal-5");
let btn5 = document.getElementById("boton-modal-5");
let span5 = document.getElementsByClassName("cerrar-5")[0];
btn5.onclick = function() {
  modal4.style.display = "none";
  modal5.style.display = "block";

}
span5.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

let ElementosAcordeon = document.getElementsByClassName("acordeon");
for (let i = 0; i< ElementosAcordeon.length; i++) {
    ElementosAcordeon[i].addEventListener("click",function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        }else {
            panel.style.display = "block";
        }
        modal4.style.display = "none";
        modal5.style.display = "none";

    });
}  



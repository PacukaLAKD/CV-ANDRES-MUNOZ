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
    });
}
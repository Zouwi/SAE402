// Variable communes 
// let boite = document.querySelector(".boite");
// let parler = document.querySelector(".texte");

// Texte qui défile 
document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {
    let a = this.querySelector(".show");
    let suivant = a.nextElementSibling;

    a.classList.remove("show");
    a.style.zIndex="2";
    suivant.classList.add("show");

    let texte = suivant.innerText;
    let position = 1;

    let timer = setInterval(() => {
        suivant.innerText = texte.slice(0, position++);
        if (position > texte.length) {
            clearInterval(timer);
        }
    })
    // Vieux qui apparait 
    if (document.getElementById("vieux").classList.contains("show")) {
        let vieux = document.querySelector(".oldMan");
        vieux.classList.remove("disparu");
        document.querySelector(".name").innerText="an Old Man";
    }
}


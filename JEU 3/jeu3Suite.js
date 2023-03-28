// VARIABLES GLOABLES 
let compteur = 0;
let tempsRestant = window.tempsRestant;
console.log(tempsRestant);

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {

    // affichage du nom 
    document.querySelector(".name").innerHTML = doto[compteur].bulle;

    // Mettre en highlight

    document.querySelector(".devant").classList.remove("devant");

    // Afficher le texte 
    doto[compteur].visible.forEach(e => {
        document.querySelector(e).classList.add("devant");
        document.querySelector(e).classList.remove("disparu");
    });

    // Affichage lettres par lettres 
    let texte = doto[compteur].texte;
    let position = 1;
    let zone = document.querySelector(".texte");

    let timer = setInterval(() => {
        zone.innerText = texte.slice(0, position++);
        if (position > texte.length) {
            clearInterval(timer);
        }
    })

    if (doto[compteur].fin == "") {
        document.querySelector(".jeu2").addEventListener("click", changePage);
        function changePage() {
            window.location.href = "apothecary.html";
        }
    }
    compteur++;
}
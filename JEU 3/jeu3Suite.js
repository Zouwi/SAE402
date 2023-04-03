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

    // Enlever des éléments 
    if (doto[compteur].invisible) {
        doto[compteur].invisible.forEach(e => {
            document.querySelector(e).classList.add("disparu");
        });
    }

    // Le flash de la transition dans le temps
    if (doto[compteur].texte == "I'll take care of carving the wood. Come back in a few times.") 
    setTimeout(() => {
        document.querySelector(".blanc").classList.add("disparu");
    }, 5500)

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
// VARIABLES GLOBALES 
let compteur = 0;

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {
    // affichage du nom 
    document.querySelector(".name").innerHTML = doto[compteur].bulle;

    // Mettre en highlight
    document.querySelector(".devant").classList.remove("devant");

    if (doto[compteur].invisible) {
        doto[compteur].invisible.forEach(e => {
            document.querySelector(e).classList.add("disparu");
        });
    }
    if (doto[compteur].visible) {
        doto[compteur].visible.forEach(e => {
            document.querySelector(e).classList.add("devant");
            document.querySelector(e).classList.remove("disparu");
            document.querySelector(e).classList.remove("disparu2");
        });
    }

    // fermerl'item 
    document.querySelector(".btn").addEventListener("click", fermer)
    function fermer() {
        document.querySelector(".boiteO").classList.add("disparu");
    }

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

    compteur++;

}
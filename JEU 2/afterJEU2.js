let compteur = 0;

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {
    // affichage du nom 
    if (diti[compteur].bulle) {
        document.querySelector(".name").innerHTML = diti[compteur].bulle;
    }

    // Mettre en highlight
    document.querySelector(".devant").classList.remove("devant");

    if (diti[compteur].invisible) {
        diti[compteur].invisible.forEach(e => {
            document.querySelector(e).classList.add("disparu");
        });
    }
    if (diti[compteur].visible) {
        diti[compteur].visible.forEach(e => {
            document.querySelector(e).classList.add("devant");
            document.querySelector(e).classList.remove("disparu");
            document.querySelector(e).classList.remove("disparu2");
        });
    }

    // fermer l'item 
    document.querySelector(".btn").addEventListener("click", fermer)
    function fermer() {
        document.querySelector(".grosBoite").classList.add("disparu");
    }

    // Affichage lettres par lettres 
    let texte = diti[compteur].texte;
    let position = 1;
    let zone = document.querySelector(".texte");

    let timer = setInterval(() => {
        zone.innerText = texte.slice(0, position++);
        if (position > texte.length) {
            clearInterval(timer);
        }
    })

    compteur++;

    // Changement de page 
    if (diti[compteur].fin == "") {
        document.querySelector(".boite").addEventListener("click", changePage);
        function changePage() {
            console.log("redirection")
            window.location.href = "marcheJEU2.html";
        }
    }

}
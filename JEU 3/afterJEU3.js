let compteur = 0;
let tempsRestant = window.tempsRestant;
console.log(tempsRestant);

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {

    // affichage du nom 
    document.querySelector(".name").innerHTML = diti[compteur].bulle;

    // Mettre en highlight

    document.querySelector(".devant").classList.remove("devant");

    // Afficher le texte 
    diti[compteur].visible.forEach(e => {
        document.querySelector(e).classList.add("devant");
        document.querySelector(e).classList.remove("disparu");
    });

    // Enlever des éléments 
    if (diti[compteur].invisible) {
        diti[compteur].invisible.forEach(e => {
            document.querySelector(e).classList.add("disparu");
        });
    }

    // Affichage de la fin 
    if (diti[compteur].texte == "") {
        document.querySelector(".player").classList.add("disparu2");
        document.querySelector(".parentBoite").classList.add("disparu2");
        setTimeout(() => {
            document.querySelector(".grosBoite").classList.remove("disparu");
        }, 800)
        
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

    if (diti[compteur].fin == "") {
        document.querySelector(".jeu2").addEventListener("click", changePage);
        function changePage() {
            window.location.href = "apothecary.html";
        }
    }
    compteur++;
}
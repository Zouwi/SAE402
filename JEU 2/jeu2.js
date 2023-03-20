// VARIABLES GLOABLES 
let compteur = 0;
let compteur2 = 0;

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {

    // affichage du nom 
    document.querySelector(".name").innerHTML = data[compteur].bulle;

    // Mettre en highlight

    document.querySelector(".devant").classList.remove("devant");

    // Afficher le texte 
    data[compteur].visible.forEach(e => {
        document.querySelector(e).classList.add("devant");
        document.querySelector(e).classList.remove("disparu");
        setTimeout(() => {
            document.querySelector(".pharmacy").classList.remove("disparu2");
        }, 2500)
        setTimeout(() => {
            document.querySelector(".pharmacy").style.animation="indice 1s forwards";
        }, 3500)
    });
    

    // affichage du vieux 
   /* if (data[0].bulle == "An Old Man") {
        let vieux = document.querySelector(".oldMan");
        vieux.classList.remove("disparu");
        // document.querySelector(".pharamcy").style.display="block";
    }*/

    
    // Affichage lettres par lettres 
    let texte = data[compteur].texte;
    let position = 1;
    let zone = document.querySelector(".texte");

    let timer = setInterval(() => {
        zone.innerText = texte.slice(0, position++);
        if (position > texte.length) {
            clearInterval(timer);
        }
    })

    

    if (data[compteur].fin == "") {
        document.querySelector(".jeu2").addEventListener("click", changePage);
        function changePage() {
            window.location.href = "apothecary.html";
        }
    }
    compteur++;
}

// On va faire exactement la même mais pour le dialogue dans la pharmacie 
document.querySelector(".boite2").addEventListener("click", dialogue2);

function dialogue2() {

    // affichage du nom 
    document.querySelector(".name").innerHTML = doto[compteur2].bulle2;

    // Mettre en highlight

    document.querySelector(".devant").classList.remove("devant");

    // Afficher le texte 
    doto[compteur2].visible2.forEach(f => {
        document.querySelector(f).classList.add("devant");
        document.querySelector(f).classList.remove("disparu");
    });
    
    // Affichage lettres par lettres 
    let texte2 = doto[compteur2].texte2;
    let position2 = 1;
    let zone2 = document.querySelector(".texte");

    let timer2 = setInterval(() => {
        zone2.innerText = texte2.slice(0, position2++);
        if (position2 > texte2.length) {
            clearInterval(timer2);
        }
    })

    // if (data[compteur].fin == "") {
    //     document.querySelector(".jeu2").addEventListener("click", changePage);
    //     function changePage() {
    //         window.location.href = "apothecary.html";
    //     }
    // }
    compteur2++;
}
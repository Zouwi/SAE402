// VARIABLES GLOBALES 
let compteur2 = 0;

// On va faire exactement la même mais pour le dialogue dans la pharmacie 
document.querySelector(".boite").addEventListener("click", dialogue2);

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
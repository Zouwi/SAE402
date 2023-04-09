// VARIABLES GLOABLES 
let compteur = 0;

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
            document.querySelector(".pharmacy").classList.remove("disparu");
        }, 1500)
        setTimeout(() => {
            document.querySelector(".pharmacy").style.animation="indice 1s forwards";
        }, 1500)
    });
        
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
// VARIABLE DE INTRO
let boiteIntro = document.querySelector(".boite");
let compteur = 0;

// Boite qui apparait avec délai
setTimeout(() => {
    boiteIntro.classList.add("apparition");
    boiteIntro.classList.remove("disparu2");
}, 800)

//   Changement de texte 
document.querySelector(".intro").addEventListener("click", dialogueIntro);

function dialogueIntro() {
    // affichage du titre + texte 
    document.querySelector(".title").innerHTML = data[compteur].titre;
    document.querySelector(".texte").innerHTML = data[compteur].texte;
    document.querySelector(".texte").innerHTML = data[compteur].texte;
    
    // changement de page 
    if (data[compteur].titre == "First mission") {
        document.querySelector(".intro").addEventListener("click", changePage);
        function changePage() {
            document.querySelector(".intro").classList.add("disparu");
            // window.location.href = "marche.html";
        }
    }

}



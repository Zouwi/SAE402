// VARIABLE DE INTRO
let boiteIntro = document.querySelector(".boite");
let boiteIntro2 = document.querySelector(".boite2");

// Boite qui apparait avec délai
setTimeout(() => {
    boiteIntro.classList.add("apparition");
    boiteIntro.classList.remove("disparu2");
}, 800)

//   Changement de texte 
document.querySelector(".intro").addEventListener("click", dialogueIntro);

function dialogueIntro() {
    boiteIntro2.classList.add("apparition");
    boiteIntro2.classList.remove("disparu");
    boiteIntro.classList.add("disparu");
    boiteIntro.classList.remove("apparition");
}

// Changement de page 
document.querySelector(".intro").addEventListener("click", changePage);

function changePage() {
    
}

// if (boiteIntro.classList.contains("disparu")) {
//     boiteIntro.style.display = "none";
// }

// VARIABLE DE MARCHE

// animation des pas

document.querySelector(".pied1").classList.add("disparu");

// Boite qui apparait avec délai
setTimeout(() => {
    document.querySelector(".boite").classList.add("apparition");
    document.querySelector(".boite").classList.remove("disparu");
}, 1000)

//   Changement de texte 
document.querySelector(".intro").addEventListener("click", dialogueIntro);

function dialogueIntro() {
    document.querySelector(".boite2").classList.add("apparition");
    document.querySelector(".boite2").classList.remove("disparu");
    document.querySelector(".boite").classList.add("disparu");
    document.querySelector(".boite").classList.remove("apparition");
}
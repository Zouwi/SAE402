// VARIABLES GLOABLES 
let compteur = 0;

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {
    // affichage des textes 
   // document.querySelector(".texte").innerHTML = data[compteur].texte;

    // affichage du nom 
    document.querySelector(".name").innerHTML = data[compteur].bulle;

    // Mettre en highlight
    // if (data[0].visible ==".oldMan") {
    //     document.querySelector(".player").classList.remove("devant");
    // }
    document.querySelector(".devant").classList.remove("devant");
    data[compteur].visible.forEach(e => {
        document.querySelector(e).classList.add("devant");
        document.querySelector(e).classList.remove("disparu");
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

    compteur++;

}
// let actuel = this.querySelector(".show");
    // let suivant = actuel.nextElementSibling;
    // // let perso = this.querySelector("[data-character=");
    // actuel.classList.remove("show");


    // suivant.classList.add("show");

    
    // // Vieux qui apparait
    // if (document.querySelector("[data-character=vieux].show")) {
    //     let vieux = document.querySelector(".oldMan");
    //     let anna = document.querySelector(".player");
    //     vieux.classList.remove("disparu");
    //     vieux.classList.add("devant");
    //     anna.classList.remove("devant");
    //     document.querySelector(".name").innerText = "an Old Man";
    // }

    // // Anna qui parle 
    // if (document.querySelector("[data-character=anna].show")) {
    //     let anna2 = document.querySelector(".player");
    //     let vieux2 = document.querySelector(".oldMan");
    //     anna2.classList.add("devant");
    //     vieux2.classList.remove("devant");
    //     document.querySelector(".name").innerText = "Anna";
    // }

    // L'image de la pharmaco qui apparait 
    // if (document.querySelector("[data-character=vieux]").classList.)


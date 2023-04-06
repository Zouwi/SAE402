// const canvg = require('canvg');
// Partie CANVAS 
// Importer la bibliothèque 

// Le dessin 

const canvas = document.querySelector(".toile");
const ctx = canvas.getContext("2d");
let W = window.innerWidth;
let H = window.innerHeight;
let gommeActive = false; // Variable pour savoir si la gomme est sélectionnée ou non

canvas.width = W;
canvas.height = H;

let x, y;

canvas.addEventListener("touchstart", demarrerDessin);
canvas.addEventListener("touchmove", dessiner);
// canvas.addEventListener("touchmove", dessiner2);
canvas.addEventListener("touchend", arreterDessin);

function demarrerDessin(event) {
    x = event.touches[0].clientX - canvas.offsetLeft;
    y = event.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(x, y);
}


function dessiner(event) {
    event.preventDefault();
    let x2 = event.touches[0].clientX - canvas.offsetLeft;
    let y2 = event.touches[0].clientY - canvas.offsetTop;

    // Si la gomme est sélectionnée, effacer le canvas
    if (gommeActive) {
        ctx.clearRect(x2 - 10, y2 - 10, 20, 20);
    } else { // Sinon, dessiner normalement
        // ctx.beginPath();
        // ctx.moveTo(x, y);
        // ctx.fillStyle = "rgba(255,255,255,0.3)";
        // ctx.fillRect(0, 0, W, H);
        // ctx.fill();
        ctx.lineTo(x2, y2);
        ctx.lineCap = "round";
        ctx.lineWidth = 12;
        ctx.stroke();
        ctx.strokeStyle = "black";
        x = x2;
        y = y2;
    }
}

// function dessiner2(event) {
//     event.preventDefault();
//     let x2D = event.touches[0].clientX - canvas.offsetLeft;
//     let y2D = event.touches[0].clientY - canvas.offsetTop;

//     // Si la gomme est sélectionnée, effacer le canvas
//     if (gommeActive) {
//         ctx.clearRect(x2D - 10, y2D - 10, 20, 20);
//     } else { // Sinon, dessiner normalement
//         ctx.beginPath();
//         setTimeout(() => {
//             // ctx.moveTo(x2D, y2D);
//             // ctx.lineTo(x2D, y2D);
//             // ctx.lineWidth = 2;
//             // ctx.stroke();
//             // ctx.strokeStyle = "white";
//             ctx.fillRect(x2D - 10, y2D - 10, 20, 20);
//             ctx.fillStyle = "white";
//             x = x2D;
//             y = y2D;
//         }, 800)
//     }
// }

// Réccupérer une image 
// function genererImage() {
//     let image = canvas.toDataURL("image/png");
//     console.log(image);
//     let img = document.createElement("img");
//     img.src = image;
//     document.querySelector(".modele").appendChild(img);
//     // document.querySelector(".modele").innerHTML = image;
// }
// Télécharger l'image 
// Ajouter un écouteur d'événement pour le bouton de téléchargement
const downloadBtn = document.querySelector(".btn");
downloadBtn.addEventListener('click', function () {
    // Récupérer l'image du canvas en tant que URL
    const url = canvas.toDataURL('image/png');

    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.download = 'mon_dessin.png';
    link.href = url;

    // Cliquer sur le lien pour déclencher le téléchargement
    link.click();
});

document.querySelector(".stp").addEventListener("click", (e) => {
    e.preventDefault()
    genererImage();
});

function arreterDessin() {
    ctx.closePath();
}

// La gomme
document.querySelector(".gommage").addEventListener("click", () => {
    gommeActive = true; // Sélectionner la gomme
});

document.querySelector(".taille").addEventListener("click", () => {
    gommeActive = false; // Désélectionner la gomme
});

// La palette de couleur 
document.querySelectorAll(".palette>*").forEach(element => {
    element.style.backgroundColor = element.dataset.couleur;
    element.addEventListener("click", changeCouleur);
    function changeCouleur() {
        ctx.strokeStyle = element.dataset.couleur;
    }

})

// Le changement de taille 
document.querySelectorAll(".taille>*").forEach(element => {
    element.addEventListener("click", changeTaille);
    function changeTaille() {
        ctx.lineWidth = element.dataset.taille;
    }
})


document.querySelector(".gommage").addEventListener("click", effacer);

function effacer() {
    // ctx.lineWidth = 40;
    // ctx.strokeStyle = "white"
    ctx.clearRect(x, y, 50, 50);
    // canvas.setColor("white");
}

// Les modèles aléatoires 
let aleatoire = Math.round(Math.random() * 2 + 1);
console.log(aleatoire);

if (aleatoire == 1) {
    document.querySelectorAll(".parent>*").forEach(e => {
        e.classList.add("disparu");
    })
    document.querySelector(".cat").classList.remove("disparu");
}
else if (aleatoire == 2) {
    document.querySelectorAll(".parent>*").forEach(e => {
        e.classList.add("disparu");
    })
    document.querySelector(".elephant").classList.remove("disparu");
}

else if (aleatoire == 3) {
    document.querySelectorAll(".parent>*").forEach(e => {
        e.classList.add("disparu");
    })
    document.querySelector(".turtle").classList.remove("disparu");
}

// Le menu qui s'ouvre 
document.querySelector(".languette").addEventListener("click", ouvre);

function ouvre() {
    document.querySelector(".menu").classList.toggle("translation");
    document.querySelector(".languette>*").classList.toggle("rotation");
}

// Minuteur 
// Temps initial en secondes
let tempsInitial = 30;

function demarrerMinuteur() {
    // Mettre à jour le temps restant toutes les secondes
    let tempsRestant = tempsInitial;
    let intervalId = setInterval(function () {
        tempsRestant--;
        document.querySelector(".timer").innerHTML = "00:" + tempsRestant;
        if (tempsRestant == 0) {
            clearInterval(intervalId);
            window.location.href = "suite.html";
        }
    }, 1000);
    window.tempsRestant = tempsRestant;
}

// Démarrer le minuteur
// demarrerMinuteur();

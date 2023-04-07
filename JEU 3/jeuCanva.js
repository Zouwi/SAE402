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


// Récupérer une image 

// Récupérer les données de l'image
let imageData = ctx.getImageData(0, 0, W, H);
// const data = imageData.data;
// const partLength = data.length / 4;

// const firstHalf = data.slice(0, partLength);
// const secondHalf = data.slice(partLength, partLength * 2);
// const thirdHalf = data.slice(partLength * 2, partLength * 3);
// const fourthHalf = data.slice(partLength * 3, partLength * 4);
console.log(imageData);

// Convertir chaque moitié en une nouvelle ImageData
// const image1 = new ImageData(new Uint8ClampedArray(firstHalf), imageData.width, imageData.height);
// const image2 = new ImageData(new Uint8ClampedArray(secondHalf), imageData.width, imageData.height);

const dataUrl = canvas.toDataURL();


// Stocker les données de l'image dans le localStorage
document.querySelector(".btnCanva").addEventListener("click", () => {
    
    let imageDataString = JSON.stringify(imageData);
    localStorage.setItem('imageData', imageDataString);
    console.log(imageDataString);
    // localStorage.setItem('imageData2', JSON.stringify(secondHalf));
    // localStorage.setItem('imageData3', JSON.stringify(thirdHalf));
    // localStorage.setItem('imageData4', JSON.stringify(fourthHalf));
    localStorage.setItem('dataUrl', dataUrl);
    console.log(imageData)
})

// function genererImage() {
//     let image = canvas.toDataURL("image/png");
//     console.log(image);
//     let img = document.createElement("img");
//     img.src = image;
//     document.querySelector(".modele").appendChild(img);
//     // document.querySelector(".modele").innerHTML = image;
// }



// document.querySelector(".stp").addEventListener("click", (e) => {
//     e.preventDefault()
//     genererImage();
// });

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
let aleatoire = Math.round(Math.random() * 6 + 1);
console.log(aleatoire);

document.querySelectorAll(".mot").forEach(e => {
    if (aleatoire == e.dataset.animal) {
        e.classList.remove("disparu");
    }
})


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

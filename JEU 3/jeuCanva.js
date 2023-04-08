// Partie dialogue 
// VARIABLES GLOABLES 
let compteur = 0;

document.querySelector(".boite").addEventListener("click", dialogue);

function dialogue() {

    // affichage du nom 
    document.querySelector(".name").innerHTML = doto[compteur].bulle;

    // Mettre en highlight

    document.querySelector(".devant").classList.remove("devant");

    // Afficher le texte
    doto[compteur].visible.forEach(e => {
        document.querySelector(e).classList.add("devant");
        document.querySelector(e).classList.remove("disparu");
    });

    console.log(compteur);
    // Enlever des éléments 
    if (doto[compteur].invisible) {
        doto[compteur].invisible.forEach(e => {
            document.querySelector(e).classList.add("disparu");
        });
    }

    // Le flash de la transition dans le temps
    if (doto[compteur].texte == "I'll take care of carving the wood. Come back in a few times.")
        setTimeout(() => {
            document.querySelector(".blanc").classList.add("disparu");
        }, 5500)

    // Affichage lettres par lettres 
    let texte = doto[compteur].texte;
    let position = 1;
    let zone = document.querySelector(".texte");

    let timer = setInterval(() => {
        zone.innerText = texte.slice(0, position++);
        if (position > texte.length) {
            clearInterval(timer);
        }
    })
    // passer de dialogue à dessin 2
    if (doto[compteur].texte == "") {
        document.querySelector(".canva2").classList.remove("disparu");
        // document.querySelector(".canva1").classList.remove("disparu");
        // document.querySelectorAll(".canva1>*").forEach(e => {
        //     e.classList.add("disparu");
        // })
        // document.querySelector(".toile").classList.remove("disparu");
        // document.querySelector(".toile").classList.add("audessus");
        document.querySelector(".modele").classList.remove("disparu");
        document.querySelector(".dialogue").classList.add("disparu");
    }
    compteur++
}

// PARTIE CANVA COLORIAGE 
const canvasC = document.querySelector(".toile2");
const ctxC = canvasC.getContext("2d");
let WC = window.innerWidth;
let HC = window.innerHeight;
let gommeActiveC = false; // Variable pour savoir si la gomme est sélectionnée ou non
// const modele = document.querySelector(".modele");


canvasC.width = WC;
canvasC.height = HC;

let xC, yC;

// ctxC.drawImage(modele, WC, HC)

canvasC.addEventListener("touchstart", demarrerDessinC);
canvasC.addEventListener("touchmove", dessinerC);
canvasC.addEventListener("touchend", arreterDessinC);

function demarrerDessinC(event) {
    xC = event.touches[0].clientX - canvasC.offsetLeft;
    yC = event.touches[0].clientY - canvasC.offsetTop;
    ctxC.beginPath();
    ctxC.moveTo(xC, yC);
}


function dessinerC(event) {
    event.preventDefault();
    let x2C = event.touches[0].clientX - canvasC.offsetLeft;
    let y2C = event.touches[0].clientY - canvasC.offsetTop;

    // Si la gomme est sélectionnée, effacer le canvas
    if (gommeActiveC) {
        ctxC.clearRect(x2C - 10, y2C - 10, 20, 20);
    } else { // Sinon, dessiner normalement
        // ctxC.beginPath();
        // ctxC.moveTo(xC, yC);
        // ctxC.fillStyle = "rgba(255,255,255,0.3)";
        // ctxC.fillRect(0, 0, WC, HC);
        // ctxC.fill();
        ctxC.lineTo(x2C, y2C);
        ctxC.lineCap = "round";
        // ctxC.lineWidth = 12;
        ctxC.stroke();
        // ctxC.strokeStyle = "black";
        xC = x2C;
        yC = y2C;
    }
}

function arreterDessinC() {
    ctxC.closePath();
}

function genererImage2() {
    let image2 = canvasC.toDataURL("image/png");
    console.log(image2);
    let img2 = document.createElement("img");
    img2.classList.add("couleur");
    img2.src = image2;
    document.querySelector(".modele").appendChild(img2);
    // document.querySelector(".modele").innerHTML = image;
}

document.querySelector(".taillec").addEventListener("click", () => {
    gommeActiveC = false; // Désélectionner la gomme
});

// La palette de couleur 
document.querySelectorAll(".palettec>*").forEach(element => {
    element.style.backgroundColor = element.dataset.couleur;
    element.addEventListener("click", changeCouleurC);
    function changeCouleurC() {
        ctxC.strokeStyle = element.dataset.couleur;
    }

})

// Le changement de taille 
document.querySelectorAll(".taillec>*").forEach(element => {
    element.addEventListener("click", changeTailleC);
    function changeTailleC() {
        ctxC.lineWidth = element.dataset.taille;
    }
})


// document.querySelector(".gommagec").addEventListener("click", effacer);

function effacerC() {
    // ctx.lineWidth = 40;
    // ctx.strokeStyle = "white"
    // ctxC.clearRect(xC, yC, 50, 50);
    ctxC.arc(75, 75, 50, 0, Math.PI * 2)
    // canvas.setColor("white");
}

// La gomme
document.querySelector(".gommageC").addEventListener("click", () => {
    gommeActiveC = true; // Sélectionner la gomme
});

document.querySelector(".languettec").addEventListener("click", ouvreC);

function ouvreC() {
    document.querySelector(".menuc").classList.toggle("translationc");
    document.querySelector(".languettec>*").classList.toggle("rotationc");
}

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
        ctx.stroke();
        ctx.strokeStyle = "black";
        x = x2;
        y = y2;
    }
}


// Récupérer une image 

// Récupérer les données de l'image
// let imageData = ctx.getImageData(0, 0, W, H);
// // const data = imageData.data;
// // const partLength = data.length / 4;

// // const firstHalf = data.slice(0, partLength);
// // const secondHalf = data.slice(partLength, partLength * 2);
// // const thirdHalf = data.slice(partLength * 2, partLength * 3);
// // const fourthHalf = data.slice(partLength * 3, partLength * 4);
// console.log(imageData);

// // Convertir chaque moitié en une nouvelle ImageData
// // const image1 = new ImageData(new Uint8ClampedArray(firstHalf), imageData.width, imageData.height);
// // const image2 = new ImageData(new Uint8ClampedArray(secondHalf), imageData.width, imageData.height);

// const dataUrl = canvas.toDataURL();


// // Stocker les données de l'image dans le localStorage
// document.querySelector(".btnCanva").addEventListener("click", () => {

//     let imageDataString = JSON.stringify(imageData);
//     localStorage.setItem('imageData', imageDataString);
//     console.log(imageDataString);
//     // localStorage.setItem('imageData2', JSON.stringify(secondHalf));
//     // localStorage.setItem('imageData3', JSON.stringify(thirdHalf));
//     // localStorage.setItem('imageData4', JSON.stringify(fourthHalf));
//     localStorage.setItem('dataUrl', dataUrl);
//     console.log(imageData)
// })

function genererImage() {
    let image = canvas.toDataURL("image/png");
    console.log(image);
    let img = document.createElement("img");
    img.classList.add("contour");
    img.src = image;
    document.querySelector(".modele").appendChild(img);
    // document.querySelector(".modele").innerHTML = image;
}



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

// Passer de dessin1 à Dialogue 
document.querySelector(".btnCanva").addEventListener("click", (e) => {
    e.preventDefault()
    genererImage();
    document.querySelector(".dialogue").classList.remove("disparu");
    document.querySelector(".canva1").classList.add("disparu");
})

// Finition dessin 2
document.querySelector(".btnc").addEventListener("click", (e) => {
    e.preventDefault()
    genererImage2();
    document.querySelector(".canva2").classList.add("disparu");
    document.querySelector(".dialogue2").classList.remove("disparu");
    document.querySelector(".texte").classList.add("final");

    // Fusion des deux balises img 
    const image1 = document.querySelector(".contour");
    const image2 = document.querySelector(".couleur");
    let div = document.querySelector(".modele");
    let div2 = document.querySelector(".render");
    // let div3 = document.createElement("final");

    const canvasF = document.createElement("canvas");
    canvasF.classList.add("fusion");
    canvasF.width = window.innerWidth;
    canvasF.height = window.innerHeight;

    const ctxF = canvasF.getContext("2d");
    ctxF.drawImage(image2, 0, 0);
    ctxF.drawImage(image1, 0, 0);

    function genererImage3() {
        let imageFinal = canvasF.toDataURL("image/png");
        let imgFinal = document.createElement("img");
        imgFinal.classList.add("imgFinal");
        imgFinal.src = imageFinal;
        document.querySelector(".render").appendChild(imgFinal);
        // document.querySelector(".modele").innerHTML = image;
    }

    // const mergedImage = new Image();
    // mergedImage.src = canvas.toDataURL();

    div.removeChild(image1);
    div.removeChild(image2);
    genererImage3();
})

// Télécharger l'image 
// Ajouter un écouteur d'événement pour le bouton de téléchargement
const downloadBtn = document.querySelector(".btnF");
downloadBtn.addEventListener('click', function () {
    // Récupérer l'image du canvas en tant que URL
    const url = canvasF.toDataURL('image/png');

    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.download = 'mon_dessin.png';
    link.href = url;

    // Cliquer sur le lien pour déclencher le téléchargement
    link.click();
});


// Se déplacer du téléchargement aux crédits 
if (document.querySelector(".final").contains = "We have completed our mission! Look how beautiful our fabric turned out.") {
    document.querySelector(".boite").addEventListener("click", () => {
        window.location.href = "afterJEU3.html";
    })
}


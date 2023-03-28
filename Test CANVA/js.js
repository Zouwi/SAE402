// Le dessin 

const canvas = document.querySelector(".toile");
const ctx = canvas.getContext("2d");
let W = window.innerWidth;
let H = window.innerHeight;

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
    ctx.lineTo(x2, y2);
    ctx.stroke();
    x = x2;
    y = y2;
}

function arreterDessin() {
    ctx.closePath();
}

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

// La gomme
document.querySelector(".gommage").addEventListener("click", effacer);

function effacer() {
    ctx.lineWidth = 40;
    ctx.strokeStyle = "white"
    // ctx.clearRect(0, 0, 50, 50);
    // canvas.setColor("white");
}

// Les modèles aléatoires 
let aleatoire = Math.round(Math.random()*2 + 1);
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
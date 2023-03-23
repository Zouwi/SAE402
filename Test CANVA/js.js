const canvas = document.querySelector(".toile");
const ctx = canvas.getContext("2d");
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
// PARTIE JEU HIDE AND SEEK 
let victoire = 0;
//let truc = false;

function disparition(obj) {
   // truc = true;
    obj.classList.add("disparu2");
    // obj.style.animationFillMode= "";

    //if (truc == true)
    //{
        victoire++;
    //}
    if (victoire >= 10)
    {
        document.querySelector(".grosBoite").classList.remove("disparu");
    }

    console.log(victoire);
}
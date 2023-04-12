// Afficher les indices 
document.querySelector(".map").addEventListener("click", mapPop);

function mapPop() {
    document.querySelectorAll(".big>*").forEach(e => {
        e.classList.remove("disparu")
    })
};

// Fermer la map 
document.querySelector(".croixM").addEventListener("click", croix);

function croix() {
    document.querySelectorAll(".big>*").forEach(e => {
        e.classList.add("disparu")
    })
}

// Afficher les indices 
document.querySelector(".code").addEventListener("click", codePop);

function codePop() {
    document.querySelectorAll(".big2>*").forEach(e => {
        e.classList.remove("disparu")
    })
};

// Fermer le code 
document.querySelector(".croix2").addEventListener("click", croixCode);

function croixCode() {
    document.querySelectorAll(".big2>*").forEach(e => {
        e.classList.add("disparu")
    })
}

// Afficher la soluce 
document.querySelector(".soluce").addEventListener("click", () => {
    document.querySelector(".sur").classList.remove("disparu");
    document.querySelector(".assombrir2").classList.remove("disparu");
})

document.querySelector(".croixS").addEventListener("click", () => {
    document.querySelector(".sur").classList.add("disparu");
    document.querySelector(".assombrir2").classList.add("disparu");
})

document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".nomO").innerText = "The fountain has 120 frogs in all, all different sizes. Thanks to the mysterious code, 120 corresponds to E3 and a lily symbol. If you refer to the map of Mulhouse, finding the next destination is a breeze."
    document.querySelector(".title").innerText = "The solution";
    document.querySelector(".btn").classList.add("disparu2");
})

// La géolocalisation 
var watchID;
var geoLoc;
// 47.74687353625189, 7.338273486290688

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let cibleX = 47.74690741992023;
    let cibleY = 7.33829286767702;
    let margeX = (47.74690481348498 - 47.746868323377875);
    let margeY = (7.338393650885949 - 7.338177548428342);
    if (latitude > (cibleX - margeX) && latitude < (cibleX + margeX) &&
        longitude > (cibleY - margeY) && longitude < (cibleY + margeY)) {
        // if (latitude == cibleL && longitude == ciblel) {
        document.querySelector(".btnLien").classList.remove("disparu");
    }
}

function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: Access is denied!");
    } else if (err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}

function getLocationUpdate() {

    if (navigator.geolocation) {

        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 60000 };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}
getLocationUpdate()
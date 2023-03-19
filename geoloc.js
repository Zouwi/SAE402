// Localisation GPS 
let jeu1 = "47.7445154, 7.3352095";

// navigator.geolocation.watchPosition(updatePosition);

console.log(getLocationUpdate());
// function updatePosition(pos){
//    console.log(pos.coords);
//    if (pos.coords == jeu1 * 10) {
//     document.querySelector(".btnMarche").classList.add("apparition");
//    }
// }

// navigator.geolocation.watchPosition(
//     updatePosition,
//     // Optional settings below
//     positionError,
//     {
//         timeout: 0,
//         enableHighAccuracy: true,
//         maximumAge: 0
//     }
// );

var watchID;
var geoLoc;

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let cibleL = "49.2929024";
    let ciblel = "6.0751872";
    if (latitude == cibleL && longitude == ciblel) {
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



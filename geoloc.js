// Localisation GPS 

// navigator.geolocation.watchPosition(updatePosition);


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
    let cibleX = 47.74428694412362;
    let cibleY = 7.33568686370776;
    let margeX = (47.74429780432605 - 47.744292340461335)/2;
    let margeY = (7.33569646834205 - 7.33566396664148)/2;
    if (-margeX < latitude < margeX && -margeY < longitude < margeY) {
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


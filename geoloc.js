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
    let cibleX = 47.74430530018104;
    let cibleY = 7.335650569230543;
    // let margeX = 47.74429340911071;
    // let margeY = 7.336178116284078;
    let marge = 0.00031;
    if (latitude > (cibleX - marge) && latitude < (cibleX + marge) &&
    longitude > (cibleY - marge) && longitude < (cibleY + marge)) {
        // if (latitude == cibleL && longitude == ciblel) {
        document.querySelector(".btnLien").classList.remove("disparu");
        window.navigator.vibrate(1000);
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

// 47.744353873321685, 7.335687479396455
// 47.74419605247076, 7.335596372803968
// 47.744348103646644, 7.335562503834389
// 47.744496100338054, 7.335248318205921


// 47.74508170143113, 7.335482901586496
// 47.74659502046234, 7.3331967690052


// 47.74441559960202, 7.335578070304931
// 47.74417108272443, 7.335764667860924
// 47.7443491082841, 7.335621131279391
// 47.74428905153684, 7.335648243744791

// 47.74448757114194, 7.3353449524809875
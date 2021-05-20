/* Rendering the google map with markers, code below from 
https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript 
and adapted accordingly for this project. */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: {
            lat: 38.710226313438355,
            lng: -9.132954553145687 //Lisbon Cathedral
        },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
const locations = [{
        lat: 38.710226313438355,
        lng: -9.132954553145687 //Lisbon Cathedral
    },
    {
        lat: 38.713039220714585,
        lng: -9.13956351598682 //Santa Justa Lift
    },
    {
        lat: 38.70811656039217,
        lng: -9.13685984935746 // Rua Augusta Arch
    },
    {
        lat: 38.710795601195464,
        lng: -9.143168404758734 //Chiado Apartments and Suites
    },
    {
        lat: 38.70933051310584,
        lng: -9.130444005629228 //Eurostars Museum Hotel
    },
    {
        lat: 38.71526602692937,
        lng: -9.140014127184378 // Altis Avenida Hotel
    },
    {
        lat: 38.70850167854929,
        lng: -9.13569040641466 //Museu de Cerveja (The Beer Museum)
    },
    {
        lat: 38.7099081799122,
        lng: -9.134832099557345 //Eating Bear (Portuguese fusion tapas)
    },
    {
        lat: 38.71020119754663,
        lng: -9.141462520030112 // Belcanto haute cuisine
    },
];

initMap();
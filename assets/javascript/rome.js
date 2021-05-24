/* Rendering the google map with markers, code below from 
https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript 
and adapted accordingly for this project. */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: 41.89120402432327,
            lng: 12.493416198459283 //Colloseum
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
        lat: 41.89120402432327,
        lng: 12.493416198459283 //Colloseum
    },
    {
        lat: 41.90180947627905,
        lng: 12.483459838436787 //Trevi Fountain
    },
    {
        lat: 41.903917579172756,
        lng: 12.454277404785715 // Sistine Chapel, Vatican City
    },
    {
        lat: 41.90827729876242,
        lng: 12.49129188789494 //The Westin Excelsior
    },
    {
        lat: 41.90115467272614,
        lng: 12.48462928081349 //Relais Fontana di Trevi Hotel
    },
    {
        lat: 41.908580711373105,
        lng: 12.48765481256685 // Hotel Eliseo
    },
    {
        lat: 41.89966936132157,
        lng: 12.47067106532263 //Del Fico restaurant
    },
    {
        lat: 41.900595688613116,
        lng: 12.48232258117971 //Baccano Brasserie
    },
    {
        lat: 41.90468414499988,
        lng: 12.487429507041817 // Osteria Barberini
    },
];

initMap();
/* Rendering the google map with markers, code below from 
https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript 
and adapted accordingly for this project. */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 37.972076658931186,
            lng: 23.725033019551365
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
        lat: 37.972076658931186,
        lng: 23.725033019551365
    },
    {
        lat: 37.97573027524435,
        lng: 23.7343027337655
    },
    {
        lat: 37.980715799827244,
        lng: 23.744881768147216
    },
    {
        lat: 37.976555004719586,
        lng: 23.7504393051101
    },
    {
        lat: 37.97934580791456,
        lng: 23.742285389965595
    },
    {
        lat: 37.97398398899369,
        lng: 23.731835503628446
    },
    {
        lat: 37.96538873296271,
        lng: 23.743753971737153
    },
    {
        lat: 37.97712697733022,
        lng: 23.751783432566153
    },
    {
        lat: 37.976382751024374,
        lng: 23.7516868730828
    },
];

initMap();
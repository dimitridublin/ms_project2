/* Rendering the google map with markers, used "How to Google Maps" by Eamonn Smyth (pdf in Slack) and code from the
course tutorial "Putting it all together" for tips and advice on how to formulate code below */
const properties = {
    "lat": 37.972076658931186,
    "lng": 23.725033019551365
}
initMap();

function initMap() {
    const mapParameters = {
        center: properties,
        zoom: 14,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapParameters);
};

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [{
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
    }
];

var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});
// creating the google map, used "How to Google Maps" by Eamonn Smyth for tips and advice on how to formulate code below
const properties = {
    "lat": 38.7229839697771,
    "lng": -9.139263109412974
}
initMap();

function initMap() {
    const mapParameters = {
        center: properties,
        zoom: 13,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapParameters);
}
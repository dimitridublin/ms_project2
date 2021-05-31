/* Rendering the google map with markers, code below from 
https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript 
and adapted accordingly for this project. Specific city markers and info in respective city js files */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: center
    });
    // Create an array of alphabetical characters used to label the markers and display marker info on click
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        const infowindow = new google.maps.InfoWindow({
            content: `<div>${sights[i]}</div>`,
        });
        const marker = new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//call the function rendering map on page
initMap();
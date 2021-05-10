/* let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "script.js");

xhr.send();
*/

// creating the map
const properties = {
    "lat": 12,
    "lng": 100
}

function myMap() {
    const mapParameters = {
        center: properties,
        zoom: 15,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapParameters);

}

myMap()
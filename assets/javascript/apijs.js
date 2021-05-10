/* var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    };
}

console.log(data);

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
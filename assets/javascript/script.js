// Cities' info
let citiesMap = [{
    id: 1,
    name: "Athens",
    description: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.The city is still dominated by 5 th - century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple.The Acropolis Museum, along with the National Archaeological Museum",
    atAGlanceText: "A holiday in Athens is truly a jewel of a European city break! The city has a wealth of historic sites, too many to explore in one trip. Apart from historic sites and archeological landmarks, visitors will find the true taste of Greek cuisine in its numerous and very affordable restaurants and cafes. Booterstown Travel offers three magnificent hotel choices, personally handpicked for their excellent value for money and proximity to the city's main attractions. Along with more info regarding the accommodation on offer on our map below, we have selected the top-3 attractions and restaurants to help with exploring this incredible city. Let's travel!",
    attractions: {
        heading: "Attractions",
        text: "No city break to Athens is complete without a visit to its world famous landmark: the Parthenon temple on top of the city's Acropolis (left image above, mark A on map below). Other unmissable attractions include the former Palace and current Greek Parliament building on Syntagma Square (centre image above, mark B on map below) as well as the Lycabettus Hill with its hiddent churches and shrines and its spectacular views of the city. (right image, mark C on the map)",
        imageFilenames: ["greek_salad.jpg", "greek_salad.jpg", "greek_salad.jpg"]
    },
    accomodation: {
        heading: "Accomodation",
        text: "Booterstown Travel accommodation has been carefully selected for its excellent value for money, proximity to most major attractions and ethical standards of operation. Whether a splash in the pool under the hot Athenian sun, a comfortable and spacious room or a fully equipped leisure centre is your ideal relaxation after a day's exploring, our accommodation options will have you fully covered! Travellers can choose from three hotel options: the Athens Hilton (mark D on the map), Electra Palace (mark E on the map) and St George Lycabettus Hotel. (mark F on the map)",
        imageFilenames: ["greek_salad.jpg", "greek_salad.jpg", "greek_salad.jpg"]
    },
    restaurants: {
        heading: "Restaurants",
        text: "Voted Greece's best restaurant for several years in a row, Spondi with its three Michelin stars is a heavenly approach to discovering the delights of Greek cuisine and it is a must visit for any foodie (mark G on the map). Two more inexpensive but must-visit options include Cookoovaya (mark H on the map) and Agora Select (mark I on the map), both conviniently located on the same street!",
        imageFilenames: ["greek_salad.jpg", "greek_salad.jpg", "greek_salad.jpg"]
    },
    locations: [{
            name: "Athens Acropolis",
            desc: "Write description",
            lat: 37.972076658931186,
            lng: 23.725033019551365 //Athens Acropolis
        },
        {
            name: "Athens Acropolis",
            desc: "Write description",
            lat: 37.97573027524435,
            lng: 23.7343027337655 //Syntagma (Parliament) Square
        },
        {
            name: "Athens Acropolis",
            desc: "Write description",
            lat: 37.980715799827244,
            lng: 23.744881768147216 // Lycabettus Hill
        },
    ],
}, ];

function getCityIdFromURL() {
    let url = new URL(window.location.href);
    let id = url.searchParams.get('id');
    return id;
}

function showCityInfo() {
    const id = getCityIdFromURL();
    const cityInfo = citiesMap.find((eachCity) => {
        eachCity.id === id;
    });
    generateAndDisplayCityInfo(cityInfo);
}

function addDetailsSection(details) {
    let imageHTML = "";
    for (let i = 0; i < details.imageFilenames.length; i++) {
        imageHTML += `<div class="col-12 col-md-4 city-image"><img src="assets/images/${details.imageFilenames[i]}"
                    alt="acropolis view from Lycabettus Hill" class="img-fluid" /></div>`
    }
    const html = `<div class="details-container">
    <h3 class="text-uppercase mt-4">At a glance</h3>
    <p id="at-a-glance-text" class="mt-1 ml-3 mr-3 mb-4"> </p>
    <h4 class="text-uppercase mt-3">${details.heading}</h4>
    <div>
        <div class="row">
           ${imageHTML}
        </div>
    </div>
    <p class="mt-3 ml-3 mr-3 mb-4">
        ${details.text}
    </p>
    </div>`;
    $('main').append(html);
}
showCityInfo();

function addDetaisSection(details) {
    let imageHTML = "";
    for (let i = 0; i < details.imageFilenames.length; i++) {
        imageHTML += `<div class="col-12 col-md-4 city-image"><img src="assets/images/${details.imageFilenames[i]}"
                    alt="acropolis view from Lycabettus Hill" class="img-fluid" /></div>`
    }
    const html = `<div class="details-container">
    <h3 class="text-uppercase mt-4">At a glance</h3>
    <p id="at-a-glance-text" class="mt-1 ml-3 mr-3 mb-4"> </p>
    <h4 class="text-uppercase mt-3">${details.heading}</h4>
    <div>
        <div class="row">
           ${imageHTML}
        </div>
    </div>
    <p class="mt-3 ml-3 mr-3 mb-4">
        ${details.text}
    </p>
    </div>`;
    $('main').append(html);
}

function generateAndDisplayCityInfo(cityInfo) {
    $('#city-name').text(cityInfo.name);
    $('#city-description').text(cityInfo.description);
    $('#at-a-glance-text').text(cityInfo.atAGlanceText);
    addDetailsSection(cityInfo.attractions);
    addDetailsSection(cityInfo.accomodation);
    addDetailsSection(cityInfo.restaurants);
    setupMap(cityInfo.locations);
}

function setupMap(locations) {
    const mapParameters = {
        center: sights[0],
        zoom: 14,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapParameters);
};
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});
var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});
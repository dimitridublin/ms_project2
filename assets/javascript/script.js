// Cities' info
let citiesMap = [{
        id: 1,
        name: "Athens",
        description: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.The city is still dominated by 5 th - century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple.The Acropolis Museum, along with the National Archaeological Museum",
        sights: [{
                lat: 37.972076658931186,
                lng: 23.725033019551365 //Athens Acropolis
            },
            {
                lat: 37.97573027524435,
                lng: 23.7343027337655 //Syntagma (Parliament) Square
            },
            {
                lat: 37.980715799827244,
                lng: 23.744881768147216 // Lycabettus Hill
            },
        ],
        accommodation: [{
                lat: 37.976555004719586,
                lng: 23.7504393051101 //Hilton Athens
            },
            {
                lat: 37.97934580791456,
                lng: 23.742285389965595 //St George Lycabettus Hotel
            },
            {
                lat: 37.97398398899369,
                lng: 23.731835503628446 // Electra Palace Hotel
            },
        ],
        restaurants: [{
                lat: 37.96538873296271,
                lng: 23.743753971737153 //Spondi Restaurant
            },
            {
                lat: 37.97712697733022,
                lng: 23.751783432566153 //Cookoovaya Restaurant
            },
            {
                lat: 37.976382751024374,
                lng: 23.7516868730828 // Agora Select Restaurant
            },
        ],
    },
    {
        id: 2,
        name: "Lisbon",
        description: "Lisbon is Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge. Nearby, the National Azulejo Museum displays 5 centuries of decorative ceramic tiles. Just outside Lisbon is a string of Atlantic beaches",
        sights: [{
                lat: 38.713039220714585,
                lng: -9.13956351598682 //Santa Justa Lift
            },
            {
                lat: 38.710226313438355,
                lng: -9.132954553145687 //Lisbon Cathedral
            },
            {
                lat: 38.70811656039217,
                lng: -9.13685984935746 // Rua Augusta Arch
            },
        ],
        accommodation: [{
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
        ],
        restaurants: [{
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
        ],
    },
    {
        id: 3,
        name: "Rome",
        description: "Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region.The city has been a major human settlement for almost three millennia. With 2,860,009 residents in 1,285 km², it is also the country's most populated comune.",
        sights: [{
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
        ],
        accommodation: [{
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
        ],
        restaurants: [{
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
        ],
    }
];

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
}

// Set the city info into DOM elements
$("#city-header").html(` <h1 class="text-uppercase">${citiesMap.name}</h1>
                        <p class="book-paragraph">${citiesMap.description}</p>`);

// Render google map on page
initMap();

function initMap() {
    const mapParameters = {
        center: sights[0],
        zoom: 14,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapParameters);
};

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var markers = citiesMap.sights.map(function (location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});
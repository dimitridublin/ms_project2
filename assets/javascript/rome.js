    // City info, photographs and map    
    let htmlRome = `<div class="details-container">
            <div>
                <h3 class="text-uppercase mt-4">At a glance</h3>
                <p class="mt-1 ml-5 mr-5 mb-5">What could one say about <strong>Rome</strong>, the "Eternal City", that
                    has not been said already?
                    Antiquities, culture, monuments, history, charm, modern living and of course Italian food, this is
                    truly a city break that has it all!
                    Travellers get to explore the city's hills, proximity to beaches and true Italian food as it is
                    meant to taste.
                    In addition, Booterstown Travel offers three magnificent hotel choices, personally handpicked for
                    their
                    excellent value for money and proximity to the city's main attractions. Along with more info
                    regarding the accommodation on offer on our map <strong>below</strong>, we have selected the top-3
                    attractions and
                    restaurants to help with exploring this incredible city. <strong>Let's travel!</strong> </p>
                <h4 class="text-uppercase mt-3">Attractions</h4>
                <div>
                    <div class="row">
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by Ágatha Depiné on Unsplash -->
                            <img src="assets/images/rome/chapel_detail.jpg" alt="Chapel fresco detail"
                                class="img-fluid" />
                        </div>
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by Caleb Miller on Unsplash -->
                            <img src="assets/images/rome/vatican.jpg" alt="view of the Vatican" class="img-fluid" />
                        </div>
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by Marco Chilese on Unsplash -->
                            <img src="assets/images/rome/colloseum_view.jpg" alt="View of the Colloseum from a distance"
                                class="img-fluid" />
                        </div>
                    </div>
                </div>
                <p class="mt-4 ml-5 mr-5 mb-5">
                    Rome BTT city breaks unusually begin at <strong>Sistine Chapel</strong> in Vatican City (left image
                    above, mark
                    A
                    on map below). This is not only because of the famous landmark and the uniqueness of Rome being the
                    capital of two countries
                    but also as this is the area that gets most crowded later in the day.
                    Other unmissable attractions include the square of <strong>St. Marco</strong> (centre
                    image above, mark B on map below)
                    as well as the beautiful <strong>Colloseum</strong> dating back to the gladiator times (right
                    image,
                    mark C on the map).
                </p>
                <h4 class="text-uppercase mt-3">Accommodation</h4>
                <div>
                    <div class="row">
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by Blake Woolwine on Unsplash -->
                            <img src="assets/images/rome/rome_hotel_1.jpg" alt="hotel room photo" class="img-fluid" />
                        </div>
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by Christopher Ott on Unsplash -->
                            <img src="assets/images/rome/rome_hotel_2.jpg" alt="hotel swimming pool"
                                class="img-fluid" />
                        </div>
                        <div class="col-12 d-none d-md-inline col-md-4 city-image">
                            <!-- Photo by mark champs on Unsplash -->
                            <img src="assets/images/rome/rome_hotel_3.jpg" alt="hotel room photo" class="img-fluid" />
                        </div>
                    </div>
                </div>
                <p class="mt-4 ml-5 mr-5 mb-5">
                    Booterstown Travel accommodation has been carefully selected for its excellent value for money,
                    proximity to most major attractions and ethical standards of operation. Whether a splash in the pool
                    under the hot Italian sun, a comfortable and spacious room or a fully equipped leisure centre is
                    your
                    ideal relaxation after a day's exploring, our accommodation options will have you fully covered!
                    Travellers can choose from three hotel options: <strong>The Westin Excelsior</strong> (mark D on the
                    map),
                    <strong>Relais Fontana di Trevi Hotel</strong> (mark E on the map) and <strong>Hotel Eliseo</strong>
                    (mark F on the map).
                </p>
                <h4 class="text-uppercase mt-3">Restaurants</h4>
                <div>
                    <div class="row">
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by engin akyurt on Unsplash -->
                            <img src="assets/images/rome/pizza.jpg" alt="pizza photo" class="img-fluid" />
                        </div>
                        <div class="col-12 col-md-4 city-image">
                            <!-- Photo by ABHISHEK HAJARE -->
                            <img src="assets/images/rome/pasta.jpg" alt="pasta photo" class="img-fluid" />
                        </div>
                        <div class="col-12 d-none d-md-inline col-md-4 city-image">
                            <!-- Photo by Krisztina Papp on Unsplash -->
                            <img src="assets/images/rome/rome_restaurant.jpg" alt="photo of a restaurant"
                                class="img-fluid" />
                        </div>
                    </div>
                </div>
                <p class="mt-4 ml-5 mr-5 mb-5">
                    Rome is world famous for its restaurants and cafes, and even a top-100 list would be difficult to
                    compile. However, BTT staff have discovered some gems that would certainly be worth visiting such as
                    <strong>Del Fico restaurant</strong> with its three
                    Michelin stars
                    is a heavenly approach to discovering the delights of Italian cuisine and it is a must visit for any
                    <strong>foodie</strong> (mark G on the map).
                    Two more inexpensive but must-visit options include <strong>Baccano Brasserie</strong> (mark H on
                    the map)
                    and
                    <strong>Osteria Barberini</strong> (mark I on the map),
                    both offering the freshest seafood directly from the market as well as divine tiramisus!
                </p>
            </div>
            <div id="map"></div>`;
    $("main").append(htmlRome);

    /* Rendering the google map with markers, code below from 
    https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript 
    and adapted accordingly for this project. */
    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: {
                lat: 41.903917579172756,
                lng: 12.454277404785715 // Sistine Chapel, Vatican City
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
            lat: 41.903917579172756,
            lng: 12.454277404785715 // Sistine Chapel, Vatican City
        },
        {
            lat: 41.90241062107875,
            lng: 12.456760397741427 //St. Marco Square
        },
        {
            lat: 41.89120402432327,
            lng: 12.493416198459283 //Colloseum
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
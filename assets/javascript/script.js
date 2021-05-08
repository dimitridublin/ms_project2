// allow page content to load before user can select city of preference 
document.addEventListener("DOMContentLoaded", function () {
            let exploreButtons = document.getElementsByClassName("explore-button");

            for (let exploreButton of exploreButtons) {
                button.addEventListener("click", function () {
                    if (this === exploreButton[0]) {
                        let
                    }
                    if (this === exploreButton[1]) {
                        lisbon
                    } else {
                        rome
                    }
                });
            }
        };



        let citiesMap = [{
                id: 1,
                name: "Athens",
                description: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, 
                a powerful civilization and empire.The city is still dominated by 5 th - century BC landmarks,
                including the Acropolis,
                a hilltop citadel topped with ancient buildings like the colonnaded
                Parthenon temple.The Acropolis Museum,
                along with the National Archaeological Museum,
                preserves sculptures,
                vases,
                jewelry and more from Ancient Greece.
                "
                locations: [{
                        lat: 12,
                        lng: 12
                    },
                    {
                        lat: 12,
                        lng: 12
                    },
                    {
                        lat: 12,
                        lng: 12
                    },
                ],
            },
            {
                id: 2,
                name: "Rome",
                description: "Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio 
                region.The city has been a major human settlement
                for almost three millennia.With 2,
                860,
                009 residents in
                1,
                285 km²,
                it is also the country 's most populated comune.",
                locations: [{
                        lat: 12,
                        lng: 12
                    },
                    {
                        lat: 12,
                        lng: 12
                    },
                    {
                        lat: 12,
                        lng: 12
                    },
                ],
            },
            {

            },
        ];
        // https://dimitridublin.github.io/ms_project2/cities.html?id=1
        function getCityIdFromURL() {
            let url = new URL(window.location.href);
            let id = url.searchParams.get('id');
            return id;
        }

        function showCityInfo() {
            const id = getCityIdFromURL(); // 3
            const cityInfo = citiesMap.find((eachCity) => {
                eachCity.id === id;
            });
            // Set the city info into DOM elements
        }
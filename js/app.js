// google maps api
var myLatLng = {
    lat: 21.194739,
    lng: 72.8015333
};

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng,
        styles: [{
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [{
                        "saturation": "-17"
                    },
                    {
                        "lightness": "21"
                    },
                    {
                        "gamma": "1.16"
                    },
                    {
                        "weight": "2.35"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "gamma": "1"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#004d90"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Khanadwala Laboratry'
    });
}

//map slide toggle
$(document).ready(function () {
    $("#map-btn").click(function () {
        $(".open-map-icon").toggle(),
        $(".close-map-icon").toggle(),
        $("#map").slideToggle("slow");
    });
});

//change navbar on scroll
$(document).ready(function () {
    var scroll_start = 0;
    var start_change = $('#start-change');
    var offset = start_change.offset();
    if (start_change.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar-custom').addClass("navbar-On-Scroll")
            } else {
                $('.navbar-custom').removeClass("navbar-On-Scroll")
            }
        })
    }
});

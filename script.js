//Google Map
function initMap() {
    var uluru = {lat: 28.621301, lng: 77.091818}; //enter latitude and longitude of location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        scrollwheel: true,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
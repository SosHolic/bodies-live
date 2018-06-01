var lang;
var long;

getLocation();
console.log(lang);
console.log(long);

function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    lang = position.coords.latitude;
    long = position.coords.longitude;
    var mymap = L.map('mapid').setView([lang, long], 19);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);

        L.marker([lang, long]).addTo(mymap)
            .bindPopup('You are here.<br> somewhere.')
            .openPopup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(mymap);
        }

        mymap.on('click', onMapClick);

        $.ajax({
            url: "/user/add?longtitude="+long+"&langtitude="+lang,
            url: "/user/add?longtitude="+long+"&langtitude="lang,
            type: 'GET',
            contentType: 'json',
            success: function(json) {
               console.log(json);
            },
            error: function(request, textStatus, errorThrown) {
               console.log("error");
            }
        });

         $.ajax({
                    url: "/user/getAll?longtitude="+long+"&langtitude="lang,
                    type: 'GET',
                    contentType: 'json',
                    success: function(json) {
                       console.log(json);
                    },
                    error: function(request, textStatus, errorThrown) {
                       console.log("zle");
                    }
                });
}



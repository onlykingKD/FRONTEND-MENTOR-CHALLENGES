var mymap = L.map('mapid').setView([26.41, 82.54], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib25seWtpbmdrZCIsImEiOiJja3MzbnZyZmExeHk0MnZtcmMwdjB6b3V5In0.YGSFJvrGINqywHieF1IXBQ'
}).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


var IP = document.getElementById("search");
var ip = IP.value;
var api_key = "at_q49o2j7ZW4KSwREIkNEiEgz6sqrZ6";

function searchIP () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key, ipAddress: ip },
        success: function (data) {
            $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
        }
    });
};
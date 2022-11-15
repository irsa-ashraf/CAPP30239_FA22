mapboxgl.accessToken = 'pk.eyJ1IjoiaXJzYS1hIiwiYSI6ImNsYWhxaG85bTFxd2QzeXMzZmE1eXJqdGYifQ.Nfa5rrFOUp9Zy86Ec1cLEA';

var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

var marker = new mapboxgl.Marker()
.setLngLat([-73.984529, 40.720444])
.addTo(map);
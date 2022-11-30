(function() {

mapboxgl.accessToken = 'pk.eyJ1IjoiaXJzYS1hIiwiYSI6ImNsYWhxaG85bTFxd2QzeXMzZmE1eXJqdGYifQ.Nfa5rrFOUp9Zy86Ec1cLEA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-73.9897, 40.7411], // Flatiron district = starting position [lng, lat]
    zoom: 12, // starting zoom
    projection: 'albers', // display the map as a 3D globe
    attributionControl: false
});
map.addControl(new mapboxgl.AttributionControl(), 'bottom-right')

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});


d3.json("map_data.json").then((data) => {
    data = JSON.parse(data)
    // console.log(data)

    var currentMarkers=[];
    for (var l of data) {
        let marker = new mapboxgl.Marker({
        color: l.Color
        }).setLngLat([l.Longitude, l.Latitude])
            .addTo(map)
            .on('click', (e) => {console.log('Hello')})
        currentMarkers.push(marker);
        // map.on('click', (e) => {

        //     new mapboxgl.Popup()
        //     .setLngLat([l.Longitude, l.Latitude]) // long lat go here 
        //     .setHTML([l.Name, l.Price, l.Rating]) // data goes here in place of description 
        //     .addTo(map)})
            
        //     const coordinates = e.features[0].geometry.coordinates.slice();
        //     console.log(coordinates)
        //     const description = e.features[0].properties.description;
} 


d3.select("select")
    .on("change", function (e, d) {
        let newData = data.filter(d => d.Category === e.target.value);
        // let marker = new mapboxgl.Marker().addTo(map);
        if (currentMarkers!==null) {
            for (var i = currentMarkers.length - 1; i >= 0; i--) {
            currentMarkers[i].remove();
            }
        }
        // console.log(e.target.value)
        for (var l of newData) {
            let marker = new mapboxgl.Marker({
            color: l.Color
            }).setLngLat([l.Longitude, l.Latitude])
                .addTo(map);
            currentMarkers.push(marker);
        }
    })})
})();
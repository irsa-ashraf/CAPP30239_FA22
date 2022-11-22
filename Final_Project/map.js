
d3.json("map_data.json").then((data) => {
    data = JSON.parse(data);

    const group = d3.group(data, (d) => d.Category);
    for (var g of group) {
        console.log(g);
    }
    for (var l of g) {
        console.log(l)
        let marker = new mapboxgl.Marker({
            color: "#e41a1c"
        }).setLngLat([l.Longitude, l.Latitude])
        .addTo(map);
    }
    });

    let thaiArr = [{"Longitude":-73.9861267303,"Latitude":40.7304087225,"Category":"Thai"},{"Longitude":-73.960393,"Latitude":40.7138759768,"Category":"Thai"},{"Longitude":-73.987363,"Latitude":40.732259,"Category":"Thai"},{"Longitude":-73.9926038,"Latitude":40.7183,"Category":"Thai"},{"Longitude":-73.99065,"Latitude":40.73902,"Category":"Thai"},{"Longitude":-73.98991,"Latitude":40.7629,"Category":"Thai"},{"Longitude":-73.9942677,"Latitude":40.6946130355,"Category":"Thai"},{"Longitude":-73.993167,"Latitude":40.733804,"Category":"Thai"},{"Longitude":-73.9956057,"Latitude":40.7207104296,"Category":"Thai"},{"Longitude":-73.9893,"Latitude":40.72374,"Category":"Thai"},{"Longitude":-73.9868891,"Latitude":40.703367486,"Category":"Thai"},{"Longitude":-73.9961,"Latitude":40.67795,"Category":"Thai"},{"Longitude":-73.99643,"Latitude":40.7218,"Category":"Thai"},{"Longitude":-74.004213804,"Latitude":40.72990742,"Category":"Thai"},{"Longitude":-73.933508,"Latitude":40.69583,"Category":"Thai"},{"Longitude":-73.96121,"Latitude":40.71194,"Category":"Thai"},{"Longitude":-73.9972861,"Latitude":40.7171895949,"Category":"Thai"},{"Longitude":-73.9983,"Latitude":40.71474,"Category":"Thai"},{"Longitude":-74.0052369891,"Latitude":40.7073890241,"Category":"Thai"},{"Longitude":-74.005321,"Latitude":40.708453,"Category":"Thai"},{"Longitude":-73.97328,"Latitude":40.69315,"Category":"Thai"},{"Longitude":-73.999392,"Latitude":40.729771,"Category":"Thai"},{"Longitude":-73.954254,"Latitude":40.743232,"Category":"Thai"},{"Longitude":-73.98128,"Latitude":40.73767,"Category":"Thai"},{"Longitude":-73.968485,"Latitude":40.679366,"Category":"Thai"},{"Longitude":-73.9543802664,"Latitude":40.7322576096,"Category":"Thai"},{"Longitude":-73.9310911,"Latitude":40.7039938,"Category":"Thai"},{"Longitude":-73.95727,"Latitude":40.77078,"Category":"Thai"},{"Longitude":-73.998062,"Latitude":40.6782327,"Category":"Thai"},{"Longitude":-73.971286,"Latitude":40.693005,"Category":"Thai"},{"Longitude":-73.9863216752,"Latitude":40.6892229764,"Category":"Thai"},{"Longitude":-73.8886,"Latitude":40.74319,"Category":"Thai"}]
    
    for (var l of thaiArr) {
            let marker = new mapboxgl.Marker({
                color: '#4daf4a'
            }).setLngLat([l.Longitude, l.Latitude])
            .addTo(map);
        }



// d3.json('map_data.json').then((data) => {
//     const groups = d3.group(data, d => d.Category)
//     console.log(groups)
    // for (var l of data) {
    //     let marker = new mapboxgl.Marker({
    //         color: "#e41a1c"
    //     }).setLngLat([l.Longitude, l.Latitude])
    //     .addTo(map);

    // for (var l of g) {
    //     let marker = new mapboxgl.Marker({
    //         color: "#e41a1c"
    //     }).setLngLat([l.Longitude, l.Latitude])
    //     .addTo(map);
    // }
// })
    

    // let latArr = [
    //     [-73.995970, 40.736218],
    //     [-73.991655, 40.703306],
    //     [-73.996233, 40.722766]
    // ]

    // for (var l of latArr) {
    //     let marker = new mapboxgl.Marker({
    //         color: "#e41a1c"
    //     }).setLngLat(l)
    //     .addTo(map);
    // }

// let catArr = [
//         {"Longitude":-73.99597,"Latitude":40.736218,"Category":"Italian"},
//         {"Longitude":-73.9916549605,"Latitude":40.703306333,"Category":"Italian"},
//         {"Longitude":-73.996233,"Latitude":40.722766,"Category":"Italian"},
//         {"Longitude":-73.989177,"Latitude":40.702662,"Category":"Italian"},
//         {"Longitude":-73.964757,"Latitude":40.715621,"Category":"Italian"},
//         {"Longitude":-74.00322,"Latitude":40.72506,"Category":"Italian"},
//         {"Longitude":-73.971003,"Latitude":40.689722,"Category":"Italian"},
//         {"Longitude":-73.999242,"Latitude":40.674968,"Category":"Italian"},
//         {"Longitude":-73.997447,"Latitude":40.718554,"Category":"Italian"},
//         {"Longitude":-74.00513,"Latitude":40.73372,"Category":"Italian"},
//         {"Longitude":-73.99203,"Latitude":40.69979,"Category":"Italian"},
//         {"Longitude":-73.98316,"Latitude":40.69446,"Category":"Italian"},

//     // let latArr = [
//     //     {
//     //         "lat": -73.995970, 
//     //         "long": 40.736218,
//     //         "name": "Chez vou",
//     //         "color": "blue"
//     //     },
//     //     {

//     //     }
//     // ]

//     for (var l of catArr) {
//         let marker = new mapboxgl.Marker({
//             color: "#e41a1c"
//         }).setLngLat([l.Longitude, l.Latitude])
//         .addTo(map);
//     }

// let thaiArr = [{"Longitude":-73.9861267303,"Latitude":40.7304087225,"Category":"Thai"},{"Longitude":-73.960393,"Latitude":40.7138759768,"Category":"Thai"},{"Longitude":-73.987363,"Latitude":40.732259,"Category":"Thai"},{"Longitude":-73.9926038,"Latitude":40.7183,"Category":"Thai"},{"Longitude":-73.99065,"Latitude":40.73902,"Category":"Thai"},{"Longitude":-73.98991,"Latitude":40.7629,"Category":"Thai"},{"Longitude":-73.9942677,"Latitude":40.6946130355,"Category":"Thai"},{"Longitude":-73.993167,"Latitude":40.733804,"Category":"Thai"},{"Longitude":-73.9956057,"Latitude":40.7207104296,"Category":"Thai"},{"Longitude":-73.9893,"Latitude":40.72374,"Category":"Thai"},{"Longitude":-73.9868891,"Latitude":40.703367486,"Category":"Thai"},{"Longitude":-73.9961,"Latitude":40.67795,"Category":"Thai"},{"Longitude":-73.99643,"Latitude":40.7218,"Category":"Thai"},{"Longitude":-74.004213804,"Latitude":40.72990742,"Category":"Thai"},{"Longitude":-73.933508,"Latitude":40.69583,"Category":"Thai"},{"Longitude":-73.96121,"Latitude":40.71194,"Category":"Thai"},{"Longitude":-73.9972861,"Latitude":40.7171895949,"Category":"Thai"},{"Longitude":-73.9983,"Latitude":40.71474,"Category":"Thai"},{"Longitude":-74.0052369891,"Latitude":40.7073890241,"Category":"Thai"},{"Longitude":-74.005321,"Latitude":40.708453,"Category":"Thai"},{"Longitude":-73.97328,"Latitude":40.69315,"Category":"Thai"},{"Longitude":-73.999392,"Latitude":40.729771,"Category":"Thai"},{"Longitude":-73.954254,"Latitude":40.743232,"Category":"Thai"},{"Longitude":-73.98128,"Latitude":40.73767,"Category":"Thai"},{"Longitude":-73.968485,"Latitude":40.679366,"Category":"Thai"},{"Longitude":-73.9543802664,"Latitude":40.7322576096,"Category":"Thai"},{"Longitude":-73.9310911,"Latitude":40.7039938,"Category":"Thai"},{"Longitude":-73.95727,"Latitude":40.77078,"Category":"Thai"},{"Longitude":-73.998062,"Latitude":40.6782327,"Category":"Thai"},{"Longitude":-73.971286,"Latitude":40.693005,"Category":"Thai"},{"Longitude":-73.9863216752,"Latitude":40.6892229764,"Category":"Thai"},{"Longitude":-73.8886,"Latitude":40.74319,"Category":"Thai"}]

// for (var l of thaiArr) {
//         let marker = new mapboxgl.Marker({
//             color: '#4daf4a'
//         }).setLngLat([l.Longitude, l.Latitude])
//         .addTo(map);
//     }


// for (var l of korArr) {
//         let marker = new mapboxgl.Marker({
//             color: '#377eb8'
//         }).setLngLat([l.Longitude, l.Latitude])
//         .addTo(map);
//     }

// let freArr = [{"Longitude":-74.00184,"Latitude":40.70757,"Category":"French"},{"Longitude":-73.99766,"Latitude":40.7327,"Category":"French"},{"Longitude":-74.0043464096,"Latitude":40.732704,"Category":"French"},{"Longitude":-73.9982149184,"Latitude":40.722689295,"Category":"French"},{"Longitude":-73.9808411,"Latitude":40.7626274,"Category":"French"},{"Longitude":-73.9880941,"Latitude":40.7456996892,"Category":"French"},{"Longitude":-74.0057086945,"Latitude":40.7243642217,"Category":"French"},{"Longitude":-73.9563720201,"Latitude":40.7132639977,"Category":"French"},{"Longitude":-73.9888503,"Latitude":40.7136187,"Category":"French"},{"Longitude":-73.957873,"Latitude":40.72191,"Category":"French"},{"Longitude":-73.9894791546,"Latitude":40.7316162601,"Category":"French"},{"Longitude":-74.003915,"Latitude":40.732484,"Category":"French"},{"Longitude":-74.0028772,"Latitude":40.733063,"Category":"French"},{"Longitude":-73.98115,"Latitude":40.72473,"Category":"French"},{"Longitude":-73.991758,"Latitude":40.719135,"Category":"French"},{"Longitude":-74.00266,"Latitude":40.70659,"Category":"French"},{"Longitude":-73.9928337146,"Latitude":40.6830415994,"Category":"French"},{"Longitude":-73.98554,"Latitude":40.75446,"Category":"French"},{"Longitude":-74.00152,"Latitude":40.73771,"Category":"French"},{"Longitude":-73.9822988918,"Latitude":40.6655697293,"Category":"French"},{"Longitude":-73.95648,"Latitude":40.71684,"Category":"French"},{"Longitude":-74.00695,"Latitude":40.73928,"Category":"French"},{"Longitude":-73.9626279,"Latitude":40.673109,"Category":"French"},{"Longitude":-73.9955124433,"Latitude":40.6907305802,"Category":"French"},{"Longitude":-74.00995,"Latitude":40.72188,"Category":"French"},{"Longitude":-73.9597273,"Latitude":40.6560593,"Category":"French"},{"Longitude":-74.00363,"Latitude":40.72331,"Category":"French"},{"Longitude":-73.988257,"Latitude":40.6879459,"Category":"French"},{"Longitude":-74.0006073834,"Latitude":40.7300047977,"Category":"French"},{"Longitude":-73.9879689992,"Latitude":40.7218274586,"Category":"French"},{"Longitude":-73.99225,"Latitude":40.68451,"Category":"French"},{"Longitude":-73.98365,"Latitude":40.74362,"Category":"French"},{"Longitude":-73.9524272,"Latitude":40.7177117058,"Category":"French"},{"Longitude":-73.9511032104,"Latitude":40.7258415222,"Category":"French"},{"Longitude":-73.96913,"Latitude":40.67749,"Category":"French"}]

// for (var l of freArr) {
//         let marker = new mapboxgl.Marker({
//             color: '#984ea3'
//         }).setLngLat([l.Longitude, l.Latitude])
//         .addTo(map);
//     }
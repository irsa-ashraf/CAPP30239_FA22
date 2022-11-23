let width = 1000,
height = 450;

const radius = 18;   // distance between bubbles 
let margin = 3;

let svg = d3.select("#bubble-chart")
.append("svg")
.attr("width", width)
.attr("height", height);

d3.csv("bubble.csv").then(data => {

    let result = d3.group(data, d => d.Category);

    console.log(result)

    let rScale = d3.scaleLinear()
        .range([6,12]) //Change size of curcles 
        .domain(d3.extent(data, d => d.Count));

    let colors = d3.scaleOrdinal()
        .range(['pink', 'red', 'black', 'green']) // change colors here 
        .domain(d3.map(data, d => d.Price));

    let simulation = d3.forceSimulation(data)
        .force("charge", d3.forceManyBody().strength(1000)) //strength
        .force('x', d3.forceX().x(250))
        .force('y', d3.forceY().y(height/2))
        .force("collision", d3.forceCollide().radius(radius));

    let g = svg.append("g")
        .attr("class", "group");

    simulation.on("tick", () => {
        g.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .attr("r", d => (rScale(d.Count)))
        .attr("fill", d => colors(d.Price))
        .attr("opacity", 1.0)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .on("mouseover", function (event, d) {
            d3.select(this).attr("opacity", 1);

    tooltip
    .style("visibility", "visible")
    .html(`${d.Category}<br />${d.Count}`);
        })
        .on("mousemove", function (event) {
            tooltip
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function () {
            d3.select(this).attr("opacity", 0.75);
            tooltip.style("visibility", "hidden");
        })
    })

    for (let i = 0; i < 100; i++) {
        simulation.tick()
    }
    });

    const tooltip = d3.select("body").append("div")
    .attr("class", "svg-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden");
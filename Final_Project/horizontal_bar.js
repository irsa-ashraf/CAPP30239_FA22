d3.csv("ratings_cat.csv").then(data => {

    for (let d of data) {
        d.Rating = +d.Rating; //force a number
    };

    data.sort((a, b) => b.Rating - a.Rating); // sort cases by number, largest first
    // data.sort((a, b) => d3.ascending(a.country, b.country)); // alphabatize by country

    const height = 600,
          width = 800,
          margin = ({ top: 25, right: 100, bottom: 55, left: 65 });

    let svg = d3.select("#horizontal-chart")
        .append("svg")
        .attr("viewBox", [0, 0, width, height]); // for resizing element in browser

    let x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Rating)]).nice()
        .range([margin.left, width - margin.right]);
    
    let y = d3.scaleBand()
        .domain(data.map(d => d.Category))
        .range([margin.top, height - margin.bottom])
        .padding(0.2);

    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom + 5})`) // move location of axis
        .call(d3.axisBottom(x));
    
    svg.append("g")
        .attr("transform", `translate(${margin.left - 5},0)`)
        .call(d3.axisLeft(y));

    let bar = svg.selectAll(".bar") // create bar groups
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");

    bar.append("rect") // add rect to bar group
        .attr("fill", "steelblue")
        .attr("x", margin.left)
        .attr("width", d => x(d.Rating))
        .attr("y", d => y(d.Category))
        .attr("height", y.bandwidth());
    
    bar.append('text') // add labels
        .text(d => d.Rating)
        .attr('x', d => margin.left + x(d.Rating) - 10)
        .attr('y', d => y(d.Category) + (y.bandwidth()/2))
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .style('fill', 'white');

    svg.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", width - margin.right)
      .attr("y", height)
      .attr("dx", "0.5em") // dx and dy can be used for shifting position
      .attr("dy", "-0.5em") // see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy 
      .text("Country Code");
    
    svg.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "end")
      .attr("x", -margin.left/2)
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .text("COVID cases per 100,000");
});


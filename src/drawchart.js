import {
  scaleLinear,
  scaleLog,
  scaleSqrt,
  extent,
  axisBottom,
  axisLeft,
} from "d3";

export function drawChart(
  SVG,
  chartData,
  data,
  height,
  width,
  margin,
  colorScale,
  selectedContinent
) {
  const maxRadius = 40;

  const xScale = scaleLog()
    .domain(extent(data, (d) => d.gdp_cap))
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.life_exp))
    .range([height - margin.bottom, margin.top]);

  let rScale = scaleSqrt()
    .domain(extent(data, (d) => d.population))
    .range([1, maxRadius]);

  SVG.selectAll("circle")
    .data(chartData)
    .transition()
    .duration(400)
    .attr("cx", (d) => xScale(d.gdp_cap))
    .attr("cy", (d) => yScale(d.life_exp))
    .attr("r", (d) => rScale(d.population))
    .attr("opacity", 1)
    .style("fill", (d) => colorScale(d.continent));

  SVG.append("g")
    .call(axisLeft(yScale).ticks(5))
    .attr("transform", `translate(${margin.left}, 0)`)
    .call((g) => g.select(".domain").remove());

  SVG.append("g")
    .call(axisBottom(xScale).ticks(5))
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call((g) => g.select(".domain").remove());
  //   console.log(xScale(20));
  //   console.log(yScale(50));
  //   console.log(colorScale("Africa"));
}

import { scaleLinear, scaleLog, scaleSqrt, extent } from "d3";

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

  const rScale = scaleSqrt()
    .domain(extent(data, (d) => d.pop))
    .range([1, maxRadius]);

  //   console.log(xScale(20));
  //   console.log(yScale(50));
  //   console.log(colorScale("Africa"));
}

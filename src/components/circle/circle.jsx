import { color, select } from "d3";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { drawChart } from "../../drawchart";
import data from "../../data/gapminder_data.json";
import "../../index.css";

// https://observablehq.com/@uwdata/introduction-to-d3-part-2

const margin = { left: 50, right: 20, top: 30, bottom: 50 };

function Circles({ width, height, year, colorScale, selectedContinent, data }) {
  const svgRef = useRef();
  const chartData = data.filter((d) => d.year === year);

  useEffect(() => {
    const svg = select(svgRef.current);
    drawChart(
      svg,
      chartData,
      data,
      height,
      width,
      margin,
      colorScale,
      selectedContinent
    );
  }, [chartData, height, width, colorScale, selectedContinent, data]);
  // this just attaches circles to the DOM - it doesn't actually set their size, color, or position
  return <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}></svg>;
}

Circles.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  year: PropTypes.number,
  data: PropTypes.array,
  colorScale: PropTypes.func,
  selectedContinent: PropTypes.string,
};
export default Circles;

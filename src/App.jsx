import { useState } from "react";
import Circle from "./components/circle/circle";
import Slider from "react-input-slider";
import { scaleOrdinal, schemeTableau10 } from "d3";
import data from "./data/gapminder_data.json";
import "./App.css";

const height = 500;
const width = 960;

function App() {
  const [year, setYear] = useState({ x: 1957 });
  const continents = [...new Set(data.map((d) => d.continent))];
  const colors = scaleOrdinal().domain(continents).range(schemeTableau10);

  return (
    <div className="App">
      <h1 className="header">Gapminder Chart</h1>
      <div className="slider">
        <p>{year.x}</p>
        <Slider
          axis="x"
          x={year.x}
          xmin={1957}
          xmax={2007}
          xstep={5}
          onChange={({ x }) => setYear((state) => ({ ...state, x }))}
        />
      </div>
      <div className="chart">
        <Circle
          width={width}
          height={height}
          colorScale={colors}
          data={data}
          year={year.x}
        />
      </div>
    </div>
  );
}

export default App;

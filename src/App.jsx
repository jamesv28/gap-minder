import Circle from "./components/circle/circle";
import { scaleOrdinal, schemeTableau10 } from "d3";
import data from "./data/gapminder_data.json";
import "./App.css";

const height = 500;
const width = 960;

function App() {
  const continents = [...new Set(data.map((d) => d.continent))];
  const colors = scaleOrdinal().domain(continents).range(schemeTableau10);

  return (
    <div className="App">
      <h1 className="header">Gapminder Chart</h1>
      <div className="slider"></div>
      <div className="chart">
        <Circle
          width={width}
          height={height}
          colorScale={colors}
          data={data}
          year={1957}
        />
      </div>
    </div>
  );
}

export default App;

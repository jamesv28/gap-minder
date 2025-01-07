import Circle from "./components/circle/circle";
import "./App.css";

const height = 500;
const width = 960;

function App() {
  return (
    <div className="App">
      <h1 className="header">Gapminder Chart</h1>
      <div className="slider"></div>
      <div className="chart">
        <Circle width={width} height={height} />
      </div>
    </div>
  );
}

export default App;

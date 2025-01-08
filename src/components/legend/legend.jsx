import PropTypes from "prop-types";
import "./legend.style.css";

const Legend = ({ labels, colorScale, setContinent, continent }) => {
  return (
    <div className="legend-container">
      {labels.map((label, i) => (
        <div
          style={{ fontWeight: continent === "label" ? 700 : 400 }}
          className="legend-row"
          key={i}
        >
          <div
            style={{ backgroundColor: colorScale(label) }}
            className="legend-marker"
            onClick={() => setContinent(label)}
          ></div>
          <p className="legend-label">{label}</p>
        </div>
      ))}
    </div>
  );
};

Legend.propTypes = {
  labels: PropTypes.array,
  colorScale: PropTypes.func,
  setContinent: PropTypes.func,
  continent: PropTypes.string,
};
export default Legend;

import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Kyiv" />
      <div className="bottom-link">
        <a
          href="https://github.com/HelgagleH/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span className="signature"> by Olha Dashchynska</span>
      </div>
    </div>
  );
}

export default App;

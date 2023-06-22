import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <div className="bottom-link">
        <a
          href="https://github.com/HelgagleH/first-repository"
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

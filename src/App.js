import './App.css';
import logo from './logo.svg';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// import Weather from "./Weather";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="App">
      {/* <Weather /> */}

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


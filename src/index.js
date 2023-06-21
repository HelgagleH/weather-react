import React from 'react';
// import ReactDOM from 'react-dom/client';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
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
  </StrictMode>
);





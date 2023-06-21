import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




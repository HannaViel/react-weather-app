import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://preeminent-cajeta-8bd6e7.netlify.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hanna Vielkova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/HannaViel/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://frolicking-griffin-0e6550.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

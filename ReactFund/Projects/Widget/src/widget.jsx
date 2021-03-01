console.log("Webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock.jsx"
import Tab from "./tab.jsx"
import Weather from "./weather.jsx"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabContent = [{title: "One", content: "Tab1"}, {title: "Two", content: "Tab2"}, {title: "Three", content: "Tab3"}];

  ReactDOM.render(
    <div>
      <div className="holder-box">
        <Clock />
        <Weather />
      </div>
  
      <div className="holder-box">
        <Tab content={tabContent} />
        <div className="auto-fill">
          <h1 className="split-header">Test</h1></div>
      </div>
    </div>, root);
  
});
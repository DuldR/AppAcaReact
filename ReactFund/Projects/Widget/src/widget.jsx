console.log("Webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock.jsx"
import Tab from "./tab.jsx"
import Weather from "./weather.jsx"
import Auto from "./auto.jsx"
import dataBase from "./names.js"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabContent = [{title: "One", content: "Tab1"}, {title: "Two", content: "Tab2"}, {title: "Three", content: "Tab3"}];
  const names = dataBase.names;

  ReactDOM.render(
    <div>
      <div className="holder-box">
        <Clock />
        <Weather />
      </div>
  
      <div className="holder-box">
        <Tab content={tabContent} />
        <Auto content={names}/>
      </div>
    </div>, root);
  
});
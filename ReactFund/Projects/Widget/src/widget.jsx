console.log("Webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock.jsx"
import Tab from "./tab.jsx"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabContent = [{title: "One", content: "Tab1"}, {title: "Two", content: "Tab2"}, {title: "Three", content: "Tab3"}];

  ReactDOM.render(
    <div>
      <Clock />
      <div class="holder-box">
        <Tab content={tabContent} />
        <div class="auto-fill">
          <h1 class="split-header">Test</h1></div>
      </div>
    </div>, root);
  
});
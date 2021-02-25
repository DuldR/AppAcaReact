console.log("Webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock.jsx"
import Tab from "./tab.jsx"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <div>
      <Clock />
      <Tab />
    </div>, root);
  
});
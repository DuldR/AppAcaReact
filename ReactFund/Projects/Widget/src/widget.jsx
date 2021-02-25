console.log("Webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock.jsx"
import Tab from "./tab.jsx"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const tabContent = [{title: "1", content: "Tab1"}, {title: "2", content: "Tab2"}];

  ReactDOM.render(
    <div>
      <Clock />
      <Tab content={tabContent}/>
    </div>, root);
  
});
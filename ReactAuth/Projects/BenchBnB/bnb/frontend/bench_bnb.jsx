import React from "react";
import ReactDOM from "react-dom";

import * as userUtil from '../frontend/util/util_users' 

window.makeUser = userUtil.createUser

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
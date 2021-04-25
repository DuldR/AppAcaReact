import React from "react";
import ReactDOM from "react-dom";

import * as userUtil from '../frontend/util/util_users' 
import * as sessionUtil from '../frontend/util/util_sessions' 

window.makeUser = userUtil.createUser

window.makeSession = sessionUtil.createSession
window.logout = sessionUtil.destroySession

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
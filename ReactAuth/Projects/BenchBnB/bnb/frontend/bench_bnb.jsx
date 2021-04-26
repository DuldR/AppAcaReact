import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'

import * as userUtil from '../frontend/util/util_users' 
import * as sessionUtil from '../frontend/util/util_sessions' 

window.makeUser = userUtil.createUser

window.makeSession = sessionUtil.createSession
window.logout = sessionUtil.destroySession

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  window.store = store
});
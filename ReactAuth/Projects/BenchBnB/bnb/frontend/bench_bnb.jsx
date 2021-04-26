import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import { Root } from './components/root'

import * as userUtil from '../frontend/util/util_users' 
import * as sessionUtil from '../frontend/util/util_sessions' 
import * as api from '../frontend/util/session_api_util'

import * as sessions from '../frontend/actions/session_actions'

// Test
// window.makeUser = userUtil.createUser

// window.makeSession = sessionUtil.createSession
// window.logout = sessionUtil.destroySession

window.api = api;
window.sessions = sessions

// Test

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);


  // Test
  window.store = store
  // Test

});
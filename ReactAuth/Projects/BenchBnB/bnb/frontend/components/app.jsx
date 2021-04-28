import React from "react";
import { Route } from 'react-router-dom'

import { AuthRoute } from '../util/route_util'
import GreetingContainer from './home/greeting_container'
import SignUpFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'

const App = () => (
  <div>
      <header>
          <h1>Bench BnB</h1>
          <GreetingContainer />          
      </header>
      
      {/* <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} /> */}

      <AuthRoute path={"/signup"} exact={true} component={SignUpFormContainer} />
      <AuthRoute path={"/login"} exact={true} component={LoginFormContainer} />
    
  </div>
);

export default App;
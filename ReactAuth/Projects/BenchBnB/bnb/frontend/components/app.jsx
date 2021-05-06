import React from "react";
import { Route } from 'react-router-dom'

import { AuthRoute } from '../util/route_util'
import GreetingContainer from './home/greeting_container'
import SignUpFormContainer from './forms/signup_form_container'
import LoginFormContainer from './forms/login_form_container'
import SearchContainer from './benches/search_container'
import BenchFormContainer from './benches/bench_form_container'

const App = () => (
  <div>
      <header>
          <h1>Bench BnB</h1>
          <GreetingContainer />    
      </header>
      

      <AuthRoute path={"/signup"} exact={true} component={SignUpFormContainer} />
      <AuthRoute path={"/login"} exact={true} component={LoginFormContainer} />

      <Route exact path="/" component={SearchContainer}/>
      <Route path='/benches/new' component={BenchFormContainer} />
    
  </div>
);

export default App;
import React from 'react';
import { Mickael, Allan, Home, Loader, Error } from './screens/screens';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './assets/scss/app.assets.scss'


function App() {

  return (
    <>
      <Router>
        <Switch>

          <Route path="/allan">
            <Allan />
          </Route>
          
          <Route path="/mickael">
            <Mickael />
          </Route>
          
          <Route path="/loader">
            <Loader />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
            <Error name={"404"} />
          </Route>
          
        </Switch>
      </Router>
    </>
  )
}

export default App;

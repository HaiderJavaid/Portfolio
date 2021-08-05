import React from 'react';

import Home from './pages/Home';
import Hero from './pages/Hero';
import Portfolio from './pages/Portfolio';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




const App = () => {
  return (

    

    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
        
          <Route exact path='/home'>
            <Home />
          </Route> 

          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  

}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import About from './components/MainView/About';
import Contact from './components/MainView/Contact';
import Portfolio from './components/MainView/Portfolio';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/portfolio' component={Portfolio} />
    </Switch>
  )
}

export default Routes;
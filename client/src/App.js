import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/appointment' component={Appointment} />
      </Switch>
    </Router>
  );
}

export default App;

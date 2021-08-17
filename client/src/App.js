import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Booking from './pages/Booking';
import Success from './pages/Success';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/appointment' component={Appointment} />
        <Route exact path='/booking' component={Booking} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Booking from './pages/Booking';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/appointment' component={Appointment} />
        <Route exact path='/booking' component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;

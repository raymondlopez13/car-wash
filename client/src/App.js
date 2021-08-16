import React from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointment from './pages/Appointment';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:3001/api`
})
function App() {
  function getData() {
    api.get('/').then(res => {
      console.log(res.data);
    })
  }
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

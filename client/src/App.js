import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router> 
        <Nav />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/success' component={Success} />
            <Route exact path='/admin' component={Admin} />
          </Switch>
    </Router>
  );
}

export default App;

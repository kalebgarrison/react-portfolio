import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import ContactMe from "./components/pages/ContactMe/ContactMe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={ContactMe} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

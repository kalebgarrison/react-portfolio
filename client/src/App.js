import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
// import portfolio from "./portfolio.json";

function App() {
// console.log(portfolio)
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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

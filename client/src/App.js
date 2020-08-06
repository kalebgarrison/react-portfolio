import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import ContactMe from "./components/pages/ContactMe/ContactMe";

function App() {

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

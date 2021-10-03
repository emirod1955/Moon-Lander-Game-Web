//react
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import NavBar from './components/NavBar';
import { Home } from './components/Home';
import { Download } from './components/Download';
import {Resources} from './components/Resources';
import {Footer} from './components/Footer';
import { About } from './components/About';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/resources" exact component={() => <Resources />} />
          <Route path="/download" exact component={() => <Download />} />
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;

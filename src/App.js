//import react
import React from 'react';

//import route libraly
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import NavBar from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import {Community} from './components/Community/Community';
import { Download } from './components/Download/Download';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/community" exact component={() => <Community />} />
          <Route path="/download" exact component={() => <Download />} />
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;

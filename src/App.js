//import react
import React from 'react';

//import route libraly
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import NavBar from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Download } from './components/Download/Download';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/download" exact component={() => <Download />} />
          <Route path="/sign in" exact component={() => <Download />} />
          <Route path="/sign up" exact component={() => <Download />} />
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;

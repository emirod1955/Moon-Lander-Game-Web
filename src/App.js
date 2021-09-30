//react
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import NavBar from './components/NavBar';
import { Home } from './components/Home';
import { Download } from './components/Download';




function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/download" exact component={() => <Download />} />
          <Route path="/web-player" exact component={() => <Download />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"
//import "./App.css";
import page1 from "./components/page1";
import page2 from "./components/page2";
import menubar from "./components/menubar";

class App extends Component {
  render() {
    return (
      <Router>
      <HashRouter>
        <Switch>
          
          <Route path="/" exact component={menubar}/>
          <Route path="/page1" component={page1} />
          <Route path="/page2" component={page2} />
    
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  
        
        
    );
  }
}

export default App;
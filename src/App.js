import React, {Component} from 'react';
import {Switch, Route} from "react-router";
import './App.css';
import 'bulma/css/bulma.css'
import Home from "./pages/home";
import {Footer} from "./components/footer";
import {NotFound} from "./pages/not-found"
import Detail from "./pages/details";

class App extends Component  {

  render() {
      return (
          <div className="App ">
              <div className="app-wrapper">
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/detail/:id" component={Detail}/>
                      <Route component={NotFound}/>
                  </Switch>
              </div>
              <Footer/>
          </div>
      );
  }
}


export default App;

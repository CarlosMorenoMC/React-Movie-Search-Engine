import React, {Component} from 'react';
import {Switch, Route} from "react-router";
import './App.css';
import 'bulma/css/bulma.css'
import {Detail} from "./pages/details";
import {Home} from "./pages/home";
import {Footer} from "./components/footer";
import {NotFound} from "./pages/not-found"

class App extends Component  {

  render() {
      //Enrutado con renderizado condicional
      // const url = new URL(document.location)
      // const Page = url.searchParams.has('id')
      //       ? <Detail id={url.searchParams.get('id')}/>
      //       : <Home/>

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

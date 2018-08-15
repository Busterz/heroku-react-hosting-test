import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Navigation from './Component/Navigation';

// For deployment on Heroku, but through Github repo, not Heroku CLI
class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Route exact={true} path={'/'} component={Home}/>
        <Route exact={true} path={'/about'} component={About}/>
      </div>
    );
  }
}

export default App;

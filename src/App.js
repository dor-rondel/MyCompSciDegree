import React, { Component } from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Semester  from './components/Semester'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Link to="/"><h1>Undergrad Curriculum</h1></Link>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/semester/:numeral" component={ Semester }/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
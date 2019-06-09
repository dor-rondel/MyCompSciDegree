import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Semester  from './components/Semester'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          Curriculum grid
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/semester/:numeral" component={ Semester }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
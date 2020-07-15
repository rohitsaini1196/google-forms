import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Home from './Components/Home'


function Main() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/login" component={Login}/>
            </Switch>
        </Router>
    </div>
  );
}

export default Main


function Login(){
    return (
        <div>
            <p>Login form goes here</p>
        </div>
    );
}
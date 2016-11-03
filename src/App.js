import React from 'react';
import './App.css';
import * as firebase from 'firebase';
import SignIn from './SignIn.js';
import {reducer, actions} from './ducks';
const obj = {};

obj.displayName = 'App';

obj.componentDidMount = function () {
  let currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    firebase.auth().onAuthStateChanged((user) => {
      this.dispatcher(actions.setUser(user));
    });
  }
};

obj.dispatcher = function(action) {
  this.setState(reducer(this.state, action));
};

obj.render = function () {
  console.info(this.state, firebase.auth());
  if (!this.state) {
    return <div>loading...</div>;
  }
  if (this.state.user) {
    return <div>:)</div>;
  }
  return <SignIn/>;
};

const App = React.createClass(obj);

export default App;

import React from 'react';
import './App.css';
import * as firebase from 'firebase';
import SignIn from './components/SignIn.js';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import {reducer, actions} from './ducks';
const obj = {};

obj.displayName = 'App';

obj.componentDidMount = function () {
  let currentUser = firebase.auth().currentUser;
  if (currentUser) return;

  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      return this.dispatcher(actions.setUser(user));
    }
    let {email, displayName, photoURL, uid} = user;
    this.dispatcher(actions.setUser({
      email, displayName, photoURL, uid
    }));
  });
};

obj.dispatcher = function(action) {
  this.setState(reducer(this.state, action));
};

obj.render = function () {
  console.info(this.state && this.state.user);
  if (!this.state) {
    return <div>loading...</div>;
  }
  if (this.state.user) {
    return <div className='body'>
      <Navbar user={this.state.user}/>
      <Body/>
    </div>;
  }
  return <SignIn/>;
};

const App = React.createClass(obj);

export default App;

import React from 'react';
import * as firebase from 'firebase';
import './App.css';

const provider = new firebase.auth.GoogleAuthProvider();

const obj = {};

obj.displayName = 'App';

obj.render = function () {
  return <div>
    <h1>{this.state.name}</h1>
    <button onClick={this.onClick}>sign in</button> 
  </div>;
};

obj.componentDidMount = function () {
  const nameRef = firebase.database().ref().child('Object').child('name');
  nameRef.on('value', snapshot => {
    this.setState({
      name: snapshot.val()
    });
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Yes', user);
    } else {
      console.log('No');
    }
  });
};

obj.onClick = function (evt) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(token, user);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorCode, errorMessage, email, credential);
  });
};

obj.getInitialState = function () {
  return {};
};


const App = React.createClass(obj);

export default App;

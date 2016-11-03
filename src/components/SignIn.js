import React from 'react';
import * as firebase from 'firebase';
import Btn from './Button.js';
const provider = new firebase.auth.GoogleAuthProvider();
const obj = {};

obj.render = function () {
  return <div>
    <h1 className="titulo text-center">Peek</h1>
    <div className="well center-block sign-in-module">
      <Btn success block onClick={this.onClick}>Sign In</Btn>
    </div>
  </div>;
};

obj.componentDidMount = function () {
  const nameRef = firebase.database().ref().child('Object').child('name');
  nameRef.on('value', snapshot => {
    this.setState({
      name: snapshot.val()
    });
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

const SignIn = React.createClass(obj);

export default SignIn;

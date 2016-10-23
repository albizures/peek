import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBp6uW_cTmrFZEQNRRZHdgXftbWW_iATyM",
  authDomain: "peek-8f06f.firebaseapp.com",
  databaseURL: "https://peek-8f06f.firebaseio.com",
  storageBucket: "peek-8f06f.appspot.com",
  messagingSenderId: "972884965446"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React from 'react';
import './App.css';
import './vendor/Bootstrap/css/bootstrap.css';
import SignIn from './SignIn.js';

const obj = {};

obj.displayName = 'App';

obj.render = function () {
  return <div>    
    <SignIn></SignIn> 
  </div>;
};

const App = React.createClass(obj);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCZ2fzdKVdthX6FtdSaOtH2dw6204M5Bs",
    authDomain: "react-port.firebaseapp.com",
    databaseURL: "https://react-port.firebaseio.com",
    projectId: "react-port",
    storageBucket: "",
    messagingSenderId: "358724824998"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Components
import Splash from './components/splash.jsx';

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  ReactDOM.render(<Splash />, root);
});

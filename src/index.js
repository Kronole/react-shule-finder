import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SchoolProvider } from "./context"
ReactDOM.render(
  <SchoolProvider>
  <Router>
    <App />
  </Router>
  </SchoolProvider>,
  document.getElementById('root')
);

serviceWorker.register();

// Request a one-off sync:
navigator.serviceWorker.ready.then(function(swRegistration) {
  return swRegistration.sync.register('firstSync');
});
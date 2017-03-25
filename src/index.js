import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, hashHistory } from 'react-router';
import App from './routes';

import 'react-dates/lib/css/_datepicker.css';

ReactDOM.render(
  // <Router routes={routes} history={hashHistory} />, document.getElementById('root')
  <App />, document.getElementById('root')
);

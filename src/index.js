import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'react-app'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
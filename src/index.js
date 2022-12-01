import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
//import './assets/test.js'

import AppClock from './components/Clock/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>

);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { configureAppStore, configureAppStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let initialState = {
    questions: null
  }

  let store = configureAppStore(initialState);
  window.getState = store 
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


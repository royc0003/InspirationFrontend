// let's go!

import React from "react";

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Import CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './sass/App.scss';

// Import Components
import App from './App';

// import react router deps
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);

render(router, document.getElementById('root'));


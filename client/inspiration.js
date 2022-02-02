// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';
// import 'bootstrap/dist/css/bootstrap.css';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
const router = (
  <Provider store={store}>
    <App></App>
    {/* <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router> */}
  </Provider>
);

render(router, document.getElementById('root'));


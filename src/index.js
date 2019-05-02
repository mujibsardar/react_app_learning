// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import store from './store';
import Root from './components/Root';
import Home from './components/Home';


render(
  <Provider store={store}>
    <Router>
              <div className="container">
              <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={Root} />
              </Switch>
              </div>
    </Router>
  </Provider>,
document.getElementById('root')
);
// render(<Hello />, document.getElementById('root'));

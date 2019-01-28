import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import Guild from './containers/guild';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/">home</Link>
        <Link to="/guild">guild</Link>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/guild" component={Guild} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

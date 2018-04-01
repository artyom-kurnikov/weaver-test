import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import store from './store';
import Start from './components/Start';
import Login from './components/Login';
import Register from './components/Register';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={Start} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;

import React from 'react';

import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
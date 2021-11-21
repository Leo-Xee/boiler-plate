import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
      </Switch>
    </Router>
  );
}

export default App;

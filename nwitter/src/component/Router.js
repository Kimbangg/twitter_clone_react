import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router exact path="/">
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route>
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

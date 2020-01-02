import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import feathers from '../../feathers';

import Home from '../Home';
import Start from '../Start';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const reAuthenticate = async () => {
      const response = await feathers.reAuthenticate();
      if (response && response.user) {
        setCurrentUser(response.user);
      }
    }

    const authenticate = async () => {
      const accessToken = await feathers.authentication.getAccessToken();
      if (accessToken) {
        await reAuthenticate();
      }
      setLoading(false);
    };

    authenticate();
  }, []);

  if (loading) {
    return <></>
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            {currentUser ? <Home user={currentUser} /> : <Start />}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

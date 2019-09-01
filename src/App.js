import React, { useState, useEffect } from 'react';
import Landing from './users/page/landing';
import Splash from './users/page/splashScreen';
import { Route } from 'react-router-dom';
import Authenticate from './users/organisms/authenticated';
import './App.css';
import { LoadingContext, SignUpContext } from './context/context';
import Signup from './users/page/register';
import Signin from './users/page/login';
import Reset from './users/page/reset';

const Authenticated = Authenticate(Splash)(Landing);

const App = props => {
  const [loaded, setLoaded] = useState({
    loading: true,
    success: false,
  });
  let [signupstate, setsignup] = useState({
    loading: false,
    signup: true,
  });
  let [signinstate, setsignin] = useState({
    loading: false,
    signin: true,
  });

  let [resetstate, setreset] = useState({
    loading: false,
    reset: true,
  });

  const formToDisplay = value => {
    setsignup({
      loading: false,
      [value]: true,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoaded({ loading: false, success: true });
    }, 3000);
  }, []);
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => (
          <LoadingContext.Provider value={loaded}>
            <Authenticated {...props} formToDisplay={formToDisplay} />
          </LoadingContext.Provider>
        )}
      ></Route>
      <Route
        path={`/signup`}
        render={props => (
          <SignUpContext.Provider value={signupstate}>
            <Signup {...props} />
          </SignUpContext.Provider>
        )}
      ></Route>
      <Route
        path={`/signin`}
        render={props => (
          <SignUpContext.Provider value={signinstate}>
            <Signin {...props} />
          </SignUpContext.Provider>
        )}
      ></Route>
      <Route
        path={`/reset`}
        render={props => (
          <SignUpContext.Provider value={resetstate}>
            <Reset {...props} />
          </SignUpContext.Provider>
        )}
      ></Route>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Landing from "./users/page/landing";
import Splash from "./users/page/splashScreen";
import {Route} from "react-router-dom";
import Authenticate from "./users/organisms/authenticated";
import "./App.css";
import LoadingContext from "./context/context";
import Signup from "./users/page/signInUp"
const Authenticated = Authenticate(Splash)(Landing);


const App = () => {
  const [loaded, setLoaded] = useState({
    loading: true,
    success: false
  });
  useEffect(() => {
    setTimeout(() => {
      setLoaded({ loading: false, success: true });
    }, 3000);
  }, []);

  return (
    <div>
      <Route exact path='/' render={()=>
        <LoadingContext.Provider value={loaded}>
        <Authenticated />
      </LoadingContext.Provider>}>
      </Route>
      <Route path='/signup' render={
        props => <Signup {...props} />
      }></Route>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Landing from "./users/page/landing";
import Splash from "./users/page/splashScreen";
import {Route} from "react-router-dom";
import Authenticate from "./users/organisms/authenticated";
import "./App.css";
import {LoadingContext,SignUpContext} from "./context/context";
import Signup from "./users/page/register"
const Authenticated = Authenticate(Splash)(Landing);


const App = () => {
  const [loaded, setLoaded] = useState({
    loading: true,
    success: false
  });
  let [state , setState] = useState({
    loading:false,
    signup:true,
    signin:false,
    reset:false,
  })
  const formToDisplay = (value) => {
    setState({
      loading:false,
      signup:false,
      signin:false,
      reset:false,
      [value]:true
    })
  }
  useEffect(() => {
    setTimeout(() => {
      setLoaded({ loading: false, success: true });
    }, 3000);
  }, [])
  return (
    <div>
    <Route exact path='/' render={(props)=>
        <LoadingContext.Provider value={loaded}>
        <Authenticated {...props} formToDisplay = {formToDisplay}/>
      </LoadingContext.Provider>}>
      </Route>
      <Route path='/signup' render={(props) =>
        <SignUpContext.Provider value={state}>
        <Signup {...props} />
      </SignUpContext.Provider>}></Route>
    </div>
  );
};

export default App;

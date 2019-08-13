import React, { useState, useEffect } from "react";
import Landing from "./users/page/landing";
import Splash from "./users/page/splashScreen";
import Authenticate from "./users/organisms/authenticated";
import "./App.css";
import LoadingContext from "./context/context";
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
      <LoadingContext.Provider value={loaded}>
        <Authenticated />
      </LoadingContext.Provider>
    </div>
  );
};

export default App;

/* eslint-disable no-unused-expressions */
import React from "react";
import {LoadingContext} from "../../context/context";
const Authenticate = SplashScreen => LoginPage => {
  return (props) => {
    return (
      <div>
        <LoadingContext.Consumer>
          {({ loading, success }) => {
            if (loading) {
              return <SplashScreen loading={loading} />;
            }
            if (!loading && success) {
              return <LoginPage {...props}/>;
            }
          }}
        </LoadingContext.Consumer>
      </div>
    );
  };
};

export default Authenticate;

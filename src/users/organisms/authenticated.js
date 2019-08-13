/* eslint-disable no-unused-expressions */
import React from "react";
import { LoadingContext } from "../../context/context";
let Authenticated;
const Authenticate = splashScreen => loginPage => errorPage => {
  return (Authenticated = props => {
    <LoadingContext.consumer>
      {({ loading, success, failure }) => {
        if (loading) {
          return <splashScreen loading={loading}/>;
        }
        if (!loading && success) {
          return <loginPage {...props} />;
        }
        if (!loading && failure) {
          return <errorPage {...props}/>;
        }
      }}
    </LoadingContext.consumer>;
  });
};

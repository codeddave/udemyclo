import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function Login(props) {
  const history = useHistory();
  const { Login, Logout } = props;
  const { sign } = props;
  console.log(props);
  const responseGoogle = (response) => {
    console.log(response);
  };
  const logout = (data) => {
    console.log(data);
  };

  const myLogout = () => {
    history.push("/");
  };
  if (sign) {
    return (
      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={() => {
          Logout();
          myLogout();
        }}
      ></GoogleLogout>
    );
  } else {
    return (
      <GoogleLogin
        clientId="1019273393691-t75i6b2r9djp3mn20d4alv65iu8ml54c.apps.googleusercontent.com"
        buttonText="Log in with your google account"
        onSuccess={() => {
          Login();
          myLogout();
        }}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    );
  }
}

export default Login;

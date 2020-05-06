import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    history.push("/");
  };
  const logout = (data) => {
    history.push("/");
    console.log(data);
  };

  return (
    <div>
      <GoogleLogin
        clientId="1019273393691-t75i6b2r9djp3mn20d4alv65iu8ml54c.apps.googleusercontent.com"
        buttonText="Log in with your google account"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />

      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
}
export default Login;

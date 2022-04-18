import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import { GoogleLogin} from "react-google-login";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../_state/auth.js";
//DO NOT DO THIS FOR LATER
const CLIENT_ID =
  "156963401870-aq0atbcisuui6pqgcki6ap1tk3unqj6n.apps.googleusercontent.com";

  
function GoogleLoginPage() {

  const setAuth = useSetRecoilState(authAtom);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";


  const handleLogin = (googleData) => {

    fetch ("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(resJson) {
      //TODO: Change from localStorage to pinging the server
      localStorage.setItem("user", JSON.stringify(resJson));
      setAuth(resJson);
      navigate(from, { replace: true });
    })
    .catch(function(error) {
      console.error(error);
    })
  };

  //TODO: user/pass system in addition to google?
  return (
    <div>
      <h1>You don't have an account. Sign up with Google!</h1>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Log In with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleLoginPage
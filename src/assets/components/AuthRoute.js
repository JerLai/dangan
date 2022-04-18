import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { authAtom } from "../_state/auth.js";

function AuthRoute({ children, redirectTo }){
  const auth = useRecoilValue(authAtom);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={redirectTo} replace={true} state ={{from: location}}/>;
  }
  else {
    return children;
  }

}

export default AuthRoute
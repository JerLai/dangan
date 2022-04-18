import './App.css';
import SideBar from './assets/components/SideBar.js';
import options from "./assets/options.js";
import AuthRoute from "./assets/components/AuthRoute.js";
import GoogleLogin from "./assets/views/GoogleLoginPage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect } from 'react';

import api from "./assets/client_api/api.js";
import { authAtom } from "./assets/_state/auth.js";
import { useRecoilValue, useSetRecoilState } from "recoil";

function App() {

  const auth = useRecoilValue(authAtom);
  const setAuth = useSetRecoilState(authAtom);

  // TODO: Fix from using localStorage to keep user logged in to better cookie
  // verification
  // useEffect(()=> {
  //   let user = api.userRefresh()
  //     .then(function(res) {
  //       return res.json();
  //     })
  //     .then(function(userJson) {
  //       setAuth(userJson);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // });
  return (
    <div className="app">

      <Router>
      {/* Sidebar */}
        <SideBar routes = {options}/>
        <Routes>
          <Route
            path="/login"
            element={<GoogleLogin/>}/>
          {options.map((option, index) => (
            <Route
              key = {index}
              path={option.path}
              element={
                <AuthRoute redirectTo="/login">
                  <option.component/>
                </AuthRoute>
              } // you sneaky router thing, needing angle brackets
            />
          ))}

          <Route
            path="/"
            element={<Navigate to="/home"/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

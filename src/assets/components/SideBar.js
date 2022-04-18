import React from 'react';
import {useNavigate} from "react-router-dom";

import SideBarOption from "./SideBarOption.js";
import "./SideBar.css"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import TwitterIcon from "@material-ui/icons/Twitter";
import { GoogleLogout } from "react-google-login";
import { useResetRecoilState } from "recoil";
import { authAtom } from "../_state/auth.js";
const CLIENT_ID =
  "156963401870-aq0atbcisuui6pqgcki6ap1tk3unqj6n.apps.googleusercontent.com";
export default function SideBar(props) {
    // Styling for this SideBar component
    //color, logo, image, logoText, 
    const {routes} = props;
    const [activeTabIndex, setIndex] = React.useState();
    const navigate = useNavigate();
    function activeRoute(routeName) {
      return window.location.href.indexOf(routeName) > -1 ? true : false;
    }
    const resetAuth = useResetRecoilState(authAtom);
    const handleLogout = () => {
      fetch("/api/v1/auth/signout")
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        localStorage.removeItem("user");
        resetAuth();
        console.log(resJson);
        navigate("/login", {replace: true});
      })
      .catch(function(error) {
        console.error(error);
      });
    };

    let sidebar = (
      <div className ="sidebar">
      <List>
        <TwitterIcon className="sidebar__twitterIcon" />
        {routes.map((route) => {
          return (
            <ListItem>
              <SideBarOption
                text={route.name}
                Icon={route.icon}
                path ={route.path}
              >
              </SideBarOption>
            </ListItem>
          );
        })}
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Log Out with Google"
          onLogoutSuccess={handleLogout}
          onFailure={handleLogout}
        />
      </List>
      </div>

    );
    // returns the actual component itself
    return (
      sidebar
    );
}
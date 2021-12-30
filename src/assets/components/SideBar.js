import React from 'react';
//import { Link } from "react-router-dom";

import SideBarOption from "./SideBarOption.js";
import "./SideBar.css"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import TwitterIcon from "@material-ui/icons/Twitter";
import { Button, SvgIcon } from "@material-ui/core";

import dangan from "../dangan.svg";

export default function SideBar(props) {
    // Styling for this SideBar component
    //color, logo, image, logoText, 
    const {routes} = props;
    const [activeTabIndex, setIndex] = React.useState();
    function activeRoute(routeName) {
      return window.location.href.indexOf(routeName) > -1 ? true : false;
    }

    //TODO: Add Links and Routes
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
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </List>
      </div>

    );
    // returns the actual component itself
    return (
      sidebar
    );
}
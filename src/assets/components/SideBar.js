import React from 'react';

import SideBarOption from "./SideBarOption.js";
import "./SideBar.css"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
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

    let sidebar = (
      <div>
        {/*<Button
          variant="contained"

          startIcon={<img src={dangan}></img>}
        />
        */}
        <TwitterIcon className="sidebar__twitterIcon" />
        <SideBarOption active Icon={HomeIcon} text="Home" />
        <SideBarOption Icon={SearchIcon} text="Explore" />
        <SideBarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SideBarOption Icon={MailOutlineIcon} text="Messages" />
        <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SideBarOption Icon={ListAltIcon} text="Lists" />
        <SideBarOption Icon={PermIdentityIcon} text="Profile" />
        <SideBarOption Icon={MoreHorizIcon} text="More" />

        {/* Button -> Tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>

      /*
      <List>
        {routes.map((route) => {
          //NavLink?
          return (
            <ListItem>
              <SideBarOption
                name={route.name}
                icon={route.icon}
              >
              </SideBarOption>
            </ListItem>

          );
        })}
      </List>
      */

    );
    // returns the actual component itself
    return (
      <div className="sidebar">
      {/*}
        <Drawer
          anchor="left"
          variant="permanent"
          open={true}
        >
        */}
          {sidebar}
        {/*
        </Drawer>
        >*/}
      </div>
    );
}
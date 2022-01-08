import React from 'react';
import Icon from "@material-ui/core/Icon"
import { NavLink } from "react-router-dom";
import './SideBarOption.css';

function SideBarOption({ active, text, Icon, path }) {
  return (
    //NavLink later
    <NavLink to={path} style={{textDecoration: "none"}}>
    <div className={`sideBarOption ${active && "sideBarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
    </NavLink>
  )
}

export default SideBarOption

import React from 'react';
import Icon from "@material-ui/core/Icon"
import './SideBarOption.css';

function SideBarOption({ active, text, Icon }) {
  return (
    //NavLink later
    <div className={`sideBarOption ${active && "sideBarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SideBarOption

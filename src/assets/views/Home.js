import React from 'react'
import "./Home.css";
import Feed from '../components/Feed.js';
import Widgets from '../components/Widgets.js';
function home() {
  return (
    <div className = "home">
      <Feed/>
      <Widgets/>
    </div>
  )
}

export default home

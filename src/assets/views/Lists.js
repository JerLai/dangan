import React from 'react'
import "./Lists.css";
import Widgets from "../components/Widgets.js";
function Lists() {
  return (
    <div className="lists">
      <div className="lists__box">
        <div className="lists__header">
          <h3>Lists</h3>
        </div>
        <div className="lists__pinned">
          <h2>Pinned Lists</h2>
          <p> Nothing to see here yet - pin your favorite Lists to access them quickly.</p>
        </div>
        <div className="lists__discover">
          <h2>Discover new Lists</h2>
          <p>None to discover...yet!</p>
        </div>
        <div className="lists__yours">
          <h2>Your Lists</h2>
          <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
        </div>
      </div>
      <Widgets/>
    </div>
  )
}

export default Lists

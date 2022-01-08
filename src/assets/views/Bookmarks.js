import React from 'react';
import Widgets from "../components/Widgets.js";
import "./Bookmarks.css";
function Bookmarks() {
  return (
    <div className="bookmarks">
      <div className="bookmarks__box">
        <div className="bookmarks__header">
          <h3>Bookmarks</h3>
        </div>
        <h1>You haven't added any Tweets to your Bookmarks yet</h1>
        <p>When you do, they'll show up here.</p>
      </div>
      <Widgets/>
    </div>
 
  );
}

export default Bookmarks

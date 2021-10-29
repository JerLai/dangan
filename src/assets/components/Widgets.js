import React from 'react'
import "./Widgets.css";
import {Timeline, Share, Tweet} from "react-twitter-widgets";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <Tweet tweetId="841418541026877441"/>
        <Timeline
          dataSource={{
          sourceType: 'profile',
          screenName: 'SOKENsquareenix'
          }}
          options={{
          height: '400'
          }}
        />
        <Share
          url={"https://www.facebook.com/hewsgraphicsSAFE"}
          options={{ text: "#hews is awesome", via: "hews__" }}
        />
      </div>

    </div>
  )
}

export default Widgets

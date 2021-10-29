import React from 'react';

import "./TweetBox.css";
import {Button, Avatar} from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/644870914442596352/0IP4OU7f.jpg"/>
          <input placeholder="What's happening?" type="text"/>
        </div>

        <input
          /*value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}*/
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          /*onClick={sendTweet}*/
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox

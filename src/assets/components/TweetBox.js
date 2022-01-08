import React, {useState, useEffect} from 'react';
import "./TweetBox.css";
import {Button, Avatar} from "@material-ui/core";

import api from "../client_api/api.js";


function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    //TODO: change to have props send users info
    try {
      api.sendTweet({
        displayName: "Kamito",
        username: "Kamito12",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://pbs.twimg.com/profile_images/644870914442596352/0IP4OU7f.jpg",
      })
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        console.log(resJson);
        setTweetMessage("");
        setTweetImage("");
      })
      .catch(function(error) { 
        console.error(error);
      });

    } catch (e) {
      console.error("Error has occurred: ", e);
    }

  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/644870914442596352/0IP4OU7f.jpg"/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"/>
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
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

import React, {useState, useEffect} from 'react';
import "./TweetBox.css";
import {Button, Avatar} from "@material-ui/core";

import api from "../client_api/api.js";
import { authAtom } from "../_state/auth.js";
import { useRecoilValue} from "recoil";

function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const auth = useRecoilValue(authAtom);
  const sendTweet = (e) => {
    e.preventDefault();
    try {
      api.sendTweet({
        displayName: auth.displayName,
        username: auth.username,
        verified: auth.verified,
        text: tweetMessage,
        image: tweetImage,
        avatar: auth.avatar,
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
          <Avatar src= {auth.avatar}/>
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

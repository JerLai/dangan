import React, {useState, useEffect} from 'react';
import "./TweetBox.css";
import {Button, Avatar} from "@material-ui/core";
import db from "../../firebase.js";
import { collection, addDoc } from 'firebase/firestore';

function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    //TODO: change to have props send users info
    try {
      const addTweet = async () => {
        const postsCol = collection(db, 'posts');
        const res = await addDoc(postsCol, {
          displayName: "Kamito",
          username: "Kamito12",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar: "https://pbs.twimg.com/profile_images/644870914442596352/0IP4OU7f.jpg",
        });
        setTweetMessage("");
        setTweetImage("");
      }
      addTweet();
    } catch (e) {
      console.error("Error adding document: ", e);
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

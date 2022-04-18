import React, {useState, useEffect} from 'react';
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import "./Feed.css";
import FlipMove from 'react-flip-move';
import api from "../client_api/api.js";

import { authAtom } from "../_state/auth.js";
import { useRecoilValue} from "recoil";

function Feed(props) {
  const [posts, setPosts] = useState([]);

  let optionName = "Home"
  const auth = useRecoilValue(authAtom);
  
  useEffect(() => {
    let tweets = api.getTweets(auth.username)
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        setPosts(resJson);
      })
      .catch(function(error) {
        console.error(error);
      });

  }, []);
  return (
    <div className="feed">

      <div className="feed__header">
        <h2>{optionName}</h2>
      </div>

      <TweetBox/>

      <FlipMove>
        {posts.map((post) => (
          <Post
            key = {post._id}
            displayName={auth.displayName}
            username={auth.username}
            verified={auth.verified}
            text={post.text}
            avatar={auth.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

    </div>
  )
}

export default Feed

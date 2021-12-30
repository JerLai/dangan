import React, {useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import "./Feed.css";
import db from "../../firebase.js";
import FlipMove from 'react-flip-move';

function Feed(props) {
  const [posts, setPosts] = useState([]);
  let optionName = "Home"

  // useEffect(() => {
  //   try {
  //     const fetchTweets = async () => {
  //       const postsCol = collection(db, 'posts');
  //       const postSnapshot = await getDocs(postsCol);
  //       const postList = postSnapshot.docs.map(doc => doc.data());
  //       setPosts(postList);
  //     }
  //     console.log("In useEffect");
  //     fetchTweets();
  //   } catch (e) {
  //     console.error("Error fetching documents: ", e);
  //   }

  // }, []);
  return (
    <div className="feed">

      <div className="feed__header">
        <h2>{optionName}</h2>
      </div>

      <TweetBox/>

      <FlipMove>
        {posts.map((post) => (
          <Post/*TODO: change key to the document id corresponding to post*/
            key = {post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

    </div>
  )
}

export default Feed

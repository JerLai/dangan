import React from 'react';

import TweetBox from './TweetBox.js';
import Post from './Post.js';
import "./Feed.css";
import db from "./firebase.js";
function Feed(props) {
  const [posts, setPost] = useState([]);
  let optionName = "Home"

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);
  return (
    <div className="feed">

      <div className="feed__header">
        <h2>{optionName}</h2>
      </div>

      <TweetBox/>
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

    </div>
  )
}

export default Feed

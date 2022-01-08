import React, {useState, useEffect} from 'react';
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import "./Feed.css";
import FlipMove from 'react-flip-move';
import api from "../client_api/api.js";
function Feed(props) {
  const [posts, setPosts] = useState([]);
  let optionName = "Home"

  useEffect(() => {
<<<<<<< HEAD
    try {
      const fetchTweets = async () => {
        const postsCol = collection(db, 'posts');
        const postSnapshot = await getDocs(postsCol);
        const postList = postSnapshot.docs.map(doc => doc.data());
        setPosts(postList);
      }
      fetchTweets();
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
=======
    let tweets = api.getTweets()
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        setPosts(resJson);
      });
>>>>>>> nav_rest

  }, []);
  return (
    <div className="feed">

      <div className="feed__header">
        <h2>{optionName}</h2>
      </div>

      <TweetBox/>

      <FlipMove>
        {posts.map((post) => (
          <Post/*TODO: change key to the document id corresponding to post*/
            key = {post._id}
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

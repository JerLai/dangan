import React, {useState, useEffect} from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import "./Notifications.css";
import Post from '../components/Post.js';
import FlipMove from 'react-flip-move';
import api from "../client_api/api.js";

import Widgets from "../components/Widgets.js";
function Notifications() {

  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    let tweets = api.getTweets()
      .then(function(res) {
        return res.json();
      })
      .then(function(resJson) {
        setPosts(resJson);
      });

  }, []);

  return (
    <div className="notifications">
      <div className="notifications__box">
        <div className="notifications__header">
          <h3>Notifications</h3>
        </div>

        <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
            >
              <Tab label="All"/>
              <Tab label="Mentions"/>
            </Tabs>
        </Box>
        <div className="notifications__content">
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
      </div>
      <Widgets/>
    </div>
  )
}

export default Notifications
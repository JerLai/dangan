import React, {useState, useEffect} from 'react'
import "./Profile.css";
import Widgets from '../components/Widgets.js';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Button, Avatar} from "@material-ui/core";
import Post from '../components/Post.js';
import FlipMove from 'react-flip-move';
import api from "../client_api/api.js";

import { authAtom } from "../_state/auth.js";
import { useRecoilValue} from "recoil";

function Profile() {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const auth = useRecoilValue(authAtom);
  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
    <div className="profile">
      <div className="profile__box">
        <div className="profile__header">
          <Avatar
            src="https://pbs.twimg.com/profile_images/644870914442596352/0IP4OU7f.jpg"
          />
          <h3>{auth.displayName}</h3>
          <p>{auth.username}</p>

        </div>
        <Box sx={{ bgcolor: 'background.paper', width: 700 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
            >
              <Tab label="Tweets"/>
              <Tab label="Tweets & replies"/>
              <Tab label="Media"/>
              <Tab label="Likes"/>
            </Tabs>
        </Box>
        <div className="profile__content">
          <FlipMove>
            {posts.map((post) => (
              <Post/*TODO: change key to the document id corresponding to post*/
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
      </div>
      <Widgets/>
      
    </div>
  )
}

export default Profile

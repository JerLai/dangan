import React, {useState, useEffect} from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import "./Notifications.css";
import Post from '../components/Post.js';
import FlipMove from 'react-flip-move';
import api from "../client_api/api.js";

import Widgets from "../components/Widgets.js";

import { authAtom } from "../_state/auth.js";
import { useRecoilValue} from "recoil";

function Notifications() {

  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);

  const auth = useRecoilValue(authAtom);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      </div>
      <Widgets/>
    </div>
  )
}

export default Notifications

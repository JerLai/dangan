import React from 'react'
import "./Profile.css";
import Widgets from '../components/Widgets.js';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Button, Avatar} from "@material-ui/core";

function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="profile">
      <div className="profile__box">
        <div className="profile__header">
          <Avatar
            src="https://pbs.twimg.com/profile_images/644870914442596352/0IP4OU7f.jpg"
          />
          <h3>Kamitokun</h3>
          <p>Template profile :)</p>

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
          <p>Tweet retrieval in a later update!</p>
        </div>
      </div>
      <Widgets/>
      
    </div>
  )
}

export default Profile

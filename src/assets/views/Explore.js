import React from 'react'
import "./Explore.css";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Widgets from "../components/Widgets.js";

function Explore() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="explore">
      <div className="explore__box">
        <div className="explore__header">
          <SearchIcon className="explore__searchIcon"/>
          <input placeholder="Search Twitter" type="text"/>
        </div>

        <Box sx={{ bgcolor: 'background.paper', width: 700 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
            >
              <Tab label="For you"/>
              <Tab label="Trending"/>
              <Tab label="News"/>
              <Tab label="Entertainment"/>
            </Tabs>
        </Box>
        <div className="explore__content">
          <p>Sample posts in later update!</p>

        </div>
      </div>
      <Widgets/>
    </div>
  )
}

export default Explore;

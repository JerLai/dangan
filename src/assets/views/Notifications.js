import React from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import "./Notifications.css";

import Widgets from "../components/Widgets.js";
function Notifications() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
          <p>None...yet!</p>

        </div>
      </div>
      <Widgets/>
    </div>
  )
}

export default Notifications

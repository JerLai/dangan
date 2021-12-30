import './App.css';
import SideBar from './assets/components/SideBar.js';
import options from "./assets/options.js"
import Feed from './assets/components/Feed.js';
import Widgets from './assets/components/Widgets.js';
import Home from "./assets/views/Home.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">

      <Router>
      {/* Sidebar */}
        <SideBar routes = {options}/>
      {/* TODO: adding Routing here for what to display*/}
        <Routes>
          {options.map((option, index) => (
            <Route
              key = {index}
              path={option.path}
              element={<option.component/>} // you sneaky router thing, needing angle brackets
            />
          ))}
        </Routes>
      {/* Feed including home */}
      {/*<Feed/>*/}
      {/* Widgets */}
      {/*<Widgets/>*/}
      </Router>
    </div>
  );
}

export default App;

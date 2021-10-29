import './App.css';
import SideBar from './assets/components/SideBar.js';
import options from "./assets/options.js"
import Feed from './assets/components/Feed.js';
import Widgets from './assets/components/Widgets.js';
function App() {
  return (
    <div className="app">

      {/* Sidebar */}
      <SideBar routes = {options}/>
      {/* Feed including home */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;

import './App.css';
import SideBar from './assets/components/SideBar.js';
import options from "./assets/options.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="app">

      <Router>
      {/* Sidebar */}
        <SideBar routes = {options}/>
        <Routes>
          {options.map((option, index) => (
            <Route
              key = {index}
              path={option.path}
              element={<option.component/>} // you sneaky router thing, needing angle brackets
            />
          ))}
          <Route
            path="/"
            element={<Navigate to="/home"/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

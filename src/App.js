import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

const App = () => {
  return (
    <Router>
      <div className='nav-bar'>
        <div className='nav-content'>
          <div className='logo'>KM</div> 
          <ul className="tab-list">
            <li className='tab-item'>
              <NavLink 
                exact
                to="/" 
                activeStyle={{
                  color: "#000065",
                }}
              >HOME</NavLink>
            </li>
            <li className='tab-item'>
              <NavLink 
                to="/projects"
                activeStyle={{
                  color: "#000065",
                }}
              >PROJECTS</NavLink>
            </li>
            <li className='tab-item'> 
              <NavLink 
                to="/about"
                activeStyle={{
                  color: "#000065",
                }}
              >ABOUT</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <main class='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

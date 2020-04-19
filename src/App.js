import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

const App = () => {
  return (
    <Router>
      <div className="nav-bar">
        <div className='logo'>KM</div> 
        <ul className="tab-list">
          <li className='tab-item'>
            <Link to="/">HOME</Link>
          </li>
          <li className='tab-item'>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className='tab-item'> 
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
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
    </Router>
  );
}

export default App;

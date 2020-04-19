import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

const App = () => {
  return (
    <Router>
      <div className='nav-bar'>
        <div className='nav-content'>
          <Link exact to="/">
            <div className='logo'><p className='logo-txt'>KM</p></div> 
          </Link>
          <ul className="tab-list">
            <li className='tab-item'>
              <NavLink 
                exact
                to="/" 
                activeStyle={{
                  color: "#fff",
                  paddingBottom: '10px',
                  borderBottom: '1px solid white'
                }}
              >HOME</NavLink>
            </li>
            <li className='tab-item'>
              <NavLink 
                to="/projects"
                activeStyle={{
                  color: "#fff",
                  paddingBottom: '10px',
                  borderBottom: '1px solid white'
                }}
              >PROJECTS</NavLink>
            </li>
            <li className='tab-item'> 
              <NavLink 
                to="/about"
                activeStyle={{
                  color: "#fff",
                  paddingBottom: '10px',
                  borderBottom: '1px solid white'
                }}
              >ABOUT</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <main className='content'>
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
      </div>
    </Router>
  );
}

export default App;

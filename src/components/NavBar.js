import React from 'react';
import '../App.scss';
import {
  NavLink,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
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
  );
}

export default NavBar
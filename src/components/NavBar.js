import React from 'react';
import '../App.scss';
import {
  Link
} from "react-router-dom";
import PageTab from './PageTab'

const NavBar = () => {
  return (
      <div className='nav-bar'>
        <div className='nav-content'>
          <Link exact to="/">
            <div className='logo'><p className='logo-txt'>KM</p></div> 
          </Link>
          <ul className="tab-list">
            <PageTab tabName='HOME' path='/'/>
            <PageTab tabName='PROJECTS' path='/projects'/>
            <PageTab tabName='ABOUT' path='/about'/>
          </ul>
        </div>
      </div>
  );
}

export default NavBar
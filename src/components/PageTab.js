import React from 'react';
import '../App.scss';
import {
  NavLink,
} from "react-router-dom";

const PageTab = ({ tabName, path }) => {
  return (
    <li className='tab-item'>
      <NavLink 
        exact
        to={path}
        activeStyle={{
          color: "#fff",
          paddingBottom: '10px',
          borderBottom: '1px solid white'
        }}
      >{tabName}</NavLink>
    </li> 
  )
}

export default PageTab
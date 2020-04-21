import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const PageTab = ({ tabName, path }) => {
  const List = styled.li`
    padding-left: 5%;
    padding-right: 5%;
    list-style-type: none;
    @media (max-width: 700px) {
      padding-left: 1%;
      padding-right: 1%;
    }
  `

  return (
    <List>
      <NavLink 
        exact
        to={path}
        activeStyle={{
          color: "#fff",
          paddingBottom: '10px',
          borderBottom: '1px solid white'
        }}
      >{tabName}</NavLink>
    </List> 
  )
}

export default PageTab
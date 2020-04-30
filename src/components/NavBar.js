import React from 'react';
import { Link } from "react-router-dom";
import PageTab from './PageTab'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Navigation>
        <NavContent>
          <Link exact to="/">
            <Logo>KM</Logo> 
          </Link>
          <TabList>
            <PageTab tabName='HOME' path='/'/>
            <PageTab tabName='PROJECTS' path='/projects'/>
            <PageTab tabName='ABOUT' path='/about'/>
          </TabList>
        </NavContent>
      </Navigation>
  );
}

const Navigation = styled.div`
  display: flex;
  justify-content: center;
`
const NavContent = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1250px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5em;
  background-color: #000065;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  font-family: 'Gill Sans';
  font-size: .9em;
  margin: 0px;
`
const TabList = styled.ul`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 600px) {
    justify-content: center;
}
`
export default NavBar
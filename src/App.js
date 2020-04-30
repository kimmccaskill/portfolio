import React from 'react';
import styled from 'styled-components'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <ContentContainer>
        <Content>
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
        </Content>
      </ContentContainer>
    </Router>
  );
}

const Content = styled.main`
  display: flex;
  justify-content: center;
  width: 1200px;
  padding-bottom: 100px;
  @media (max-width: 1250px) {
    width: 90%;
  }
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default App;

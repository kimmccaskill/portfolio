import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
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

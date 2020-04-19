import React from 'react'
import Project from '../Project/Project'
import './Projects.scss'
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";

const Projects = () => {
  let { path, url } = useRouteMatch()

  return (
    <section className='projects-content'>
      <aside className='projects-nav'>
        <ul>
          <li className='project-btn'>
            <NavLink 
              to={`${url}/ticket-cloud`}
              activeStyle={{
                color: "#fff",
                borderRight: '2px solid white'
              }}
            >Ticket Cloud</NavLink>
          </li>
          <li className='project-btn'>
            <NavLink 
              to={`${url}/ateball`}
              activeStyle={{
                color: "#fff",
                borderRight: '2px solid white'

              }}
            >Hangry Ateball</NavLink>
          </li>
          <li className='project-btn'>
            <NavLink 
            to={`${url}/bluciferbnb`}
            activeStyle={{
              color: "#fff",
              borderRight: '2px solid white'

            }}
          >Blucifer BNB</NavLink>
          </li>
        </ul>
      </aside>
        <section className='projects-section'>
          <Switch>
            <Route exact path={path}>
              <h3>Some blurb about this portfolio being a project and the projects to date. </h3>
            </Route>
            <Route path={`${path}/:projectTitle`}>
              <Project />
            </Route>
          </Switch>
        </section>
    </section>
  )
}

export default Projects 
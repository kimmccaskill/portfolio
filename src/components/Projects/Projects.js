import React from 'react'
import Project from '../Project/Project'
import './Projects.css'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const Projects = () => {
  let { path, url } = useRouteMatch()

  return (
    <section className='projects-content'>
      <aside className='projects-nav'>
        <ul>
          <li className='project-btn'>
            <Link to={`${url}/ticket-cloud`}>Ticket Cloud</Link>
          </li>
          <li className='project-btn'>
            <Link to={`${url}/ateball`}>Hangry Ateball</Link>
          </li>
          <li className='project-btn'>
            <Link to={`${url}/bluciferbnb`}>Blucifer BNB</Link>
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
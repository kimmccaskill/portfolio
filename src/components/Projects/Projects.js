import React from 'react'
import Project from '../Project/Project'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const Projects = () => {
  let { path, url } = useRouteMatch()

  return (
    <aside>
      <ul>
        <li>
          <Link to={`${url}/ticket-cloud`}>Ticket Cloud</Link>
        </li>
        <li>
          <Link to={`${url}/ateball`}>Hangry Ateball</Link>
        </li>
        <li>
          <Link to={`${url}/bluciferbnb`}>Blucifer BNB</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Some blurb about this portfolio being a project and the projects to date. </h3>
        </Route>
        <Route path={`${path}/:projectTitle`}>
          <Project />
        </Route>
      </Switch>
    </aside>
  )
}

export default Projects 
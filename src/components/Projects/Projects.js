import React from 'react'
import { projectData } from '../../assets/project-data'
import ProjectsHome from '../ProjectsHome/ProjectsHome'
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

  const appendProjectLinks = projects => projects.map(project => {
    return (
      <li className='project-btn'>
        <NavLink 
          to={`${url}/${project.path}`}
          activeStyle={{
            color: "#fff",
            borderRight: '2px solid white'
          }}
        >{project.title}</NavLink>
      </li>  
    )  
  })

  const appendProjects = projects => projects.map(project => {
    return (
      <Route path={`${path}/${project.path}`}>
        <Project project={project} />
      </Route>
    )
  })

  return (
    <section className='projects-content'>
      <aside className='projects-nav'>
        <ul className='project-links'>
          {appendProjectLinks(projectData)}
          {/* <li className='project-btn'>
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
          </li> */}
        </ul>
      </aside>
        <section className='projects-section'>
          <Switch>
            <Route exact path={path}>
              <ProjectsHome />
            </Route>
            {appendProjects(projectData)}
            {/* <Route path={`${path}/:projectTitle`}>
              <Project />
            </Route> */}
          </Switch>
        </section>
    </section>
  )
}

export default Projects 
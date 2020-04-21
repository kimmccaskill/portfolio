import React from 'react'
import styled from 'styled-components'
import { projectData } from '../assets/project-data'
import ProjectsHome from './ProjectsHome'
import Project from './Project'
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
      <ProjectBtn>
        <NavLink 
          to={`${url}/${project.path}`}
          activeStyle={{
            color: "#fff",
            borderRight: '2px solid white'
          }}
        >{project.title}</NavLink>
      </ProjectBtn>
    )  
  })

  const appendProjects = projects => projects.map(project => {
    return (
      <Route path={`${path}/${project.path}`}>
        <Project project={project} />
      </Route>
    )
  })

  const ProjectsContainer = styled.section`
    display: flex;
    width: 100%;
    padding-top: 5%;
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  `
  const ProjectsNav = styled.aside`
    width: 30%;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 500px) {
      width: auto;
    }
  `
  const ProjectLinks = styled.ul`
    padding-inline-start: 0px;
    width: 100%;
    @media (max-width: 500px) {
      display: flex;
      width: 100%;
    }
  `
  const ProjectsSection = styled.section`
    width: inherit;
    color: white;
    font-family: 'Open sans' sans-serif;
  `
  const ProjectBtn = styled.li`
    list-style-type: none;
    margin-bottom: 30px;
    a {
      text-decoration: none;
      margin: 0px;
      color: #808080;
      width: 75%;
      display: block;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
  `
  return (
    <ProjectsContainer>
      <ProjectsNav>
        <ProjectLinks>
          {appendProjectLinks(projectData)}
        </ProjectLinks>
      </ProjectsNav>
        <ProjectsSection>
          <Switch>
            <Route exact path={path}>
              <ProjectsHome />
            </Route>
            {appendProjects(projectData)}
          </Switch>
        </ProjectsSection>
    </ProjectsContainer>
  )
}

export default Projects 
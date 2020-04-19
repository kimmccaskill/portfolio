import React from 'react'
import './ProjectsHome.scss'
import { IoMdOpen } from "react-icons/io";

const ProjectsHome = () => {
  return (
    <div>
      <h2 className='projects-home-title'>My Projects</h2>
      <p className='projects-description'>Welcome to my projects page. This portfolio website is one of my personal projects so thank you for taking the time to explore!</p>
      <p className='projects-description'>This website was created with React and Sass. Link to the repository is below!</p>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/kimmccaskill/portfolio'>
          <div className='github-block'>
            <h3 style={{margin: '0px'}}>GitHub</h3>
            <IoMdOpen />
          </div>
        </a>
      <p className='projects-description'>If you are interested in some more projects of mine, feel free to start by clicking one of the project names.</p>
    </div>
  )
}

export default ProjectsHome
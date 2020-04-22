import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from "react-icons/io";

const ProjectsHome = () => {
  const MyProjects = styled.h2`
    margin: 0px;
    line-height: 2em;
  `
  const GitHubBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 15px;
    padding: 5px;
    font-size: 16px;
    color: #fff;
    width: 100px;
  `
  return (
    <div>
      <MyProjects>My Projects</MyProjects>
      <p>Welcome to my projects page. This portfolio website is one of my personal projects so thank you for taking the time to explore!</p>
      <p>This website was created with React and Style-Components library. Link to the repository is below!</p>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/kimmccaskill/portfolio'>
          <GitHubBlock>
            <h3 style={{margin: '0px'}}>GitHub</h3>
            <IoMdOpen />
          </GitHubBlock>
        </a>
      <p style={{lineHeight: '2em'}}>If you are interested in some more projects of mine, feel free to start by clicking one of the project names.</p>
    </div>
  )
}

export default ProjectsHome
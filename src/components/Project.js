import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from "react-icons/io";

const Project = ({ project }) => {
  const appendList = list => list.map(listItem => <li style={{lineHeight: '2em'}}>{listItem}</li>)
  const appendImages = images => images.map(img => <ProjectImage style={img.width ? {width: img.width, height: img.height} : null} alt={project.title + 'image'} src={img.link} />)
  
  const ProjectContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px) {
      align-items: center;
      padding-left: 30px;
    }
  `
  const TitleBlock = styled.div`
    display: flex;
    align-items: center;
  `
  const GitHubBtn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
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
  const ProjectImage = styled.img`
    width: 100%;
    border: 1px solid black;
  `
  return (
    <ProjectContainer>
      <TitleBlock>
        <h2 style={{margin: '0px'}}>{project.title}</h2>
        <GitHubBtn target="_blank" rel="noopener noreferrer" href={project.githubLink}>
          <GitHubBlock>
            <h3 style={{margin: '0px'}}>GitHub</h3>
            <IoMdOpen />
          </GitHubBlock>
        </GitHubBtn>
      </TitleBlock>
      <h3>{project.languages}</h3>
      {appendImages(project.images)}
      <h3 style={{textDecoration: 'underline'}}>Overview</h3>
      <p style={{lineHeight: '2em'}}>{project.overview}</p>
      <h3>Wins</h3>
      <ul>
        {appendList(project.wins)}
      </ul>
      <h3>Challenges</h3>
      <ul style={{marginBottom: '100px'}}>
        {appendList(project.challenges)}
      </ul>
    </ProjectContainer>
  )
}

export default Project
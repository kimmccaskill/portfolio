import React from 'react'
import './Project.scss'
import { IoMdOpen } from "react-icons/io";

const Project = ({ project }) => {
  const appendList = list => list.map(listItem => <li>{listItem}</li>)
  const appendImages = images => images.map(img => <img className='project-img' style={img.width ? {width: img.width, height: img.height} : null} alt={project.title + 'image'} src={img.link} />)
  return (
    <div className='project-container'>
      <div className='title-block'>
        <h2>{project.title}</h2>
        <a id='github-btn' target="_blank" rel="noopener noreferrer" href={project.githubLink}>
          <div className='github-block'>
            <h3 style={{margin: '0px'}}>GitHub</h3>
            <IoMdOpen />
          </div>
        </a>
      </div>
      <h3>{project.languages}</h3>
      <h3 className='overview-title'>Overview</h3>
      <p className='project-description'>{project.overview}</p>
      <h3>Wins</h3>
      <ul>
        {appendList(project.wins)}
      </ul>
      <h3>Challenges</h3>
      <ul>
        {appendList(project.challenges)}
      </ul>
      {appendImages(project.images)}
    </div>
  )
}

export default Project
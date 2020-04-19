import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
  let { projectTitle } = useParams()
  return (
    <div>
      <h3>{projectTitle}</h3>
    </div>
  )
}

export default Project
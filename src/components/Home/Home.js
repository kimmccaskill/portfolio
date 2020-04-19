import React from 'react'
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa"
import './Home.scss'

const Home = () => {
  return (
    <section className='content-section'>
      <div className='headshot'></div>
      <IconContext.Provider value={{ size: "2em", color: "white" }}>
        <div className='links-container'>
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kimmccaskill/'>
            <FaLinkedin className='link-img'/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/kimmccaskill'>
            <FaGithub />
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/kimmccaskill/'>
            <FaInstagram />
          </a>
        </div>
      </IconContext.Provider>
      <h1 className='name'>Kim McCaskill</h1>
      <h2 className='my-title'>Software Developer</h2>
      <p>Quick blurb about me</p>
    </section>
  )
}

export default Home
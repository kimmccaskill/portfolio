import React from 'react'
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdOpen } from "react-icons/io";
import Pdf from '../../assets/resume.pdf'
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
          <a id='resume-btn' target="_blank" rel="noopener noreferrer" href={Pdf}>
            <div className='resume-block'>
              <h3 style={{margin: '0px'}}>Resume</h3>
              <IoMdOpen />
            </div>
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
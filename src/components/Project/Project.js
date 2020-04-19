import React from 'react'
import './Project.scss'
import { IoMdOpen } from "react-icons/io";

const Project = () => {
  return (
    <div className='project-container'>
      <div className='title-block'>
        <h2>TicketCloud</h2>
        <a id='github-btn' target="_blank" rel="noopener noreferrer" href='https://github.com/kimmccaskill/tickets'>
          <div className='github-block'>
            <h3 style={{margin: '0px'}}>GitHub</h3>
            <IoMdOpen />
          </div>
        </a>
      </div>
      <h3>JavaScript | React | Redux | HTML/CSS | Jest/Enzyme</h3>
      <h3 className='overview-title'>Overview</h3>
      <p className='project-description'>This application is a ticket tracking app for keeping up with events that have tickets going on sale soon.  The user has the option to see which events are coming up soon, save them, search for events by name, and see what events are currently selling tickets.</p>
      <h3>Wins</h3>
      <ul>
        <li>Successfully diving into TicketMaster API docs to create a helpful app for my own benefit as well as friends.</li>
        <li>Having saved events persist through refresh. Local Storage was an early lesson in my time at Turing but came in handy here!</li>
        <li>Testing all reducers and actions created from Redux functionality</li>
      </ul>
      <h3>Challenges</h3>
      <ul>
        <li>First major API not built by instructors led to unfamiliar documentation and challenges navigating data.</li>
      </ul>
      <img className='project-img' alt='ticketcloud home page' src='https://user-images.githubusercontent.com/54483332/75728092-0b2b4b00-5ca4-11ea-8923-6089f497afa8.png' />
    </div>
  )
}

export default Project
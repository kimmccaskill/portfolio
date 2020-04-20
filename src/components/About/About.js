import React from 'react'
import './About.scss'

const About = () => {
  return (
    <section className='content-section'>
      <h2>About Me</h2>
      <article className='about-card'>
        <p className='details'>
          Hi there! My name is Kim McCaskill and I am a recent graduate of Turing School of Software and Design
          here in the beautiful city of Denver, CO. Turing is an intensive 7 month software development program 
          where I focused a lot on Front-End Development, but am currently moving towards personal goals of learning
          more of the back end as well.  My draw to programming came from many days working 50+ hours a week of the
          same day-to-day tasks. Although I love every bit of my background and where I came from, programming has given
          me an opportunity to challenge myself to constantly learn and grow as technology evolves around us. 
        </p>
        <div className='turingzoom image'></div>
      </article>
      <article className='about-card'>
        <div className='teach image'></div>
        <p className='details'>
          Before coming to Turing, my formal education consisted of a Bachelor's Degree in Instrumental Music
          Education at Florida State University. I spent many of my days in the sun in the marching band during 
          football season and my summers as a Camp Counselor for the FSU Summer Music Camps for 3 years! I credit 
          a lot of my ability to make conceptual transfers of learning new languages directly to my experience as 
          a musician and educator.
        </p>
      </article>
      <article className='about-card'>
        <p className='details'>
          My time as a musician was short lived but my time as an educator was not.  After graduating, I went into
          a Training Director role with Chick-fil-A to facilitate orientations as well as onboarding dozens of new 
          members to our restaurant location each year. After spending a couple of years at Chick-fil-A, I moved 
          into the Hotel business and helped manage operations with a 500+ room hotel in downtown Denver.  This role
          put me directly into a position where I had to deal with many of the business and numbers aspects of Hospitality
          as well as continuing to strive at guest interactions as a 4.5 star hotel in downtown.
        </p>
        <div className='hotel image'></div>
      </article>
      <article className='about-card'>
        <div className='climb image'></div>
        <p className='details'>
          On my days off, I make sure to take the time to step away from the computer and get outside! I love rock 
          climbing(mostly bouldering) indoors and out. My main gym is at The Spot in the Golden Triangle area of Denver
          but if I can get outside, I will gladly boulder or sport climb as well.  I've also recently picked up Bass
          mostly inspired by a famous YouTuber named Davie504 who is known for his incredible bass slapping skills and 
          very interesting sense of humor.
        </p>
      </article>
    </section>
  )
}

export default About
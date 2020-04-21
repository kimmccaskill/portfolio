import React from 'react'
import styled from 'styled-components'
import Turing from '../assets/turingzoom.jpg'
import Teach from '../assets/teach.jpg'
import Hotel from '../assets/hotel.jpg'
import Climb from '../assets/climb.jpg'

const About = () => {
  const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    width: 1200px;
    @media (max-width: 1250px) {
      width: 90%;
    }
  `
  const AboutCard = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin-top: 5%;
    padding-bottom: 5%;
    border-bottom: 1px solid grey;
    @media (max-width: 950px) {
      flex-wrap: wrap;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 500px) {
      width: 95%;
    }
  `
  const FlippedCard = styled(AboutCard)`
    @media (max-width: 950px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `
  const Details = styled.p`
    padding-left: 20px;
    padding-right: 20px;
    line-height: 2em;
    @media (max-width: 950px) {
      line-height: 1.5em;
    }
    @media (max-width: 500px) {
      padding: 0px;
    }
  `
  const Image = styled.img`
    min-width: 300px;
    max-width: 300px;
    height: 250px;
    background-repeat: no-repeat;
    object-fit: cover;
    border: 1px solid grey;
  `

  return (
    <ContentSection>
      <h2>About Me</h2>
      <FlippedCard>
        <Details>
          Hi there! My name is Kim McCaskill and I am a recent graduate of Turing School of Software and Design
          here in the beautiful city of Denver, CO. Turing is an intensive 7 month software development program 
          where I focused a lot on Front-End Development, but am currently moving towards personal goals of learning
          more of the back end as well.  My draw to programming came from many days working 50+ hours a week of the
          same day-to-day tasks. Although I love every bit of my background and where I came from, programming has given
          me an opportunity to challenge myself to constantly learn and grow as technology evolves around us. 
        </Details>
        <Image alt='Turing remote call' src={Turing} />
      </FlippedCard>
      <AboutCard>
        <Image alt='Teaching a child music' src={Teach} />
        <Details>
          Before coming to Turing, my formal education consisted of a Bachelor's Degree in Instrumental Music
          Education at Florida State University. I spent many of my days in the sun in the marching band during 
          football season and my summers as a Camp Counselor for the FSU Summer Music Camps for 3 years! I credit 
          a lot of my ability to make conceptual transfers of learning new languages directly to my experience as 
          a musician and educator.
        </Details>
      </AboutCard>
      <FlippedCard>
        <Details>
          My time as a musician was short lived but my time as an educator was not.  After graduating, I went into
          a Training Director role with Chick-fil-A to facilitate orientations as well as onboarding dozens of new 
          members to our restaurant location each year. After spending a couple of years at Chick-fil-A, I moved 
          into the Hotel business and helped manage operations with a 500+ room hotel in downtown Denver.  This role
          put me directly into a position where I had to deal with many of the business and numbers aspects of Hospitality
          as well as continuing to strive at guest interactions as a 4.5 star hotel in downtown.
        </Details>
        <Image alt='Profile shot at hotel' src={Hotel} />
      </FlippedCard>
      <AboutCard>
        <Image alt='Kim is climing' src={Climb} />
        <Details>
          On my days off, I make sure to take the time to step away from the computer and get outside! I love rock 
          climbing(mostly bouldering) indoors and out. My main gym is at The Spot in the Golden Triangle area of Denver
          but if I can get outside, I will gladly boulder or sport climb as well.  I've also recently picked up Bass
          mostly inspired by a famous YouTuber named Davie504 who is known for his incredible bass slapping skills and 
          very interesting sense of humor.
        </Details>
      </AboutCard>
    </ContentSection>
  )
}

export default About
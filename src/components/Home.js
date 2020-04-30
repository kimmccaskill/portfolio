import React from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdOpen } from "react-icons/io";
import Pdf from '../assets/resume.pdf'
import MyHeadshot from '../assets/headshot.jpg'

const Home = () => {
  return (
    <ContentSection>
      <Headshot alt='Kims headshot' src={MyHeadshot} />
      <IconContext.Provider value={{ size: "2em", color: "white" }}>
        <LinksContainer>
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kimmccaskill/'>
            <FaLinkedin className='link-img'/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/kimmccaskill'>
            <FaGithub />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={Pdf}>
            <ResumeContainer>
              <h3 style={{margin: '0px'}}>Resume</h3>
              <IoMdOpen />
            </ResumeContainer>
          </a>
        </LinksContainer>
      </IconContext.Provider>
      <MyName>Kim McCaskill</MyName>
      <h2>Software Developer</h2>
      <h3 style={{textAlign: 'center'}}>Welcome! My name is Kim and I am a Software Developer with a focus on Front-End tech.</h3>
    </ContentSection>
  )
}

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  color: #fff;
  padding-top: 5%;
  @media (max-width: 1250px) {
    width: 90%;
  }
`
const Headshot = styled.img`
  width: 300px;
  height: 300px;
  margin: 20px;
  border-radius: 50%;
  border: 1px solid black;
  object-fit: cover;
  @media (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`
const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
`
const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid white;
  border-radius: 15px;
  padding: 10px;
  font-size: .7em;
  color: #fff;
`
const MyName = styled.h1`
  font-size: 60px;
  margin: 20px;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 600px) {
    font-size: 36px;
  }
`
export default Home
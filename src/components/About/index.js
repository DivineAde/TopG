import React from 'react'
import { useEffect, useState, useRef } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Audio } from 'react-loader-spinner'
import ParticleBackground from '../ParticleBackground'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const mountFlag = useRef(false) //here I am creating a flag

  useEffect(() => {
    if (!mountFlag.current) {
      //using the flag to check if component mounted
      mountFlag.current = true //updating flag
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])

  return (
    <>
      {/*<ParticleBackground />*/}
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
            />
          </h1>
          <p>
            Hi, I'm Divine. I am a Frontend developer with a passion for web
            application. With 9 months of experience in Frontend, I have gained
            extensive knowledge and skills in building web applications. I am an
            innovative and detail-oriented person who is always willing to go
            the extra mile to deliver exceptional results. I thrive on
            challenges and continuously push myself to improve my skills and
            stay up-to-date with the latest industry trends.
          </p>
          <p>
            I believe that that every challenge presents an opportunity to learn
            and grow. I am excited to showcase my work and share my journey with
            you. Thank you for visiting my portfolio, and I look forward to
            connecting with you soon!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EC4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#EFD18D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4" />
            </div>
          </div>
        </div>
      </div>
      <div className="loader-active">
        <Audio
          height="80"
          width="80"
          radius="6"
          color="yellow"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
      
    </>
  )
}

export default About

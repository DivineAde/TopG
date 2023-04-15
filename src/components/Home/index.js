import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { Watch } from 'react-loader-spinner'
import './index.scss'
import ParticleBackground from '../ParticleBackground'

const Home = () => {
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

  const nameArray = ['d', 'i', 'v', 'i', 'n', 'e', '']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <>
      <ParticleBackground />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}></span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Embedded System / Network Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <div className="loader-active">
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  )
}

export default Home

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Triangle } from 'react-loader-spinner'
import AnimatedLetters from '../AnimatedLetters'
import PortfolioData from '../../data/portfolio.json'


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="Portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

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
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']}
            idx={15}
          />
        </h1>

        <div className="oak">{renderPortfolio(PortfolioData.portfolio)}</div>
      </div>

      <div className="loader-active">
        <Triangle
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  )
}

export default Portfolio

import React from 'react'
import './index.scss'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Triangle } from 'react-loader-spinner'
import AnimatedLetters from '../AnimatedLetters'
import ParticleBackground from '../ParticleBackground'

const Contact = () => {
  const position = [51.505, -0.09]
  const markerPosition = [51.5, -0.09]
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_k28wrgg',
        'template_4sfbwgd',
        form.current,
        'N9Mq-HqZg3E8ufV9X'
      )
      .then(
        (result) => {
          alert(result.text)
          window.location.reload(false)
        },
        (error) => {
          alert(error.text)
        }
      )
  }

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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p>
            As a front-end developer, I have a deep understanding of user
            experience and design, as well as the technical skills to bring
            those designs to life in a seamless and engaging way.I'm a proactive
            problem-solver who is always looking for ways to improve the user
            experience and enhance the overall quality of the projects I work
            on.If you're looking for a talented front-end developer who can
            bring your vision to life and deliver a top-quality user experience,
            please don't hesitate to contact me. I'd be happy to discuss your
            project and see how I can help
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Email"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="user_subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message me{Top.dev}"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Divine Adeyeye,
          <br />
          Nigeria
          <br />
          Berger
          <br />
          Lagos State
          <br />
          <span>divineadeyeye121@gmail.com</span>
        </div>
      </div>
      {/*
     <div className='map-wrap'>
     <MapContainer center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={markerPosition}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </MapContainer>
     </div>
  */}

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

export default Contact

import { useState } from 'react'
import './index.scss'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="hamburger-menu">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu-content ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  )
}

export default HamburgerMenu

import { useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="about-page">
      {/* Header Navigation */}
      <header className="header">
        <Link to="/" className="header-logo">
          <span className="logo-name">john yumul</span>
          <span className="logo-title">product designer</span>
        </Link>
        <nav className="nav">
          <a href="/#work" className="nav-link">work</a>
          <Link to="/about" className="nav-link active">about</Link>
          <a href="/#fun" className="nav-link">fun</a>
          <a href="/#resume" className="nav-link">resume</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <Link to="/" className="mobile-logo" onClick={toggleMobileMenu}>
              <span className="mobile-logo-name">john yumul</span>
              <span className="mobile-logo-title">product designer</span>
            </Link>
            <a href="/#work" className="mobile-nav-link" onClick={toggleMobileMenu}>work</a>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>about</Link>
            <a href="/#fun" className="mobile-nav-link" onClick={toggleMobileMenu}>fun</a>
            <a href="/#resume" className="mobile-nav-link" onClick={toggleMobileMenu}>resume</a>
          </div>
        </div>
      </header>

      {/* About Content */}
      <main className="about-content">
        <div className="about-text">
          <h1 className="about-title">about me</h1>
          <p className="about-description">
            This is where you can add your personal story, background, and what makes you unique.
          </p>
        </div>
      </main>
    </div>
  )
}

export default About

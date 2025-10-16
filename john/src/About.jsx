import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './About.css'

function About() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Ensure page starts at the very top when component mounts or on refresh
  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    
    // Force scroll to top immediately
    window.scrollTo(0, 0)
    
    // Also force scroll to top after a brief delay to catch any browser restoration attempts
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

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
          <a href="/John_Yumul_Resume.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">resume</a>
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
            <a href="/John_Yumul_Resume.pdf" className="mobile-nav-link" onClick={toggleMobileMenu} target="_blank" rel="noopener noreferrer">resume</a>
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
      
      {/* Image Gallery */}
      <div className="about-gallery">
        <div className="gallery-item">
          <img src="/images/about/about-1.jpg" alt="About gallery image 1" />
        </div>
        <div className="gallery-item">
          <img src="/images/about/about-2.jpg" alt="About gallery image 2" />
        </div>
        <div className="gallery-item">
          <img src="/images/about/about-3.jpg" alt="About gallery image 3" />
        </div>
        <div className="gallery-item">
          <img src="/images/about/about-4.jpg" alt="About gallery image 4" />
        </div>
        <div className="gallery-item">
          <img src="/images/about/about-5.jpg" alt="About gallery image 5" />
        </div>
        <div className="gallery-item">
          <img src="/images/about/about-6.jpg" alt="About gallery image 6" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-question">like what you see?</p>
        <h2 className="footer-cta">let's connect!</h2>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/john-y-269ab4260/" className="footer-link" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:johnyumul.ph@gmail.com" className="footer-link">email</a>
          <a href="https://www.instagram.com/john.yml/" className="footer-link" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
      </footer>
    </div>
  )
}

export default About

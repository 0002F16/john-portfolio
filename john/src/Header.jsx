import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ currentPage = '' }) {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <span className="logo-name">john yumul</span>
        <span className="logo-title">product designer</span>
      </Link>
      <nav className="nav">
        <a href={currentPage === 'about' ? "/#work" : "#work"} className="nav-text">work</a>
        <Link to="/about" className={`nav-text ${currentPage === 'about' ? 'active' : ''}`}>about</Link>
        <a href={currentPage === 'about' ? "/#fun" : "#fun"} className="nav-text">fun</a>
        <a href="/John_Yumul_Resume.pdf" className="nav-text" target="_blank" rel="noopener noreferrer">resume</a>
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
          <a href={currentPage === 'about' ? "/#work" : "#work"} className="nav-text" onClick={toggleMobileMenu}>work</a>
          <Link to="/about" className="nav-text" onClick={toggleMobileMenu}>about</Link>
          <a href={currentPage === 'about' ? "/#fun" : "#fun"} className="nav-text" onClick={toggleMobileMenu}>fun</a>
          <a href="/John_Yumul_Resume.pdf" className="nav-text" onClick={toggleMobileMenu} target="_blank" rel="noopener noreferrer">resume</a>
        </div>
      </div>
    </header>
  )
}

export default Header

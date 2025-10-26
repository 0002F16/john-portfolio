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
        <a href={currentPage === 'about' ? "/#work" : "#work"} className="nav-link">work</a>
        <Link to="/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>about</Link>
        <a href={currentPage === 'about' ? "/#fun" : "#fun"} className="nav-link">fun</a>
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
          <a href={currentPage === 'about' ? "/#work" : "#work"} className="mobile-nav-link" onClick={toggleMobileMenu}>work</a>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>about</Link>
          <a href={currentPage === 'about' ? "/#fun" : "#fun"} className="mobile-nav-link" onClick={toggleMobileMenu}>fun</a>
          <a href="/John_Yumul_Resume.pdf" className="mobile-nav-link" onClick={toggleMobileMenu} target="_blank" rel="noopener noreferrer">resume</a>
        </div>
      </div>
    </header>
  )
}

export default Header

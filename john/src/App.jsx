import { useState, useEffect } from 'react'
import './App.css'

// Company logos data - using your actual image files
const companyLogos = [
  { name: 'Company 1', logo: '/images/logos/image 2.png' },
  { name: 'Company 2', logo: '/images/logos/image 3.png' },
  { name: 'Company 3', logo: '/images/logos/image 4.png' },
  { name: 'Company 4', logo: '/images/logos/image 5.png' },
  { name: 'Company 5', logo: '/images/logos/image 68.png' },
  { name: 'Company 6', logo: '/images/logos/image 69.png' },
  { name: 'Company 7', logo: '/images/logos/image 70.png' },
  { name: 'Company 8', logo: '/images/logos/image 71.png' },
]

function App() {
  // Create a duplicated array for seamless infinite scrolling
  const duplicatedLogos = [...companyLogos, ...companyLogos]

  return (
    <div className="app">
      {/* Header Navigation */}
      <header className="header">
        <nav className="nav">
          <a href="#work" className="nav-link">work</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#fun" className="nav-link">fun</a>
          <a href="#resume" className="nav-link">resume</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1 className="hero-title">
          <span className="hero-line">i'm john, and i help startups build</span>
          <span className="hero-line">user-friendly and impactful</span>
          <span className="hero-line">digital products</span>
        </h1>
        <p className="hero-subtitle">
          Right now, you can find me doing ux research work for Angkas 🛵☁️
        </p>
      </main>

      {/* Organizations Section */}
      <section className="organizations">
        <h2 className="organizations-title">
          Here are some of the organizations i've worked with
        </h2>
        
        <div className="slideshow-container">
          <div className="slideshow-track">
            {duplicatedLogos.map((company, index) => (
              <div key={index} className="slideshow-item">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'block'
                  }}
                />
                <div className="logo-placeholder" style={{ display: 'none' }}>
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2 className="projects-title">featured projects</h2>
        
        <div className="project">
          <div className="project-image-container">
            <img 
              src="/images/projects/onlinecareers.png" 
              alt="OnlineCareers.ph job search website screenshot"
              className="project-image"
            />
          </div>
          <h3 className="project-title">onlinecareers.ph</h3>
          <p className="project-description">building a job website from the ground up</p>
        </div>

        <div className="project">
          <div className="project-image-container">
            <img 
              src="/images/projects/angkas.png" 
              alt="Angkas motor scooter illustration"
              className="project-image"
            />
          </div>
          <h3 className="project-title">angkas uxr internship</h3>
          <p className="project-description">user experience research for the country's leading motor taxi hailing app</p>
        </div>
      </section>
    </div>
  )
}

export default App

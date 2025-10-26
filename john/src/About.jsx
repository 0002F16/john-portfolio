import './App.css'
import './About.css'
import Header from './Header'
import Footer from './Footer'

function About() {

  return (
    <div className="about-page">
      {/* Header Navigation */}
      <Header currentPage="about" />

      {/* About Content */}
      <main className="about-content">
        <div className="about-text">
          <h1 className="heading-2" style={{ marginBottom: '1rem' }}>i'm a designer, builder, & product thinker—always chasing what's next.</h1>
          
          <p className="text-base" style={{ marginBottom: '0.75rem' }}>
            i like building things that make sense — ideas grounded in real problems, tested fast, and designed for people who'll actually use them.
          </p>

          <p className="text-base" style={{ marginBottom: '1rem' }}>
            i've worked with early-stage and hyper-growth startups, helping teams move from drafts of ideas to shippable products that deliver value.
          </p>
          
          <p className="text-base" style={{ marginBottom: '0.75rem' }}>
            outside of design and being a compsci major, i'm:
          </p>
          
          <ul className="about-list" style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li>📚 running a 400-member <a href="https://www.instagram.com/genz_bookclub/" target="_blank" rel="noopener noreferrer">book club</a></li>
            <li>🍕 hosting tech and startup dinners at <a href="https://www.linkedin.com/company/pizzafriends/" target="_blank" rel="noopener noreferrer">pizza and friends</a></li>
            <li>🔥 keeping a 600-day duolingo streak alive</li>
            <li>♠️ grinding poker</li>
            <li>🎵 making music in my bedroom</li>
          </ul>

          <p className="text-base">
            reach me at <a href="mailto:johnyumul.ph@gmail.com">johnyumul.ph@gmail.com</a> — can't wait to meet you 🤝
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
      <Footer />
    </div>
  )
}

export default About

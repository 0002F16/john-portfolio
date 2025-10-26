import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Company logos data - using your actual image files
const companyLogos = [
  { name: 'Company 1', logo: '/images/logos/image 3.png' },
  { name: 'Company 2', logo: '/images/logos/image 2.png' },
  { name: 'Company 3', logo: '/images/logos/image 4.png' },
  { name: 'Company 4', logo: '/images/logos/image 5.png' },
  { name: 'Company 5', logo: '/images/logos/image 68.png' },
  { name: 'Company 6', logo: '/images/logos/image 69.png' },
  { name: 'Company 7', logo: '/images/logos/image 70.png' },
  { name: 'Company 8', logo: '/images/logos/image 71.png' },
]

// Testimonials data
const testimonials = [
  {
    quote: "Easy to work with, smart, and articulate -with a great voice, too. We worked together on a hackathon project called Iskosenso, and we'd often have random chats about product design and other interesting topics. He's a strong thinker and a natural leader. I enjoy working with him.",
    name: "rovic villaralvo",
    affiliation: "product designer @ agentsly.ai"
  },
  {
    quote: "I first had the chance to work with John when he invited me to join hackathon earlier this year. He has a clear and engaging way of expressing his thoughts, which makes it easy for everyone in the group to follow and connect with his ideas. What I admire most is that he doesn't just speak well but he listens, encourages input, and builds on others' suggestions, creating a truly collaborative environment. It's rare to meet someone who combines both strong technical thinking and people skills so effortlessly.",
    name: "reinier luna",
    affiliation: "batangas state university"
  },
  {
    quote: "Bro makes sure to refine his work down to the details. Outside of work, John is a great mentor who exudes confidence and keeps a balance in his pursuits. I had the pleasure of working with him in a hackathon and joining a few networking events with him, and he definitely knows how to sell himself and deliver on his initiatives.",
    name: "simonee mariquit",
    affiliation: "fullstack developer @ ekonsulta"
  },
  {
    quote: "John is really good at what he does. When it comes to design, he takes feedback well, and if you give him a suggestion, he'll definitely improve even more. While I'm not a designer myself, I really appreciate his minimalist style and simple UI. It's clean, easy to understand, and user-friendly for just about anyone.",
    name: "john cris gonzales",
    affiliation: "lead software engineer @ onlinecareers"
  },
  {
    quote: "It's been great working with John. It has always been smooth to work with him since we are able to accomplish every task seamlessly.",
    name: "angelo baricante",
    affiliation: "freelance fullstack developer"
  },
  {
    quote: "John has always been level-headed when it comes to the projects we've worked on together. I've known him for 5 years, and he has always been efficient in tasks assigned to him. He is very impartial when it comes to deciding on the creative direction of the project.",
    name: "sam ardenio",
    affiliation: "freelance artist, musician"
  },
  {
    quote: "John is excellent at weighing pros and cons, and knows how to drive a company forward. His progressive mindset combined with the ability to communicate with others and mobilize them around his vision makes him a powerful force for innovation and drive positive change.",
    name: "kim alexis",
    affiliation: "marketing lead @ gen z book club"
  }
]

function Landing() {
  // Create a duplicated array for seamless infinite scrolling
  const duplicatedLogos = [...companyLogos, ...companyLogos]

  return (
    <div className="app">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <main className="hero">
        <h1 className="heading-1">
          <span className="hero-line">i'm john, and i help startups build</span>
          <span className="hero-line">user-friendly and impactful</span>
          <span className="hero-line">digital products</span>
        </h1>
        <p className="text-large">
          right now, you can find me doing ux research work for angkas 🛵☁️
        </p>
      </main>

      {/* Organizations Section */}
      <section className="organizations">
        <h2 className="text-large">
          here are some of the organizations i've worked with
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
        <h2 className="heading-2">featured projects</h2>
        
        <Link to="/onlinecareers" className="project">
          <div className="project-image-container">
            <img 
              src="/images/projects/onlinecareers.png" 
              alt="OnlineCareers.ph job search website screenshot"
              className="project-image"
            />
          </div>
          <h3 className="heading-4">onlinecareers.ph</h3>
          <p className="text-base">building a job website from the ground up</p>
        </Link>

        <div className="project">
          <div className="project-image-container">
            <img 
              src="/images/projects/angkas.png" 
              alt="Angkas motor scooter illustration"
              className="project-image"
            />
          </div>
          <h3 className="heading-4">angkas uxr internship</h3>
          <p className="text-base">user experience research for the country's leading motor taxi hailing app</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="heading-2">what people say</h2>
        
        <div className="testimonials-grid">
          <div className="testimonials-column">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-affiliation">{testimonial.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-column">
            {testimonials.slice(3).map((testimonial, index) => (
              <div key={index + 3} className="testimonial">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-affiliation">{testimonial.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Landing

import Header from './Header'
import Footer from './Footer'
import './ProjectPage.css'

function OnlineCareers() {
  return (
    <div className="app">
      {/* Header Navigation */}
      <Header currentPage="onlinecareers" />

      {/* Main Content */}
      <main className="project-page">
        <div className="project-content">
          {/* Project Title */}
          <div className="project-title">
            <h2 className="project-title-line">onlinecareers.ph:{"\n"}building a job site from the ground up</h2>
          </div>

          {/* Project Metadata */}
          <div className="project-metadata">
            <p className="text-metadata">product design * nov 2024-apr 2025</p>
          </div>

          {/* Body Text */}
          <div className="section-container">
            <p className="body-text">
              I led product design for a startup job site, OnlineCareers.PH. To date, we've reached 500 regular users and are now onboarding more employers.
            </p>
            <p className="body-text">
              As the sole product designer, I designed both the jobseeker and employer sides of the platform. Over five months, I worked closely with two fullstack developers to ship everything end to end from wireframes to launch.
            </p>
          </div>

          {/* Project Detail Image */}
          <div className="project-detail-image-container first-image">
            <img 
              src="/images/projects/onlinecareers-1.png" 
              alt="OnlineCareers.ph platform screenshot showing job search interface"
              className="project-detail-image"
            />
          </div>

          {/* Goals Section */}
          <div className="section-container">
            <h3 className="section-heading">goals</h3>
            <ul className="body-list">
              <li>Create a job hiring experience that feels transparent and human.</li>
              <li>Simplify onboarding for both employers and jobseekers.</li>
              <li>Build a design system that keeps developers fast and consistent.</li>
            </ul>
          </div>

          <div className="project-detail-image-container">
            <img 
              src="/images/projects/onlinecareers-2.png" 
              alt="OnlineCareers.ph mobile mockup showing user profile"
              className="project-detail-image"
            />
          </div>

          {/* Process Section */}
          <div className="section-container">
            <h3 className="section-heading">the process</h3>
            <p className="body-text">
              I handled everything from wireframes to final UI. I designed the system, built prototypes, and ran quick usability tests with team members.
            </p>
            <p className="body-text">
              We were a small startup, no budget for research, no full product team. So we worked smart. I did a lot of competitor scans to evaluate features and informal tests to check if flows worked for our target users. I watched how people moved through the product, where they got stuck, and used what I gathered to iterate on my initial designs.
            </p>
            <p className="body-text">
              Developer constraints shaped a lot of my work. Some design ideas needed backend overhauls. Instead of pushing, I adjusted flows to match what we could build. Emails were another limit. Sending too many was expensive, so I redesigned communication to be lean but useful. Understanding the backend helped me balance design quality with engineering effort.
            </p>
          </div>

          <div className="project-detail-image-container">
            <img 
              src="/images/projects/onlinecareers-3.png" 
              alt="OnlineCareers.ph platform screenshot showing chat interface"
              className="project-detail-image"
            />
          </div>

          <div className="project-detail-image-container">
            <img 
              src="/images/projects/onlinecareers-4.png" 
              alt="Job report functionality screenshot"
              className="project-detail-image"
            />
          </div>

          <div className="project-detail-image-container">
            <img 
              src="/images/projects/onlinecareers-5.png" 
              alt="Employer's jobseeker view"
              className="project-detail-image"
            />
          </div>

           <div className="section-container final-section">
             <h3 className="section-heading">takeaways</h3>
             <ul className="body-list">
               <li>Anticipate edge cases early. It saves devs time and makes implementation smoother.</li>
               <li>Work with constraints, not against them. Knowing a bit of backend logic helps.</li>
               <li>Ask for feedback often. I waited too long before reaching out to experienced designers, but most of my growth came from designers outside of the organization.</li>
               <li>Clarity beats complexity. Every decision should reduce confusion, not add to it.</li>
               <li>Early-stage startups teach you what kind of designer you want to be. You learn to work fast, make your own calls, and build systems from zero.</li>
             </ul>
           </div>




        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default OnlineCareers

import Header from './Header'
import Footer from './Footer'
import './OnlineCareers.css'

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
          <div className="project-body">
            <p className="text-body">
              I led product design for a startup job site, OnlineCareers.PH. To date, we've reached 500 regular users and are now onboarding more employers.
            </p>
            <p className="text-body">
              As the sole product designer, I designed both the jobseeker and employer sides of the platform. Over five months, I worked closely with two fullstack developers to ship everything end to end from the first wireframe to launch.
            </p>
          </div>

          {/* Project Detail Image */}
          <div className="project-detail-image-container">
            <img 
              src="/images/projects/onlinecareers-1.png" 
              alt="OnlineCareers.ph platform screenshot showing job search interface"
              className="project-detail-image"
            />
          </div>

          {/* Goals Section */}
          <div className="project-goals-section">
            <h3 className="goals-title">goals</h3>
            <ul className="goals-list">
              <li>Create a job hiring experience that feels transparent and human.</li>
              <li>Simplify onboarding for both employers and jobseekers.</li>
              <li>Build a design system that keeps developers fast and consistent.</li>
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

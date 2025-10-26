import Header from './Header'
import Footer from './Footer'

function OnlineCareers() {
  return (
    <div className="app">
      {/* Header Navigation */}
      <Header currentPage="onlinecareers" />

      {/* Main Content - Blank Space */}
      <main className="project-page">
        {/* This is intentionally blank as requested */}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default OnlineCareers

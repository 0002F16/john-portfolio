import Header from './Header'
import Footer from './Footer'
import './ProjectPage.css'

function Angkas() {
  return (
    <div className="app">
      {/* Header Navigation */}
      <Header currentPage="angkas" />

      {/* Main Content */}
      <main className="project-page">
        <div className="project-content">
          {/* Project Title */}
          <div className="project-title">
            <h2 className="project-title-line">angkas uxr internship:{"\n"}learning research in a high-impact environment</h2>
          </div>

          {/* Project Metadata */}
          <div className="project-metadata">
            <p className="text-metadata">user experience research * q1 2025</p>
          </div>


          {/* Project Detail Image */}
          <div className="project-detail-image-container first-image">
            <img 
              src="/images/projects/angkas-1.png" 
              alt="Angkas motor scooter illustration"
              className="project-detail-image"
            />
          </div>

          {/* Body Text */}
          <div className="section-container">
            <p className="body-text">
              In Q1 2025, I had the opportunity to do an internship with Angkas, the leading motor taxi app in the Philippines and one of the most influential local startups in the past decade. I worked under the product team as a User Experience Research Intern.
            </p>
            <p className="body-text">
              I started by assisting with data synthesis and report writing. Over time, I took on more ownership. I wrote my own reports. I conducted in-depth interviews with both riders and customers. I also presented findings in product team meetings. The learning curve was steep, but it led to major growth at this part of my career.
            </p>
            <p className="body-text">
              Before Angkas, my understanding of research was shaped by school projects and design work. At Angkas, I learned what professional research looks like. It is fast, structured, and built to drive decisions. I shadowed the UXR lead and associate closely. I took notes during interviews, learned to listen with intent, and observed how they steered conversations to extract meaningful insights. Eventually, I could do it myself.
            </p>
            <p className="body-text">
              The environment definitely shaped me. Being surrounded by people who cared deeply about the product and its users made me look forward to spending time at the officeß. I liked that I could walk up to anyone and start a conversation. Everyone was approachable, and that openness made learning fast. You could ask questions, share ideas, and get feedback on the spot. It made me see how strong culture drives great work.  
            </p>
          </div>

          <div className="project-detail-image-container">
            <img 
              src="/images/projects/angkas-2.png" 
              alt="Picture with the angkas team"
              className="project-detail-image"
            />
          </div>



          {/* Key Takeaways Section */}
          <div className="section-container">
            <h3 className="section-heading">key takeaways</h3>
            
            <p className="body-text" style={{ fontWeight: 'var(--weight-semibold)' }}>
              Business first
            </p>
            <p className="body-text">
              Early in the internship, I sat through countless product meetings. Before anyone presented findings, product owners always asked "why does this matter?" It was a simple question, but it changed how I thought. I realized that research has no weight unless it supports business goals. From that point on, I learned to frame my insights around impact. Every finding needed to answer what it means for the business.
            </p>

            <p className="body-text" style={{ fontWeight: 'var(--weight-semibold)', marginTop: '2rem' }}>
              Growth
            </p>
            <p className="body-text">
              UXR was new to me. I had done design, but never at this depth. Every day I practiced synthesizing data, writing reports, and sitting in on interviews. Eventually, I ran my own sessions. I learned how to ask better questions, get past surface-level answers, and find patterns fast.
            </p>

            <p className="body-text" style={{ fontWeight: 'var(--weight-semibold)', marginTop: '2rem' }}>
              Empathy
            </p>
            <p className="body-text">
              Talking to people became my favorite part of the job. Angkas serves both riders and customers, and each individual has their own story. Listening to them helped me see how different lives intersect in one product. Empathy in research is about understanding people and their problems deeply enough to make decisions that respect their reality. That's a mindset I carry with me always.
            </p>

            <p className="body-text" style={{ fontWeight: 'var(--weight-semibold)', marginTop: '2rem' }}>
              Systems matter
            </p>
            <p className="body-text">
              Angkas had systems that kept research moving. We had a steady flow of respondents and structured processes for synthesis. At first, I took that for granted, but its only when I left and did my own research that I realized how much time those systems saved.
            </p>
           </div>


            <div className="section-container final-section">
                <p className="body-text" style={{ marginTop: '2rem' }}>
                After Angkas, I stopped designing in isolation. I now begin every project by talking to users. You cannot design what you do not understand. Research gives direction, and human feedback should be the driving force behind every design decision you make.
                </p>
                <p className="body-text">
                While the internship did not make me want to do research full-time, it made me a much better designer. I now approach every problem with evidence and empathy. Working at Angkas showed me what a high-performing team looks like and what it means to deliver work that counts.
                </p>
           </div>

          </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Angkas


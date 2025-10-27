import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Landing'
import About from './About'
import OnlineCareers from './OnlineCareers'
import Angkas from './Angkas'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/onlinecareers" element={<OnlineCareers />} />
        <Route path="/angkas" element={<Angkas />} />
      </Routes>
    </Router>
  )
}

export default App

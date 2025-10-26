import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    
    // Force scroll to top whenever pathname changes
    window.scrollTo(0, 0)
    
    // Also force scroll to top after a brief delay to catch any browser restoration attempts
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return null
}

export default ScrollToTop

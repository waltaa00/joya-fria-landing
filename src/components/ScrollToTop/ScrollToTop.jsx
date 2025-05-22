"use client"

import { useState, useEffect } from "react"
import "./ScrollToTop.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isOverFooter, setIsOverFooter] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset
      setIsVisible(scrollY > 300)

      // Check if we're over the footer
      const footer = document.querySelector('.footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const footerTop = footerRect.top
        const windowHeight = window.innerHeight
        const minBottomDistance = 60 // Minimum distance from bottom in pixels
        
        // Calculate if we're close to footer but respect minimum distance
        const isOverFooterArea = footerTop <= windowHeight - minBottomDistance
        setIsOverFooter(isOverFooterArea)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      scrollToTop()
    }
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""} ${isOverFooter ? "on-footer" : ""}`}
      onClick={scrollToTop}
      onKeyDown={handleKeyPress}
      aria-label="Volver arriba"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <img 
        src="/assets/navarrow.png" 
        alt="Scroll to top" 
        className="scroll-to-top-arrow"
      />
    </button>
  )
}

export default ScrollToTop

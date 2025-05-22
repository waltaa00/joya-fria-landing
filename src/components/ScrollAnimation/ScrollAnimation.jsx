"use client"

import { useEffect, useRef } from "react"
import "./ScrollAnimation.css"

const ScrollAnimation = ({ children, className = "", delay = 0 }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay])

  return (
    <div ref={elementRef} className={`scroll-animation ${className}`}>
      {children}
    </div>
  )
}

export default ScrollAnimation

"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import DotNavigation from "./components/DotNavigation/DotNavigation"
import Inicio from "./sections/Inicio/Inicio"
import Historia from "./sections/Historia/Historia"
import Ingredientes from "./sections/Ingredientes/Ingredientes"
import Preparacion from "./sections/Preparacion/Preparacion"
import DonPepe from "./sections/DonPepe/DonPepe"
import Suscribirse from "./sections/Suscribirse/Suscribirse"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      <DotNavigation activeSection={activeSection} />
      <main>
        <Inicio />
        <Historia />
        <Ingredientes />
        <Preparacion />
        <DonPepe />
        <Suscribirse />
      </main>
      <ScrollToTop />
      <Footer activeSection={activeSection} />
    </div>
  )
}

export default App

"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <img src="/assets/oso.png" alt="Oso logo" className="logo-bear" />
          <img src="/assets/guche.png" alt="Guche logo" className="logo-cheese" />
        </a>

        <button
          className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#inicio" className={activeSection === "inicio" ? "active" : ""} onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#historia" className={activeSection === "historia" ? "active" : ""} onClick={closeMenu}>
                Historia
              </a>
            </li>
            <li>
              <a href="#ingredientes" className={activeSection === "ingredientes" ? "active" : ""} onClick={closeMenu}>
                Ingredientes
              </a>
            </li>
            <li>
              <a href="#preparacion" className={activeSection === "preparacion" ? "active" : ""} onClick={closeMenu}>
                Preparación
              </a>
            </li>
            <li>
              <a href="#don-pepe" className={activeSection === "don-pepe" ? "active" : ""} onClick={closeMenu}>
                Don Pepe
              </a>
            </li>
            <li>
              <a href="#suscribirse" className={activeSection === "suscribirse" ? "active" : ""} onClick={closeMenu}>
                Suscribirse
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

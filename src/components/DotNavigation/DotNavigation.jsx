import { useEffect } from "react"
import "./DotNavigation.css"

const DotNavigation = ({ activeSection }) => {
  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "historia", label: "Historia" },
    { id: "ingredientes", label: "Ingredientes" },
    { id: "preparacion", label: "Preparación" },
    { id: "don-pepe", label: "Don Pepe" },
    { id: "suscribirse", label: "Suscríbete" }
  ]

  const handleKeyPress = (e, sectionId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="dot-navigation" role="navigation" aria-label="Navegación por secciones">
      <ul role="list" className="dot-list">
        {sections.map(({ id, label }) => (
          <li key={id} role="listitem">
            <button
              className={`dot ${activeSection === id ? "active" : ""}`}
              onClick={() => document.getElementById(id).scrollIntoView({ behavior: "smooth" })}
              onKeyDown={(e) => handleKeyPress(e, id)}
              aria-label={`Ir a sección ${label}`}
              aria-current={activeSection === id ? "true" : "false"}
              tabIndex={0}
            >
              <span className="dot-label">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DotNavigation 
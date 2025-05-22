import "./Footer.css"

const Footer = ({ activeSection }) => {
  return (
    <footer className={`footer ${activeSection === "suscribirse" ? "visible" : ""}`}>
      <div className="footer-content">
        <p className="footer-text">© 2024 Don Pepe y elguche.com. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer 
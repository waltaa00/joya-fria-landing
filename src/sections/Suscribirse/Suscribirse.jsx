"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabase"
import NavArrow from "../../components/NavArrow/NavArrow"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./Suscribirse.css"

const Suscribirse = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Por favor, introduce tu correo electrónico.")
      return
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setMessage("Por favor, introduce un correo electrónico válido.")
      return
    }

    setStatus("loading")

    try {
      // Insert the email into the Supabase table
      const { error } = await supabase.from("subscribers").insert([{ email }])

      if (error) {
        if (error.code === "23505") {
          setStatus("error")
          setMessage("Este correo electrónico ya está suscrito.")
        } else {
          console.error("Error inserting email:", error)
          setStatus("error")
          setMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.")
        }
      } else {
        setStatus("success")
        setMessage("¡Gracias por suscribirte! Recibirás noticias pronto.")
        setEmail("")

        // Reset the success message after 5 seconds
        setTimeout(() => {
          setStatus("idle")
          setMessage("")
        }, 5000)
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
      setMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.")
    }
  }

  return (
    <section id="suscribirse" className="suscribirse" aria-labelledby="suscribirse-title">
      <div className="container suscribirse-container">
        <ScrollAnimation>
          <h2 id="suscribirse-title" className="suscribirse-title">Suscríbete</h2>
        </ScrollAnimation>
        <ScrollAnimation delay={300}>
          <p className="suscribirse-description">
            Introduce tu correo electrónico para recibir más noticias sobre Don Pepe y elguche.com
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={600} className="suscribirse-form-container">
          <form 
            onSubmit={handleSubmit} 
            className="suscribirse-form"
            role="form" 
            aria-label="Formulario de suscripción"
          >
            <div className="form-group">
              <label htmlFor="email-input" className="visually-hidden">
                Correo electrónico
              </label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Correo electrónico"
                aria-invalid={status === "error"}
                aria-describedby={status !== "idle" ? "form-message" : undefined}
                disabled={status === "loading"}
              />
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={status === "loading"}
                aria-busy={status === "loading"}
                style={{ 
                  backgroundColor: "#6A1B4D",
                  color: "var(--text)",
                  border: "none",
                  borderRadius: "4px",
                  padding: "15px 30px",
                  fontSize: "16px",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                  transition: "all 0.3s ease"
                }}
              >
                {status === "loading" ? "Enviando..." : "Submit"}
              </button>
            </div>

            {status !== "idle" && (
              <p 
                id="form-message" 
                className={`form-message ${status === "error" ? "error" : "success"}`}
                role="alert"
                aria-live="polite"
              >
                {message}
              </p>
            )}
          </form>
        </ScrollAnimation>

        <ScrollAnimation delay={900} className="contact-info">
          <h3>Contáctanos</h3>
          <p>
            Puedes contactarnos al correo electrónico{" "}
            <a href="mailto:donpepeyelguche@elg.com" aria-label="Enviar correo a Don Pepe y el Guche">
              donpepeyelguche@elg.com
            </a>
            <br />o al número telefónico{" "}
            <a href="tel:8000-GUCHE" aria-label="Llamar a Don Pepe y el Guche">
              8000-GUCHE
            </a>
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={1200} className="social-media">
          <h3>Redes Sociales</h3>
          <div className="social-icons" role="list">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" role="listitem">
              <img src="/assets/instagram.png" alt="Síguenos en Instagram" className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" role="listitem">
              <img src="/assets/facebook.png" alt="Síguenos en Facebook" className="social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link" role="listitem">
              <img src="/assets/tiktok.png" alt="Síguenos en TikTok" className="social-icon" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Suscribirse

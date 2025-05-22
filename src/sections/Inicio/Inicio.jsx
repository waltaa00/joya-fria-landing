"use client"

import { useEffect, useRef } from "react"
import NavArrow from "../../components/NavArrow/NavArrow"
import "./Inicio.css"

const Inicio = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const image = imageRef.current
    const button = buttonRef.current

    if (title) title.classList.add("animate-in")

    setTimeout(() => {
      if (subtitle) subtitle.classList.add("animate-in")
    }, 300)

    setTimeout(() => {
      if (image) image.classList.add("animate-in")
    }, 600)

    setTimeout(() => {
      if (button) button.classList.add("animate-in")
    }, 900)
  }, [])

  return (
    <section id="inicio" className="inicio">
      <div className="container inicio-container">
        <h1 ref={titleRef} className="inicio-title">
          Helado de Café con Dulce de Tapa y Banano
        </h1>
        <p ref={subtitleRef} className="inicio-subtitle">
          Una joya fría de Turrialba
        </p>
        <div ref={imageRef} className="inicio-image-container">
          <img
            src="/assets/helado.png"
            alt="Helado de café con dulce de tapa y banano servido en una copa de cristal"
            className="inicio-image"
          />
        </div>
        <button ref={buttonRef} className="inicio-button" onClick={() => (window.location.href = "#historia")}>
          Descubre el sabor
        </button>
      </div>
      <NavArrow targetId="historia" />
    </section>
  )
}

export default Inicio

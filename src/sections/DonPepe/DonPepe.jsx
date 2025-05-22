import NavArrow from "../../components/NavArrow/NavArrow"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./DonPepe.css"

const DonPepe = () => {
  return (
    <section id="don-pepe" className="don-pepe">
      <div className="container don-pepe-container">
        <ScrollAnimation>
          <h2 className="don-pepe-title">¿Quién es Don Pepe?</h2>
        </ScrollAnimation>
        <ScrollAnimation className="don-pepe-text" delay={300}>
          <p>
            Don Pepe, conocido aventurero y fotógrafo, también es conocido por sus aventuras gastronómicas, decidió
            unirse a elguche.com en la búsqueda de experimentos gastronómicos turrialbeños. Han escuchado que
            Turrialba es un centro gastronómico de nivel mundial donde se utiliza productos únicos, frescos y
            orgánicos.
          </p>
        </ScrollAnimation>
        <div className="don-pepe-content">
          <ScrollAnimation className="don-pepe-image" delay={600}>
            <img
              src="/assets/donpepe.png"
              alt="Ilustración de Don Pepe con su cámara fotográfica junto a productos locales"
            />
          </ScrollAnimation>
          <ScrollAnimation className="elguche-info" delay={900}>
            <h3>elguche.com</h3>
            <p>
              Es una famosa revista gastronómica en internet, reconocida por su exploración de platos tradicionales
              deconstruidos.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <NavArrow targetId="suscribirse" />
    </section>
  )
}

export default DonPepe

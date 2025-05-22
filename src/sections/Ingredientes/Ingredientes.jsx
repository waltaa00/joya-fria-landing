import NavArrow from "../../components/NavArrow/NavArrow"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./Ingredientes.css"

const Ingredientes = () => {
  return (
    <section id="ingredientes" className="ingredientes">
      <div className="container ingredientes-container">
        <ScrollAnimation>
          <h2 className="ingredientes-title">Ingredientes</h2>
        </ScrollAnimation>
        <div className="ingredientes-content">
          <ScrollAnimation className="ingredientes-list" delay={300}>
            <ul>
              <li>1 taza de café fuerte preparado con grano de Turrialba.</li>
              <li>1 taza de leche entera.</li>
              <li>1 taza de crema dulce (nata).</li>
              <li>1/2 taza de azúcar moreno.</li>
              <li>1/2 taza de dulce de tapa rallado o en trozos pequeños.</li>
              <li>1 cucharadita de esencia de vainilla.</li>
              <li>1 pizca de sal.</li>
              <li>1 banano maduro (para chips crujientes).</li>
              <li>Aceite de coco (opcional, para freír).</li>
              <li>Hojas de menta o flores comestibles para decorar.</li>
            </ul>
          </ScrollAnimation>
          <ScrollAnimation className="ingredientes-image" delay={600}>
            <img src="/assets/cafe.png" alt="Taza de café recién preparado con granos de café alrededor" />
          </ScrollAnimation>
        </div>
      </div>
      <NavArrow targetId="preparacion" />
    </section>
  )
}

export default Ingredientes

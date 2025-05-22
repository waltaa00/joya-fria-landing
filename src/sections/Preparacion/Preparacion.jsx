import NavArrow from "../../components/NavArrow/NavArrow"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./Preparacion.css"

const Preparacion = () => {
  return (
    <section id="preparacion" className="preparacion">
      <div className="container preparacion-container">
        <ScrollAnimation>
          <h2 className="preparacion-title">Preparación</h2>
        </ScrollAnimation>
        <div className="preparacion-steps">
          <ScrollAnimation delay={200}>
            <div className="preparacion-step">
              <h3>1. Preparación del sirope de dulce de tapa:</h3>
              <p>
                En una olla pequeña, colocar el dulce de tapa con 1/4 taza de agua. Calentar a fuego medio hasta obtener
                una mezcla espesa tipo sirope.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="preparacion-step">
              <h3>2. Base del helado:</h3>
              <p>
                En un tazón grande, mezclar la leche, la crema dulce, el café frío, el azúcar moreno, la vainilla y la
                pizca de sal. Batir hasta que el azúcar se disuelva.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="preparacion-step">
              <h3>3. Helado artesanal:</h3>
              <p>
                Verter la mezcla en un recipiente apto para congelador. Congelar durante 3 horas, batiendo cada hora
                para evitar que se cristalice (o usar una máquina para hacer helado si se tiene acceso).
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <div className="preparacion-step">
              <h3>4. Chips de banano:</h3>
              <p>
                Cortar el banano en rodajas muy delgadas. Freír en aceite de coco hasta que estén doradas y crujientes.
                Escurrir sobre papel absorbente.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={1000}>
            <div className="preparacion-step">
              <h3>5. Montaje:</h3>
              <p>
                Servir el helado en vasitos o copas. Agregar una cucharada del sirope de dulce de tapa encima. Decorar
                con chips de banano y una hojita de menta o flor comestible.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <NavArrow targetId="don-pepe" />
    </section>
  )
}

export default Preparacion

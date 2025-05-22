import NavArrow from "../../components/NavArrow/NavArrow"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./Historia.css"

const Historia = () => {
  return (
    <section id="historia" className="historia">
      <div className="container historia-container">
        <ScrollAnimation>
          <h2 className="historia-title">Historia de la receta</h2>
        </ScrollAnimation>
        <div className="historia-content">
          <ScrollAnimation className="historia-text" delay={300}>
            <p>
              El café ha sido parte fundamental de la historia costarricense, y en las montañas de Turrialba se cultiva
              uno de los más aromáticos del país. Esta receta nace de la idea de combinar ese tesoro local con uno de
              los ingredientes más representativos de la dulcería criolla: el dulce de tapa (panela). Inspirados por la
              frescura de los productos locales y el calor turrialbeño, Don Pepe y elguche.com nos presentan una
              creación refrescante que mezcla tradición, innovación y sabor: helado artesanal de café con sirope de
              dulce de tapa y crujiente de banano.
            </p>
          </ScrollAnimation>
          <ScrollAnimation className="historia-image" delay={600}>
            <img
              src="/assets/agricultor.png"
              alt="Agricultor cosechando granos de café en las montañas de Turrialba"
            />
          </ScrollAnimation>
        </div>
      </div>
      <NavArrow targetId="ingredientes" />
    </section>
  )
}

export default Historia

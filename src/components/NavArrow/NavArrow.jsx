import "./NavArrow.css"

const NavArrow = ({ targetId, direction = "down" }) => {
  const handleClick = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <a
      href={`#${targetId}`}
      className={`nav-arrow ${direction === "up" ? "nav-arrow-up" : ""}`}
      aria-label={`Navegar a ${targetId}`}
      onClick={handleClick}
    >
      <img 
        src="/assets/navarrow.png" 
        alt="Navigation arrow" 
        className="nav-arrow-image"
      />
    </a>
  )
}

export default NavArrow

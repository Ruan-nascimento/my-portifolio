import './backToHome.scss'

export function BackToHome() {
  return (
    <a
      href="#home"
      id="backHome"
      data-scroll="suave"
      data-anima="scroll"
      className=""
    >
      <i className="bi bi-arrow-up-circle-fill"></i>
    </a>
  )
}

import './header.scss'

export function Header() {
  return (
    <header className="header">
      <nav>
        <div className="left">
          <h1>
            <a href="#home">
              <span>&lt;/</span> R.Carlos
            </a>
          </h1>
        </div>

        <div className="right">
          <ul className="navegator">
            <li>
              <a href="#home" className="select one">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="two">
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#works" className="tree">
                Trabalhos
              </a>
            </li>
            <li>
              <a href="#contact" className="four">
                Contato
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/5582993635589?text=Ol%C3%A1+Ruan%2C+vim+pelo+seu+Site%2C+Gostaria+de+Fazer+um+Or%C3%A7amento%21"
            className="contact-button"
            target="_blank"
            rel="noreferrer"
          >
            Contate-me
          </a>
        </div>
      </nav>
    </header>
  )
}

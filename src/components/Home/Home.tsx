import './home.scss'

export function Home() {
  return (
    <div className="containerHome">
      <div className="left">
        <h2 className="message">Desenvolvedor Front End</h2>
        <p className="description">
          Estudante de Programação desde <b>2022</b>, Conhecimentos em{' '}
          <b>JavaScript</b>, <b>TypeScript</b>, <b>Node JS</b>, <b>React</b>,{' '}
          <b>Tecnicas de Clean Code</b>, entre outros conhecimentos sobre
          desenvolvimento web.
        </p>
        <p className="calltoaction">
          E então, Vamos <b>Trabalhar Juntos?</b>
        </p>
        <a
          href="https://wa.me/5582993635589?text=Ol%C3%A1+Ruan%2C+vim+pelo+seu+Site%2C+Gostaria+de+Fazer+um+Or%C3%A7amento%21"
          className="contateme"
          target="_blank"
          rel="noreferrer"
        >
          Contate-me
        </a>
        <nav>
          <ul id="navegation">
            <a
              href="https://github.com/Ruan-nascimento"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="bi bi-github"></i>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/ruan-nascimento-7477122ab/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="bi bi-linkedin"></i>
              </li>
            </a>
            <a
              href="https://www.instagram.com/ruancarloss19_/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="bi bi-instagram"></i>
              </li>
            </a>
            <a
              href="https://twitter.com/Ruan_cNasci020"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="bi bi-twitter"></i>
              </li>
            </a>
          </ul>
        </nav>
      </div>
      <img
        src="http://github.com/Ruan-nascimento.png"
        alt="Ruan Carlos Desenvolvedor Front End"
      />
    </div>
  )
}

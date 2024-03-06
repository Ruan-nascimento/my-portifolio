import { useState } from 'react'
import './header.scss'

export function Header() {
  const [scroll, setScroll] = useState(window.scrollY)

  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  const selected = document.querySelector('.select')
  console.log(selected)

  if (scroll <= 475) {
    selected?.classList.remove('select')
    document.querySelector('.one')?.classList.add('select')
  }
  if (scroll > 475 && scroll <= 950) {
    selected?.classList.remove('select')
    document.querySelector('.two')?.classList.add('select')
  }
  if (scroll > 950 && scroll <= 1425) {
    selected?.classList.remove('select')
    document.querySelector('.tree')?.classList.add('select')
  }
  if (scroll > 1425) {
    selected?.classList.remove('select')
    document.querySelector('.four')?.classList.add('select')
  }

  return (
    <header className="header" id="header">
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

import { BackToHome } from './components/backToHome/ButtonBackToHome'
import { Home } from './components/Home/Home'
import { Header } from './components/header/Header'

import './styles/app.scss'
import { About } from './components/about/About'

export function App() {
  return (
    <div className="container">
      <section className="home-section" id="home">
        <Header />
        <Home />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="works" id="works"></section>
      <section className="contact" id="contact"></section>

      <BackToHome />
    </div>
  )
}

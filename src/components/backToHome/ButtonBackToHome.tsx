import { useState } from 'react'
import './backToHome.scss'

export function BackToHome() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [scroll, setScroll] = useState(window.scrollY)

  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  if (scroll < 400) {
    document.querySelector('#backHome')?.classList.add('hidden')
  } else {
    document.querySelector('#backHome')?.classList.remove('hidden')
  }

  return (
    <a
      onClick={handleClick}
      href="#"
      id="backHome"
      data-scroll="suave"
      data-anima="scroll"
      className="hidden"
    >
      <i className="bi bi-arrow-up-circle-fill"></i>
    </a>
  )
}

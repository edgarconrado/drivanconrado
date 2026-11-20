import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la última `<section id>` que ya pasó el borde superior de la pantalla
 * (con 200px de margen), o '' si todavía estamos en el inicio.
 */
export default function useActiveSection() {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const update = () => {
      let currentSection = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          currentSection = section.getAttribute('id')
        }
      })
      setCurrent(currentSection)
    }

    window.addEventListener('scroll', update)
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return current
}

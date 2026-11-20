import { useEffect, useRef, useState } from 'react'

/**
 * Dispara una animación de animate.css la primera vez que el elemento entra en pantalla.
 * Devuelve la `ref` a asignar, y el `className` / `style` a aplicar.
 */
export default function useAnimateOnScroll(animation = 'fadeIn', delay = 0) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    className: animated ? `animate__animated animate__${animation} animated` : '',
    style: animated && delay ? { animationDelay: `${delay}ms` } : undefined,
  }
}

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Controla un modal/panel con animación de salida:
 * - `visible`: sigue en true mientras dura la animación de cierre.
 * - `closing`: true durante esos `duration` ms (para aplicar la clase *Out).
 */
export default function useAnimatedVisibility(duration = 300) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const timer = useRef(null)

  const open = useCallback(() => {
    clearTimeout(timer.current)
    setClosing(false)
    setVisible(true)
  }, [])

  const close = useCallback(() => {
    clearTimeout(timer.current)
    setClosing(true)
    timer.current = setTimeout(() => {
      setVisible(false)
      setClosing(false)
    }, duration)
  }, [duration])

  useEffect(() => () => clearTimeout(timer.current), [])

  return { visible, closing, open, close }
}

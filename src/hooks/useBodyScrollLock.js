import { useEffect } from 'react'

// Contador compartido: el scroll del body solo se libera cuando ya no queda ningún bloqueo activo.
let activeLocks = 0

export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined
    activeLocks += 1
    document.body.style.overflow = 'hidden'
    return () => {
      activeLocks -= 1
      if (activeLocks === 0) document.body.style.overflow = ''
    }
  }, [locked])
}

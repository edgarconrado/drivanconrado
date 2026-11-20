import { useEffect, useRef } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Comportamiento accesible de un diálogo/panel modal:
 * - al abrirse enfoca un elemento dentro (`initialFocus` o el primero enfocable),
 * - Tab / Shift+Tab se quedan dentro del diálogo,
 * - Escape lo cierra,
 * - al cerrarse devuelve el foco al elemento que lo abrió.
 */
export default function useDialog(ref, onClose, { enabled = true, initialFocus, returnFocus } = {}) {
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const node = ref.current
    if (!enabled || !node) return undefined

    const opener = document.activeElement
    const getFocusable = () => [...node.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null)

    const target = (initialFocus && node.querySelector(initialFocus)) || getFocusable()[0] || node
    target.focus({ preventScroll: true })

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab') return
      const items = getFocusable()
      if (items.length === 0) {
        e.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && (document.activeElement === first || document.activeElement === node)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      // Devuelve el foco al elemento indicado o, si no, al que tenía el foco al abrirse
      const target = (returnFocus && document.querySelector(returnFocus)) || opener
      if (target && typeof target.focus === 'function') target.focus({ preventScroll: true })
    }
  }, [ref, enabled, initialFocus, returnFocus])
}

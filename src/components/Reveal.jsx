import useAnimateOnScroll from '../hooks/useAnimateOnScroll'

// Elemento que se anima (animate.css) al entrar en pantalla. Renderiza exactamente la etiqueta indicada.
export default function Reveal({ as: Tag = 'div', animation, delay = 0, className = '', children, ...rest }) {
  const reveal = useAnimateOnScroll(animation, delay)
  return (
    <Tag
      ref={reveal.ref}
      className={`${className} animate-on-scroll ${reveal.className}`.trim()}
      style={reveal.style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

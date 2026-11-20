// Icono de Material Symbols. Es decorativo: se oculta a lectores de pantalla
// (si no, leerían el nombre del icono, p. ej. "calendar_today").
export default function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`.trim()} aria-hidden="true">
      {name}
    </span>
  )
}

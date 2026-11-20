import { useRef } from 'react'
import { whatsappUrl } from '../data/constants'
import useDialog from '../hooks/useDialog'
import Icon from './Icon'

// Modal "Saber más" de cada servicio
export default function ServiceModal({ service, closing, onClose }) {
  const dialogRef = useRef(null)
  useDialog(dialogRef, onClose)

  return (
    <div
      id="service-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        id="modal-content"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className={`bg-white max-w-lg w-full rounded-2xl shadow-xl relative flex flex-col outline-none animate__animated ${
          closing ? 'animate__zoomOut' : 'animate__zoomIn'
        }`}
        style={{ maxHeight: '88vh' }}
      >
        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:text-primary hover:bg-primary/10 transition-all text-lg font-bold"
        >
          ✕
        </button>

        {/* Área scrolleable */}
        <div className="overflow-y-auto flex-1 p-8 space-y-5">
          <div id="modal-icon" className="text-4xl">
            {service.icon}
          </div>
          <h3 id="modal-title" className="text-2xl font-bold pr-8 leading-tight">
            {service.title}
          </h3>
          <p id="modal-description" className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
          <div>
            <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
              <Icon name="checklist" className="text-base" /> Preparación
            </h4>
            <ul id="modal-preparation" className="space-y-2 text-gray-600">
              {service.preparation.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botón fijo abajo, sin encimarse */}
        <div className="flex-shrink-0 px-8 py-5 border-t border-gray-100 rounded-b-2xl bg-white">
          <a
            href={whatsappUrl(`Hola, me gustaría agendar una cita para: ${service.title.split(' — ')[0]}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
          >
            <Icon name="calendar_today" className="text-lg" /> Agendar este servicio
          </a>
        </div>
      </div>
    </div>
  )
}

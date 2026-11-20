import Icon from './Icon'
import { EMERGENCY_DISPLAY, EMERGENCY_TEL } from '../data/constants'

// Botón flotante de urgencias: llama directo. Va encima del botón de WhatsApp.
export default function EmergencyButton() {
  return (
    <a
      id="emergency-call"
      href={EMERGENCY_TEL}
      aria-label={`Teléfono de urgencias ${EMERGENCY_DISPLAY}`}
      title={`Urgencias: ${EMERGENCY_DISPLAY}`}
      className="fixed bottom-44 md:bottom-28 right-6 z-50 h-14 w-14 md:h-14 md:w-auto md:px-5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s"
    >
      <Icon name="call" className="text-2xl" />
      <span className="hidden md:inline">Urgencias</span>
    </a>
  )
}

import { useRef } from 'react'
import { WHATSAPP_DIRECT_URL, EMERGENCY_DISPLAY, EMERGENCY_TEL, PHONE_DISPLAY, PHONE_TEL } from '../data/constants'
import useDialog from '../hooks/useDialog'
import Icon from './Icon'

const MENU_LINK_CLASS =
  'flex items-center gap-3 px-4 py-3 rounded-lg text-[#111618] hover:bg-primary/10 hover:text-primary transition-colors group'

const LINKS = [
  { href: '#', icon: 'home', label: 'Inicio' },
  { href: '#especialidades', icon: 'medical_services', label: 'Especialidades' },
  { href: '#sobre-mi', icon: 'person', label: 'Sobre mí' },
  { href: '#testimonios', icon: 'reviews', label: 'Pacientes' },
]

// `active` mantiene el menú en pantalla; `closing` desliza el panel hacia afuera antes de ocultarlo.
export default function MobileMenu({ active, closing, onClose }) {
  const panelRef = useRef(null)
  useDialog(panelRef, onClose, { enabled: active && !closing, returnFocus: '#mobile-menu-btn' })

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm hidden md:hidden${active ? ' active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 outline-none"
        id="mobile-menu-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        tabIndex={-1}
        style={closing ? { transform: 'translateX(100%)' } : undefined}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <img src="./images/logo-white.png" alt="" width="24" height="24" loading="lazy" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-sm font-bold text-primary">Menú</span>
            </div>
            <button
              id="mobile-menu-close"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="text-gray-500 hover:text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icon name="close" className="text-2xl" />
            </button>
          </div>

          {/* Links de navegación */}
          <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {LINKS.map(({ href, icon, label }) => (
                <li key={href}>
                  <a href={href} className={MENU_LINK_CLASS} onClick={onClose}>
                    <Icon name={icon} className="text-xl" />
                    <span className="font-semibold">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer del menú con botón de agendar */}
          <div className="p-6 border-t border-gray-200">
            <a
              href={WHATSAPP_DIRECT_URL}
              target="_blank" rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="calendar_today" className="text-lg" />{' '}
              Agendar Cita
            </a>
            <a
              href={EMERGENCY_TEL}
              onClick={onClose}
              className="mt-3 w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              <Icon name="call" className="text-lg" /> Urgencias {EMERGENCY_DISPLAY}
            </a>
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 mb-2">Contáctanos</p>
              <a
                href={PHONE_TEL}
                onClick={onClose}
                className="text-sm font-bold text-primary hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

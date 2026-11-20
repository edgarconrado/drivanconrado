import { WHATSAPP_DIRECT_URL } from '../data/constants'
import Icon from './Icon'

const ITEM_CLASS =
  'flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-primary transition-colors'

// Menú inferior para mobile (estilo app). `currentSection` resalta el ítem de la sección visible.
export default function BottomNav({ currentSection }) {
  const itemClass = (href) => {
    const isActive = href === `#${currentSection}` || (currentSection === '' && href === '#')
    return isActive ? `${ITEM_CLASS} active-nav-item` : ITEM_CLASS
  }
  const isCurrent = (href) => (href === `#${currentSection}` || (currentSection === '' && href === '#') ? 'location' : undefined)

  return (
    <nav aria-label="Menú inferior" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
      <div className="grid grid-cols-5 h-16">
        {/* Inicio */}
        <a href="#" aria-current={isCurrent('#')} className={itemClass('#')}>
          <Icon name="home" className="text-2xl" />
          <span className="text-xs font-medium">Inicio</span>
        </a>

        {/* Especialidades */}
        <a href="#especialidades" aria-current={isCurrent('#especialidades')} className={itemClass('#especialidades')}>
          <Icon name="medical_services" className="text-2xl" />
          <span className="text-xs font-medium">Servicios</span>
        </a>

        {/* Agendar (Botón central destacado) */}
        <a
          href={WHATSAPP_DIRECT_URL}
          target="_blank" rel="noopener noreferrer"
          className="flex flex-col items-center justify-center relative -top-6"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform">
            <Icon name="calendar_month" className="text-white text-2xl" />
          </div>
          <span className="text-xs font-medium text-primary mt-1">Agendar</span>
        </a>

        {/* Testimonios */}
        <a href="#testimonios" aria-current={isCurrent('#testimonios')} className={itemClass('#testimonios')}>
          <Icon name="reviews" className="text-2xl" />
          <span className="text-xs font-medium">Reseñas</span>
        </a>

        {/* Contacto */}
        <a href={WHATSAPP_DIRECT_URL} target="_blank" rel="noopener noreferrer" className={ITEM_CLASS}>
          <Icon name="chat" className="text-2xl" />
          <span className="text-xs font-medium">Contacto</span>
        </a>
      </div>
    </nav>
  )
}

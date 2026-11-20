import { WHATSAPP_DIRECT_URL } from '../data/constants'
import Icon from './Icon'

const NAV_LINK_CLASS =
  'text-[#111618] text-sm font-semibold hover:text-primary transition-colors'

export default function Header({ onOpenMenu }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#eaeff0] px-6 lg:px-40 py-4 animate__animated animate__fadeInDown">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="./images/logo-transparent.png"
            alt="Logo Dr. Iván Conrado"
            width="51"
            height="48"
            className="h-12 w-auto object-contain"
          />
          <div>
            <h2 className="text-[#111618] text-lg font-bold leading-none tracking-tight">
              Dr. Iván Conrado
            </h2>
            <p className="text-xs text-primary font-medium uppercase tracking-widest mt-1">Cardiología Clínica</p>
          </div>
        </div>
        <nav aria-label="Principal" className="hidden md:flex items-center gap-10">
          <a className={NAV_LINK_CLASS} href="#">
            Inicio
          </a>
          <a className={NAV_LINK_CLASS} href="#especialidades">
            Especialidades
          </a>
          <a className={NAV_LINK_CLASS} href="#sobre-mi">
            Sobre mí
          </a>
          <a className={NAV_LINK_CLASS} href="#testimonios">
            Pacientes
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_DIRECT_URL}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all items-center gap-2"
          >
            <Icon name="calendar_today" className="text-sm" />{' '}
            Agendar Cita
          </a>
          {/* Botón hamburguesa para mobile */}
          <button
            id="mobile-menu-btn"
            onClick={onOpenMenu}
            aria-label="Abrir menú"
            aria-haspopup="dialog"
            aria-controls="mobile-menu"
            className="md:hidden text-[#111618] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon name="menu" className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  )
}

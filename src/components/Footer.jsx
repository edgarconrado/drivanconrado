import { WHATSAPP_DIRECT_URL, EMERGENCY_DISPLAY, EMERGENCY_TEL, PHONE_DISPLAY, PHONE_TEL } from '../data/constants'
import Icon from './Icon'

const SOCIAL_LINK_CLASS =
  'w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-primary hover:text-white transition-all'

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-white border-t border-[#eaeff0] pt-16 pb-8 px-6 lg:px-40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon name="cardiology" className="text-primary text-2xl" />
              </div>
              <h2 className="text-lg font-bold">Dr. Iván Conrado</h2>
            </div>
            <p className="text-[#4f6d76] max-w-[360px] leading-relaxed mb-6">
              Dedicados a transformar la salud cardiovascular a través de la medicina personalizada y tecnología de
              vanguardia.
            </p>
            <div className="flex gap-4">
              <a className={SOCIAL_LINK_CLASS} href={PHONE_TEL} aria-label={`Llamar al ${PHONE_DISPLAY}`}>
                <Icon name="call" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Navegación</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#4f6d76]">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#especialidades">
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Cita
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-primary transition-colors"
                  onClick={() => onOpenLegal('privacy')}
                >
                  Privacidad
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Ubicación</h4>
            <p className="text-sm text-[#4f6d76] leading-loose">
              Av Allende 572
              <br />
              Col Centro c.p. 27000
              <br />
              Torreón, Coah. <br />
              Tel:{' '}
              <a className="hover:text-primary transition-colors" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
              <br />
              Urgencias:{' '}
              <a className="font-bold text-red-600 hover:underline" href={EMERGENCY_TEL}>
                {EMERGENCY_DISPLAY}
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-[#eaeff0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#4f6d76]">
            © 2026 Dr. Iván Conrado - Especialista en Cardiología. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-[#4f6d76]">
            <button type="button" className="hover:text-primary" onClick={() => onOpenLegal('terms')}>
              Términos
            </button>
            <button type="button" className="hover:text-primary" onClick={() => onOpenLegal('privacy')}>
              Aviso de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Reveal from './Reveal'
import { MAP_EMBED_URL } from '../data/constants'
import Icon from './Icon'

// Mapa de Google
export default function MapSection() {
  return (
    <Reveal
      as="section"
      animation="fadeIn"
      className="w-full relative bg-[#f1f3f4] border-t border-[#eaeff0]"
    >
      <div className="h-[450px] w-full relative overflow-hidden flex items-center justify-center grayscale contrast-[0.9]">
        <iframe
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          src={MAP_EMBED_URL}
          width="600"
          height="450"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute pointer-events-none flex flex-col items-center">
          <div className="bg-primary p-3 rounded-full shadow-2xl animate-bounce">
            <Icon name="medical_services" className="text-white text-3xl" />
          </div>
          <div className="mt-2 px-4 py-2 bg-white rounded-lg shadow-xl border border-primary/20">
            <p className="text-xs font-bold text-primary uppercase tracking-tighter">Consultorio Dr. Conrado</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

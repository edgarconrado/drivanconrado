import Reveal from './Reveal'
import { whatsappUrl } from '../data/constants'
import { SERVICES } from '../data/services'
import Icon from './Icon'

const CARD_CLASS =
  'group flex flex-col p-8 rounded-2xl border border-[#d5dfe1] hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 bg-background-light/30 hover:-translate-y-2'
// Tarjeta destacada (Cateterismo Cardíaco)
const FEATURED_CARD_CLASS =
  'group flex flex-col p-8 rounded-2xl border border-primary/40 bg-white transition-all duration-300 shadow-xl shadow-primary/5 hover:-translate-y-2'

function ServiceCard({ service, onOpen }) {
  const { key, delay, featured, card } = service
  return (
    <Reveal animation="fadeInUp" delay={delay} className={featured ? FEATURED_CARD_CLASS : CARD_CLASS}>
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
        <Icon name={card.icon} className="text-3xl" />
      </div>
      <h4 className="text-xl font-bold mb-2">{card.title}</h4>
      <span
        className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold"
        style={{ background: '#e8f5f0', color: '#2c5e6d' }}
      >
        {card.price}
      </span>
      <p className="text-[#4f6d76] leading-relaxed mt-3">{card.description}</p>
      {card.note && <p className="text-[11px] text-primary/90 mt-2 italic">{card.note}</p>}
      <div className="mt-auto">
        <hr className="my-6 border-gray-100" />
        <div className="flex items-center justify-between gap-3">
          <button type="button" onClick={() => onOpen(key)} className="text-primary font-bold">
            Saber más <Icon name="arrow_forward" className="text-xs" />
          </button>
          <a
            href={whatsappUrl(`Hola, me gustaría agendar una cita para: ${card.title}`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agendar: ${card.title}`}
            className="px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-colors"
          >
            Agendar
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Services({ onOpenService }) {
  return (
    <section className="bg-white py-24 px-6 lg:px-40" id="especialidades">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal animation="fadeInLeft" className="max-w-[600px]">
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Servicios Médicos</h2>
            <h3 className="text-[#111618] text-4xl font-bold leading-tight">
              Especialidades dedicadas a su salud cardiovascular
            </h3>
          </Reveal>
          <Reveal as="p" animation="fadeInRight" className="text-[#4f6d76] max-w-[400px]">
            Ofrecemos soluciones integrales para la salud de su corazón con tecnología de última generación y atención
            basada en evidencia.
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.key} service={service} onOpen={onOpenService} />
          ))}
        </div>
      </div>
    </section>
  )
}

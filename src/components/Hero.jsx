import { WHATSAPP_DIRECT_URL } from '../data/constants'

export default function Hero() {
  return (
    <section className="px-6 lg:px-40 py-16 lg:py-24 overflow-x-clip">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold w-fit animate__animated animate__fadeIn animate__delay-1s">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              CITAS DISPONIBLES ESTA SEMANA
            </div>
            <h1 className="text-[#111618] text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight animate__animated animate__fadeInUp">
              Cuidado experto para su <span className="text-primary">corazón</span>.
            </h1>
            <p className="text-[#4f6d76] text-lg lg:text-xl leading-relaxed max-w-[500px] animate__animated animate__fadeInUp animate__delay-1s">
              Medicina cardiovascular de vanguardia con un enfoque humano y personalizado para prevenir y tratar
              patologías complejas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate__animated animate__fadeInUp animate__delay-2s">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank" rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 hover:scale-105 text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-primary/20 transition-all"
              >
                Agendar Cita
              </a>
              <a
                href="#especialidades"
                className="bg-white border border-[#d5dfe1] hover:bg-gray-50 hover:scale-105 px-8 py-4 rounded-xl text-base font-bold transition-all"
              >
                Ver Servicios
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative animate__animated animate__fadeInRight">
              <div className="absolute -top-6 -right-6 w-full h-full bg-primary/5 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
              <div
                className="w-full aspect-[4/5] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl overflow-hidden"
                role="img"
                aria-label="Retrato profesional del Dr. Iván Conrado en su consultorio médico"
                style={{ backgroundImage: 'url("./images/dr-ivan.jpeg")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

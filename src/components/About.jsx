import Reveal from './Reveal'

export default function About() {
  return (
    <section className="py-24 px-6 lg:px-40" id="sobre-mi">
      <Reveal
        animation="zoomIn"
        className="max-w-[1200px] mx-auto bg-primary rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center gap-8">
            <div>
              <h2 className="text-white/80 text-sm font-bold tracking-[0.2em] uppercase mb-4">Trayectoria</h2>
              <h3 className="text-white text-4xl font-bold leading-tight">Excelencia médica con calidez humana</h3>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Con más de 10 años de experiencia en el ámbito clínico y académico, mi compromiso es brindar una
              atención médica de excelencia basada en la empatía y la innovación científica constante.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-white text-3xl font-bold">5+</p>
                <p className="text-white/80 text-sm">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-white text-3xl font-bold">2K+</p>
                <p className="text-white/80 text-sm">Pacientes Atendidos</p>
              </div>
            </div>
          </div>
          <div
            className="h-[400px] lg:h-auto bg-center bg-cover"
            role="img"
            aria-label="Dr. Iván Conrado, cardiólogo"
            style={{ backgroundImage: 'url("./images/ivan-conrado2.jpg")' }}
          ></div>
        </div>
      </Reveal>
    </section>
  )
}

// Cada servicio tiene los datos de su tarjeta (`card`) y los del modal "Saber más" (`modal`).
export const SERVICES = [
  {
    key: 'chequeo',
    delay: 0,
    card: {
      icon: 'favorite',
      title: 'Consulta Cardiología',
      price: '$800',
      description:
        'Evaluación médica cardiovascular completa: historial clínico, exploración física y orientación personalizada para cuidar tu corazón.',
    },
    modal: {
      icon: '🫀',
      title: 'Consulta Cardiología — $800',
      description:
        'Evaluación médica cardiovascular completa: historial clínico, exploración física y orientación personalizada para el cuidado de tu corazón.',
      preparation: [
        'Lista de medicamentos actuales',
        'Estudios previos si los tienes',
        'Sin ayuno necesario',
        'Duración aprox. 30–40 minutos',
      ],
    },
  },
  {
    key: 'eco',
    delay: 100,
    card: {
      icon: 'monitor_heart',
      title: 'Consulta + Electrocardiograma',
      price: '$1,000',
      description:
        'Consulta cardiológica que incluye electrocardiograma en el mismo día, ideal para una valoración más completa de tu ritmo cardíaco.',
    },
    modal: {
      icon: '💓',
      title: 'Consulta + Electrocardiograma — $1,000',
      description:
        'Consulta cardiológica completa con electrocardiograma incluido en la misma cita. Ideal para una valoración más completa de tu ritmo cardíaco.',
      preparation: [
        'Sin ayuno necesario',
        'Ropa cómoda',
        'Lista de medicamentos actuales',
        'Duración aprox. 45 minutos',
      ],
    },
  },
  {
    key: 'arri',
    delay: 200,
    card: {
      icon: 'ecg_heart',
      title: 'Holter de 24 horas',
      price: '$2,000',
      description:
        'Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar arritmias o irregularidades que no aparecen en un ECG estándar.',
    },
    modal: {
      icon: '📈',
      title: 'Holter de 24 horas — $2,000',
      description:
        'Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar arritmias o irregularidades que no se presentan en un ECG convencional.',
      preparation: [
        'Baño antes de colocar el equipo',
        'Ropa holgada y cómoda',
        'Evitar actividad extrema',
        'Llevar diario de síntomas',
      ],
    },
  },
  {
    key: 'hemo',
    delay: 300,
    card: {
      icon: 'schedule',
      title: 'Holter de 48 horas',
      price: '$2,600',
      description:
        'Monitoreo prolongado de 48 horas para mayor sensibilidad diagnóstica en casos de síntomas intermitentes o poco frecuentes.',
    },
    modal: {
      icon: '⏱️',
      title: 'Holter de 48 horas — $2,600',
      description:
        'Monitoreo prolongado de 48 horas para mayor sensibilidad diagnóstica en síntomas intermitentes o poco frecuentes que requieren mayor tiempo de registro.',
      preparation: [
        'Baño antes de colocar el equipo',
        'Ropa holgada y cómoda',
        'Llevar diario detallado de síntomas',
        'No retirar el equipo durante el periodo',
      ],
    },
  },
  {
    key: 'eco2',
    delay: 400,
    card: {
      icon: 'biotech',
      title: 'Ecocardiograma Doppler',
      price: '$2,500',
      description:
        'Ultrasonido avanzado del corazón que evalúa su estructura, función y flujo sanguíneo. Se realiza en Cardiocenter con previa cita.',
      note: '📍 Previa cita · Se realiza en Cardiocenter',
    },
    modal: {
      icon: '🔬',
      title: 'Ecocardiograma Doppler — $2,500',
      description:
        'Ultrasonido avanzado del corazón que evalúa su estructura, función y flujo sanguíneo. Permite detectar valvulopatías, miocardiopatías y más. Se realiza en Cardiocenter.',
      preparation: [
        'Sin ayuno necesario',
        'Ropa cómoda y de fácil acceso',
        'Previa cita requerida',
        'Se realiza en Cardiocenter',
      ],
    },
  },
  {
    key: 'hipe',
    delay: 500,
    card: {
      icon: 'directions_run',
      title: 'Prueba de Esfuerzo',
      price: '$1,500',
      description:
        'Evaluación de la respuesta cardiovascular al ejercicio físico controlado. Detecta isquemia y mide la capacidad funcional del corazón.',
      note: '📍 Previa cita · Se realiza en Cardiocenter',
    },
    modal: {
      icon: '🏃',
      title: 'Prueba de Esfuerzo — $1,500',
      description:
        'Evaluación de la respuesta cardiovascular al ejercicio físico controlado en banda o bicicleta. Detecta isquemia coronaria y mide la capacidad funcional del corazón.',
      preparation: [
        'Ropa deportiva y tenis',
        'Ayuno ligero (2–3 horas)',
        'No cafeína el día del estudio',
        'Previa cita · Se realiza en Cardiocenter',
      ],
    },
  },
  {
    key: 'car',
    delay: 600,
    card: {
      icon: 'healing',
      title: 'Prueba de Esfuerzo + Consulta',
      price: '$2,200',
      description:
        'Paquete combinado: prueba de esfuerzo más consulta de interpretación y seguimiento personalizado con el Dr. Iván Conrado.',
    },
    modal: {
      icon: '🩺',
      title: 'Prueba de Esfuerzo + Consulta — $2,200',
      description:
        'Paquete que incluye la prueba de esfuerzo más una consulta de interpretación y seguimiento personalizado con el Dr. Iván Conrado el mismo día.',
      preparation: [
        'Ropa deportiva y tenis',
        'Ayuno ligero (2–3 horas)',
        'No cafeína el día del estudio',
        'Previa cita requerida',
      ],
    },
  },
  {
    key: 'hemo2',
    delay: 700,
    featured: true,
    card: {
      icon: 'cardiology',
      title: 'Cateterismo Cardíaco',
      price: 'Desde $70,000',
      description:
        'Procedimiento de cardiología intervencionista para diagnóstico y tratamiento de obstrucciones coronarias. Requiere valoración previa.',
      note: 'Requiere valoración previa',
    },
    modal: {
      icon: '💉',
      title: 'Cateterismo Cardíaco — Desde $70,000',
      description:
        'Procedimiento de cardiología intervencionista para diagnóstico y tratamiento de obstrucciones en las arterias coronarias. El costo final depende del tipo de cateterismo.',
      preparation: [
        'Ayuno de 6–8 horas',
        'Acompañante requerido',
        'Análisis de laboratorio previos',
        'Requiere valoración previa con el doctor',
      ],
    },
  },
  {
    key: 'hipo2',
    delay: 800,
    card: {
      icon: 'vaccines',
      title: 'Angioplastia',
      price: 'Previa valoración',
      description:
        'Intervención mínimamente invasiva para restaurar el flujo en arterias coronarias obstruidas. Costo determinado según valoración.',
      note: 'Requiere valoración previa',
    },
    modal: {
      icon: '🫁',
      title: 'Angioplastia — Previa valoración',
      description:
        'Intervención mínimamente invasiva para restaurar el flujo sanguíneo en arterias coronarias obstruidas mediante un globo o stent. Costo determinado tras valoración.',
      preparation: [
        'Requiere valoración cardiológica previa',
        'Ayuno de 8 horas',
        'Suspender anticoagulantes según indicación',
        'Acompañante obligatorio',
      ],
    },
  },
]

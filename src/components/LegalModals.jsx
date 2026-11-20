import { useRef } from 'react'
import Icon from './Icon'
import useDialog from '../hooks/useDialog'
import { adsEnabled } from '../lib/analytics'

// Estructura compartida por los modales de Aviso de Privacidad y Términos y Condiciones.

function LegalModal({ id, icon, title, onClose, children }) {
  const dialogRef = useRef(null)
  useDialog(dialogRef, onClose)

  return (
    <div
      id={id}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        tabIndex={-1}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col outline-none"
        style={{ maxHeight: '90vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <Icon name={icon} className="text-primary text-2xl" />
            <h2 id={`${id}-title`} className="text-lg font-bold">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:text-primary transition-all text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="overflow-y-auto flex-1 px-8 py-6 space-y-6 text-sm text-gray-600 leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-8 py-4 border-t border-gray-100 text-center">
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ number, title, children }) {
  return (
    <div>
      <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
          {number}
        </span>
        {title}
      </h3>
      {children}
    </div>
  )
}

function List({ children }) {
  return <ul className="mt-2 space-y-1 ml-4">{children}</ul>
}

function Item({ mark = '✓', markClass = 'text-primary', children }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`${markClass} flex-shrink-0 mt-0.5`}>{mark}</span>
      <span>{children}</span>
    </li>
  )
}

function Strong({ children }) {
  return <strong className="text-gray-700">{children}</strong>
}

export function PrivacyModal({ onClose }) {
  return (
    <LegalModal id="privacy-modal" icon="shield" title="Aviso de Privacidad" onClose={onClose}>
      <div>
        <p className="text-xs text-gray-500 mb-4">
          Última actualización: {adsEnabled ? 'noviembre de 2026' : 'febrero de 2026'}
        </p>
        <p>
          En cumplimiento con lo dispuesto por la{' '}
          <strong className="text-gray-800">
            Ley Federal de Protección de Datos Personales en Posesión de los Particulares
          </strong>{' '}
          (LFPDPPP) y su Reglamento, el Dr. Iván Conrado Hernández, con domicilio en Av. Allende 572, Col. Centro, C.P.
          27000, Torreón, Coahuila, México, en su carácter de responsable del tratamiento de datos personales, pone a su
          disposición el presente Aviso de Privacidad.
        </p>
      </div>

      <Section number="1" title="Datos personales que se recaban">
        <p>
          Para la prestación de servicios médicos especializados en cardiología, se podrán recabar los siguientes datos
          personales:
        </p>
        <List>
          <Item>
            <strong>Datos de identificación:</strong> nombre completo, fecha de nacimiento, sexo, CURP, RFC.
          </Item>
          <Item>
            <strong>Datos de contacto:</strong> domicilio, número de teléfono, correo electrónico.
          </Item>
          <Item>
            <strong>Datos sensibles de salud:</strong> historial clínico, diagnósticos, estudios de laboratorio e
            imagen, tratamientos médicos, alergias y antecedentes familiares.
          </Item>
          <Item>
            <strong>Datos financieros:</strong> los necesarios para la emisión de recibos de honorarios o facturación
            electrónica.
          </Item>
        </List>
      </Section>

      <Section number="2" title="Finalidades del tratamiento">
        <p>
          <Strong>Finalidades primarias (necesarias para la relación médico-paciente):</Strong>
        </p>
        <List>
          <Item>Brindar atención médica especializada en cardiología.</Item>
          <Item>Elaborar y conservar el expediente clínico del paciente.</Item>
          <Item>Prescribir tratamientos, solicitar estudios y dar seguimiento médico.</Item>
          <Item>Gestionar citas, recordatorios y seguimiento clínico.</Item>
          <Item>Emitir recibos de honorarios o facturas electrónicas.</Item>
        </List>
        <p className="mt-3">
          <Strong>Finalidades secundarias (puede oponerse a ellas):</Strong>
        </p>
        <List>
          <Item mark="○" markClass="text-gray-400">
            Envío de información sobre servicios, promociones y campañas de salud cardiovascular.
          </Item>
          <Item mark="○" markClass="text-gray-400">
            Realización de encuestas de satisfacción y mejora de la calidad.
          </Item>
        </List>
      </Section>

      <Section number="3" title="Transferencia de datos personales">
        <p>
          Sus datos personales podrán ser compartidos únicamente en los siguientes supuestos, sin requerir su
          consentimiento:
        </p>
        <List>
          <Item>Con otros médicos especialistas o instituciones hospitalarias cuando su atención lo requiera.</Item>
          <Item>Con laboratorios y centros de diagnóstico para la realización de estudios clínicos.</Item>
          <Item>Con autoridades sanitarias o de seguridad social cuando así lo exija la ley.</Item>
          <Item>Con su compañía de seguros de gastos médicos, a solicitud del paciente.</Item>
        </List>
        <p className="mt-2">
          En ningún caso se venderán, cederán o transferirán sus datos personales a terceros con fines comerciales no
          relacionados con su atención médica.
        </p>
      </Section>

      <Section number="4" title="Derechos ARCO">
        <p>
          Usted tiene derecho a <Strong>Acceder, Rectificar, Cancelar u Oponerse</Strong> (derechos ARCO) al tratamiento
          de sus datos personales. Para ejercer estos derechos, envíe su solicitud a:
        </p>
        <div className="mt-3 p-4 bg-primary/5 rounded-xl border border-primary/10 space-y-1">
          <p className="flex items-center gap-2">
            <Icon name="location_on" className="text-primary text-base" /> Av. Allende 572, Col. Centro, C.P. 27000,
            Torreón, Coah.
          </p>
          <p className="flex items-center gap-2">
            <Icon name="phone" className="text-primary text-base" /> +52 870 119 3269
          </p>
          <p className="flex items-center gap-2">
            <Icon name="schedule" className="text-primary text-base" /> Respuesta en un plazo máximo de 20 días hábiles.
          </p>
        </div>
      </Section>

      <Section number="5" title="Uso de cookies y tecnologías de rastreo">
        {adsEnabled ? (
          <>
            <p>
              Este sitio utiliza cookies y tecnologías similares de <Strong>medición publicitaria</Strong> mediante la
              etiqueta de Google Ads, operada por Google LLC. Se emplean para conocer cuántas personas llegan al sitio
              desde nuestros anuncios y qué acciones realizan, con el fin de evaluar y mejorar la efectividad de la
              publicidad y mostrar anuncios relacionados con nuestros servicios.
            </p>
            <p className="mt-3">
              <Strong>Información que pueden recabar:</Strong>
            </p>
            <List>
              <Item>Páginas consultadas del sitio.</Item>
              <Item>
                Clics en los botones de contacto (llamar, WhatsApp y agendar cita) y envío del formulario de contacto;
                únicamente el hecho de que la acción ocurrió, no su contenido.
              </Item>
              <Item>
                Datos del dispositivo y del navegador, dirección IP, ubicación aproximada e identificador del anuncio en
                el que se hizo clic.
              </Item>
            </List>
            <p className="mt-3">
              Estas cookies pueden ser propias (por ejemplo, _gcl_au y _gcl_aw) o de Google (por ejemplo, de
              doubleclick.net), con una vigencia que va desde la sesión de navegación hasta aproximadamente 13 meses.
            </p>
            <p className="mt-3">
              <Strong>Información que no se envía:</Strong> los datos que usted escribe en el formulario de contacto
              (nombre, teléfono, motivo y mensaje) y cualquier información de salud no se envían a Google; el formulario
              únicamente abre WhatsApp con su mensaje.
            </p>
            <p className="mt-3">
              Los datos recabados mediante estas cookies son tratados por Google LLC, con sede en Estados Unidos,
              conforme a su política de privacidad, disponible en{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                policies.google.com/technologies/ads
              </a>
              .
            </p>
            <p className="mt-3">
              <Strong>Cómo desactivarlas:</Strong> puede administrar o desactivar la personalización de anuncios en{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                adssettings.google.com
              </a>
              , o configurar su navegador para bloquear o eliminar las cookies (los pasos varían según el navegador).
              Hacerlo no impide el uso del sitio ni afecta la atención médica. También puede ejercer sus derechos ARCO
              conforme a la sección 4.
            </p>
          </>
        ) : (
          <p>
            Este sitio web no utiliza cookies de rastreo ni tecnologías de seguimiento de terceros con fines
            publicitarios. Únicamente se emplean funciones técnicas esenciales para el correcto funcionamiento del
            sitio.
          </p>
        )}
      </Section>

      <Section number="6" title="Cambios al aviso de privacidad">
        <p>
          El presente aviso de privacidad puede ser modificado. Cualquier cambio será notificado a través de este sitio
          web. Se recomienda revisarlo periódicamente.
        </p>
      </Section>

      <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-500">
        <p>
          Si considera que su derecho a la protección de datos ha sido vulnerado, puede presentar una queja ante el{' '}
          <strong>
            Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)
          </strong>{' '}
          a través del sitio{' '}
          <a
            href="https://www.inai.org.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            www.inai.org.mx
          </a>
          .
        </p>
      </div>
    </LegalModal>
  )
}

export function TermsModal({ onClose }) {
  return (
    <LegalModal id="terms-modal" icon="gavel" title="Términos y Condiciones" onClose={onClose}>
      <div>
        <p className="text-xs text-gray-500 mb-4">Última actualización: febrero de 2026</p>
        <p>
          Los presentes Términos y Condiciones regulan el acceso y uso del sitio web del{' '}
          <strong className="text-gray-800">Dr. Iván Conrado Hernández</strong>, especialista en Cardiología, con
          domicilio en Av. Allende 572, Col. Centro, C.P. 27000, Torreón, Coahuila, México. Al acceder y utilizar este
          sitio, usted acepta los términos aquí descritos.
        </p>
      </div>

      <Section number="1" title="Naturaleza informativa del sitio">
        <p>
          Este sitio web tiene carácter exclusivamente informativo. El contenido publicado —incluyendo descripciones de
          servicios, precios, preparaciones y recomendaciones generales— no constituye consulta médica, diagnóstico ni
          prescripción. Cualquier decisión relacionada con su salud debe tomarse únicamente bajo supervisión y criterio
          del médico tratante.
        </p>
      </Section>

      <Section number="2" title="Uso del sitio web">
        <p>
          El usuario se compromete a utilizar este sitio de forma lícita y conforme a los presentes términos. Queda
          prohibido:
        </p>
        <List>
          <Item mark="✗" markClass="text-red-400">
            Utilizar el sitio con fines fraudulentos, ilegales o que puedan causar daño a terceros.
          </Item>
          <Item mark="✗" markClass="text-red-400">
            Reproducir, distribuir o modificar el contenido del sitio sin autorización expresa y por escrito.
          </Item>
          <Item mark="✗" markClass="text-red-400">
            Introducir virus, malware o cualquier código que pueda dañar el funcionamiento del sitio.
          </Item>
          <Item mark="✗" markClass="text-red-400">
            Suplantar la identidad de otra persona o entidad al contactar al consultorio.
          </Item>
        </List>
      </Section>

      <Section number="3" title="Precios y servicios">
        <p>
          Los precios publicados en este sitio son de carácter referencial y pueden estar sujetos a cambios sin previo
          aviso. El costo definitivo de cada servicio será confirmado al momento de agendar la cita. Algunos
          procedimientos requieren valoración previa y su precio será determinado en función del diagnóstico y plan de
          tratamiento individualizado.
        </p>
      </Section>

      <Section number="4" title="Agendamiento de citas">
        <p>
          La solicitud de cita a través del formulario de WhatsApp o de plataformas externas (Doctoralia) no garantiza
          automáticamente la disponibilidad del horario. La cita se considerará confirmada únicamente cuando el
          consultorio lo notifique expresamente. El paciente deberá presentarse con al menos 10 minutos de anticipación;
          en caso de no asistir sin aviso previo, el horario podrá ser reasignado.
        </p>
      </Section>

      <Section number="5" title="Limitación de responsabilidad">
        <p>El Dr. Iván Conrado Hernández no será responsable por:</p>
        <List>
          <Item>Daños derivados del uso incorrecto de la información publicada en el sitio.</Item>
          <Item>Interrupciones, errores técnicos o indisponibilidad temporal del sitio web.</Item>
          <Item>
            El contenido de sitios web de terceros enlazados desde esta página (Doctoralia, Google Maps, etc.).
          </Item>
          <Item>Consecuencias derivadas de no seguir las indicaciones médicas prescritas.</Item>
        </List>
      </Section>

      <Section number="6" title="Propiedad intelectual">
        <p>
          Todos los elementos de este sitio —incluyendo textos, imágenes, logotipo, diseño y código— son propiedad del
          Dr. Iván Conrado Hernández o se utilizan bajo licencia. Queda estrictamente prohibida su reproducción total o
          parcial sin autorización escrita previa.
        </p>
      </Section>

      <Section number="7" title="Urgencias médicas">
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-700 font-semibold flex items-start gap-2">
            <Icon name="emergency" className="text-lg flex-shrink-0 mt-0.5" />
            Este sitio web y el formulario de WhatsApp{' '}
            <strong>no son canales de atención para emergencias médicas.</strong> En caso de urgencia cardíaca —dolor en
            el pecho, dificultad para respirar, pérdida de consciencia— llame inmediatamente al número de emergencias{' '}
            <strong>911</strong> o acuda al servicio de urgencias más cercano.
          </p>
        </div>
      </Section>

      <Section number="8" title="Legislación aplicable">
        <p>
          Los presentes Términos y Condiciones se rigen por las leyes vigentes de los{' '}
          <Strong>Estados Unidos Mexicanos</Strong>, en particular la Ley Federal de Protección al Consumidor, la Ley
          General de Salud y la normativa aplicable al ejercicio profesional médico. Cualquier controversia será
          sometida a la jurisdicción de los tribunales competentes de la ciudad de Torreón, Coahuila.
        </p>
      </Section>

      <Section number="9" title="Modificaciones">
        <p>
          El Dr. Iván Conrado Hernández se reserva el derecho de modificar estos Términos y Condiciones en cualquier
          momento. Los cambios entrarán en vigor desde su publicación en este sitio. Se recomienda revisarlos
          periódicamente. El uso continuado del sitio implica la aceptación de las modificaciones realizadas.
        </p>
      </Section>

      <div className="p-4 bg-gray-50 rounded-xl text-xs text-gray-500">
        <p>
          Para cualquier duda sobre estos términos, puede contactarnos al <strong>+52 870 119 3269</strong> o visitar el
          consultorio en Av. Allende 572, Col. Centro, Torreón, Coahuila.
        </p>
      </div>
    </LegalModal>
  )
}

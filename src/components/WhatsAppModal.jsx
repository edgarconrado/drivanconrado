import { useEffect, useRef, useState } from 'react'
import WhatsAppIcon from './WhatsAppIcon'
import { WHATSAPP_NUMBER } from '../data/constants'
import useDialog from '../hooks/useDialog'
import { trackConversion } from '../lib/analytics'

const INPUT_CLASS =
  'w-full bg-white/70 rounded-lg px-3 py-2 text-[13px] text-gray-800 border border-white/80 focus:outline-none focus:ring-2 focus:ring-[#25D366] placeholder-gray-500'
const LABEL_CLASS = 'block text-[11px] font-semibold text-gray-600 mb-1'

const REASONS = [
  ['Agendar primera cita', '📅 Agendar primera cita'],
  ['Agendar cita de seguimiento', '🔄 Agendar cita de seguimiento'],
  ['Consulta sobre servicios', '❓ Consulta sobre servicios'],
  ['Solicitar información', 'ℹ️ Solicitar información'],
  ['Urgencia médica', '🚨 Urgencia médica'],
  ['Otro', '💬 Otro'],
]

// Modal de WhatsApp – diseño chat. Se monta al abrirse, así el formulario siempre arranca vacío.
export default function WhatsAppModal({ closing, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const chatArea = useRef(null)
  const dialogRef = useRef(null)
  useDialog(dialogRef, onClose, { initialFocus: '#wa-name' })
  const closeTimer = useRef(null)

  const scrollChatToBottom = () => {
    if (chatArea.current) chatArea.current.scrollTop = chatArea.current.scrollHeight
  }

  useEffect(() => {
    const timer = setTimeout(scrollChatToBottom, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const cleanName = name.trim()
    const cleanPhone = phone.trim()
    const cleanMessage = message.trim()
    if (!cleanName || !reason) return

    let waMsg = `Hola, soy *${cleanName}*\n\n`
    waMsg += `📋 *Motivo:* ${reason}\n`
    if (cleanPhone) waMsg += `📞 *Mi teléfono:* ${cleanPhone}\n`
    if (cleanMessage) waMsg += `\n💬 *Mensaje adicional:*\n${cleanMessage}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`

    setSent(true)
    setTimeout(scrollChatToBottom, 0)
    trackConversion('form')
    window.open(url, '_blank')
    closeTimer.current = setTimeout(onClose, 2000)
  }

  return (
    <div
      id="whatsapp-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        id="whatsapp-modal-content"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-title"
        tabIndex={-1}
        className={`w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl flex flex-col outline-none animate__animated ${
          closing ? 'animate__zoomOut' : 'animate__zoomIn'
        }`}
        style={{ maxHeight: '92vh', fontFamily: "'Segoe UI',system-ui,sans-serif" }}
      >
        <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ background: '#075E54' }}>
          <button
            id="close-whatsapp-modal"
            onClick={onClose}
            className="text-white/70 hover:text-white mr-1 flex-shrink-0 transition-colors"
            aria-label="Cerrar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#2c5e6d,#1e4450)' }}
          >
            <img src="./images/logo-transparent.png" alt="Logo" className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <p id="wa-title" className="text-white font-semibold text-sm leading-tight truncate">Dr. Iván Conrado</p>
            <p className="text-xs" style={{ color: '#a7d8cf' }}>
              Cardiología · consultorio
            </p>
          </div>
          <svg className="w-5 h-5 text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
          </svg>
        </div>

        <div
          id="wa-chat-area"
          ref={chatArea}
          className="flex-1 overflow-y-auto px-3 py-4"
          style={{ background: '#ECE5DD', minHeight: '300px', maxHeight: '420px' }}
        >
          <div className="flex items-end gap-1 max-w-[86%] mb-3">
            <div className="rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm" style={{ background: '#fff' }}>
              <p className="text-[13px] text-gray-800 leading-relaxed">
                ¡Hola! 👋 Bienvenido al consultorio del <strong>Dr. Iván Conrado</strong>.
              </p>
              <p className="text-[10px] text-right mt-1" style={{ color: '#aaa' }}>
                ✓✓
              </p>
            </div>
          </div>
          <div className="flex items-end gap-1 max-w-[86%] mb-4">
            <div className="rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm" style={{ background: '#fff' }}>
              <p className="text-[13px] text-gray-800 leading-relaxed">
                Completa el formulario y te contactamos de inmediato 😊
              </p>
              <p className="text-[10px] text-right mt-1" style={{ color: '#aaa' }}>
                ✓✓
              </p>
            </div>
          </div>

          {!sent && (
            <div id="wa-form-wrap" className="flex justify-end mb-3">
              <div
                className="rounded-2xl rounded-br-sm px-4 py-3 shadow-sm w-full max-w-[95%]"
                style={{ background: '#DCF8C6' }}
              >
                <form id="whatsapp-form" className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="wa-name" className={LABEL_CLASS}>Nombre completo *</label>
                    <input
                      type="text"
                      id="wa-name"
                      required
                      autoComplete="name"
                      className={INPUT_CLASS}
                      placeholder="Ej: Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="wa-phone" className={LABEL_CLASS}>Teléfono (opcional)</label>
                    <input
                      type="tel"
                      id="wa-phone"
                      autoComplete="tel"
                      className={INPUT_CLASS}
                      placeholder="Ej: 871 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="wa-reason" className={LABEL_CLASS}>Motivo de consulta *</label>
                    <select
                      id="wa-reason"
                      required
                      className={INPUT_CLASS}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    >
                      <option value="">Selecciona una opción</option>
                      {REASONS.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="wa-message" className={LABEL_CLASS}>Mensaje adicional (opcional)</label>
                    <textarea
                      id="wa-message"
                      rows="2"
                      className={`${INPUT_CLASS} resize-none`}
                      placeholder="Describe brevemente tu consulta..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 text-white font-bold text-[13px] px-4 py-2.5 rounded-xl shadow-md transition-all hover:opacity-90 active:scale-95"
                    style={{ background: '#25D366' }}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Enviar por WhatsApp
                  </button>
                </form>
              </div>
            </div>
          )}

          {sent && (
            <div id="wa-confirm-msg" className="flex items-end gap-1 max-w-[86%]">
              <div className="rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm" style={{ background: '#fff' }}>
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  ¡Gracias! 🎉 Abriendo WhatsApp para completar el envío...
                </p>
                <p className="text-[10px] text-right mt-1" style={{ color: '#aaa' }}>
                  ✓✓
                </p>
              </div>
            </div>
          )}
        </div>

        <div
          className="flex items-center gap-2 px-3 py-2 flex-shrink-0"
          style={{ background: '#F0F0F0', borderTop: '1px solid #ddd' }}
        >
          <div
            aria-hidden="true"
            className="flex-1 rounded-full px-4 py-2 text-[12px] text-gray-400 select-none"
            style={{ background: '#fff' }}
          >
            Escribe un mensaje…
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#25D366' }}
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

import WhatsAppIcon from './WhatsAppIcon'

// Botón flotante de WhatsApp
export default function WhatsAppButton({ onClick }) {
  return (
    <button
      id="open-whatsapp-modal"
      onClick={onClick}
      className="fixed bottom-24 md:bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate__animated animate__fadeInUp animate__delay-3s group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9 text-white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full"></span>
    </button>
  )
}

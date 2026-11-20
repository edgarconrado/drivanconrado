export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Dr.+Iv%C3%A1n+Conrado+Cardiologo/@25.5409274,-103.4451871,17z/data=!3m1!4b1!4m6!3m5!1s0x868fdbdb09d00001:0x51c18b6209a7336b!8m2!3d25.5409226!4d-103.4426122!16s%2Fg%2F11ny1hmqjl?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D'

export const GOOGLE_LOGO_URL =
  'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png'

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.937378678495!2d-103.44516566871712!3d25.54046275818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdb0008861e75%3A0x2afee778867ea660!2sCardi%C3%B3logo%20-%20Doctores%20Especialistas!5e0!3m2!1ses-419!2smx!4v1768528510333!5m2!1ses-419!2smx'

// Teléfono único del consultorio (llamadas y WhatsApp)
export const PHONE_DISPLAY = '+52 870 119 3269'
export const PHONE_TEL = 'tel:+528701193269'
export const WHATSAPP_NUMBER = '528701193269'

// Teléfono de urgencias
export const EMERGENCY_DISPLAY = '+52 353 101 6584'
export const EMERGENCY_TEL = 'tel:+523531016584'

// Enlace de WhatsApp con un mensaje ya escrito
export const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

// Botones "Agendar" y "Contacto": abren WhatsApp con un mensaje para pedir cita
export const WHATSAPP_DIRECT_URL = whatsappUrl('Hola, me gustaría agendar una cita con el Dr. Iván Conrado')

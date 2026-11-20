// Etiqueta de Google Ads (gtag.js). Solo se carga si hay un ID configurado en .env
// (VITE_GOOGLE_ADS_ID); sin él, el sitio no contacta a Google para esto.
const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID

// Etiquetas de conversión (Google Ads > Objetivos > Conversiones). Son opcionales.
const CONVERSION_LABELS = {
  call: import.meta.env.VITE_ADS_LABEL_CALL,
  whatsapp: import.meta.env.VITE_ADS_LABEL_WHATSAPP,
  form: import.meta.env.VITE_ADS_LABEL_FORM,
}

export const adsEnabled = Boolean(ADS_ID)

function gtag() {
  window.dataLayer.push(arguments) // gtag.js exige `arguments`, no un arreglo
}

/** Registra una conversión (call, whatsapp o form) si existe su etiqueta. */
export function trackConversion(kind) {
  const label = CONVERSION_LABELS[kind]
  if (!adsEnabled || !label) return
  gtag('event', 'conversion', { send_to: `${ADS_ID}/${label}` })
}

// Clics en teléfono y WhatsApp, detectados por el destino del enlace
function onDocumentClick(e) {
  const link = e.target.closest && e.target.closest('a[href]')
  if (!link) return
  const href = link.getAttribute('href')
  if (href.startsWith('tel:')) trackConversion('call')
  else if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) trackConversion('whatsapp')
}

export function initAds() {
  if (!adsEnabled || window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ADS_ID)}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', ADS_ID)
  document.addEventListener('click', onDocumentClick)
}

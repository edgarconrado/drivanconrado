import { useState } from 'react'
import EmergencyButton from './components/EmergencyButton'
import WhatsAppButton from './components/WhatsAppButton'
import WhatsAppModal from './components/WhatsAppModal'
import ServiceModal from './components/ServiceModal'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import { PrivacyModal, TermsModal } from './components/LegalModals'
import { SERVICES } from './data/services'
import { trackConversion } from './lib/analytics'
import useAnimatedVisibility from './hooks/useAnimatedVisibility'
import useActiveSection from './hooks/useActiveSection'
import useBodyScrollLock from './hooks/useBodyScrollLock'

export default function App() {
  const whatsapp = useAnimatedVisibility()
  const serviceModal = useAnimatedVisibility()
  const mobileMenu = useAnimatedVisibility()
  const [serviceKey, setServiceKey] = useState(null)
  const [legalModal, setLegalModal] = useState(null) // 'privacy' | 'terms' | null
  const currentSection = useActiveSection()

  useBodyScrollLock(whatsapp.visible || serviceModal.visible || mobileMenu.visible || legalModal !== null)

  const selectedService = SERVICES.find((service) => service.key === serviceKey)

  const openService = (key) => {
    setServiceKey(key)
    serviceModal.open()
  }

  const closeLegal = () => setLegalModal(null)

  return (
    <>
      <EmergencyButton />
      <WhatsAppButton
        onClick={() => {
          trackConversion('whatsapp')
          whatsapp.open()
        }}
      />
      {whatsapp.visible && <WhatsAppModal closing={whatsapp.closing} onClose={whatsapp.close} />}

      {serviceModal.visible && selectedService && (
        <ServiceModal
          service={selectedService.modal}
          closing={serviceModal.closing}
          onClose={serviceModal.close}
        />
      )}

      <Header onOpenMenu={mobileMenu.open} />
      <MobileMenu active={mobileMenu.visible} closing={mobileMenu.closing} onClose={mobileMenu.close} />

      <main>
        <Hero />
        <Services onOpenService={openService} />
        <About />
        <Reviews />
        <MapSection />
      </main>

      <Footer onOpenLegal={setLegalModal} />
      <BottomNav currentSection={currentSection} />

      {legalModal === 'privacy' && <PrivacyModal onClose={closeLegal} />}
      {legalModal === 'terms' && <TermsModal onClose={closeLegal} />}
    </>
  )
}

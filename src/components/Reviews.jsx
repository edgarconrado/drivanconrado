import { Fragment, useState } from 'react'
import Reveal from './Reveal'
import { GOOGLE_LOGO_URL, GOOGLE_MAPS_URL } from '../data/constants'
import { REVIEWS } from '../data/reviews'

function ReviewCard({ review, expanded }) {
  const content = (
    <>
      <div className="review-header">
        <div className="reviewer-info">
          <div className="reviewer-avatar">{review.initial}</div>
          <div>
            <h4>{review.name}</h4>
            <div className="review-stars">★★★★★</div>
          </div>
        </div>
        <div className="review-date">{review.date}</div>
      </div>
      <p className="review-text">{review.text}</p>
    </>
  )

  // Las reseñas ocultas se muestran con la clase `show` al expandir
  if (review.hidden) {
    return <div className={`review-card hidden-review${expanded ? ' show' : ''}`}>{content}</div>
  }

  return (
    <Reveal animation="fadeInUp" delay={review.delay} className="review-card">
      {content}
    </Reveal>
  )
}

// Sección de testimonios y reseñas de Google
export default function Reviews() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="reviews" id="testimonios">
      <Reveal animation="fadeIn" className="text-center mb-16">
        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Testimonios</h2>
        <h3 className="text-[#111618] text-4xl font-bold">Lo que dicen nuestros pacientes</h3>
      </Reveal>

      {/* Banner de Rating de Google */}
      <Reveal animation="fadeInUp" className="google-rating-banner">
        <div className="rating-summary">
          <div className="rating-score">5.0</div>
          <div className="rating-details">
            <div className="stars">
              {/* Los espacios entre estrellas son parte del layout original (inline) */}
              {[0, 1, 2, 3, 4].map((i) => (
                <Fragment key={i}>
                  {i > 0 && ' '}
                  <span className="star filled">★</span>
                </Fragment>
              ))}
            </div>
            <p className="rating-text">Basado en 15 reseñas de Google</p>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-link">
              <img src={GOOGLE_LOGO_URL} alt="Google" className="google-logo" />
              Ver todas las reseñas
            </a>
          </div>
        </div>
      </Reveal>

      {/* Grid de Reseñas */}
      <div className="reviews-container">
        <div className="reviews-grid" id="reviewsGrid">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} expanded={expanded} />
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="show-more-container">
          <button className="show-more-btn" onClick={() => setExpanded((value) => !value)}>
            <span id="btnText">{expanded ? 'Ver menos reseñas' : 'Ver más reseñas'}</span>
            <span id="btnIcon">{expanded ? '▲' : '▼'}</span>
          </button>
        </div>
      </div>

      {/* CTA para dejar reseña */}
      <Reveal animation="fadeInUp" className="cta-review">
        <p>¿Ya nos visitaste?</p>
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Déjanos tu Reseña
        </a>
      </Reveal>
    </section>
  )
}

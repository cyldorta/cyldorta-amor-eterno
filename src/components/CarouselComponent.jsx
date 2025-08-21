import React from 'react';
// Corrigido para .jpeg e removida a foto3
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';

export default function CarouselComponent() {
  return (
    <div
      id="carouselLove"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
      data-bs-interval="2500" // Altera a foto a cada 2.5 segundos
      style={{ maxWidth: '100%' }}
    >
      <div className="carousel-inner love-carousel">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={foto1} className="d-block w-100" alt="Foto 1" />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={foto2} className="d-block w-100" alt="Foto 2" />
        </div>

        {/* Slide 3 removido */}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselLove" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselLove" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próxima</span>
      </button>
    </div>
  );
}
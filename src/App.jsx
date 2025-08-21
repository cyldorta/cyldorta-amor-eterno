import React, { useEffect, useRef } from 'react'
import CarouselComponent from './components/CarouselComponent'
import Timer from './components/Timer'
import './App.css'

export default function App() {
  const heartsRef = useRef(null)

  // Gera corações flutuantes por toda a tela
  useEffect(() => {
    const container = heartsRef.current
    if (!container) return

    const total = 50 // Mais corações para cobertura total
    const directions = ['floatUp', 'floatDiagLeft', 'floatDiagRight']

    const createHeart = () => {
      const el = document.createElement('span')
      el.className = 'heart'

      // Posição inicial aleatória em TODA a altura da tela
      el.style.left = Math.random() * 100 + 'vw'
      el.style.top = Math.random() * 100 + 'vh'

      // Variações de tamanho/blur/opacidade
      const scale = 0.5 + Math.random() * 1.6
      el.style.transform = `rotate(45deg) scale(${scale.toFixed(2)})`
      el.style.filter = `blur(${(Math.random() * 1.4).toFixed(2)}px)`
      el.style.opacity = String(0.45 + Math.random() * 0.55)

      // Velocidade e atraso
      const dur = 10 + Math.random() * 18
      el.style.setProperty('--dur', `${dur.toFixed(2)}s`)
      el.style.animationDelay = `${(Math.random() * 8).toFixed(2)}s`

      // Direção aleatória
      const dir = directions[Math.floor(Math.random() * directions.length)]
      el.classList.add(dir)

      container.appendChild(el)

      // Reposiciona ao fim da animação para loop infinito
      el.addEventListener('animationend', () => {
        el.style.top = '100vh'
        el.style.left = Math.random() * 100 + 'vw'
      })

      return el
    }

    const hearts = Array.from({ length: total }).map(createHeart)

    return () => hearts.forEach(h => h.remove())
  }, [])

  return (
    <>
      {/* Fundo e camada de corações cobrindo a tela toda */}
      <div className="love-bg" aria-hidden="true" />
      <div className="hearts" ref={heartsRef} aria-hidden="true" />

      {/* Conteúdo do site */}
      <div className="app-container text-white text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="mb-4 love-title">Nosso Amor Infinito 💖</h1>
        <CarouselComponent />
        <Timer />
        <p className="final-phrase">
          Que nosso amor seja eterno. Simples assim. Te amo, minha princesa.
        </p>
      </div>
    </>
  )
}

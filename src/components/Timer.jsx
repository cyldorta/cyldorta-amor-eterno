import { useEffect, useState } from "react"

export default function Timer() {
  const [tempo, setTempo] = useState("")

  useEffect(() => {
    const inicio = new Date("2021-08-22T00:00:00")

    const atualizar = () => {
      const agora = new Date()
      let diff = Math.floor((agora - inicio) / 1000)

      const anos = Math.floor(diff / (365 * 24 * 3600)); diff -= anos * 365 * 24 * 3600
      const meses = Math.floor(diff / (30 * 24 * 3600));  diff -= meses * 30 * 24 * 3600
      const dias = Math.floor(diff / (24 * 3600));        diff -= dias * 24 * 3600
      const horas = Math.floor(diff / 3600);              diff -= horas * 3600
      const minutos = Math.floor(diff / 60)
      const segundos = diff % 60

      setTempo(`${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`)
    }

    atualizar()
    const t = setInterval(atualizar, 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="timer-box p-3 mt-3 text-start text-light">
      <h5 className="mb-2">Estamos juntos há:</h5>
      <p className="fs-5 mb-0" style={{ color: '#ffb3c1' }}>{tempo}</p>
    </div>
  )
}

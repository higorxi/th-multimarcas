import { Clock } from 'lucide-react'

const OpeningHours = () => {
  return (
    <section id="hours" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Horário de Funcionamento</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-xl font-semibold">Estamos Abertos</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpeningHours


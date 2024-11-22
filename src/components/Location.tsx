import { MapPin } from 'lucide-react'

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossa Localização</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="/placeholder.svg" alt="Mapa da loja" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Venha nos visitar!</h3>
            <p className="text-gray-600 mb-4">
              Estamos localizados no coração da cidade, prontos para atendê-lo com as melhores opções de moda.
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2" />
              Rua da Moda, 123 - Centro, Sua Cidade - Estado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location


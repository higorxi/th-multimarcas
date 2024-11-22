import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Minha Loja de Roupas</h3>
            <p className="text-sm">© 2023 Todos os direitos reservados</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook /></a>
            <a href="#" className="hover:text-gray-300"><Instagram /></a>
            <a href="#" className="hover:text-gray-300"><Twitter /></a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Este site foi desenvolvido por{' '}
            <a href="https://www.encontreja.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              EncontreJá
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


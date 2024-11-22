import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Minha Loja de Roupas</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>Início</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('products')}>Produtos</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('history')}>Nossa História</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('location')}>Localização</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('hours')}>Horários</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('payment')}>Pagamento</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('promotions')}>Promoções</Button></li>
          </ul>
        </nav>
        <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>Início</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('products')}>Produtos</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('history')}>Nossa História</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('location')}>Localização</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('hours')}>Horários</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('payment')}>Pagamento</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('promotions')}>Promoções</Button></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header


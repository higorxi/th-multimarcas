import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo à Nossa Loja de Roupas</h2>
        <p className="text-xl mb-8">Descubra as últimas tendências em moda com qualidade e estilo.</p>
        <Button size="lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
          Ver Produtos
        </Button>
      </div>
    </section>
  )
}

export default Hero


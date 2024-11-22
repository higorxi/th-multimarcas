import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { wrap } from "popmotion"
import useEmblaCarousel from 'embla-carousel-react'

// Define the type for a product
interface Product {
  id: number
  name: string
  price: number
  category: string
  images: string[]
  sizes: string[]
  colors: string[]
  description: string
}

// Define the props for the ProductSection component
interface ProductSectionProps {
  setSelectedProduct: (product: Product) => void
}

const products: Product[] = [
  { 
    id: 1, 
    name: 'Camiseta Básica', 
    price: 49.99, 
    category: 'camisetas', 
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'], 
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: ['Branco', 'Preto', 'Cinza', 'Azul'],
    description: 'Camiseta básica de alta qualidade, perfeita para o dia a dia.'
  },
  { 
    id: 2, 
    name: 'Calça Jeans', 
    price: 129.99, 
    category: 'calcas', 
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'], 
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: ['Azul Claro', 'Azul Escuro', 'Preto', 'Cinza'],
    description: 'Calça jeans confortável e durável, ideal para diversas ocasiões.'
  },
  { 
    id: 3, 
    name: 'Vestido Floral', 
    price: 89.99, 
    category: 'vestidos', 
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'], 
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: ['Vermelho', 'Azul', 'Verde', 'Amarelo'],
    description: 'Vestido floral leve e elegante, perfeito para a primavera e o verão.'
  },
  { 
    id: 4, 
    name: 'Jaqueta de Couro', 
    price: 199.99, 
    category: 'casacos', 
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'], 
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Marrom', 'Bege'],
    description: 'Jaqueta de couro sintético de alta qualidade, estilosa e durável.'
  },
  { 
    id: 5, 
    name: 'Saia Midi', 
    price: 79.99, 
    category: 'saias', 
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'], 
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Bege', 'Verde', 'Azul Marinho'],
    description: 'Saia midi versátil, ideal para looks casuais ou mais formais.'
  },
  // Adicione mais produtos conforme necessário
]

const ProductSection = ({ setSelectedProduct }: ProductSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos')
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter(product => product.category === activeCategory)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Produtos</h2>
        <Tabs defaultValue="todos" className="mb-8">
          <TabsList className="justify-center">
            <TabsTrigger value="todos" onClick={() => setActiveCategory('todos')}>Todos</TabsTrigger>
            <TabsTrigger value="camisetas" onClick={() => setActiveCategory('camisetas')}>Camisetas</TabsTrigger>
            <TabsTrigger value="calcas" onClick={() => setActiveCategory('calcas')}>Calças</TabsTrigger>
            <TabsTrigger value="vestidos" onClick={() => setActiveCategory('vestidos')}>Vestidos</TabsTrigger>
            <TabsTrigger value="casacos" onClick={() => setActiveCategory('casacos')}>Casacos</TabsTrigger>
            <TabsTrigger value="saias" onClick={() => setActiveCategory('saias')}>Saias</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {filteredProducts.map((product, index) => {
              const position = wrap(0, filteredProducts.length, index - selectedIndex)
              const isCenter = position === 0
              const isSide = Math.abs(position) === 1
              return (
                <div
                  key={product.id}
                  className={`flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] transition-opacity duration-300 ${
                    isCenter ? 'opacity-100' : isSide ? 'opacity-50' : 'opacity-0'
                  }`}
                >
                  <div className="mx-4">
                    <Card>
                      <CardContent className="p-4">
                        <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover mb-4" />
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => setSelectedProduct(product)} className="w-full">
                          Ver Detalhes
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <Button onClick={() => emblaApi?.scrollPrev()}>Anterior</Button>
          <Button onClick={() => emblaApi?.scrollNext()}>Próximo</Button>
        </div>
      </div>
    </section>
  )
}

export default ProductSection

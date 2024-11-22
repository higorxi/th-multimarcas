import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

const ProductModal = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const handleWhatsAppContact = () => {
    const message = `Olá! Estou interessado no produto: ${product.name} - Tamanho: ${selectedSize}, Cor: ${selectedColor}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank')
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/2 pr-4 overflow-y-auto">
            <div className="aspect-square mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer ${selectedImage === index ? 'border-2 border-primary' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">{product.description}</p>
          </div>
          <Separator orientation="vertical" className="mx-4" />
          <div className="w-1/2 pl-4 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Preço</h3>
              <p className="text-2xl font-bold">R$ {product.price.toFixed(2)}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tamanho</h4>
              <Select onValueChange={setSelectedSize} defaultValue={selectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tamanho" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Cor</h4>
              <Select onValueChange={setSelectedColor} defaultValue={selectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a cor" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>{color}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Preços por meio de pagamento:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>À vista: R$ {(product.price * 0.9).toFixed(2)} (10% de desconto)</li>
                <li>Cartão de crédito: R$ {product.price.toFixed(2)} em até 3x sem juros</li>
                <li>PIX: R$ {(product.price * 0.95).toFixed(2)} (5% de desconto)</li>
              </ul>
            </div>
            <div className="mt-auto">
              <Button onClick={handleWhatsAppContact} className="w-full">Entrar em Contato</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductModal


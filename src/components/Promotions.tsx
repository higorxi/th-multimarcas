import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Promotions = () => {
  return (
    <section id="promotions" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Promoções</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Liquidação de Verão</AlertTitle>
            <AlertDescription>
              Até 50% de desconto em peças selecionadas. Aproveite!
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Compre 2, Leve 3</AlertTitle>
            <AlertDescription>
              Na compra de 2 camisetas básicas, leve a terceira grátis!
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Frete Grátis</AlertTitle>
            <AlertDescription>
              Frete grátis para compras acima de R$ 200,00.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}

export default Promotions


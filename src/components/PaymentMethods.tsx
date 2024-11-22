import { CreditCard, Banknote, Smartphone } from 'lucide-react'

const PaymentMethods = () => {
  return (
    <section id="payment" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Métodos de Pagamento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <CreditCard className="mx-auto mb-4 h-12 w-12" />
            <h3 className="text-xl font-semibold mb-2">Cartão de Crédito</h3>
            <p className="text-gray-600">Aceitamos todas as principais bandeiras de cartões de crédito.</p>
          </div>
          <div className="text-center">
            <Banknote className="mx-auto mb-4 h-12 w-12" />
            <h3 className="text-xl font-semibold mb-2">Dinheiro</h3>
            <p className="text-gray-600">Pagamento em dinheiro disponível para compras na loja física.</p>
          </div>
          <div className="text-center">
            <Smartphone className="mx-auto mb-4 h-12 w-12" />
            <h3 className="text-xl font-semibold mb-2">Pagamento Digital</h3>
            <p className="text-gray-600">Aceitamos PIX e outras formas de pagamento digital.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods


const StoreHistory = () => {
  return (
    <section id="history" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossa História</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="/placeholder.svg" alt="Fundadores da loja" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-4">
              Fundada em 2010, nossa loja nasceu da paixão por moda e qualidade. Começamos como uma pequena boutique e, ao longo dos anos, crescemos para nos tornar uma referência em estilo na cidade.
            </p>
            <p className="text-gray-600">
              Nosso compromisso com a excelência e atendimento personalizado nos permitiu construir uma base fiel de clientes que valorizam não apenas as roupas que vendemos, mas também a experiência de compra que proporcionamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreHistory


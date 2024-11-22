'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductSection, { Product } from '@/components/ProductSection'
import Location from '@/components/Location'
import PaymentMethods from '@/components/PaymentMethods'
import Footer from '@/components/Footer'
import ProductModal from '@/components/ProductModal'
import StoreHistory from '@/components/StoreHistory'
import OpeningHours from '@/components/OpeningHours'
import Promotions from '@/components/Promotions'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductSection setSelectedProduct={(product) => setSelectedProduct(product)} />
        <StoreHistory />
        <Location />
        <OpeningHours />
        <PaymentMethods />
        <Promotions />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}


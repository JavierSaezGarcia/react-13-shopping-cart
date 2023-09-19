
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ShoppingPage } from './pages/ShoppingPage'
import { CartPage } from './pages/CartPage'
import { ProductsProvider } from './context/ProductsProvider'
import { CartProvider } from './context/CartProvider'

export const ShoppingCart = () => {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ShoppingPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

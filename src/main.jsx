import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShoppingCart } from './ShoppingCart'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShoppingCart />
  </BrowserRouter>,
)

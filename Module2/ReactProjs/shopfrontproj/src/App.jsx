import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CheckoutPage from './pages/CheckoutPage'
import './style.css'
import productData from './productData.json'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage productData ={productData}/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
      
  )
}

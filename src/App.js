import React from 'react'
import { Footer } from './component/footer/Footer'
import { Navbar } from './component/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from 'pages/homepage/Homepage'

export const App = () => {
  return (
    
  
   
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </>
  )
}

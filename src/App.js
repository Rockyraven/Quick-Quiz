import { Footer, Navbar } from 'component'
import { Homepage } from 'pages'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Home, About, Contact, Pricing, NotFound } from './pages'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={Home}></Route>
        <Route path='about' element={About}></Route>
        <Route path='contact' element={Contact}></Route>
        <Route path='pricing' element={Pricing}></Route>
        <Route path='*' element={NotFound}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
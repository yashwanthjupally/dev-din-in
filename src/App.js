import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

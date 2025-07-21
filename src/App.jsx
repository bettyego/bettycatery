import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import MenuPage from './components/pages/MenuPage'
import ServicesPage from './components/pages/ServicesPage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Sub from './component/Sub'
import Error from './component/Error'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sub' element={<Sub />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
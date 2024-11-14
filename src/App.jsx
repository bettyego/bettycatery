import React from 'react'
import Menu from './component/Menu'
import Login from './component/Login'
import Swal from 'sweetalert2'
import {Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Sub from './component/Sub'
import Error from './component/Error'


const App = () => {
  const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Menu />} />
        <Route path='/sub' element={<Sub />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
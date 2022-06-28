import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AuthRouter

import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import UserRouter from './UserRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/*" element={<Navigate to={'auth/login'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

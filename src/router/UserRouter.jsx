import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Calendar from '../pages/Calendar/Calendar'
import Navbar from '../components/Navbar/Navbar'
import UserContext from '../context/UserContext'

const UserRouter = () => {
  const { currentUser, userTasks } = JSON.parse(
    localStorage.getItem('userData')
  )

  const values = {
    currentUser,
    userTasks
  }

  return (
    <UserContext.Provider value={values}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default UserRouter

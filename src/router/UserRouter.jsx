import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Calendar from '../pages/Calendar/Calendar'
import Navbar from '../components/Navbar/Navbar'
import UserContext from '../context/UserContext'

const UserRouter = () => {
  //TODO: add service that return user data
  const { usuario, tareas } = JSON.parse(localStorage.getItem('user'))

  const data = {
    currentUser: usuario,
    userTasks: tareas
  }

  return (
    <UserContext.Provider value={data}>
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

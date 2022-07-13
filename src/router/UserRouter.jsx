import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Calendar from '../pages/Calendar/Calendar'
import Navbar from '../components/Navbar/Navbar'
import UserContext from '../context/UserContext'
import useFetch from '../hooks/useFetch'

const UserRouter = () => {
  const { user, email, _id, token } = JSON.parse(localStorage.getItem('user'))
  const { data } = useFetch(`http://localhost:8080/api/user/getUser?id=${_id}`)

  const values = {
    user,
    email,
    _id,
    token,
    tasks: data.tasks
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

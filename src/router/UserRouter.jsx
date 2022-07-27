import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Calendar from '../pages/Calendar/Calendar'
import Navbar from '../components/Navbar/Navbar'
import UserContext from '../context/UserContext'
import useFetch from '../hooks/useFetch'

const UserRouter = () => {
  const [tasksDisabled, setTasksDisabled] = useState([])

  const { user, email, _id, token } = JSON.parse(localStorage.getItem('user'))
  const { data, loading, refetch } = useFetch(
    `http://localhost:8080/api/user/getUser?id=${_id}`
  )

  useEffect(() => {
    const { tasks } = data
    const filterCompleteTasks = tasks
      ?.map(task => task)
      .filter(task => task.complete === true)

    setTasksDisabled(filterCompleteTasks)
  }, [data])

  const values = {
    user,
    email,
    _id,
    token,
    loading,
    refetch,
    tasks: data.tasks,
    tasksDisabled
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

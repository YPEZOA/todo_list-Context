import React from 'react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MotionArticle from '../../components/MotionArticle/MotionArticle'
import Icon from '../../components/Icon/Icon'
import UserContext from '../../context/UserContext'
import CalendarModal from '../Calendar/components/CalendarModal/CalendarModal'
import * as St from './Main.styled'
import Task from '../../components/Task/Task'
import Spin from '../../components/Spin/Spin'

const Main = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [userTasks, setUserTasks] = useState([])

  const { user, loading, tasks } = useContext(UserContext)

  useEffect(() => {
    setUserTasks(tasks)
  }, [tasks])

  const handleCloseModal = () => {
    setOpenCalendar(false)
  }

  const handleOpenCalendar = () => {
    setOpenCalendar(true)
  }

  if (loading) return <Spin />

  if (!userTasks?.length) {
    return (
      <MotionArticle>
        <St.Container>
          <CalendarModal
            isDateModalOpen={openCalendar}
            onCloseModal={handleCloseModal}
          />
          <h1 style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 25,
                color: 'lightblue',
                display: 'inline'
              }}
            >
              {`{ ${user} }`}
            </div>
            , Sin eventos que realizar.
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Link
              to={'/user/calendar'}
              style={{
                backgroundColor: '#81aec1',
                textDecoration: 'none',
                borderRadius: 3,
                padding: 10,
                color: '#000'
              }}
            >
              Revisar Calendario
            </Link>
            <Icon
              onClick={handleOpenCalendar}
              iconType={faAdd}
              style={{
                cursor: 'pointer',
                padding: 13,
                borderRadius: 3,
                backgroundColor: '#81aec1',
                color: '#000',
                marginLeft: 20
              }}
            />
          </div>
        </St.Container>
      </MotionArticle>
    )
  }
  return (
    <MotionArticle>
      <St.Container>
        <CalendarModal
          isDateModalOpen={openCalendar}
          onCloseModal={handleCloseModal}
        />
        <h1>
          <div
            style={{
              fontSize: 25,
              color: 'lightblue',
              display: 'inline-block'
            }}
          >
            {`{ ${user} }`}
          </div>{' '}
          aquí está el resumen de tus tareas.
        </h1>
        {userTasks.map(task => (
          <Task key={task._id} {...task} />
        ))}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10
          }}
        >
          <a
            href="calendar"
            style={{
              backgroundColor: '#69badd',
              textDecoration: 'none',
              borderRadius: 3,
              padding: 10,
              color: '#000'
            }}
          >
            Revisar Calendario
          </a>
          <span onClick={handleOpenCalendar}>
            <Icon
              iconType={faAdd}
              style={{
                cursor: 'pointer',
                padding: 13,
                borderRadius: 3,
                backgroundColor: '#69badd',
                color: '#000'
              }}
            />
          </span>
        </div>
      </St.Container>
    </MotionArticle>
  )
}

export default Main

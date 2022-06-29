import * as St from './Main.styled'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Icon from '../../components/Icon/Icon'
import { faAdd, faBan, faTrash } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'
import CalendarModal from '../Calendar/components/CalendarModal/CalendarModal'

const Main = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [tasks, setTasks] = useState([])
  const { currentUser, userTasks } = useContext(UserContext)

  const getTasks = useCallback(() => {
    setTasks(userTasks)
  }, [tasks])

  useEffect(() => {
    getTasks()
  }, [tasks])

  const handleCloseModal = () => {
    setOpenCalendar(false)
  }

  const handleOpenCalendar = () => {
    setOpenCalendar(true)
  }

  if (!tasks.length) {
    return (
      <St.Container>
        <CalendarModal
          isDateModalOpen={openCalendar}
          onCloseModal={handleCloseModal}
        />
        <h1 style={{ textAlign: 'center' }}>Aún no tienes tareas asignadas.</h1>
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
    )
  }
  return (
    <St.Container>
      <CalendarModal
        isDateModalOpen={openCalendar}
        onCloseModal={handleCloseModal}
        setTasks={setTasks}
      />
      <h1>Resumen tareas de para {currentUser}.</h1>
      <St.Table>
        <tbody>
          {tasks.map(task => (
            <tr key={task.title}>
              <St.Item>{task.title ? task.title : '-'}</St.Item>
              <St.Item>{task.notes ? task.notes : '-'}</St.Item>
              <St.Item style={{ color: '#cccccc' }}>
                {task.start} - {task.end}
              </St.Item>
              <St.Item style={{ textAlign: 'center' }}>
                <Icon iconType={faBan} style={{ cursor: 'pointer' }} />
                <Icon
                  iconType={faTrash}
                  style={{
                    cursor: 'pointer',
                    paddingLeft: 10,
                    color: 'darkred'
                  }}
                />
              </St.Item>
            </tr>
          ))}
        </tbody>
      </St.Table>

      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <a
          href="calendar"
          style={{
            backgroundColor: '#81aec1',
            textDecoration: 'none',
            borderRadius: 3,
            padding: 10,
            color: '#000'
          }}
        >
          Revisar Calendario
        </a>
        <Icon
          onClick={handleOpenCalendar}
          iconType={faAdd}
          style={{
            cursor: 'pointer',
            padding: 13,
            borderRadius: 3,
            backgroundColor: '#81aec1',
            color: '#000'
          }}
        />
      </div>
    </St.Container>
  )
}

export default Main

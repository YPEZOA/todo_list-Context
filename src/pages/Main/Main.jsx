import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MotionArticle from '../../components/MotionArticle/MotionArticle'
import Icon from '../../components/Icon/Icon'
import UserContext from '../../context/UserContext'
import CalendarModal from '../Calendar/components/CalendarModal/CalendarModal'
import * as St from './Main.styled'
import Task from '../../components/Task/Task'

const Main = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [tasks, setTasks] = useState([])
  const { currentUser, userTasks } = useContext(UserContext)

  useEffect(() => {
    setTasks(userTasks)
  }, [tasks])

  const handleCloseModal = () => {
    setOpenCalendar(false)
  }

  const handleOpenCalendar = () => {
    setOpenCalendar(true)
  }

  if (!tasks.length) {
    return (
      <MotionArticle>
        <St.Container>
          <CalendarModal
            isDateModalOpen={openCalendar}
            onCloseModal={handleCloseModal}
          />
          <h1 style={{ textAlign: 'center' }}>
            Aún no tienes tareas asignadas.
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
          setTasks={setTasks}
        />
        <h1>Resumen tareas de para {currentUser}.</h1>
        {tasks.map(task => (
          <Task key={task._id} {...task} />
        ))}
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
              backgroundColor: 'rgb(129 174 193)',
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
              backgroundColor: 'rgb(129 174 193)',
              color: '#000'
            }}
          />
        </div>
      </St.Container>
    </MotionArticle>
  )
}

export default Main

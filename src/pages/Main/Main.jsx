import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MotionArticle from '../../components/MotionArticle/MotionArticle'
import Icon from '../../components/Icon/Icon'
import UserContext from '../../context/UserContext'
import CalendarModal from '../Calendar/components/CalendarModal/CalendarModal'
import * as St from './Main.styled'
import Task from '../../components/Task/Task'
import useFetch from '../../hooks/useFetch'
import Spin from '../../components/Spin/Spin'

const Main = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [tasks, setTasks] = useState([])

  const { user, _id } = useContext(UserContext)
  const URL = `http://localhost:8080/api/user/getUser?id=${_id}`
  const { data, loading } = useFetch(URL)

  useEffect(() => {
    setTasks(data.tasks)
  }, [data])

  const handleCloseModal = () => {
    setOpenCalendar(false)
  }

  const handleOpenCalendar = () => {
    setOpenCalendar(true)
  }

  if (loading) return <Spin />

  if (!tasks?.length) {
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
          setTasks={setTasks}
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

import * as St from './Calendar.styled'
import React, { useContext, useEffect, useState } from 'react'
import { CalendarEvent } from './components/CalendarEvent'

import { Calendar } from 'react-big-calendar'
import { localizer } from './calendarLocalizer'
import { getMessagesES } from './getMessages'
import CalendarModal from './components/CalendarModal/CalendarModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import UserContext from '../../context/UserContext'
import { addHours } from 'date-fns'
import MotionArticle from '../../components/MotionArticle/MotionArticle'

const CalendarPage = () => {
  const [incompletedTasks, setIncompletesTasks] = useState([])
  const [openCalendar, setOpenCalendar] = useState(false)
  const [eventSelected, setEventSelected] = useState({
    title: '',
    notes: '',
    start: new Date().toDateString(),
    end: addHours(new Date(), 2).toDateString()
  })
  const { tasks } = useContext(UserContext)

  useEffect(() => {
    const filterCompletedTasks = tasks
      ?.map(task => task)
      .filter(task => task.complete === false)
    setIncompletesTasks(filterCompletedTasks)
  }, [tasks])

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#f2f2f2'
    }
    return {
      style
    }
  }

  const onDoubleClick = taskSelected => {
    taskSelected && setEventSelected(taskSelected)
    setOpenCalendar(true)
  }

  const onCloseCalendar = () => {
    setOpenCalendar(false)
  }

  return (
    <MotionArticle>
      <St.Container>
        <CalendarModal
          isDateModalOpen={openCalendar}
          onCloseModal={onCloseCalendar}
          eventSelected={eventSelected}
        />
        <Calendar
          culture="es"
          localizer={localizer}
          events={incompletedTasks}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          components={{ event: CalendarEvent }}
          messages={getMessagesES()}
          style={{ height: 'calc(100vh - 70px)' }}
        />
      </St.Container>
    </MotionArticle>
  )
}

export default CalendarPage

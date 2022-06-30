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

const CalendarPage = () => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [eventSelected, setEventSelected] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const { userTasks } = useContext(UserContext)

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
    <St.Container>
      <CalendarModal
        isDateModalOpen={openCalendar}
        onCloseModal={onCloseCalendar}
        eventSelected={eventSelected}
      />
      <Calendar
        culture="es"
        localizer={localizer}
        events={userTasks}
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
  )
}

export default CalendarPage

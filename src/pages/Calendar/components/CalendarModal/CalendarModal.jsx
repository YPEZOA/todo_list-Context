import * as St from './CalendarModal.styled'
import Modal from 'react-modal/lib/components/Modal'
import DatePicker from 'react-datepicker'
import { addHours, differenceInSeconds, parseISO, format } from 'date-fns'
import { useFormik } from 'formik'
import { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import Icona from '../../../../components/Icon/Icon'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../../../context/UserContext'

Modal.setAppElement('#root')
registerLocale('es', es)

const customStyles = {
  content: {
    width: '90%'
  }
}

const CalendarModal = ({ isDateModalOpen, onCloseModal, eventSelected }) => {
  const { currentUser, userTasks } = useContext(UserContext)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if (eventSelected) {
      const { title, notes, start, end } = eventSelected
      formik.setValues({
        title,
        notes,
        start: parseISO(start).valueOf() || new Date(),
        end: parseISO(end).valueOf() || addHours(new Date(), 2)
      })
    }
  }, [eventSelected])

  const formik = useFormik({
    initialValues: {
      _id: Math.random().toString(12),
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2)
    },
    onSubmit: (values, { resetForm }) => {
      //TODO: service consume here
      const difference = differenceInSeconds(values.end, values.start)
      if (isNaN(difference) || difference <= 0) alert('Fechas incorrectas')

      const newTask = {
        currentUser,
        userTasks: [...userTasks, values]
      }

      localStorage.setItem('userData', JSON.stringify(newTask))
      setFormSubmitted(true)
      resetForm(true)
      handleOnCloseModal()
    }
  })

  const handleOnCloseModal = () => {
    onCloseModal(true)
  }

  const onDateChange = (event, changing = 'start') => {
    formik.setValues({
      ...formik.values,
      [changing]: event
    })
  }

  const handleChangeValuesTask = () => {
    const { _id } = eventSelected
    const saveEventChanges = {
      _id,
      ...formik.values
    }
    const filterTask = userTasks.filter(task => task._id !== _id)
    const saveTask = {
      currentUser,
      userTasks: [...filterTask, saveEventChanges]
    }
    localStorage.setItem('userData', JSON.stringify(saveTask))
    handleOnCloseModal()
  }

  return (
    <Modal
      className={'modal'}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <St.Header>
        <h1>Estima el tiempo a tu tarea.</h1>
        <Icona
          iconType={faClose}
          style={{ cursor: 'pointer' }}
          onClick={onCloseModal}
        />
      </St.Header>
      <form onSubmit={formik.handleSubmit}>
        <St.DatePickerContainer>
          <label>Inicio</label>
          <DatePicker
            selected={formik.values.start}
            className="form-control"
            onChange={event => onDateChange(event, 'start')}
            dateFormat="Pp"
            showTimeSelect
            locale={'es'}
            timeCaption="Hora"
          />
        </St.DatePickerContainer>
        <St.DatePickerContainer>
          <label>Término</label>
          <DatePicker
            minDate={formik.values.start}
            selected={formik.values.end}
            className="form-control"
            onChange={event => onDateChange(event, 'end')}
            dateFormat="Pp"
            showTimeSelect
            locale={'es'}
            timeCaption="Hora"
          />
        </St.DatePickerContainer>
        <St.FormGroup>
          <label>Título:</label>
          <St.Input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </St.FormGroup>
        <St.FormGroup>
          <label>Nota:</label>
          <St.TextNotes
            rows={6}
            value={formik.values.notes}
            id="notes"
            name="notes"
            onChange={formik.handleChange}
          ></St.TextNotes>
        </St.FormGroup>
        {eventSelected ? (
          <St.Button type="button" onClick={handleChangeValuesTask}>
            Guardar
          </St.Button>
        ) : (
          <St.Button type="submit">Submit</St.Button>
        )}
      </form>
    </Modal>
  )
}

export default CalendarModal

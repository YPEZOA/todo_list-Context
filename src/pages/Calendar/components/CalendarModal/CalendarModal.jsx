import * as St from './CalendarModal.styled'
import Modal from 'react-modal/lib/components/Modal'
import DatePicker from 'react-datepicker'
import { addHours, differenceInSeconds, parseISO } from 'date-fns'
import { useFormik } from 'formik'
import { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import Icona from '../../../../components/Icon/Icon'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../../../context/UserContext'
import es from 'date-fns/locale/es'

Modal.setAppElement('#root')
registerLocale('es', es)

const customStyles = {
  content: {
    width: '90%'
  }
}

const CalendarModal = ({ isDateModalOpen, onCloseModal, eventSelected }) => {
  const { refetch, token, _id } = useContext(UserContext)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const BASE_URL = 'http://localhost:8080/api/tasks'

  const addTask = (userId, title, notes, start, end) => {
    fetch(`${BASE_URL}/add-task`, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        title,
        notes,
        start,
        end
      }),
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    }).then(response => refetch())
  }

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
      const { title, notes, start, end } = values
      const difference = differenceInSeconds(values.end, values.start)
      if (isNaN(difference) || difference <= 0) alert('Fechas incorrectas')

      addTask(_id, title, notes, start, end)
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

  const updateTask = (id, formValues) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    fetch(`${BASE_URL}/updateTask/${id}`, options)
      .then(response => response.json())
      .then(resp => {
        if (resp.status == 200) {
          alert(resp.message)
          refetch()
        }
      })
  }

  const handleChangeValuesTask = () => {
    const { _id } = eventSelected
    updateTask(_id, { ...formik.values })
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
        <h1>Estimación</h1>
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
            dateFormat="P"
            locale={'es'}
          />
        </St.DatePickerContainer>
        <St.DatePickerContainer>
          <label>Término</label>
          <DatePicker
            minDate={formik.values.start}
            selected={formik.values.end}
            className="form-control"
            onChange={event => onDateChange(event, 'end')}
            dateFormat="P"
            locale={'es'}
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

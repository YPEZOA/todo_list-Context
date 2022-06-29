import * as St from './CalendarModal.styled'
import Modal from 'react-modal/lib/components/Modal'
import DatePicker from 'react-datepicker'
import { addHours, differenceInSeconds, format, parseISO } from 'date-fns'
import { useFormik } from 'formik'
import { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import Icon from '../../../../components/Icon/Icon'
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
  const { userTasks } = useContext(UserContext)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if (eventSelected) {
      const { title, notes, start, end } = eventSelected
      formik.setValues({
        title,
        notes,
        start: parseISO(start),
        end: parseISO(end)
      })
    }
  }, [eventSelected])

  const formik = useFormik({
    initialValues: {
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
        userTasks: [...userTasks, values]
      }
      setFormSubmitted(true)
      localStorage.setItem('userData', JSON.stringify(newTask))
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

  const handleChangeValue = () => {
    console.log('guardado')
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
        <h1>Estima el tiempo de tu tarea.</h1>
        <Icon
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
            value={formik.values.start}
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
            value={formik.values.end}
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
          <St.Button type="button" onClick={handleChangeValue}>
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

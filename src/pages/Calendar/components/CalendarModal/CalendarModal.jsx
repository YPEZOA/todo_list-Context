import * as St from './CalendarModal.styled'
import Modal from 'react-modal/lib/components/Modal'
import DatePicker from 'react-datepicker'
import { addHours } from 'date-fns'
import { useFormik } from 'formik'
import { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'
import Icon from '../../../../components/Icon/Icon'
import { faClose } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement('#root')
registerLocale('es', es)

const customStyles = {
  content: {
    width: '100%'
  }
}

const CalendarModal = ({ isDateModalOpen, onCloseModal }) => {
  const { usuario, tareas } = JSON.parse(localStorage.getItem('user'))

  const formik = useFormik({
    initialValues: {
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2)
    },
    onSubmit: values => {
      //TODO: service consume here
      const newTask = {
        usuario,
        tareas: [...tareas, values]
      }
      localStorage.setItem('user', JSON.stringify(newTask))
    }
  })

  const onDateChange = (event, changing = 'start') => {
    formik.setValues({
      ...formik.values,
      [changing]: event
    })
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
        <St.ButtonSubmit type="submit">Submit</St.ButtonSubmit>
      </form>
    </Modal>
  )
}

export default CalendarModal

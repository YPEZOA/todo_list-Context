import { faClose } from '@fortawesome/free-solid-svg-icons'
import * as St from './ActionsModal.styled'
import Modal from 'react-modal/lib/components/Modal'
import Icon from '../Icon/Icon'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const customStyles = {
  content: {
    width: '100%'
  }
}

const ActionsModal = ({ onOpenModal, onCloseModal, task }) => {
  const { token, refetch } = useContext(UserContext)
  const BASE_URL = 'http://localhost:8080/api/tasks'

  const handleCloseModal = () => {
    onCloseModal(true)
  }

  const updateTask = data => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        ...data,
        complete: true
      }),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    fetch(`${BASE_URL}/UpdateTask/${data._id}`, options)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.status == 200) {
          alert('Tarea completada!')
          refetch()
        }
      }).catch = err => {
      console.error(err)
    }
  }

  const handleConfirmAction = () => {
    updateTask(task)
    handleCloseModal()
  }

  return (
    <Modal
      className="modal-actions"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      isOpen={onOpenModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <St.Header>
        <Icon
          iconType={faClose}
          style={{ cursor: 'pointer' }}
          onClick={handleCloseModal}
        />
      </St.Header>
      <St.Body>
        <h1>Estás seguro de completar esta tarea?</h1>
      </St.Body>
      <St.Footer>
        <St.ButtonConfirm area-label="Confirmar" onClick={handleConfirmAction}>
          Aceptar
        </St.ButtonConfirm>
      </St.Footer>
    </Modal>
  )
}

export default ActionsModal

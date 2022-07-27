import { faCheck, faFaceDizzy } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon/Icon'
import * as St from './Task.styled'
import { useState } from 'react'
import ActionsModal from '../ActionsModal/ActionModal'

const Task = ({ _id, complete, title, notes, start, end }) => {
  const [openModal, setOpenModal] = useState(false)
  const task = { _id, complete, title, notes, start, end }

  const startDate = new Date(start).toDateString()
  const endDate = new Date(end).toDateString()

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <St.Container>
      <ActionsModal
        onOpenModal={openModal}
        onCloseModal={handleCloseModal}
        task={task}
      />
      <St.BoxHeader>
        <St.Title>{title}</St.Title>
        <St.ContainerDates>
          <St.Dates>
            {startDate} - {endDate}
          </St.Dates>
        </St.ContainerDates>
        {complete ? (
          <>
            <Icon
              iconType={faFaceDizzy}
              style={{
                position: 'absolute',
                fontSize: '20px',
                right: 0,
                cursor: 'pointer'
              }}
            />
          </>
        ) : (
          <>
            <Icon
              onClick={handleOpenModal}
              iconType={faCheck}
              style={{
                position: 'absolute',
                fontSize: '20px',
                right: 0,
                cursor: 'pointer'
              }}
            />
          </>
        )}
      </St.BoxHeader>
      <St.Notes>{notes}</St.Notes>
    </St.Container>
  )
}

export default Task

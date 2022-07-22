import * as St from './Task.styled'

const Task = ({ title, notes, start, end, complete }) => {
  const startDate = new Date(start).toDateString()
  const endDate = new Date(end).toDateString()
  return (
    <St.Container>
      <St.BoxHeader>
        <St.Title>{title}</St.Title>
        <St.ContainerDates>
          <St.Dates>
            {startDate} - {endDate}
          </St.Dates>
        </St.ContainerDates>
      </St.BoxHeader>
      <St.Notes>{notes}</St.Notes>
    </St.Container>
  )
}

export default Task

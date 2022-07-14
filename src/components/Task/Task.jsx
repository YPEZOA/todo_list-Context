import * as St from './Task.styled'

const Task = ({ title, notes, start, end, complete }) => {
  return (
    <St.Container>
      <St.BoxHeader>
        <St.Title>{title}</St.Title>
        <St.ContainerDates>
          <St.Dates>
            {start} - {end}
          </St.Dates>
        </St.ContainerDates>
      </St.BoxHeader>
      <St.Notes>{notes}</St.Notes>
    </St.Container>
  )
}

export default Task

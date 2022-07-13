import * as St from './Task.styled'

const Task = ({ title, notes, start, end, complete }) => {
  return (
    <St.Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <St.Title>{title}</St.Title>
        <div>
          <St.Dates>
            {start} - {end}
          </St.Dates>
        </div>
      </div>
      <St.Notes>{notes}</St.Notes>
    </St.Container>
  )
}

export default Task

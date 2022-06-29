import styledComponents from 'styled-components'

export const Header = styledComponents.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormGroup = styledComponents.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
`

export const DatePickerContainer = styledComponents.div`
  display: inline-block;
`

export const TextNotes = styledComponents.textarea`
  outline: none;
  border: 1px solid #c6c6c6;
  border-radius: 3px;
  resize: none;
`

export const Input = styledComponents.input`
  padding: 7px;
  border: 1px solid #c6c6c6;
  border-radius: 3px;
  font-size: 15px;
  transition: outline 0.3s ease;
  &:focus {
    outline-color: lightblue;
  }
`

export const Button = styledComponents.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #c6c6c6;
  cursor: pointer;
`

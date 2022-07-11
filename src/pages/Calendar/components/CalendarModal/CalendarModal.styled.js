import styledComponents from 'styled-components'

export const Header = styledComponents.header`
  display: flex;
  justify-content: space-between;
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
  border: 2px solid #c6c6c6;
`

export const Input = styledComponents.input`
  padding: 9px;
  border: 2px solid #c6c6c6;
  border-radius: 3px;
  font-size: 15px;
  transition: outline 0.3s ease;
  &:focus {
    outline-color: lightblue;
  }
`

export const Button = styledComponents.button`
  width: 100%;
  display: block;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: rgb(0,0,0,0.6);
  font-weight: 600;
  color: #f2f2f2;
  cursor: pointer;
`

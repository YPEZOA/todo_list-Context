import styledComponents from 'styled-components'

export const Input = styledComponents.input`
  padding: 10px 0px 2px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #cccc;
  color: rgb(255,255,255, 0.6);
  outline: none;
  font-size: 17px;
  transition: border-bottom 0.5s ease;
  &:focus {
    border-bottom: 2px solid #00a2caba;
  }
`

export const Label = styledComponents.label`
  color: #c6c6c6;
`

export const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`

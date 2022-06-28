import styledComponents from 'styled-components'

export const Button = styledComponents.button`
  border: none;
  background-color: #00a2caba;
  color: #cecece;
  padding: 10px;
  display: block;
  width: 100%;
  border-radius: 50px;
  transition: opacity 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonLink = styledComponents.button`
  background-color: transparent;
  color: blue;
  font-size: 14px;
`

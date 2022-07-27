import styledComponents from 'styled-components'

export const Header = styledComponents.header`
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`
export const Body = styledComponents.section`
  padding: 10px 20px;
  background-color: #f2f2f2;
  color: #000;
  text-align: center;
`
export const Footer = styledComponents.footer`
  background-color: #f2f2f2;
  border-top: 1px solid lightgray;
  padding: 10px 10px;
  text-align: right;
`
export const ButtonConfirm = styledComponents.button`
  padding: 7px 20px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #005071;
  cursor: pointer;
`

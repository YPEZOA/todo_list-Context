import styledComponents from 'styled-components'

export const Container = styledComponents.section`
  padding: 70px 20px;
  @media screen and (min-width:1025px) {
    width: 50%;
    margin: auto;
  }
`

export const Item = styledComponents.td`
  padding: 10px 10px;
  border: 1px solid rgb(255,255,255,.3);
  border-radius: 3px;
  background-color: rgb(0,0,0,0.3)
`

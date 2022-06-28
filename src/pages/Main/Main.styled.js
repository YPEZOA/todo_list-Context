import styledComponents from 'styled-components'

export const Container = styledComponents.section`
  padding: 70px 20px;
  @media screen and (min-width:1025px) {
    width: 50%;
    margin: auto;
  }
`

export const Table = styledComponents.table`
  width: 100%;
  border-radius: 5px;
  padding: 0px 20px;
  background-color: #00a2caba;
  &.disabled {
    opacity: 0.7;
    text-decoration: line-through;
  }
  @media screen and (max-width: 765px) {
    tr {
      border: 1px solid black;
      background-color: rgb(255, 255, 255, 0.1);
    }
     tr > td {
      display:block;
      text-align: center;
      border: none;
    }
  }

`
export const Item = styledComponents.td`
  padding: 5px 20px;
  border-bottom: 1px solid rgb(0,0,0,.3);
`

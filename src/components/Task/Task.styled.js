import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  border: 2px solid gray;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    text-align: center;
    display:flex;
    flex-direction: column;
  }
`

export const Title = styledComponents.span`
  color: #60badd;
  text-decoration: underline;
  font-weight: bold;
  font-size: 20px;
`

export const Notes = styledComponents.p`
  color: #f2f2f2;
  display: block;
  padding: 0;
  margin: 0;
  padding-top: 15px;
`

export const ContainerDates = styledComponents.div`
  margin-left: 10px;
`

export const Dates = styledComponents.span`
  color: lightgray;
  font-size: 13px;
`

export const BoxHeader = styledComponents.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display:flex;
    flex-direction: column;
  }
`

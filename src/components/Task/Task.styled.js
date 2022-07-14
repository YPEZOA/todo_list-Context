import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    text-align: center;
    display:flex;
    flex-direction: column;
  }
`

export const Title = styledComponents.span`
  color: rgb(129, 174, 193);
  font-weight: bold;
  font-size: 20px;
`

export const Notes = styledComponents.p`
  display: block;
  color: #000;
  padding: 0;
  margin: 0;
  padding-top: 15px;
`

export const ContainerDates = styledComponents.div`
  margin-left: 10px;
`

export const Dates = styledComponents.span`
  color: rgb(0,0,0,0.8);
  font-size: 12px;
`

export const BoxHeader = styledComponents.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display:flex;
    flex-direction: column;
  }
`

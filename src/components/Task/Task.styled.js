import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 10px 20px;
`

export const Title = styledComponents.span`
  color: rgb(0,0,0,0.8);
  font-weight: bold;
  font-size: 16px;
`

export const Notes = styledComponents.p`
  display: block;
  color: #000;
  padding: 0;
  margin: 0;
  padding-top: 15px;
`

export const Dates = styledComponents.span`
  color: rgb(0,0,0,0.8);
  font-size: 14px;
`

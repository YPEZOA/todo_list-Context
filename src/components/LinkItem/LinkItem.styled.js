import styledComponents from 'styled-components'

export const Link = styledComponents.a`
  color: #61d0ff;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
  &:hover {
    color: teal;
  }
`

export const SpanTextLeft = styledComponents.span`
  font-size: 15px;
  color: #c6c6c6;
  padding-right: 5px;
`

export const SpanTextRight = styledComponents.span`
  font-size: 15px;
  color: #c6c6c6;
  padding-left: 5px;
`

export const Container = styledComponents.div`
  margin-top: 30px;
  text-align: center;
`

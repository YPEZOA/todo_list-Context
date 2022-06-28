import * as St from './LinkItem.styled'

const LinkItem = ({ textLeft, textRight, path, children }) => {
  return (
    <St.Container>
      <St.SpanTextLeft>{textLeft}</St.SpanTextLeft>
      <St.Link href={path}>{children}</St.Link>
      <St.SpanTextRight>{textRight}</St.SpanTextRight>
    </St.Container>
  )
}
export default LinkItem

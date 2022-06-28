import * as St from './Image.styled'

const Image = ({ url, ...props }) => {
  return (
    <>
      <St.Image src={url} {...props} />
    </>
  )
}

export default Image

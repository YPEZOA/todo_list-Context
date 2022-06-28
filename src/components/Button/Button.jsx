import * as St from './Button.styled'

const Button = ({ children, ...props }) => {
  return <St.Button {...props}>{children}</St.Button>
}

export default Button

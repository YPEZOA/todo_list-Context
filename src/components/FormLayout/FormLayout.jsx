import React from 'react'
import * as St from './FormLayout.styled'

const FormLayout = ({ children, onHandleSubmit, title, ...props }) => {
  return (
    <St.Container {...props}>
      <St.Title>{title}</St.Title>
      <St.Form onSubmit={onHandleSubmit}>{children}</St.Form>
    </St.Container>
  )
}

export default FormLayout

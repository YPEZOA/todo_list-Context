import React from 'react'
import * as St from './InputForm.styled'

const InputForm = ({ label, ...props }) => {
  return (
    <St.Container>
      <St.Label htmlFor={props.id}>{label}</St.Label>
      <St.Input autoComplete="false" aria-autocomplete="none" {...props} />
    </St.Container>
  )
}

export default InputForm

import React, { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleOnChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const reset = () => {
    setValues(initialState)
  }

  return { values, handleOnChange, reset }
}

export default useForm

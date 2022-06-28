import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icon = ({ iconType, ...props }) => {
  return (
    <>
      <FontAwesomeIcon icon={iconType} {...props} />
    </>
  )
}

export default Icon

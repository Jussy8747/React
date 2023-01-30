import React from 'react'

import { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'
const Alert = () => {

  const {alert}= useContext(AlertContext)
  return alert !== null && <p className="mb-4 
  text-red-dark">
      <strong>{alert.msg}</strong>
  </p>
}

export default Alert

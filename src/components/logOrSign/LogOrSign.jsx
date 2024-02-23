import React from 'react'

import Signup from '../signup/Signup'
import Login from '../login/Login'

import "./LogOrSign.css"

const LogOrSign = () => {
  return (
    <div className="logorsogn-wrapper">
      <Signup/>
      <Login/>
    </div>
  )
}

export default LogOrSign

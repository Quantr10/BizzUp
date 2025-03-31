import React from 'react'
import './LogIn.css'

const LogIn = () => {
  return (
    <div className="login">
      <div className="login-title">
        <h1>Welcome to</h1>
        <h1>BizzUp</h1>
      </div>
      <div className="login-form">
        <h3>username</h3>
        <input type="mail" name="mail"/>
        <h3>password</h3>
        <input type="password" name="password"/>
      </div>
    </div>
  )
}

export default LogIn
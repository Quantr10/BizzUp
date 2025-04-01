import {useState} from 'react'
import './LogIn.css'

const LogIn = () => {
  return (
    <div className="login">
      <div className="login-title">
        <h1>Welcome to</h1>
        <h1>BizzUp</h1>
      </div>
      <div className="login-form">
        <label>username</label>
        <input type="mail" name="mail"/>
        <label>password</label>
        <input type="password" name="password"/>
      </div>
    </div>
  )
}

export default LogIn
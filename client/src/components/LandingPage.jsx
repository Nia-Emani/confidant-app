import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

function LandingPage(props) {
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    console.log("buttonClicked")
    history.push('/new')
  }

  return (
    <article className="content-container">
      <div className="logo-container">
        <img className="large-logo" src="https://lh3.googleusercontent.com/oMN-BsoInpHOzFl2CwuyTg6m6qb_mw1zzmVEZL9GeZQPCfVoNQ6xoZVDd-BQjtJIWS-mU5oCxAyX8WhyrJ0QjK94juaKDWX0z2tiosCIj8PtZwguhQrzafifX4NkdoSIyt6MijxbVmE=w1920-h1080" alt="Confidant App logo" />


      </div>
      <div className="signup-container">
        <label htmlFor='sign up form' className='signup-label'>sign up</label>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            id='name'
            className='signup-input'
            type='text'
            placeholder='first name' />
          <input
            id='email'
            className='signup-input'
            type='email'
            placeholder='email' />
          <input
            id='password'
            className='signup-input'
            type='password'
            placeholder='password' />
          <input
            id='confirmpassword'
            className='signup-input'
            type='password'
            placeholder='confirm password' />
          <button className="start-button" type="submit">
            start journaling
          </button>
        </form>
      </div>
    </article>

  )
}

export default LandingPage
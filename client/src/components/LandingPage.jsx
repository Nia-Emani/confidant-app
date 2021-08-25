import { Link } from 'react-router-dom'

function LandingPage(props) {
  return (
    <article className="content-container">
      <div className="logo-container">
        <img className="large-logo" src="https://lh3.googleusercontent.com/oMN-BsoInpHOzFl2CwuyTg6m6qb_mw1zzmVEZL9GeZQPCfVoNQ6xoZVDd-BQjtJIWS-mU5oCxAyX8WhyrJ0QjK94juaKDWX0z2tiosCIj8PtZwguhQrzafifX4NkdoSIyt6MijxbVmE=w1920-h1080" alt="Confidant App logo" />


      </div>
      <div className="signup-container">
        <label htmlFor='sign up form' className='signup-label'>sign up</label>
        <form className="signup-form">
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
          <button className="start-button">
            <Link to="/new">start journaling</Link>
          </button>
        </form>
      </div>
    </article>

  )
}

export default LandingPage
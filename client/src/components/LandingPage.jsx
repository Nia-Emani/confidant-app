import { Link } from 'react-router-dom'

function LandingPage(props) {
  return (
    <>
      <article className="logo-container">
        <img className="large-logo" src="https://lh3.googleusercontent.com/7m2ce9jVOrgZ-OOWvaSfgz95LTqnM7DdSQYH3J71RwCB5O5bu3-Q2E6ahO8Tw_WAPJE5vQIO5qpzUDcRAL23A9vzO7mSorENinjzel8LOAqYjyU0xf39UcM7mOFvrKC39Kl7et_wrEQ=w500-h315-p-k" alt="Confidant App logo" />
        <h2 className="slogan">Make some space in your brain.</h2>
      </article>
      <article className="signup-container">
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
      </article>
    </>

  )
}

export default LandingPage
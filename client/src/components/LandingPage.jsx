import { Link } from 'react-router-dom'

function LandingPage(props) {
  return (
    <>
      <article className="logo-container">
        <img src="https://lh3.googleusercontent.com/7m2ce9jVOrgZ-OOWvaSfgz95LTqnM7DdSQYH3J71RwCB5O5bu3-Q2E6ahO8Tw_WAPJE5vQIO5qpzUDcRAL23A9vzO7mSorENinjzel8LOAqYjyU0xf39UcM7mOFvrKC39Kl7et_wrEQ=w500-h315-p-k" alt="Confidant App logo" />
        <h2 className="slogan">Make some space in your brain.</h2>
      </article>
      <article className="signup-container">
        <label htmlFor='sign up form' className='sign-up'>sign up</label>
        <form className="signup-form">
          <input
            id='name'
            type='text'
            placeholder='first name' />
          <input
            id='email'
            type='email'
            placeholder='email' />
          <input
            id='password'
            type='text'
            placeholder='password' />
          <input
            id='confirmpassword'
            type='text'
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
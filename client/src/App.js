import { Link } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className="App">
      <a href="https://lh3.googleusercontent.com/7m2ce9jVOrgZ-OOWvaSfgz95LTqnM7DdSQYH3J71RwCB5O5bu3-Q2E6ahO8Tw_WAPJE5vQIO5qpzUDcRAL23A9vzO7mSorENinjzel8LOAqYjyU0xf39UcM7mOFvrKC39Kl7et_wrEQ=w2400?source=screenshot.guru"> <img src="https://lh3.googleusercontent.com/7m2ce9jVOrgZ-OOWvaSfgz95LTqnM7DdSQYH3J71RwCB5O5bu3-Q2E6ahO8Tw_WAPJE5vQIO5qpzUDcRAL23A9vzO7mSorENinjzel8LOAqYjyU0xf39UcM7mOFvrKC39Kl7et_wrEQ=w500-h315-p-k" alt="Confidant App logo" /> </a>
      <h2>Make some space in your brain.</h2>
      <form>
        <input
          id='name'
          type='text'
          placeholder='firstname' />
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
        <button classNames="start-button">
          <Link to="/new">start journaling</Link>
        </button>
      </form>
    </div>
  );
}

export default App;


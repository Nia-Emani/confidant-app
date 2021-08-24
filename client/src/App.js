import { Link, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import EntryFeed from './components/EntryFeed';
import NewEntry from './components/NewEntry'
import Menu from './components/Menu'
import axios from 'axios'
import { baseURL, config } from './services'

function App() {
  const [entries, setEntries] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getEntries = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records)
      setEntries(resp.data.records)
    }
    getEntries()
  }, [toggleFetch])

  return (
    <div className="App">
      <nav className="nav-bar">
        <h3>
          <Link to="/menu">Menu</Link>
        </h3>
        <Link to="/">
          <img src="https://lh3.googleusercontent.com/hVqm3nI9V53nmcIdxYAnO9aOMD-z2ouES6hPP_MfhnpKBQStvjn8qACdRbBxIejzxoKuEhltY7Jf6Stc3R33r5piXnusGaqaOJ3ATqbCw4zQLbHEjY8v9YoaqSg0lugBEl9YWkrM1aA=s75-p-k" />
        </Link>
      </nav>
      <Route path="/" exact>
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
            <button classNames="start-button">
              <Link to="/new">start journaling</Link>
            </button>
          </form>
        </article>
      </Route>
      <Route path="/new">
        <NewEntry />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/feed">
        <EntryFeed entries={entries} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <NewEntry entries={entries} />
      </Route>
    </div >
  );
}

export default App;


import { Link, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import EntryFeed from './components/EntryFeed';
import NewEntry from './components/NewEntry'
import Menu from './components/Menu'
import axios from 'axios'
import { baseURL, config } from './services'
import LandingPage from './components/LandingPage';

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
        <Link to="/">
          <img src="https://lh3.googleusercontent.com/hVqm3nI9V53nmcIdxYAnO9aOMD-z2ouES6hPP_MfhnpKBQStvjn8qACdRbBxIejzxoKuEhltY7Jf6Stc3R33r5piXnusGaqaOJ3ATqbCw4zQLbHEjY8v9YoaqSg0lugBEl9YWkrM1aA=s75-p-k" alt="Confidant App logo" />
        </Link>
        <h3 className="menu-link">
          <Link to="/menu">Menu</Link>
        </h3>
      </nav>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/feed">
        <EntryFeed entries={entries} setToggleFetch={setToggleFetch} />
      </Route>
      {/* post route */}
      <Route path="/new">
        <NewEntry entries={entries} setToggleFetch={setToggleFetch} />
      </Route>
      {/* put route */}
      <Route path="/edit/:id">
        <NewEntry entries={entries} setToggleFetch={setToggleFetch} />
      </Route>
    </div >
  );
}

export default App;


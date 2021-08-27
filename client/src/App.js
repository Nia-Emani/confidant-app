import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { baseURL, config } from './services'
import './App.css';
import EntryFeed from './components/EntryFeed';
import NewEntry from './components/NewEntry'
import Menu from './components/Menu'
import LandingPage from './components/LandingPage';

function App() {
  const [entries, setEntries] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getEntries = async () => {
      const resp = await axios.get(baseURL, config)
      setEntries(resp.data.records)
    }
    getEntries()
  }, [toggleFetch])

  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/">
          <img src="https://lh3.googleusercontent.com/GnXScSz2Dgy4IoLvaovbGSAS5jgF3XwyFkv8VScWu9JDBqAb5tbuwmFIMlNIbN09U8OszbZV38LAtlxfFPXWyUjwYwxfE24X61xMoe1JdO61cMPS9WSJvVsGTTGIV89QHR0HpB4PWjg=w1920-h1080" alt="Confidant App logo" />
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


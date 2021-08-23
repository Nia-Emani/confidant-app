import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'

function EntryFeed(props) {
  const [entries, setEntries] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getEntries = async () => {
      const resp = await axios.get(baseURL, config)
      setEntries(resp.data.records)
      console.log(resp.data)
    }
    getEntries()
  }, [toggleFetch])

  return (
    <h1>This is my Journal Feed!</h1>
  )
}

export default EntryFeed
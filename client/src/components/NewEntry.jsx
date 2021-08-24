import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { baseURL, config } from '../services'

function NewEntry(props) {
  const [thought, setThought] = useState('')
  const [date, setDate] = useState('')

  const params = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newThought = {
      thought,
      date
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newThought }, config)
    } else {
      await axios.post(baseURL, { fields: newThought }, config)
    }
    // props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <div className="new-entry">
      <h1>Hi there!<br />What's on your mind?</h1>
      <form onSubmit={handleSubmit}>
        <input
          id='date'
          type='text'
          placeholder='date'
          onChange={e => setDate(e.target.value)}
          value={date} />
        <textarea
          id='thought'
          type='text'
          placeholder='jot down your thoughts here'
          onChange={e => setThought(e.target.value)}
          value={thought} />
        <button type="submit" className="new-entry-button">add entry</button>
      </form>
    </div>

  )
}

export default NewEntry
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { baseURL, config } from '../services'

function NewEntry(props) {
  const [thought, setThought] = useState('')
  const [date, setDate] = useState('')

  const params = useParams()

  // useEffect(() => {
  //   if (params.id && props.thoughts.length > 0) {
  //     const thoughtToEdit = props.thoughts.find(thought => params.id === thought.id)
  //     if (thoughtToEdit) {
  //       setDate(thoughtToEdit.fields.date)
  //       setThought(thoughtToEdit.fields.thought)
  //     }
  //   }
  // }, [params.id, props.thoughts])

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
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <div className="new-entry">
      <h1>Hi there!<br />What's on your mind?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type='text'
          onChange={e => setDate(e.target.value)}
          value={date}
        />
        <label htmlFor='thought'>Jot down your thoughts here</label>
        <input
          id='thought'
          type='text'
          onChange={e => setThought(e.target.value)}
          value={thought}
        />
        <button type="submit" className="new-entry-button">add entry</button>
      </form>
    </div>

  )
}

export default NewEntry
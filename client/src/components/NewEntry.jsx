import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { baseURL, config } from '../services'


function NewEntry(props) {
  const [thought, setThought] = useState('')
  const [date, setDate] = useState('')

  const params = useParams()
  const history = useHistory()

  const { setToggleFetch } = props

  useEffect(() => {
    if (params.id && props.entries.length > 0) {
      const entryToEdit = props.entries.find(entry => params.id === entry.id)
      if (entryToEdit) {
        console.log(entryToEdit)
        setDate(entryToEdit.fields.date)
        setThought(entryToEdit.fields.thought)
      }
    }
  }, [params.id, props.entries])

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
    setToggleFetch((prevToggleFetch) => !prevToggleFetch)
    history.push("/feed")
  }

  return (
    <article className="new-entry">
      <h1 className="greeting">Hi there!<br /><span className="prompt">What's on your mind?</span></h1>
      <form onSubmit={handleSubmit}>
        <input
          id='date'
          type='text'
          placeholder='date'
          onChange={e => setDate(e.target.value)}
          value={date} />
        <textarea
          id='thought'
          placeholder='jot down your thoughts here'
          onChange={e => setThought(e.target.value)}
          value={thought} />
        <button type="submit" className="add-button">add entry</button>
      </form>
    </article>

  )
}

export default NewEntry
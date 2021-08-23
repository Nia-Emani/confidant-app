import { useParams } from "react-router-dom"
import axios from 'axios'
import { useParams } from 'react-router-dom'

function NewEntry(props) {
  const [newThought, setNewThought] = useState('')

  const params = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newThought = { entry }
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
        <input
          id='entry'
          type='text'
          onChange={e => setNewThought(e.target.value)}
          value={entry}
        />
        <button type="submit" className="new-entry-button">add entry</button>
      </form>
    </div>

  )
}

export default NewEntry
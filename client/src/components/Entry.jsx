import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseURL, config } from '../services'

function Entry(props) {
  const { date, thought } = props.entry.fields

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${props.entry.id}`, config)
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

  return (
    <>
      <article className="entry-content">
        <p className="date">{date}</p>
        <p className="thought">{thought}</p>
      </article>
      <article className="entry-buttons">
        <button className="delete-button" onClick={handleDelete}>Delete
        </button>
        <button className="edit-button">
          <Link to={`/edit/${props.entry.id}`}>Edit</Link>
        </button>
      </article>
    </>
  )
}

export default Entry
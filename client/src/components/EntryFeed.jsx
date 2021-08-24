//To Do
//- Add edit and delete buttons


import Entry from './Entry'
import { Link } from 'react-router-dom'

function EntryFeed(props) {

  return (
    <article>
      <h1>Journal Feed</h1>
      {props.entries.map((entry, index) => {
        return (
          <article key={index}>
            <Entry entry={entry} setToggleFetch={props.setToggleFetch} />
            <button className="edit-button">
              <Link to={`/edit/${entry.id}`}>Edit</Link>
            </button>
          </article>
        )
      })}
    </article>
  )
}

export default EntryFeed

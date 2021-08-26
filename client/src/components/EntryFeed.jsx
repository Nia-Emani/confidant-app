import Entry from './Entry'
import {Link} from 'react-router-dom'

function EntryFeed(props) {

  return (
    <article>
      <h1>Journal Feed</h1>
      <button className="newentry-button">
        <Link to="/new">New Entry</Link>
      </button>
      {props.entries.map((entry, index) => {
        return (
          <article key={index} className="entry-container">
            <Entry entry={entry} setToggleFetch={props.setToggleFetch} />
          </article>
        )
      })}
    </article>
  )
}

export default EntryFeed

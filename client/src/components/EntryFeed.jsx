import Entry from './Entry'

function EntryFeed(props) {

  return (
    <article>
      <h1>Journal Feed</h1>
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

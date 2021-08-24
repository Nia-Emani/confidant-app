//To Do
//- Add edit and delete buttons


import Entry from './Entry'

function EntryFeed(props) {

  return (
    <div>
      <h1>Journal Feed</h1>
      {props.entries.map((entry, index) => {
        return (
          <Entry key={index} entry={entry} setToggleFetch={props.setToggleFetch} />
        )
      })}
    </div>
  )
}

export default EntryFeed

import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'
import Entry from './Entry'
import { Route } from 'react-router-dom'

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

//To Do
//- Render default journal entry
//- Add edit and delete buttons
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'
import { Route } from 'react-router-dom'

function Entry(props) {

  const { date, thought } = props.entry.fields



  return (
    <>
      <p>{date}</p>
      <p>{thought}</p>
    </>

  )
}

export default Entry
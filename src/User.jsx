import React from 'react'
import { useParams } from 'react-router'

export default function User() {
    let {id} = useParams()
  return (

    <div>
      <h2>User name is ikhlas and id is {id}</h2>
    </div>
  )
}

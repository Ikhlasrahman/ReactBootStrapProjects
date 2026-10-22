import React, { useContext } from 'react'
import { DataContextAPI } from './DataContext'

export default function child() {
    const ring = useContext(DataContextAPI)
  return (
    <div>
      child using {ring}
    </div>
  )
}

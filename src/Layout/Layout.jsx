import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'

export default function Layout() {
  return (
    <div>
      <h2>Layout Page</h2>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

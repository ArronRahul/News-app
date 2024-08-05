import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


export default function Navbar() {
  return (
    <div>
        <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/news'><li>News</li></Link>
        <Link to='/login'><li>Login</li></Link>
        </ul>
    </div>
  )
}

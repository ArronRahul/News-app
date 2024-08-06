import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


export default function Navbar({auth}) {
  return (
    <div>
        <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/news'><li>News</li></Link>
        {auth?<Link to='/login'><li>Logout</li></Link>:<Link to='/login'><li>Login</li></Link>}
        </ul>
    </div>
  )
}

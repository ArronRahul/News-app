import React from 'react'
import "../App.css"
import {userDetails} from "../../api/api"
export default function Home() {

  

  const token=localStorage.getItem('token')
  const user = userDetails(token)
  
  

  return (
    <div className='home'>
      <h2>hi , {user}</h2>
    </div>
  )
}

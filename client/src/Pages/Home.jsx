import React from 'react'
import "../App.css"
export default function Home({user}){

  return (
    <div className='home'>
      <h2>hi , {user}</h2>
    </div>
  )
}

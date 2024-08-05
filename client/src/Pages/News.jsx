import React from 'react'
import "../App.css"
import Newscard from '../components/Newscard'
export default function News() {
  const apikey = 'cd8fe1b05fb6423cbfc73a6de53f1d99'
  return (
    <div className='news'>
      <h1>Latest News</h1>
      <div className='news-area'>
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
      </div>

    </div>
  )
}

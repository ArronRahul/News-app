import React from 'react'
import '../App.css'
export default function Newscard({data}) {
  return (
    <div className='newscard'>
        <img src={data.image_url? data.image_url: 'https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue'} alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.description}</p> 
    </div>
  )
}

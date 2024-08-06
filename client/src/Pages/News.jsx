import React, { useEffect, useState } from 'react'
import "../App.css"
import Newscard from '../components/Newscard'
export default function News() {
  const [NewsData,setNewsData]=useState([])


const endpoint = 'https://newsdata.io/api/1/latest?apikey=pub_4988362b664f3cc46f720982769ea356d9a73&q=crypto&sentiment=positive';

const fetchNews = async () => {
    try {
        const response = await fetch(`${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setNewsData(data.results);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

useEffect(()=>{
  fetchNews();
},[])

  


  return (
    <div className='news'>
      <h1>Latest News</h1>
      <div className='news-area'>
      {NewsData.map((data, index) => (
          <Newscard key={data.article_id || index} data={data} /> 
        ))}
        
      </div>

    </div>
  )
}

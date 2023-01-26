import React, { useEffect,useState } from 'react'
import "./HomePage.css"

function HomePage() {
  const [data,setData] = useState([])
  const url = 'https://api.nasa.gov/planetary/apod?api_key=FaM2S61TschjDYQGiFUfpUdDFZz3Be0BZJWDUzeu'
  useEffect(()=>{ 
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      console.log(data) 
    })
  },[])
  return (
    <>
     <div className='home'>
        <div className='container'>
        <h5>Welcome to, Stellar Space </h5>
        <div className="phrase">
        <h5 className='margin'>EXPLORE THE</h5>
        <h5>EXTRAORDINARY, </h5>
        <h5>EVERYDAY </h5>
        </div>
        </div>
    </div>
   
      {
          <>
            <div className="first">
              <p>Title : {data.title}</p>
              <p>Date : {data.date}</p>
              <h4>Explanation</h4>
              <p>{data.explanation}</p>
            </div>
            <h4 className='pod'>Picture of the day</h4>
            <img className='image' src={data.hdurl} alt='' />
          </>
      } 
    </>
   
    
  )
}

export default HomePage
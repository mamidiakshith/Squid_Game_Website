import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Actors.css'
function Actors() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(data=>setActors(data));
  },[]);
  return (
    <div className='ad1'>
      <h1 className='ach1'>List of Players</h1>
      {
        actors.map((actor,index)=>(
          <div className="adc" key={index}>
            <img src="https://pbs.twimg.com/media/FBEPsWhUYAUoGSb.jpg" className='aci1' alt="" />
            <h2 className='ahh1'>{actor.name}</h2>
            <p className='ap1'>{actor.gender}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Actors
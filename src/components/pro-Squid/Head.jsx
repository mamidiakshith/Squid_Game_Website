import React from 'react'
import { Link } from 'react-router-dom'
import './Head.css'
function Head() {
  return (
    <div className='hd1'>
        <img src="https://i.redd.it/qlev5tln9iq71.png" className='i1' alt="" />
        <ul className="nav">
    <li className="nav-item">
    <Link className="l" to="">HOME</Link>
  </li>
  <li className="nav-item">
    <Link className="l" to="about">ABOUT</Link>
  </li>
  <li className="nav-item">
    <Link className="l" to="trailer">REGISTRATIONS</Link>
  </li>
  <li className="nav-item">
    <Link className="l" to="actors">PLAYERS</Link>
  </li>
</ul>
<img src="https://static.thenounproject.com/png/1729058-200.png" className='i2' alt="" />
    </div>
  )
}

export default Head
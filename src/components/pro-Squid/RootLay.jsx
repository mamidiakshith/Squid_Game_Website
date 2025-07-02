import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'
import Foot from './Foot'
import './Rootlay.css'
import Body from './Body'
function RootLay() {
  return (
    <div className='m1'>
        <Head/>
        <div style={{minHeight: '94vh'}}>
                <Outlet/>
        </div>
       <Foot/> 
    </div>
  )
}

export default RootLay
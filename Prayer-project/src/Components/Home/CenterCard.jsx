import React from 'react'
import { LiaMosqueSolid } from "react-icons/lia";
export default function CenterCard({h3,icon}) {
  return (
    <div className='CenterCard'>
        <div className="content-card" >
        <div className="icon-card" >
    {icon}
        </div>
        <h3 style={{fontFamily:' Philosopher', fontWeight:'300',fontSize:'28px'}}>{h3}</h3>
        <div className='icon-line'></div>
    <div style={{padding:'30px',textAlign:'center'}}>
       <p>Lorem ipsum dolor sit amet consec exea dolore fugiatmagna exerd coas. Lorem ipsum dolor sit amet consec exea.</p>
        </div>
        <div style={{paddingBottom:'60px'}}>
        <a href="" style={{color: '#b23a00',fontSize:'18px',fontFamily:' Philosopher',textDecoration:'none'}}>READ MORE</a>
        </div>
    
        </div>
    </div>
  )
}

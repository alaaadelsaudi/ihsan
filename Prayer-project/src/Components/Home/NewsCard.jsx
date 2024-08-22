import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
export default function NewsCard({photo,title}) {
  return (
    <div style={{width:'50%',textAlign:'center'}}>
        <div style={{width:'100%'}}>
            {photo}
        </div>
        <div style={{color:'#8a9535'}}>
            <span ><SlCalender /> July 30, 2019 |</span>
            <span> <FaRegCommentDots /> 2 Comments</span>
        </div>
        <div className='content-news'> 
            <h3 style={{fontSize:'28px'}}>{title}</h3>
            <p>Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry ......</p>
            <div className='icon-line'></div>
            <div style={{padding:'40px'}}>
        <a href="" style={{color: '#b23a00',fontSize:'18px',fontFamily:' Philosopher',textDecoration:'none'}}>READ MORE</a>
        </div>
    
        </div>
    </div>
  )
}

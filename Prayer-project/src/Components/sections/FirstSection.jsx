import React from 'react'
import '../Style/first.scss'
import first from '../imges/services-head-1.png'
export default function FirstSection({titlepage, spanpage}) {
  return (
    <div className="first-section" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.281), rgba(0, 0, 0, 0.226)), url(${first})`, backgroundRepeat: 'no-repeat',
     backgroundSize:'cover'}}>
    <div className='text'>
        <h2>{titlepage}</h2>
        <div>
            <span> <a href="">Home</a>  / { spanpage}</span>
           

        </div>
    </div>
 </div>
  )
}

import React from 'react'
import '../Style/first.scss'
export default function FirstSection({titlepage, spanpage}) {
  return (
    <div className="first-section">
    <div className='text'>
        <h2>{titlepage}</h2>
        <div>
            <span> <a href="">Home</a>  / { spanpage}</span>
           

        </div>
    </div>
 </div>
  )
}

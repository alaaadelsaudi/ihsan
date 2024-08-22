import React from 'react'

export default function Personcard({Img,Name,Span}) {
  return (
    <div className='person-card'> 
    <div className='person-img'>
     {Img}
    </div>
    <div className='person-name'>
      <h4>{Name}</h4>
      <span>{Span}</span>
    </div>
  </div>
  )
}

import React from 'react'

export default function Card({span , para}) {
  return (<>
    <div className='card'>
    <div className='span'>
<span>{span}</span>
</div>
<div className='para'>{para}</div>
   </div>
   </>
  )
}

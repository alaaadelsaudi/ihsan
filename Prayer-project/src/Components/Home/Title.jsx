import React from 'react'

export default function Title({h2,img,h4}) {
  return (
    <div className='title'>
         <div style={{textAlign:'center'}}>
         
         <div>
         <div className="icon-mosq">
           {img}
         </div>
         <h2> {h2} </h2>  
       <h4> {h4}</h4> 
       
         </div>
    </div>
    </div>
  )
}

import { Container } from '@mui/material'
import React from 'react'
import Title from './Title'
export default function OurCauses() {
  return (
  <>
    <div style={{padding:'70px 0px',marginTop:'40px'}} className='photo'>
<Title img={ <img src="src/Components/imges/logo_mosq-1.png" alt=""/>}
h2={'Support Our Causes'} h4={'Give charity without delay, for it stands in the way of calamity!'}/>
</div>
<div className='ourcauses' style={{display:'flex',justifyContent:'center'}}>
<div className="ourcard">
<div className='our-card-img'>
<img style={{width:'100%',height:'100%'}} src="src/Components/imges/causes001.jpg" alt="" />
</div>
<div className="card-img-content">
  <h4>Help the poor</h4>
  </div>
  
</div>
<div className="ourcard">
<div className='our-card-img'>
<img style={{width:'100%',height:'100%'}} src="src/Components/imges/causes002.jpg" alt="" />
</div>
<div className="card-img-content">
  <h4>Healthcare Facility</h4>
  </div>
  
</div>
<div className="ourcard">
<div className='our-card-img'>
<img style={{width:'100%',height:'100%'}} src="src/Components/imges/causes003.jpg" alt="" />
</div>
<div className="card-img-content">
  <h4>Monthly Food Items</h4>
  </div>
  
</div>
</div>
  </>
  )
}

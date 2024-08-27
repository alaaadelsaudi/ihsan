import { Container } from '@mui/material'
import React from 'react'
import Title from './Title';
import logoMosq from '../imges/logo_mosq-1.png';
import causes001 from '../imges/causes001.jpg';
import causes002 from '../imges/causes002.jpg';
import causes003 from '../imges/causes003.jpg';

export default function OurCauses() {
  return (
  <>
    <div style={{padding:'70px 0px',marginTop:'40px'}} className='photo'>
<Title img={ <img src={logoMosq}/>}
h2={'Support Our Causes'} h4={'Give charity without delay, for it stands in the way of calamity!'}/>
</div>
<div className='ourcauses' style={{display:'flex',justifyContent:'center'}}>
<div className="ourcard">
<div className='our-card-img'>
<img style={{width:'100%',height:'100%'}} src={causes001} alt="" />
</div>
<div className="card-img-content">
  <h4>Help the poor</h4>
  </div>
  
</div>
<div className="ourcard">
<div className='our-card-img'>
<img style={{width:'100%',height:'100%'}}src={causes002} alt="" />
</div>
<div className="card-img-content">
  <h4>Healthcare Facility</h4>
  </div>
  
</div>
<div className="ourcard">
<div className='our-card-img'>
<img style={{width:'100%',height:'100%'}} src={causes003} alt="" />
</div>
<div className="card-img-content">
  <h4>Monthly Food Items</h4>
  </div>
  
</div>
</div>
  </>
  )
}

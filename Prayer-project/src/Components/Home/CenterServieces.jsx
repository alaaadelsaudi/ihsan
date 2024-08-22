import React from 'react'
import Title from './Title';
import { Container } from '@mui/material';
import CenterCard from './CenterCard';
import { PiVideoBold } from "react-icons/pi";
import { LiaMosqueSolid } from "react-icons/lia";

export default function CenterServieces() {
  return (
    <div style={{padding:'70px 0px',marginTop:'40px'}} className='center-services'>
      
          <Title img={ <img src="src/Components/imges/logo_mosq-1.png" alt=""/>}
h2={'Islamic Center Services'} h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}/>
        <Container>
          
        
 <div className='servicesdiv' >
 
 
 <CenterCard h3={'Mosque Development'} icon={<LiaMosqueSolid />} />
 <CenterCard h3={'Funerals'} icon={<img src="src/Components/imges/gravestone.png" style={{width:'55px'}}/>} />
 <CenterCard h3={'Quran Teaching'} icon={< PiVideoBold  />} />
</div>
 <div  className='servicesdiv' style={{ 
 
  }} >
 <CenterCard h3={'Matrimonial'} icon={<img src="src/Components/imges/quran (2).png" alt="" />}
 />
 
<CenterCard h3={'Charity & Donation'}  icon={<img src="src/Components/imges/donation (2).png" alt="" style={{width:'60px'}}/>}/>
<CenterCard  h3={'Video Sermons'}  icon={<img src="src/Components/imges/man-and-woman (3).png" alt="" style={{width:'60px'}}/>} />
 </div>
        </Container>
      </div>
  )
}

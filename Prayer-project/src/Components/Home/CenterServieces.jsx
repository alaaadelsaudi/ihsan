import React from 'react'
import Title from './Title';
import { Container } from '@mui/material';
import CenterCard from './CenterCard';
import { PiVideoBold } from "react-icons/pi";
import { LiaMosqueSolid } from "react-icons/lia";
import bg from '../imges/bg1-1-1.jpg'
import logomosq from '../imges/logo_mosq-1.png';
import gravestone from "../imges/gravestone.png";
import  Quran from '../imges/quran (2).png';
import donation from '../imges/donation (2).png';
import manAndWoman from'../imges/man-and-woman (3).png'
export default function CenterServieces() {
  return (
    <div style={{padding:'70px 0px',marginTop:'40px',backgroundImage:` url(${bg})`}} className='center-services'>
      
          <Title img={ <img src={logomosq} alt=""/>}
h2={'Islamic Center Services'} h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}/>
        <Container>
          
        
 <div className='servicesdiv' >
 
 
 <CenterCard h3={'Mosque Development'} icon={<LiaMosqueSolid />} />
 <CenterCard h3={'Funerals'} icon={<img src={gravestone} style={{width:'55px'}}/>} />
 <CenterCard h3={'Quran Teaching'} icon={< PiVideoBold  />} />
</div>
 <div  className='servicesdiv' style={{ 
 
  }} >
 <CenterCard h3={'Matrimonial'} icon={<img src={Quran} />}
 />
 
<CenterCard h3={'Charity & Donation'}  icon={<img src={donation} alt="" style={{width:'60px'}}/>}/>
<CenterCard  h3={'Video Sermons'}  icon={<img src={manAndWoman} alt="" style={{width:'60px'}}/>} />
 </div>
        </Container>
      </div>
  )
}

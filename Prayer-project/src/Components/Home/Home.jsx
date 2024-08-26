import React from 'react';
import Slider from './Silder'
import Prayer from './Prayer';
import CenterServieces from './CenterServieces';
import IslamicPhoto from './IslamicPhoto';

import ISlamicPhilosophy from './ISlamicPhilosophy';
import OurCauses from './OurCauses';
import News from './News';

import Swiper from './Swiper';
export default function Home() {

  
  return (
    <>
       <Slider/>
      <Prayer/>
      <CenterServieces/>
      <Swiper/>
 
    <ISlamicPhilosophy/>
     <OurCauses/>
   <IslamicPhoto/>
    <News/>   
   
    </>
  );
 }




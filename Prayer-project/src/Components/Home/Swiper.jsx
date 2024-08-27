import React from 'react';
 import '../Style/swiper.scss';
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from './Title';
import logomosq from '../imges/logo_mosq-1.png';
import ramadan from '../imges/ramadan.jpg';
import muslimPrayer from '../imges/The-muslim-prayer-for-god-in-the-mosque-1-430x260.jpg';
import arabicBiryani from '../imges/arabic-biryani-cuisine-1161468-1-430x260.jpg';
import ancientArchitecture from '../imges/ancient-architecture-asia-532922-1-430x260.jpg';
import bg from "../imges/Arabic-style-1-1-800x569.png"
const swipreData=[
    {
    img:ramadan,
    date:"al-Khamīs, 29 Dhu al-Hijjah 1464 AH  ",
    span:'(The Grand Mosque)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},
    {
    img:muslimPrayer,
    date:"al-Jum‘ah, 19 Sha'aban 1484 AH ",
    span:'(The Month of Fasting)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},
    {
    img:arabicBiryani,
    date:" 6 Jumada al-awwal 1442 AH  ",
    span:'(Moveth Seed You Waters)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},
    {
    img:ancientArchitecture,
    date:" al-Khamīs, 25 Sha'aban 1452 AH  ",
    span:'(Ramadan Workshop)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},

]
export default function Swiper() 
{ const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
   
    return(
        <div className="swiper-background" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.822), rgba(0, 0, 0, 0.842)), url(${bg})`}}>
           
    <Title  img={ <img src={logomosq} alt=""/>}
    h2={'Upcoming Islamic Events'} h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}/>
  
           <div className='swiper-cards'>
<div className="swiper-card">
<Slider {...settings}>
{swipreData.map((d)=>(
    
    <div className='swiper-data'>
        
    <div><img src={d.img} alt="" style={{width:'100%',height:'90%',borderRadius:'20px'}}/></div>
    <div>
        <h3>{d.date}</h3>
        <span>{d.span}</span>
        <p>{d.para}</p>
    </div>
    </div>
    
))}
</Slider>
</div>
           </div>
        </div>
    )
}





  

  
 


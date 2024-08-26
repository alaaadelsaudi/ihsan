import React from 'react';
 import '../Style/swiper.scss';
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from './Title'
const swipreData=[
    {
    img:'src/Components/imges/-Ramadan-background.-Ramadan-kareem-1-430x260 (1).jpg',
    date:"al-Khamīs, 29 Dhu al-Hijjah 1464 AH  ",
    span:'(The Grand Mosque)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},
    {
    img:'src/Components/imges/The-muslim-prayer-for-god-in-the-mosque-1-430x260.jpg',
    date:"al-Jum‘ah, 19 Sha'aban 1484 AH ",
    span:'(The Month of Fasting)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},
    {
    img:'src/Components/imges/arabic-biryani-cuisine-1161468-1-430x260.jpg',
    date:" 6 Jumada al-awwal 1442 AH  ",
    span:'(Moveth Seed You Waters)',
    para:'Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser. Evening together  ...'
},
    {
    img:'src/Components/imges/ancient-architecture-asia-532922-1-430x260.jpg',
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
        <div className="swiper-background">
           
    <Title  img={ <img src="src/Components/imges/logo_mosq-1.png" alt=""/>}
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





  

  
 


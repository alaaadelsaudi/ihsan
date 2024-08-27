import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import woman from "../imges/woman-in-Hijab.-1.png";
import building from "../imges/portrait-outside-office-building-1.png";
import man from "../imges/man-with-arms-crossed-1.png"
export default function AboutSlider() {
  return (
<>
<div className='card-section'>
    <div className='person-card'>
        <div><img src={woman} alt="" style={{width:'100%',height:'100%'}}/></div>
        <div className='person-name'> 
            <h3>Sayyida Higaazi</h3>
            <span>Hafiz Quran Scholar</span>
            <div className='span-icon'>
<TiSocialFacebook/>
<TiSocialTwitter/>
<TiSocialLinkedin/>
            </div>
        </div>
    </div>
    <div className='person-card'>
        <div><img src= {building} alt="" style={{width:'100%',height:'100%'}}/></div>
        <div className='person-name'> 
            <h3>Ashraf al-Maktum</h3>
            <span>Islamic Scholar</span>
            <div className='span-icon'>
<TiSocialFacebook/>
<TiSocialTwitter/>
<TiSocialLinkedin/>
            </div>
        </div>
    </div>
    <div className='person-card'>
        <div><img src={man} alt="" style={{width:'100%',height:'100%'}}/></div>
        <div className='person-name'> 
            <h3>Hamada Bin Qasim</h3>
            <span>Director</span>
            <div className='span-icon'>
<TiSocialFacebook/>
<TiSocialTwitter/>
<TiSocialLinkedin/>
            </div>
        </div>
    </div>
</div>
</>
  )
}

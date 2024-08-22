import React from 'react';
 import '../Footer/footer.scss'
 import { TiSocialFacebook } from "react-icons/ti";
import './Footer.scss'; 
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-content">
        <div className="footer-logo">
          <img src="src/Components/imges/logo-w2.png" alt="Logo" />
          <p>Islam is the most dolore magna aliqua popular lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>

       <div className='label-content'>
        <label htmlFor="">Subscribe For Latest Updates</label>
        <div className='input-div'>
          <input type="text" placeholder='Email address' />
          <button>Sing up</button>
        </div>
       </div>
       <div className="media">
<div className='media-icon'>
<TiSocialFacebook />
</div>
<div className='media-icon'>
< TiSocialTwitter/>
</div>
<div className='media-icon'>
<TiSocialLinkedin />
</div>
<div className='media-icon'>
<SlSocialInstagram />
</div>
       
</div>
       
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Ihsan Islamic Center. All rights reserved.</p>
      </div>
    </footer>
  );
}

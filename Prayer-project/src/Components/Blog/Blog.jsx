import React from 'react'
import FirstSection from '../sections/FirstSection'
import News from '../Home/News'
import NewsCard from '../Home/NewsCard'
import { Container } from '@mui/material'
import Title from '../Home/Title'

import logoMosq from '../imges/logo_mosq-1.png';
import post001 from '../imges/post001-360x280.jpg';
import post004 from '../imges/post004-360x280.jpg';
import post003 from '../imges/post003-360x280.jpg';
import fahrulAzmi from '../imges/fahrul-azmi-Zv5Va4177_E-unsplash-1-360x280.jpg';
import arabicStyle from '../imges/Arabic-style-1-1-800x569.png';
import post002 from '../imges/post002-360x280.jpg';
import ramizDedakovic from '../imges/ramiz-dedakovic-JblB_mUKMFA-unsplash-1.jpg';
import rezaPayandeh from '../imges/reza-payandeh-MEA6VvqOBvw-unsplash-1.jpg';
import man from '../imges/man.jpg';

export default function Blog() {
  return (
    <div>
      <FirstSection titlepage={'Latest News'} spanpage={'Latest News'}/>
      <div style={{marginTop:'80px'}}>
        <Title
          img={<img src={logoMosq} alt=""/>}
          h2={'Islamic Center News'}
          h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}/>
        <Container>
          <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
            <NewsCard
              photo={<img src={post001} alt="" />}
              title={'How to Teach Kids Ramadan Isn’t about Food'}
            />
            <NewsCard
              photo={<img src={post004} alt="" />}
              title={'Paid Members Content: Choosing to Remain'}
            />
            <NewsCard
              photo={<img src={post003} alt="" />}
              title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
            />
          </div>

          <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
            <NewsCard
              photo={<img src={fahrulAzmi} alt="" />}
              title={'How to Teach Kids Ramadan Isn’t about Food'}
            />
            <NewsCard
              photo={<img src={arabicStyle} alt="" />}
              title={'Paid Members Content: Choosing to Remain'}
            />
            <NewsCard
              photo={<img src={post002} alt="" />}
              title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
            />
          </div>

          <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
            <NewsCard
              photo={<img src={ramizDedakovic} alt="" style={{width:'100%'}} />}
              title={'How to Teach Kids Ramadan Isn’t about Food'}
            />
            <NewsCard
              photo={<img src={rezaPayandeh} alt="" />}
              title={'Paid Members Content: Choosing to Remain'}
            />
            <NewsCard
              photo={<img src={man} alt=""/>}
              title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
            />
          </div>
        </Container>
      </div>
    </div>
  )
}
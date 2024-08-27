import React from 'react'
import Title from './Title'
import logoMosq from '../imges/logo_mosq-1.png';
import post1 from '../imges/post001-360x280.jpg';
import post2 from '../imges/post004-360x280.jpg';
import post3 from '../imges/post003-360x280.jpg';
import { Container } from '@mui/material'
import NewsCard from './NewsCard'
export default function News() {
  return (<Container>
    <div style={{padding:'70px 0px',marginTop:'40px'}} className='photo'>
    <Title img={ <img src={logoMosq} alt=""/>}
    h2={'Islamic Center News'} h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}/>
    </div>
    <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
        <NewsCard photo={<img src={post1} alt="" />}
        title={'How to Teach Kids Ramadan Isn’t about Food'}
        />
        <NewsCard photo={<img src={post2} alt="" />}
        title={'Paid Members Content: Choosing to Remain'}
        />
        <NewsCard photo={<img src={post3} alt="" />}
        title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
        />
    </div>
    </Container>
  )
}

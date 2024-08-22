import React from 'react'
import FirstSection from '../sections/FirstSection'
import News from '../Home/News'
import NewsCard from '../Home/NewsCard'
import { Container } from '@mui/material'
import Title from '../Home/Title'

export default function Blog() {
  return (
    <div > <FirstSection titlepage={'Latest News'} spanpage={'Latest News'}/>
    <div style={{marginTop:'80px'}}>
    <Title  img={ <img src="src/Components/imges/logo_mosq-1.png" alt=""/>}
    h2={'Islamic Center News'} h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}/>
    <Container>
    <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
        <NewsCard photo={<img src="src/Components/imges/post001-360x280.jpg" alt="" />}
        title={'How to Teach Kids Ramadan Isn’t about Food'}
        />
        <NewsCard photo={<img src="src/Components/imges/post004-360x280.jpg" alt="" />}
        title={'Paid Members Content: Choosing to Remain'}
        />
        <NewsCard photo={<img src="src/Components/imges/post003-360x280.jpg" alt="" />}
        title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
        />
    </div>

    <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
        <NewsCard photo={<img src="src/Components/imges/fahrul-azmi-Zv5Va4177_E-unsplash-1-360x280.jpg" alt="" />}
        title={'How to Teach Kids Ramadan Isn’t about Food'}
        />
        <NewsCard photo={<img src="src/Components/imges/Arabic-style-1-1-800x569.png" alt="" />}
        title={'Paid Members Content: Choosing to Remain'}
        />
        <NewsCard photo={<img src="src/Components/imges/post002-360x280.jpg" alt="" />}
        title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
        />
    </div>

    <div className='news' style={{display:'flex', justifyContent:'center',gap:'30px'}}>
        <NewsCard photo={<img src="src/Components/imges/ramiz-dedakovic-JblB_mUKMFA-unsplash-1.jpg" alt="" style={{width:'100%'}} /> }
        title={'How to Teach Kids Ramadan Isn’t about Food'}
        />
        <NewsCard photo={<img src="src/Components/imges/reza-payandeh-MEA6VvqOBvw-unsplash-1.jpg" alt="" />}
        title={'Paid Members Content: Choosing to Remain'}
        />
        <NewsCard photo={<img src="src/Components/imges/man.jpg" alt=""/>}
        title={'If Islam Teaches Peace, Why Are there Radical Muslims?'}
        />
    </div>
    </Container>
        </div>
        </div>
    
  )
}

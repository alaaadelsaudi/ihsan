import { Container } from '@mui/material'
import React from 'react'
import Title from './Title'
import Iconphilosophy from './Iconphilosophy'
import IconPhliosophy2 from './IconPhliosophy2';
import logoMosq from '../imges/logo_mosq-1.png';
import quran from '../imges/quran (3).png';
import kaaba from '../imges/kaaba (1).png';
import manAndWoman from '../imges/man-and-woman (1).png';
import philosophy from '../imges/philosophy-1.png';
import donation from '../imges/donation (1).png';
import mosque from '../imges/mosque.png';
import islam from '../imges/islam (1).png';

export default function ISlamicPhilosophy() {
  return (
<Container>
<div style={{ padding: '70px 0px', marginTop: '40px' }} className='photo'>
  <Title img={<img src={logoMosq} alt="" />} h2={'Islamic Philosophy'} />
</div>
<div className='philosophy' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div>
    <Iconphilosophy
      title={'Quran – The Book'}
      text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
      imge={<img style={{ marginTop: '17px' }} src={quran} alt="" />}
    />
    <Iconphilosophy
      title={'Islamic Knowledge'}
      text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
      imge={<img style={{ marginTop: '30px' }} src={kaaba} alt="" />}
    />
    <Iconphilosophy
      title={'Muslim Community'}
      text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
      imge={<img style={{ marginTop: '30px' }} src={manAndWoman} alt="" />}
    />
  </div>

  <div style={{ width: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img
      style={{ width: '100%', height: 'auto', verticalAlign: 'middle' }}
      src={philosophy}
      alt=""
    />
  </div>

  <div className='revers'>
    <IconPhliosophy2
      title={'Help The Poor'}
      text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
      imge={<img style={{ marginTop: '17px' }} src={donation} alt="" />}
    />
    <IconPhliosophy2
      title={'The Spirituality'}
      text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
      imge={<img style={{ marginTop: '10px' }} src={mosque} alt="" />}
    />
    <IconPhliosophy2
      title={'Find Your Inner'}
      text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
      imge={<img style={{ marginTop: '15px' }} src={islam} alt="" />}
    />
  </div>
</div>
</Container>

  )
}

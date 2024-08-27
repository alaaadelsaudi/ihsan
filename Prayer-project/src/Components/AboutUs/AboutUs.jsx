import React from 'react';
import FirstSection from '../sections/FirstSection';
import Title from '../Home/Title';
import '../Style/about.scss';
import { ImQuotesLeft } from "react-icons/im";
import Iconphilosophy from '../Home/Iconphilosophy';
import IconPhliosophy2  from '../Home/IconPhliosophy2';
import AboutSlider from './AboutSlider';
import manImg from "../imges/man-1.png";
import muslim from "../imges/80644muslim-faith-1.png";
import quran from "../imges/quran (3).png";
import kaaba from "../imges/kaaba (1).png";
import manAndWoman from "../imges/man-and-woman (1).png";
import donation  from "../imges/donation (1).png";
import mosque from "../imges/mosque.png";
import islam from "../imges/islam (1).png"
export default function AboutUs() {
  return (
    <div>
      <FirstSection titlepage={'About ihsan'} spanpage={'About ihsan'}/>
      <div className='div-person-card'>
        <Title h2={'Board Of Scholars'} h4={'Our scholars whose knowledge is useful for others'} />
      
        <AboutSlider/>
      </div>
      <div className='learn'>
<div className='doyou'>
  <div className="icon-doyou">
    <img src="src/Components/imges/logo_mosq-1.png" alt="" />
    <h2>A Place To Pray And A Community Center To Learn</h2>
    
    <div style={{display:'flex'}}>
    <div style={{width:'100px',marginLeft:'10px'}}><ImQuotesLeft/></div>
    <div> <p>
      
      Do you know what's happening upstairs? This is all a result of your former partner. Do you understand now? Do you see why this can't continue? There will be an appropriate response.</p></div>
    </div>
  <span>-- Mustafa Al-Hamid (Director)</span>
  </div>
</div>
<div className='doyou-img'>
  <img src={manImg} alt="" />
</div>
        </div>
        <div className='aboutphilosophy'>
        <Title 
h2={'Islamic Philosophy'} />

        <div className='philosophy' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<div  >

  <Iconphilosophy title={'Quran – The Book'} text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
  imge={ <img style={{marginTop:'17px'}} src={quran} alt="" />}/>
  <Iconphilosophy title={'Islamic Knowledge'} text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
  imge={ <img style={{marginTop:'30px'}} src={kaaba} alt="" />}/>
  <Iconphilosophy title={'Muslim Community'} text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
  imge={ <img style={{marginTop:'30px'}} src={manAndWoman} alt="" />}/>
</div>

<div style={{width: '520px',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <img style={{width:'100%',height:'auto',verticalAlign: 'middle'}}src={muslim} alt="" />
</div>
<div className='revers'>
  <IconPhliosophy2 
  title={'Help The Poor'}
 text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
  imge={ <img style={{marginTop:'17px'}} src={donation} alt="" />}/>
  <IconPhliosophy2 
  title={'The Spirituality'}
   text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
  imge={ <img style={{marginTop:'10px'}} src={mosque} alt="" />}/>
  <IconPhliosophy2 
  title={'Find Your Inner'}
   text={'Less overheard forward some drink past this ipsum free immodest less aim ipsum amet consecter elit adipisicing.'}
  imge={ <img style={{marginTop:'15px'}} src={islam} alt="" />}/>
</div>
</div>
        </div>
    </div>
  );
}

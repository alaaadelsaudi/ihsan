import React from 'react';
import Title from './Title';
import { Container } from '@mui/material';
import '../Style/islamicphoto.scss'; 
import logoMosq from '../imges/logo_mosq-1.png';
import man from '../imges/man.jpg';
import davidRodrigo from '../imges/david-rodrigo-kZ1zThg6G40-unsplash-1-255x245.jpg';
import rezaPayandeh from '../imges/reza-payandeh-MEA6VvqOBvw-unsplash-1.jpg';
import ramizDedakovic from '../imges/ramiz-dedakovic-JblB_mUKMFA-unsplash-1.jpg';
import masjidPogungDalangan from '../imges/masjid-pogung-dalangan-wt0rYTF6pww-unsplash-1.jpg';
import hasanAlmasi from '../imges/hasan-almasi-_X2UAmIcpko-unsplash-1.jpg';
import juanCamiloGaurin from '../imges/juan-camilo-guarin-p-BCF7cHvc778-unsplash-1.jpg';

export default function IslamicPhoto() {
  return (
    <Container>
      <div className='photo'>
        <Title
          img={<img src={logoMosq} alt="" />}
          h2={'Islamic Photo Gallery'}
          h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}
        />

        <div className='islamic-photo-div'>
          <div className='islamic-photo'>
            <div>
              <img
                src={man}
                alt="Gallery Image 1"
              />
            </div>
            <div>
            <img src={davidRodrigo} alt="Gallery Image 2" />
          </div>
        </div>
        <div className='large-photo'>
          <div>
            <img src={rezaPayandeh} alt="Gallery Image 3" />
          </div>
        </div>
        <div className='islamic-photo'>
          <div>
            <img src={ramizDedakovic} alt="Gallery Image 4" />
          </div>
          <div>
            <img src={masjidPogungDalangan} alt="Gallery Image 5" />
          </div>
        </div>
      </div>

      <div className='gallery-row'>
        <div className='gallery-item'>
          <img src={hasanAlmasi} alt="" />
        </div>
        <div className='gallery-item'>
          <img src={juanCamiloGaurin} alt="" />
        </div>
      </div>
    </div>
          
    </Container>
  );
}

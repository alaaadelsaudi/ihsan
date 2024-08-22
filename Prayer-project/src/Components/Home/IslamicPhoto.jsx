import React from 'react';
import Title from './Title';
import { Container } from '@mui/material';
import '../Style/islamicphoto.scss'; // استيراد ملف CSS

export default function IslamicPhoto() {
  return (
    <Container>
      <div className='photo'>
        <Title
          img={<img src="src/Components/imges/logo_mosq-1.png" alt="" />}
          h2={'Islamic Photo Gallery'}
          h4={'Ethical & Moral Beliefs That Guides To The Straight Path!'}
        />

        <div className='islamic-photo-div'>
          <div className='islamic-photo'>
            <div>
              <img
                src="src/Components/imges/man.jpg"
                alt="Gallery Image 1"
              />
            </div>
            <div>
              <img
                src="src/Components/imges/david-rodrigo-kZ1zThg6G40-unsplash-1-255x245.jpg"
                alt="Gallery Image 2"
              />
            </div>
          </div>
          <div className='large-photo'>
            <div>
              <img
                src="src/Components/imges/reza-payandeh-MEA6VvqOBvw-unsplash-1.jpg"
                alt="Gallery Image 3"
              />
            </div>
          </div>
          <div className='islamic-photo'>
            <div>
              <img
                src="src/Components/imges/ramiz-dedakovic-JblB_mUKMFA-unsplash-1.jpg"
                alt="Gallery Image 4"
              />
            </div>
            <div>
              <img
                src="src/Components/imges/masjid-pogung-dalangan-wt0rYTF6pww-unsplash-1.jpg"
                alt="Gallery Image 5"
              />
            </div>
          </div>
        </div>

        <div className='gallery-row'>
          <div className='gallery-item'>
            <img
              src="src/Components/imges/hasan-almasi-_X2UAmIcpko-unsplash-1.jpg"
              alt=""
            />
          </div>
          <div className='gallery-item'>
            <img
              src="src/Components/imges/juan-camilo-guarin-p-BCF7cHvc778-unsplash-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

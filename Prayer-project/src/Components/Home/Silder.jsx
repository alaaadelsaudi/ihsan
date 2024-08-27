import React from 'react'
import alhumd from '../imges/alhumdx2.png';
import background from "../imges/photo.jpg"
export default function Silder() {
  return (
    <div className="slider" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.822), rgba(0, 0, 0, 0.842)), url(${background})`, backgroundRepeat: 'no-repeat',
   backgroundSize:'cover'}}>
    <div className="text">
      <img src={alhumd} alt="Alhumdx" />
      <h5>Learn From Known Scholars Tajweed, Recitation, Hifz & Arabic</h5>
      <button>Get Registered Today</button>
    </div> 
  </div>
  )
}

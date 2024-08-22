import React from 'react'

export default function Prayercontent({ prayerName, prayerTime }) {
  return (
 

    <div style={{height:'50px',display:'flex',justifyContent:'center',alignItems:'center',}} >
        <div className="icon" >
            <img src='src/Components/imges/praytime_icon.png' alt="" style={{width:'26px' , height: '26px',margin:'15px '}} />
          
        </div>
        <h3 style={{marginTop:'15px'}}>{prayerName}: {prayerTime} </h3>
    </div>
  )
}


import React from 'react'
import ISlamicPhilosophy from './ISlamicPhilosophy'
export default function Iconphilosophy({title,imge,text}) {
  return (<>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center', marginTop:'20px',textAlign:'center',}}>
        <div style={{width:'100%'}}>
            <h3 style={{fontSize: "24px" , fontWeight: 'bold'}}>{title}</h3>
            <p >{text}</p>
        </div>
        <div className='icon-islamic'>
{imge}
        </div>
        </div>
 
    </>
  )
}

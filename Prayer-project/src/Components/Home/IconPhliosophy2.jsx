import React from 'react'

export default function IconPhliosophy2({title,imge,text}) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center', marginTop:'20px',textAlign:'center',flexDirection:'row-reverse'}}>
    <div style={{width:'100%'}}>
        <h3 style={{fontSize: "24px" , fontWeight: 'bold'}}>{title}</h3>
        <p >{text}</p>
    </div>
    <div className='icon-islamic'>
{imge}
    </div>
    </div>

  )
}

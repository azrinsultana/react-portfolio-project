import React from 'react'
import './Card.css'

function Card({icon,heading,details}) {
  return (
    <div className='card'>
      <div className='c-img'>
      <img src={icon} alt="design website" width={'50px'} height={'50px'}/>
      </div>
        <span>{heading}</span>
        <span> {details}</span>
    </div>
  
  
    
  )
}

export default Card
import React from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';

import Website from '../../image/website.png';

function Hero() {
  return (
    <div className='hero'>
        <div className='h-left'>
            <div className='name'>
            <span style={{fontWeight:'50px'}} className='h-intro'>
                Hi! I'm 
            </span>
            <span className='h-name'>
            Azrin Sultana

            </span>
            <span className='h-description'>React js front end developer, with 3 years exprience in building quality website</span>
            </div>
            <button className='p-button h-button'>
                Hire me
            </button>
            <div className='h-icon'>
            <FaLinkedin color='rgb(55,41,120)' size='3rem'/>
            <FaGithub color='rgb(55,41,120)' size='3rem'/>
            <FaTwitterSquare color='rgb(55,41,120)' size='3rem'/>
            </div>
            
        </div>
        <div className='h-right'>

      
        <img src={Website} alt="hero image" className='h-image1'/>


        </div>

    </div>
  )
}
export default Hero

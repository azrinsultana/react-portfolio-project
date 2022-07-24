import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='h-left'>
            <div className='h-intro'>
                Hi! I'm
            </div>
            <div className='h-name'>
                Azrin Sultana

            </div>
            <p className='h-description'>front end developer</p>
            <button className='button'>
                Hire me
            </button>
        </div>
        <div className='h-right'>
            Web developer
        </div>

    </div>
  )
}
export default Hero

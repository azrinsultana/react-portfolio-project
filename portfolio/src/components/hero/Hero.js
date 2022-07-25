import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'

import 'font-awesome/css/font-awesome.min.css';

import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='h-left'>
            <h1 style={{fontWeight:'50px'}} className='h-intro'>
                Hi! I'm 
            </h1>
            <h1 className='h-name'>
            Azrin Sultana

            </h1>
            <span className='h-description'>React js front end developer, with 3 years exprience in building quality website</span>
            <button className='button h-button'>
                Hire me
            </button>
            <h1><i className="fa-brands fa-github"></i></h1>
            <i className="fa-brands fa-github-square"></i>

            

           

        </div>
        <div className='h-right'>
            Web developer
        </div>

    </div>
  )
}
export default Hero

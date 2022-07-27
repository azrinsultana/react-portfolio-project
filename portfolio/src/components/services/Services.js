import React from 'react'
import './Services.css'
import Card from '../card/Card'
import DesignIcon from '../../image/web-design.png'

function Services() {
  return (
    <div>
    <div className='service'>
        <div className='s-left'>
            <span className='s-text'>
                My Awesome
            </span>
            <span className='s-name'>
                Services

            </span>
            <span className='s-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </span>
            <button className='button s-button'>Download CV
            </button>
            <div className='blur' style={{background:'#ABF1FF9'}}></div>

        </div>
        <div className='s-right'>
            
        <Card icon={DesignIcon} heading={'design'} details={"Custom website design according to the choice"}> </Card>
        <Card icon={DesignIcon} heading={'design'} details={"Custom website design according to the choice"}> </Card>
            <Card icon={DesignIcon} heading={'design'} details={"Custom website design according to the choice"}> </Card>
            
        </div>
       
    </div>

    
    </div>
    
  )
}

export default Services

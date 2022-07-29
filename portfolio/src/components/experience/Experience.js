import React from 'react'
import {Button, Alert,Card ,Container, Row,Col} from 'react-bootstrap';
import './Experience.css'
import Eimage from '../../image/experience.png'
function Experience() {
  return (
    <Container fluid>

        <Row  className='e-position'>
            <Col lg={8} md={8}>
             <div className='experience-div'>
             
             <div className="experience">

        <div className="circle">
        <img src={Eimage} alt="" width={'150px'} height={'150px'}></img>
        <div class="center">3+</div>
        </div>
        <span className='year'>years </span>
        <span className=''>Experience</span>
      </div>
  
      <div className="experience">

<div className="circle">
<img src={Eimage} alt="" width={'150px'} height={'150px'}></img>
<div class="center">10+</div>
</div>
<span className='year'>projects </span>
<span className=''>Experience</span>
</div>

<div className="experience">

<div className="circle">
<img src={Eimage} alt="" width={'150px'} height={'150px'}></img>
<div class="center">5+</div>
</div>
<span className='year'>clients </span>
<span className=''>works</span>
</div>

   
             </div>
             
            </Col>
        </Row>

    </Container>
  )
}

export default Experience
import React from 'react'
import {Button, Alert,Card ,Container, Row,Col} from 'react-bootstrap';
import TechnologyImg from '../../image/technology.png'
import './Technology.css'
function Technology() {
  return (
    <Container fluid >
        <Row className='technology-div'>
        <Col md={5} sm={8}>
                <div className='s-details'>
            <span>
            Technologies 
            </span>
            <span>
                 I know

            </span>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </span>
            
            <div className='blur' style={{background:'var(--blueCard'}}></div>

            </div>
            </Col>
            <Col md={7} className='t-img'>
            <img src={TechnologyImg} alt="'image" width={'500px'} height={'500px'}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Technology
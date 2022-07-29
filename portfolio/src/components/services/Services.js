import React from 'react'
import {Button, Alert,Container, Row,Col} from 'react-bootstrap';
import DesignIcon from '../../image/web-design.png'
import './Services.css'
import Scard from '../card/Card'

function Services() {
  return (
    <Container fluid>
        <Row>
            <Col md={5} sm={8}>
                <div className='s-details'>
            <span>
                My Awesome
            </span>
            <span>
                Services

            </span>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </span>
            <button className='p-button s-button'>Download CV
            </button>
            <div className='blur' style={{background:'var(--blueCard'}}></div>

            </div>
            </Col>
            
            <Col md={7} sm={8} className='s-card'>
              
            <Scard icon={DesignIcon} heading={'design'} details={"Custom website design according to the choice"}> </Scard>
            <Scard icon={DesignIcon} heading={'design'} details={"Custom website design according to the choice"}> </Scard>
            <Scard icon={DesignIcon} heading={'design'} details={"Custom website design according to the choice"}> </Scard>

            <div className='blur s-blur' style={{background:"var(--purple)"}}></div>

            </Col>
            
            
        </Row>
    </Container>
  )
}

export default Services
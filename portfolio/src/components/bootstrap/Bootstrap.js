import React from 'react'

import {Button, Alert,Card ,Container, Row,Col} from 'react-bootstrap';
function Bootstrap() {
  return (
    <div>
       
       
       <Container fluid>
      <Row>
        <Col md={4} >md=4</Col>
        <Col md={{  offset: 4 }} className=' bg-success'>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className='bg-success'>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
    </Container>

    </div>
  )
}

export default Bootstrap
import React from 'react';
import { Container,Row ,Col } from 'react-bootstrap';

const Footer = () => {
    const currentyear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
            <Col className='text-center py-3'>
                <p>proshop &copy;{currentyear} </p>
            </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
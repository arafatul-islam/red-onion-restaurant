import { Button } from 'bootstrap'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const ShowFoods = ({ breakfastItems }) => {
  console.log(breakfastItems)
  return (
    <>
      <Container>
        <Row>
          {breakfastItems.map((item) => (
            <Col lg='4' md='6' sm='12' className='my-2'>
              <Card key={item.id}>
                <Card.Img variant='top' src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.des}</Card.Text>
                  <Card.Title>${item.price}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ShowFoods

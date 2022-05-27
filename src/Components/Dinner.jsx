import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Dinner = () => {
  const mealItems = useContext(MealContext)
  const dinnerItems = mealItems.dinner.map((item) => item)

  return (
    <Container>
      <Row>
        {dinnerItems.map((item) => (
          <Col lg='4' md='6' sm='12' className='my-2' key={item.id}>
            <Card>
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
  )
}
// ;
export default Dinner

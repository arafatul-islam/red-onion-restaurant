import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { MealContext } from '../Contexts/MealsProvider'

const FoodDetails = (props) => {
  const { id } = useParams()
  const { breakfast, launch, dinner } = useContext(MealContext)
  const item = breakfast.filter((food) => food.name === id)
  const item1 = launch.filter((food) => food.name === id)
  const item2 = dinner.filter((food) => food.name === id)

  return (
    <div id='food-details'>
      {item[0].id && (
        <Container className='col-lg-4 '>
          <Card className='border-0 '>
            <Card.Img variant='top' className='' src={item[0].img} />
            <Card.Body className='text-center'>
              <Card.Title>{item[0].name}</Card.Title>
              <Card.Text>{item[0].des}</Card.Text>
              <Card.Title>{item[0].price}</Card.Title>
            </Card.Body>
            <button className='btn btn-danger'>Order Now</button>
          </Card>
        </Container>
      )}
      {item1[0].id && (
        <Container className='col-lg-4 '>
          <Card className='border-0 '>
            <Card.Img variant='top' className='' src={item1[0].img} />
            <Card.Body className='text-center'>
              <Card.Title>{item1[0].name}</Card.Title>
              <Card.Text>{item1[0].des}</Card.Text>
              <Card.Title>{item1[0].price}</Card.Title>
            </Card.Body>
            <button className='btn btn-danger'>Order Now</button>
          </Card>
        </Container>
      )}
      {item2[0].id && (
        <Container className='col-lg-4 '>
          <Card className='border-0 '>
            <Card.Img variant='top' className='' src={item2[0].img} />
            <Card.Body className='text-center'>
              <Card.Title>{item2[0].name}</Card.Title>
              <Card.Text>{item2[0].des}</Card.Text>
              <Card.Title>{item2[0].price}</Card.Title>
            </Card.Body>
            <button className='btn btn-danger'>Order Now</button>
          </Card>
        </Container>
      )}
    </div>
  )
}

export default FoodDetails

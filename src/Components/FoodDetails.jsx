import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { MealContext } from '../Contexts/MealsProvider'

const FoodDetails = (props) => {
  const { id } = useParams()
  const allMealItems = useContext(MealContext)
  const currentMeal = allMealItems.find((meal) => meal.name === id)
  return (
    <section id='food-details'>
      <Container className='col-lg-4 '>
        <Card className='border-0 '>
          <Card.Img variant='top' className='' src={currentMeal.img} />
          <Card.Body className='text-center'>
            <Card.Title>{currentMeal.name}</Card.Title>
            <Card.Text>{currentMeal.des}</Card.Text>
            <Card.Title>${currentMeal.price}</Card.Title>
          </Card.Body>
          <button className='btn btn-danger'>Order Now</button>
        </Card>
      </Container>
    </section>
  )
}

export default FoodDetails

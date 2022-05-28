import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const ShowFoods = ({ food }) => {
  console.log(food)
  return (
    <>
      <Container className='my-5'>
        <Row>
          {food.map((item) => (
            <HashLink
              to={`${item.name}#food-details`}
              className='col-lg-4 col-md-6 col-sm-12 text-decoration-none text-dark'
            >
              <Col key={item.id}>
                <Card className='border-0'>
                  <Card.Img variant='top' className='' src={item.img} />
                  <Card.Body className='text-center'>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.des}</Card.Text>
                    <Card.Title>${item.price}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </HashLink>
          ))}
        </Row>
        <h1 className='text-center '>
          <button className='btn bg-dark text-white px-5  py-2'>
            Checkout Your Food
          </button>
        </h1>
      </Container>
      <Outlet />
    </>
  )
}

export default ShowFoods

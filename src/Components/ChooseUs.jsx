import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { chooseUs } from '../fake-data/chooseUs'
import { FaBus, FaArrowAltCircleRight } from 'react-icons/fa'

const ChooseUs = () => {
  return (
    <section className='choose-us'>
      <Container>
        <h1 className=''>Why do you choose us</h1>
        <p className='mt-3 mb-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          commodi atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          commodi atque.
        </p>
        <div className='d-lg-flex justify-content-around'>
          {chooseUs.map((item) => (
            <Col key={item.id} lg='4' md='6' className='mt-3 mb-5'>
              <Col lg='10' md='12'>
                <Card className='border-0'>
                  <Card.Img variant='top' src={item.img} />
                  <Card.Body className='text-left d-lg-flex justify-content-around align-content-center'>
                    <img src={item.icon} width={40} height={40} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.para}</Card.Text>
                      <Card.Link
                        as={Link}
                        to=''
                        className='text-decoration-none'
                      >
                        See more{' '}
                        <FaArrowAltCircleRight
                          size={26}
                          color='rgb(150, 200, 70)'
                        />
                      </Card.Link>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ChooseUs

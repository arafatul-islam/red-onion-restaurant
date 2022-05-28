import React from 'react'
import { Col, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './../images/logo.png'

const Footer = () => {
  return (
    <footer className='footer  p-5 '>
      <Container className='d-lg-flex  justify-content-between py-5'>
        <Col className='d-lg-felx flex-column justify-content-between border-danger '>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={Logo}
              width='150px'
              className='d-inline-block align-top mb-5'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
        </Col>
        <Col className=' d-lg-flex '>
          <Col>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                About Online Food
              </Link>
            </p>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                Read Our Blog
              </Link>
            </p>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                Sign up to deliver
              </Link>
            </p>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                Add your restaurant
              </Link>
            </p>
          </Col>
          <Col>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                Get helps
              </Link>
            </p>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                {' '}
                Read FAQs
              </Link>
            </p>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                View all clients
              </Link>
            </p>
            <p className='mb-1'>
              <Link to='/' className='text-decoration-none text-white'>
                Restaurants near me
              </Link>
            </p>
          </Col>
        </Col>
      </Container>
      <Container>
        <Col className='d-lg-flex align-items-center'>
          <Col lg='6'>
            <p className='text-white my-5'>
              copyright @
              <a
                href='https://www.github.com/arfttul'
                className='dev text-white text-decoration-none'
              >
                Arafatul Islam
              </a>{' '}
              {new Date().getFullYear()}
            </p>
          </Col>
          <Col lg='6' className='d-lg-flex text-white'>
            <Col>Privacy Policy</Col>
            <Col>Terms of Use</Col>
            <Col>Pricing</Col>
          </Col>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer
